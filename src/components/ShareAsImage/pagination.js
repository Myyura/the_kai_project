export const MAX_SHARE_PAGES = 100;
export const MAX_SHARE_NODES = 120000;

export class ShareImageLimitError extends Error {
  constructor(message = 'This content is too large to share as an image.') {
    super(message);
    this.name = 'ShareImageLimitError';
  }
}

function checkAborted(signal) {
  if (signal?.aborted) throw new DOMException('Image generation cancelled', 'AbortError');
}

function isAtomic(node) {
  return node.nodeType === 1 && (
    ['SVG', 'IMG', 'TABLE', 'MATH', 'CANVAS', 'VIDEO', 'IFRAME'].includes(node.tagName?.toUpperCase())
    || node.classList?.contains('katex')
  );
}

function integerAttribute(node, name) {
  const value = node.getAttribute(name);
  return value !== null && /^\s*[+-]?\d+\s*$/.test(value) ? Number(value) : null;
}

async function rememberListNumbers(list, numbers, yieldWork) {
  const reversed = list.hasAttribute('reversed');
  let number = integerAttribute(list, 'start');
  let processed = 0;
  if (number === null) {
    number = reversed ? 0 : 1;
    if (reversed) {
      for (const item of list.childNodes) {
        if (item.nodeType === 1 && item.tagName.toUpperCase() === 'LI') number++;
        if (++processed % 200 === 0) await yieldWork();
      }
    }
  }
  for (const item of list.childNodes) {
    if (++processed % 200 === 0) await yieldWork();
    if (item.nodeType !== 1 || item.tagName.toUpperCase() !== 'LI') continue;
    number = integerAttribute(item, 'value') ?? number;
    numbers.set(item, number);
    number += reversed ? -1 : 1;
  }
}

function getBounds(node, document) {
  let rect;
  if (node.nodeType === 1) {
    rect = node.getBoundingClientRect();
  } else if (node.nodeType === 3 && node.textContent.trim()) {
    const range = document.createRange();
    range.selectNodeContents(node);
    rect = range.getBoundingClientRect();
    range.detach?.();
  }
  if (!rect || !Number.isFinite(rect.top) || !Number.isFinite(rect.bottom) || rect.bottom <= rect.top) return null;
  return {top: rect.top, bottom: rect.bottom};
}

/**
 * Partition a mounted, cleaned article into independent DOM fragments.
 * Fragments contain root's children; callers supply root.cloneNode(false) for
 * each page. Original nodes remain mounted and unchanged for reliable layout.
 * Continued ancestors are marked with data-share-continued-before/after so the
 * capture stylesheet can remove repeated vertical padding, borders and margins.
 */
