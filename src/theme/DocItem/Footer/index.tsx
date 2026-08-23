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
import Head from '@site/src/rspress/Head';
import {useDoc} from '@site/src/rspress/useDoc';
import BrowserOnly from '@site/src/rspress/BrowserOnly';
import Link from '@site/src/rspress/Link';
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
  contentNodes: Record<'problem' | 'solution', HTMLElement[]>;
  originallyHidden: Set<HTMLElement>;
  emptyStates: HTMLElement[];
  generatedIds: HTMLElement[];
};

const useBrowserLayoutEffect =
  typeof window === 'undefined' ? useEffect : useLayoutEffect;

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
  return nodes.some(
    (node) => !/^H[1-6]$/.test(node.tagName),
  );
}

function makeStudyPanel(
  name: StudyTab,
  panelId: string,
  tabId: string,
): HTMLElement {
  const panel = document.createElement('section');
  panel.id = panelId;
  panel.classList.add(styles.studyPanel);
  panel.dataset.kaiStudyPanel = name;
  panel.setAttribute('role', 'tabpanel');
  panel.setAttribute('aria-labelledby', tabId);
  panel.tabIndex = 0;
  return panel;
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
  const problemNodes: HTMLElement[] = [];
  const solutionNodes: HTMLElement[] = [];
  let currentSection: 'problem' | 'solution' | null = null;
  children.forEach((child) => {
    const markedSection = child.dataset.kaiStudySection;
    if (markedSection === 'problem' || markedSection === 'solution') {
      currentSection = markedSection;
    }
    if (currentSection === 'problem') problemNodes.push(child);
    if (currentSection === 'solution') solutionNodes.push(child);
  });
  if (
    problemNodes.length === 0
    && solutionNodes.length === 0
    && !options.force
  ) {
    return null;
  }

  const tabsHost = document.createElement('div');
  tabsHost.className = styles.studyTabsHost;
  tabsHost.dataset.kaiStudyTabsHost = '';

  const problemPanel = makeStudyPanel(
    'problem',
    ids.problemPanel,
    ids.problemTab,
  );
  const solutionPanel = makeStudyPanel(
    'solution',
    ids.solutionPanel,
    ids.solutionTab,
  );
  const notesPanel = makeStudyPanel(
    'notes',
    ids.notesPanel,
    ids.notesTab,
  );
  notesPanel.classList.add(styles.notesWorkspace);

  const generatedIds: HTMLElement[] = [];
  const originallyHidden = new Set(
    [...problemNodes, ...solutionNodes].filter((node) => node.hidden),
  );
  const assignOwnedIds = (
    nodes: HTMLElement[],
    panel: HTMLElement,
    panelId: string,
  ) => {
    const ownedIds = nodes.map((node, index) => {
      if (!node.id) {
        node.id = `${panelId}-content-${index + 1}`;
        generatedIds.push(node);
      }
      return node.id;
    });
    if (ownedIds.length > 0) {
      panel.setAttribute('aria-owns', ownedIds.join(' '));
    }
  };
  assignOwnedIds(problemNodes, problemPanel, ids.problemPanel);
  assignOwnedIds(solutionNodes, solutionPanel, ids.solutionPanel);

  root.insertBefore(notesPanel, null);
  root.insertBefore(solutionPanel, solutionNodes[0] || notesPanel);
  root.insertBefore(problemPanel, problemNodes[0] || solutionPanel);
  root.insertBefore(tabsHost, problemPanel);

  const emptyStates: HTMLElement[] = [];
  if (!hasStudySectionContent(problemNodes)) {
    const emptyState = makeEmptyStudySection(
      options.missingProblemText,
      options.contributionLabel,
      options.contributionUrl,
    );
    problemPanel.appendChild(emptyState);
    emptyStates.push(emptyState);
  }
  if (!hasStudySectionContent(solutionNodes)) {
    const emptyState = makeEmptyStudySection(
      options.missingSolutionText,
      options.contributionLabel,
      options.contributionUrl,
    );
    solutionPanel.appendChild(emptyState);
    emptyStates.push(emptyState);
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
    contentNodes: {
      problem: problemNodes,
      solution: solutionNodes,
    },
    originallyHidden,
    emptyStates,
    generatedIds,
  };
}

function setStudyVisibility(studyDom: StudyDom, activeTab: StudyTab): void {
  studyDom.panels.problem.hidden = activeTab !== 'problem';
  studyDom.panels.solution.hidden = activeTab !== 'solution';
  studyDom.panels.notes.hidden = activeTab !== 'notes';
  studyDom.contentNodes.problem.forEach((node) => {
    const hidden = (
      studyDom.originallyHidden.has(node) || activeTab !== 'problem'
    );
    node.hidden = hidden;
    node.classList.toggle(styles.studyContentHidden, hidden);
  });
  studyDom.contentNodes.solution.forEach((node) => {
    const hidden = (
      studyDom.originallyHidden.has(node) || activeTab !== 'solution'
    );
    node.hidden = hidden;
    node.classList.toggle(styles.studyContentHidden, hidden);
  });
}

function restoreStudyDom(studyDom: StudyDom): void {
  const {
    root,
    tabsHost,
    panels,
    contentNodes,
    originallyHidden,
    emptyStates,
    generatedIds,
  } = studyDom;
  contentNodes.problem.forEach((node) => {
    node.hidden = originallyHidden.has(node);
    node.classList.remove(styles.studyContentHidden);
  });
  contentNodes.solution.forEach((node) => {
    node.hidden = originallyHidden.has(node);
    node.classList.remove(styles.studyContentHidden);
  });
  generatedIds.forEach((node) => node.removeAttribute('id'));
  emptyStates.forEach((emptyState) => emptyState.remove());
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
    const layout = layoutAnchorRef.current?.closest('.rp-doc-layout__doc-container');
    const root = layout?.querySelector<HTMLElement>('.rspress-doc');
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
    const targetPanel = hashTarget?.closest<HTMLElement>(
      '[data-kai-study-section], [data-kai-study-panel]',
    );
    const targetSection = (
      targetPanel?.dataset.kaiStudySection
      || targetPanel?.dataset.kaiStudyPanel
    );
    const initialTab =
      targetSection === 'solution' ? 'solution' : 'problem';

    activeTabRef.current = initialTab;
    setStudyVisibility(studyDom, initialTab);
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

    setStudyVisibility(studyDom, activeTab);

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
      const panel = target.closest<HTMLElement>(
        '[data-kai-study-section], [data-kai-study-panel]',
      );
      const panelName = (
        panel?.dataset.kaiStudySection
        || panel?.dataset.kaiStudyPanel
      );
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
