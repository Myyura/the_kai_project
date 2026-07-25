import React, {type ReactNode} from 'react';
import MermaidOriginal from '@theme-original/Mermaid';
import type {Props} from '@theme/Mermaid';
import styles from './styles.module.css';

type StableMermaidProps = Props & {
  'data-kai-study-section'?: string;
};

/**
 * Docusaurus' Mermaid component renders `null` until the client-side Mermaid
 * bundle has finished. Keep a stable, section-marked host in the MDX tree so
 * tab visibility is applied before the SVG is ready and remains in effect
 * after the asynchronous render.
 */
export default function Mermaid({
  'data-kai-study-section': studySection,
  ...props
}: StableMermaidProps): ReactNode {
  return (
    <div
      className={styles.stableSlot}
      data-kai-mermaid-slot=""
      data-kai-study-section={studySection}>
      <MermaidOriginal {...props} />
    </div>
  );
}