export async function paginateContent(root, {
  signal,
  maxHeight = 1800,
  maxNodes = 1200,
  maxAtomicNodes = 20000,
  yieldToMain = () => new Promise(resolve => setTimeout(resolve, 0)),
} = {}) {
  checkAborted(signal);
  if (!Number.isFinite(maxHeight) || maxHeight <= 0 || !Number.isInteger(maxNodes) || maxNodes < 1
    || !Number.isInteger(maxAtomicNodes) || maxAtomicNodes < 1) {
    throw new RangeError('Invalid share image page limits');
  }
  const document = root.ownerDocument;
  const atomicBudget = Math.max(maxNodes, maxAtomicNodes);
  const counts = new WeakMap();
  const listNumbers = new WeakMap();
  let work = 0;
  const yieldWork = async () => {
    checkAborted(signal);
    await yieldToMain(signal);
    checkAborted(signal);
    work = 0;
  };

  // Count once, without deep-cloning the article or visiting its layout-heavy
  // KaTeX descendants again on every page. Iteration also handles deep wrappers.
  const countStack = [{node: root, index: 0, count: 1}];
  let totalNodes = 1;
  while (countStack.length) {
    checkAborted(signal);
    const frame = countStack[countStack.length - 1];
    if (frame.index === 0 && frame.node.nodeType === 1 && frame.node.tagName.toUpperCase() === 'OL') {
      await rememberListNumbers(frame.node, listNumbers, yieldWork);
    }
    const child = frame.node.childNodes[frame.index++];
    if (child) {
      if (++totalNodes > MAX_SHARE_NODES) throw new ShareImageLimitError();
      countStack.push({node: child, index: 0, count: 1});
    } else {
      if (frame.node !== root && isAtomic(frame.node) && frame.count > atomicBudget) {
        throw new ShareImageLimitError('A formula, table, or figure is too complex to share as an image.');
      }
      counts.set(frame.node, frame.count);
      countStack.pop();
      if (countStack.length) countStack[countStack.length - 1].count += frame.count;
    }
    if (++work >= 200) await yieldWork();
  }

  const pages = [];
  const lastWrapperCopies = new WeakMap();
  let page;
  const newPage = () => {
    if (pages.length >= MAX_SHARE_PAGES) throw new ShareImageLimitError('This content would require too many share images.');
    const fragment = document.createDocumentFragment();
    page = {fragment, copies: new WeakMap([[root, fragment]]), nodes: 0, bounds: null};
    pages.push(fragment);
  };
  const clone = node => {
    const copy = node.cloneNode(false);
    // Explicit values preserve numbering for lists continued on another page,
    // including reversed lists and lists containing an explicit li[value].
    if (listNumbers.has(node)) copy.setAttribute('value', String(listNumbers.get(node)));
    return copy;
  };
  const cloneSubtree = async node => {
    const copy = clone(node);
    const pending = [{source: node, target: copy, index: 0}];
    while (pending.length) {
      checkAborted(signal);
      const frame = pending[pending.length - 1];
      const child = frame.source.childNodes[frame.index++];
      if (!child) {
        pending.pop();
        continue;
      }
      const childCopy = clone(child);
      frame.target.appendChild(childCopy);
      if (child.childNodes.length) pending.push({source: child, target: childCopy, index: 0});
      if (++work >= 200) await yieldWork();
    }
    return copy;
  };

  const stack = [{node: root, index: 0}];
  while (stack.length) {
    checkAborted(signal);
    const frame = stack[stack.length - 1];
    const node = frame.node.childNodes[frame.index++];
    if (!node) {
      stack.pop();
      continue;
    }
    if (++work >= 200) await yieldWork();
    const count = counts.get(node);
    const bounds = getBounds(node, document);
    const depth = stack.length - 1;
    const atomic = isAtomic(node);
    const indivisible = atomic || node.childNodes.length === 0;
    const fitsPage = count + depth <= maxNodes && (!bounds || bounds.bottom - bounds.top <= maxHeight);
    if (!indivisible && !fitsPage) {
      stack.push({node, index: 0});
      continue;
    }
    if (count + depth > (atomic ? atomicBudget : maxNodes)) {
      throw new ShareImageLimitError('A formula, table, or figure is too complex to share as an image.');
    }
    if (!page) newPage();
    let missingAncestors = 0;
    for (let index = 1; index < stack.length; index++) {
      if (!page.copies.has(stack[index].node)) missingAncestors++;
    }
    const combinedBounds = bounds && page.bounds
      ? {top: Math.min(bounds.top, page.bounds.top), bottom: Math.max(bounds.bottom, page.bounds.bottom)}
      : bounds || page.bounds;
    if (page.nodes && (page.nodes + missingAncestors + count > maxNodes
      || (page.bounds && combinedBounds.bottom - combinedBounds.top > maxHeight))) {
      newPage();
    }
    let parent = page.fragment;
    for (let index = 1; index < stack.length; index++) {
      const ancestor = stack[index].node;
      let copy = page.copies.get(ancestor);
      if (!copy) {
        copy = clone(ancestor);
        const previous = lastWrapperCopies.get(ancestor);
        if (previous) {
          previous.setAttribute('data-share-continued-after', 'true');
          copy.setAttribute('data-share-continued-before', 'true');
        }
        lastWrapperCopies.set(ancestor, copy);
        parent.appendChild(copy);
        page.copies.set(ancestor, copy);
        page.nodes++;
      }
      parent = copy;
    }
    parent.appendChild(await cloneSubtree(node));
    page.nodes += count;
    if (bounds) {
      page.bounds = page.bounds
        ? {top: Math.min(bounds.top, page.bounds.top), bottom: Math.max(bounds.bottom, page.bounds.bottom)}
        : bounds;
    }
  }
  return pages;
}
