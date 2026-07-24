/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {
  type KeyboardEvent,
  type ReactNode,
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import {createPortal} from 'react-dom';
import clsx from 'clsx';
import Head from '@docusaurus/Head';
import {useDoc} from '@docusaurus/plugin-content-docs/client';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import {
  FaBookOpen,
  FaEdit,
  FaGraduationCap,
  FaLightbulb,
  FaStickyNote,
} from 'react-icons/fa';
import {useUiText} from '@site/src/i18n/useUiText';
import {getCanonicalDocumentId} from '@site/src/services/documentIdentity';
import shareStyles from '@site/src/components/ShareAsImage/styles.module.css';
import styles from './styles.module.css';
import {FooterAnnotationSection} from '@site/src/components/DocumentAnnotations';

const ProgressTracker = lazy(() => import('@site/src/components/ProgressTracker'));
const DifficultyRating = lazy(() => import('@site/src/components/DifficultyRating'));
const NoteEditor = lazy(() => import('@site/src/components/NoteEditor'));
const ShareAsImage = lazy(() => import('@site/src/components/ShareAsImage'));
const AddToProblemSet = lazy(() => import('@site/src/components/AddToProblemSet'));
const ProblemSetNavigator = lazy(() => import('@site/src/components/ProblemSetNavigator'));

type StudyTab = 'problem' | 'solution' | 'notes';

type StudyDom = {
  root: HTMLElement;
  tabsHost: HTMLDivElement;
  panels: Record<StudyTab, HTMLElement>;
  originalNodes: HTMLElement[];
};

const useBrowserLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

function normalizeHeading(value: string): string {
  return value
    .normalize('NFKC')
    .replace(/[\u200B-\u200D\uFEFF]/g, '')
    .replace(/\s+/g, ' ')
    .replace(/[：:]+$/g, '')
    .trim()
    .toLocaleLowerCase();
}

function isProblemHeading(value: string): boolean {
  const heading = normalizeHeading(value);
  return (
    heading === 'description' ||
    heading.startsWith('description ') ||
    heading === 'problem' ||
    heading === 'question' ||
    heading === '题目' ||
    heading === '問題'
  );
}

function isAuthorHeading(value: string): boolean {
  return normalizeHeading(value) === 'author';
}

function isSolutionHeading(value: string): boolean {
  const heading = normalizeHeading(value);
  return (
    heading === 'kai' ||
    heading.startsWith('kai ') ||
    heading.startsWith('kai(') ||
    heading === 'solution' ||
    heading === 'answer' ||
    heading === '题解' ||
    heading === '解答'
  );
}

function isSolutionSupplementHeading(value: string): boolean {
  const heading = normalizeHeading(value);
  return (
    heading === 'knowledge' ||
    heading.startsWith('knowledge ') ||
    heading === 'reference' ||
    heading.startsWith('reference ')
  );
}

function makeEmptyStudySection(
  message: string,
  contributionLabel: string,
  contributionUrl: string,
): HTMLDivElement {
  const emptyState = document.createElement('div');
  emptyState.className = styles.emptyStudySection;

  const text = document.createElement('p');
  text.textContent = message;
  emptyState.appendChild(text);

  if (contributionUrl) {
    const link = document.createElement('a');
    link.href = contributionUrl;
    link.textContent = contributionLabel;
    emptyState.appendChild(link);
  }

  return emptyState;
}

function hasStudySectionContent(nodes: HTMLElement[]): boolean {
  return nodes.slice(1).some((node) => !/^H[1-6]$/.test(node.tagName));
}

function makeStudyDom(
  root: HTMLElement,
  ids: {
    problemPanel: string;
    problemTab: string;
    solutionPanel: string;
    solutionTab: string;
    notesPanel: string;
    notesTab: string;
  },
  options: {
    force: boolean;
    missingProblemText: string;
    missingSolutionText: string;
    contributionLabel: string;
    contributionUrl: string;
  },
): StudyDom | null {
  const children = Array.from(root.children).filter(
    (child): child is HTMLElement => child instanceof HTMLElement,
  );
  const explicitProblemIndex = children.findIndex(
    (child) => child.tagName === 'H2' && isProblemHeading(child.textContent || ''),
  );
  const solutionIndex = children.findIndex(
    (child, index) =>
      index > explicitProblemIndex &&
      child.tagName === 'H2' &&
      isSolutionHeading(child.textContent || ''),
  );

  const supplementarySolutionIndex =
    solutionIndex < 0 && (options.force || explicitProblemIndex >= 0)
      ? children.findIndex(
          (child, index) =>
            index > explicitProblemIndex &&
            child.tagName === 'H2' &&
            isSolutionSupplementHeading(child.textContent || ''),
        )
      : -1;
  const resolvedSolutionIndex =
    solutionIndex >= 0 ? solutionIndex : supplementarySolutionIndex;
  const inferredProblemIndex =
    explicitProblemIndex < 0 && options.force
      ? children.findIndex(
          (child, index) =>
            child.tagName === 'H2' &&
            !isAuthorHeading(child.textContent || '') &&
            !isSolutionHeading(child.textContent || '') &&
            !isSolutionSupplementHeading(child.textContent || '') &&
            (resolvedSolutionIndex < 0 || index < resolvedSolutionIndex),
        )
      : -1;
  const problemIndex =
    explicitProblemIndex >= 0 ? explicitProblemIndex : inferredProblemIndex;

  if (problemIndex < 0 && resolvedSolutionIndex < 0 && !options.force) {
    return null;
  }

  const problemNodes =
    problemIndex >= 0
      ? children.slice(
          problemIndex,
          resolvedSolutionIndex >= 0 ? resolvedSolutionIndex : children.length,
        )
      : [];
  const solutionNodes =
    resolvedSolutionIndex >= 0
      ? children.slice(resolvedSolutionIndex)
      : [];
  const firstContentNode =
    problemNodes[0] || solutionNodes[0] || null;

  const tabsHost = document.createElement('div');
  tabsHost.className = styles.studyTabsHost;
  tabsHost.dataset.kaiStudyTabsHost = '';

  const problemPanel = document.createElement('section');
  problemPanel.id = ids.problemPanel;
  problemPanel.className = styles.studyPanel;
  problemPanel.dataset.kaiStudyPanel = 'problem';
  problemPanel.setAttribute('role', 'tabpanel');
  problemPanel.setAttribute('aria-labelledby', ids.problemTab);
  problemPanel.tabIndex = 0;

  const solutionPanel = document.createElement('section');
  solutionPanel.id = ids.solutionPanel;
  solutionPanel.className = styles.studyPanel;
  solutionPanel.dataset.kaiStudyPanel = 'solution';
  solutionPanel.setAttribute('role', 'tabpanel');
  solutionPanel.setAttribute('aria-labelledby', ids.solutionTab);
  solutionPanel.tabIndex = 0;

  const notesPanel = document.createElement('section');
  notesPanel.id = ids.notesPanel;
  notesPanel.className = `${styles.studyPanel} ${styles.notesWorkspace}`;
  notesPanel.dataset.kaiStudyPanel = 'notes';
  notesPanel.setAttribute('role', 'tabpanel');
  notesPanel.setAttribute('aria-labelledby', ids.notesTab);
  notesPanel.tabIndex = 0;

  root.insertBefore(tabsHost, firstContentNode);
  root.insertBefore(problemPanel, firstContentNode);
  root.insertBefore(solutionPanel, firstContentNode);
  root.insertBefore(notesPanel, firstContentNode);
  problemNodes.forEach((node) => problemPanel.appendChild(node));
  solutionNodes.forEach((node) => solutionPanel.appendChild(node));
  if (!hasStudySectionContent(problemNodes)) {
    problemPanel.appendChild(
      makeEmptyStudySection(
        options.missingProblemText,
        options.contributionLabel,
        options.contributionUrl,
      ),
    );
  }
  if (!hasStudySectionContent(solutionNodes)) {
    solutionPanel.appendChild(
      makeEmptyStudySection(
        options.missingSolutionText,
        options.contributionLabel,
        options.contributionUrl,
      ),
    );
  }
  root.dataset.kaiStudyDocument = '';

  return {
    root,
    tabsHost,
    panels: {
      problem: problemPanel,
      solution: solutionPanel,
      notes: notesPanel,
    },
    originalNodes: [...problemNodes, ...solutionNodes],
  };
}

function restoreStudyDom(studyDom: StudyDom): void {
  const {root, tabsHost, panels, originalNodes} = studyDom;
  originalNodes.forEach((node) => {
    root.insertBefore(node, panels.problem);
  });
  panels.problem.remove();
  panels.solution.remove();
  panels.notes.remove();
  tabsHost.remove();
  delete root.dataset.kaiStudyDocument;
}

export default function DocItemFooter(): ReactNode {
  const {metadata, frontMatter} = useDoc();
  const {tags, title, permalink} = metadata;
  const docId = getCanonicalDocumentId(metadata);
  const safeDocId = docId.replace(/[^a-zA-Z0-9_-]+/g, '-');
  const source = typeof metadata.source === 'string' ? metadata.source.replace(/^@site\//, '') : '';
  const canCorrectSource = /\.mdx?$/i.test(source);
  const learningPanelText = useUiText('learningPanel');
  const contributionUrl = `/me?tab=contribute&type=correction&docId=${encodeURIComponent(docId)}&title=${encodeURIComponent(title)}&sourcePath=${encodeURIComponent(source)}`;
  const isExamDocument = /(?:^|\/)\d{4}(?:\/|$)/.test(source || docId);
  const [studyDom, setStudyDom] = useState<StudyDom | null>(null);
  const isProblemDocument = Boolean(studyDom);
  const [activeTab, setActiveTab] = useState<StudyTab>('problem');
  const layoutAnchorRef = useRef<HTMLSpanElement | null>(null);
  const studyDomRef = useRef<StudyDom | null>(null);
  const activeTabRef = useRef<StudyTab>('problem');
  const savedScrollPositionsRef = useRef<Partial<Record<StudyTab, number>>>({});
  const pendingScrollRef = useRef<
    | {scrollY: number}
    | {target: HTMLElement; hash?: string; pushHash?: boolean}
    | null
  >(null);
  const tabButtonRefs = useRef<Partial<Record<StudyTab, HTMLButtonElement | null>>>({});
  const ids = useMemo(
    () => ({
      problemTab: `kai-study-${safeDocId}-problem-tab`,
      problemPanel: `kai-study-${safeDocId}-problem-panel`,
      solutionTab: `kai-study-${safeDocId}-solution-tab`,
      solutionPanel: `kai-study-${safeDocId}-solution-panel`,
      notesTab: `kai-study-${safeDocId}-notes-tab`,
      notesPanel: `kai-study-${safeDocId}-notes-panel`,
    }),
    [safeDocId],
  );
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: metadata.title || frontMatter.title || '文档页面',
    author: {
      '@type': 'Organization',
      name: 'The Kai Project Team',
      url: 'https://runjp.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Kai Project',
      logo: {
        '@type': 'ImageObject',
        url: 'https://runjp.com/img/logo-512.png',
      },
    },
    description:
      frontMatter.description ||
      metadata.description ||
      'The Kai Project 文档',
  };

  const changeTab = useCallback(
    (
      nextTab: StudyTab,
      options?: {
        target?: HTMLElement;
        hash?: string;
        pushHash?: boolean;
      },
    ) => {
      if (!studyDomRef.current) return;

      const currentTab = activeTabRef.current;
      if (nextTab === currentTab && !options?.target) return;
      const currentScrollY = window.scrollY;
      savedScrollPositionsRef.current[currentTab] = currentScrollY;

      if (options?.target) {
        pendingScrollRef.current = {
          target: options.target,
          hash: options.hash,
          pushHash: options.pushHash,
        };
      } else {
        pendingScrollRef.current = {
          scrollY:
            savedScrollPositionsRef.current[nextTab] ?? currentScrollY,
        };
      }

      activeTabRef.current = nextTab;
      setActiveTab(nextTab);
    },
    [],
  );

  useEffect(() => {
    const article = layoutAnchorRef.current?.closest('article');
    const root = article?.querySelector<HTMLElement>(':scope > .theme-doc-markdown');
    if (!root) return undefined;

    const studyDom = makeStudyDom(root, ids, {
      force: isExamDocument,
      missingProblemText: learningPanelText.missingProblem,
      missingSolutionText: learningPanelText.missingSolution,
      contributionLabel: learningPanelText.contributeMissing,
      contributionUrl: canCorrectSource ? contributionUrl : '',
    });
    if (!studyDom) {
      setStudyDom(null);
      return undefined;
    }

    studyDomRef.current = studyDom;
    let hashId = '';
    try {
      hashId = window.location.hash
        ? decodeURIComponent(window.location.hash.slice(1))
        : '';
    } catch {
      hashId = '';
    }
    const hashTarget = hashId ? document.getElementById(hashId) : null;
    const targetPanel = hashTarget?.closest<HTMLElement>('[data-kai-study-panel]');
    const initialTab =
      targetPanel?.dataset.kaiStudyPanel === 'solution' ? 'solution' : 'problem';

    activeTabRef.current = initialTab;
    studyDom.panels.problem.hidden = initialTab !== 'problem';
    studyDom.panels.solution.hidden = initialTab !== 'solution';
    studyDom.panels.notes.hidden = initialTab !== 'notes';
    setActiveTab(initialTab);
    setStudyDom(studyDom);

    if (hashTarget) {
      pendingScrollRef.current = {target: hashTarget};
    }

    return () => {
      restoreStudyDom(studyDom);
      studyDomRef.current = null;
      setStudyDom((current) => (current === studyDom ? null : current));
      savedScrollPositionsRef.current = {};
      pendingScrollRef.current = null;
      activeTabRef.current = 'problem';
    };
  }, [
    canCorrectSource,
    contributionUrl,
    docId,
    ids,
    isExamDocument,
    learningPanelText.contributeMissing,
    learningPanelText.missingProblem,
    learningPanelText.missingSolution,
  ]);

  useBrowserLayoutEffect(() => {
    const studyDom = studyDomRef.current;
    if (!isProblemDocument || !studyDom) return undefined;

    studyDom.panels.problem.hidden = activeTab !== 'problem';
    studyDom.panels.solution.hidden = activeTab !== 'solution';
    studyDom.panels.notes.hidden = activeTab !== 'notes';

    const pendingScroll = pendingScrollRef.current;
    pendingScrollRef.current = null;
    if (!pendingScroll) return undefined;

    if ('target' in pendingScroll) {
      pendingScroll.target.scrollIntoView({block: 'start'});
      if (pendingScroll.hash && pendingScroll.pushHash) {
        window.history.pushState(null, '', pendingScroll.hash);
      }
      return undefined;
    }

    window.scrollTo({
      top: pendingScroll.scrollY,
      behavior: 'auto',
    });
    return undefined;
  }, [activeTab, isProblemDocument]);

  useEffect(() => {
    if (!isProblemDocument) return undefined;

    const findHashTarget = (hash: string) => {
      if (!hash) return null;
      try {
        return document.getElementById(decodeURIComponent(hash.slice(1)));
      } catch {
        return null;
      }
    };

    const getTargetTab = (target: HTMLElement): StudyTab | null => {
      const panel = target.closest<HTMLElement>('[data-kai-study-panel]');
      const panelName = panel?.dataset.kaiStudyPanel;
      return panelName === 'problem' || panelName === 'solution'
        ? panelName
        : null;
    };

    const handleDocumentClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      ) {
        return;
      }

      const origin = event.target;
      if (!(origin instanceof Element)) return;
      const anchor = origin.closest<HTMLAnchorElement>('a[href]');
      if (!anchor || anchor.target === '_blank') return;

      const url = new URL(anchor.href, window.location.href);
      if (
        url.origin !== window.location.origin ||
        url.pathname !== window.location.pathname ||
        url.search !== window.location.search ||
        !url.hash
      ) {
        return;
      }

      const target = findHashTarget(url.hash);
      if (!target) return;
      const targetTab = getTargetTab(target);
      if (!targetTab || targetTab === activeTabRef.current) return;

      event.preventDefault();
      changeTab(targetTab, {
        target,
        hash: url.hash,
        pushHash: true,
      });
    };

    const handleHashChange = () => {
      const target = findHashTarget(window.location.hash);
      if (!target) return;
      const targetTab = getTargetTab(target);
      if (!targetTab) return;

      if (targetTab === activeTabRef.current) {
        window.requestAnimationFrame(() => target.scrollIntoView({block: 'start'}));
        return;
      }

      changeTab(targetTab, {target});
    };

    document.addEventListener('click', handleDocumentClick, true);
    window.addEventListener('hashchange', handleHashChange);
    return () => {
      document.removeEventListener('click', handleDocumentClick, true);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [changeTab, isProblemDocument]);

  const tabs = useMemo(
    () => [
      {
        key: 'problem' as const,
        label: learningPanelText.problemTab,
        icon: FaBookOpen,
        tabId: ids.problemTab,
        panelId: ids.problemPanel,
      },
      {
        key: 'solution' as const,
        label: learningPanelText.solutionTab,
        icon: FaLightbulb,
        tabId: ids.solutionTab,
        panelId: ids.solutionPanel,
      },
      {
        key: 'notes' as const,
        label: learningPanelText.notesTab,
        icon: FaStickyNote,
        tabId: ids.notesTab,
        panelId: ids.notesPanel,
      },
    ],
    [ids, learningPanelText],
  );

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    const currentIndex = tabs.findIndex((tab) => tab.key === activeTab);
    let nextIndex: number;

    if (event.key === 'ArrowRight') {
      nextIndex = (currentIndex + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft') {
      nextIndex = (currentIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    const nextTab = tabs[nextIndex].key;
    changeTab(nextTab);
    window.requestAnimationFrame(() => tabButtonRefs.current[nextTab]?.focus());
  };

  const tabsPortal =
    studyDom
      ? createPortal(
          <div
            className={styles.studyTabs}
            role="tablist"
            aria-label={learningPanelText.tabsAriaLabel}>
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  ref={(button) => {
                    tabButtonRefs.current[tab.key] = button;
                  }}
                  id={tab.tabId}
                  className={clsx(
                    styles.studyTab,
                    isActive && styles.studyTabActive,
                  )}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={tab.panelId}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => changeTab(tab.key)}
                  onKeyDown={handleTabKeyDown}>
                  <Icon aria-hidden="true" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>,
          studyDom.tabsHost,
        )
      : null;

  const notesPortal =
    studyDom
      ? createPortal(
          <BrowserOnly>
            {() => (
              <Suspense fallback={null}>
                <ProblemSetNavigator docId={docId} />
                <section className={styles.learningPanel} aria-labelledby="doc-learning-panel-title">
                  <header className={styles.learningPanelHeader}>
                    <div className={styles.learningPanelHeading}>
                      <FaGraduationCap aria-hidden="true" />
                      <div>
                        <h2 id="doc-learning-panel-title">{learningPanelText.title}</h2>
                        <p>{learningPanelText.hint}</p>
                      </div>
                    </div>
                    <AddToProblemSet docId={docId} variant="panel" />
                  </header>
                  <ProgressTracker
                    docId={docId}
                    title={title}
                    permalink={permalink}
                    tags={tags.map((t) => t.label)}
                    embedded
                  />
                  <NoteEditor docId={docId} embedded />
                  <FooterAnnotationSection />
                </section>
              </Suspense>
            )}
          </BrowserOnly>,
          studyDom.panels.notes,
        )
      : null;

  return (
    <>
      <Head>
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Head>
      <span
        ref={layoutAnchorRef}
        className={styles.workspaceAnchor}
        aria-hidden="true"
      />
      {tabsPortal}
      {notesPortal}
      {isProblemDocument && (
        <>
          <BrowserOnly>
            {() => (
              <Suspense fallback={null}>
                <>
                  <div className={shareStyles.docActionBar}>
                    <ShareAsImage docId={docId} title={title} compact />
                    {canCorrectSource && (
                      <Link className={shareStyles.triggerBtn} to={contributionUrl}>
                        <FaEdit className={shareStyles.triggerIcon} />
                        <span>{learningPanelText.correctionAction}</span>
                      </Link>
                    )}
                  </div>
                  <DifficultyRating docId={docId} />
                </>
              </Suspense>
            )}
          </BrowserOnly>
        </>
      )}
    </>
  );
}
