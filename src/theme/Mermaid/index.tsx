import React, {type ReactNode} from 'react';
import MermaidOriginal from '@theme-original/Mermaid';
import type {Props} from '@theme/Mermaid';
import styles from './styles.module.css';

/**
 * Docusaurus' Mermaid component renders `null` until the client-side Mermaid
 * bundle has finished. Keep a stable host node in the MDX tree so study panels
 * can move the diagram together with the surrounding problem/solution content
 * before the SVG is ready.
 */
export default function Mermaid(props: Props): ReactNode {
  return (
    <div className={styles.stableSlot} data-kai-mermaid-slot="">
      <MermaidOriginal {...props} />
    </div>
  );
}
