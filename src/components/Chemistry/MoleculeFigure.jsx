import React, {useEffect, useRef, useState} from 'react';
import {drawSmiles} from './smilesRenderer';
import useDocumentColorMode from './useDocumentColorMode';
import styles from './styles.module.css';

export default function MoleculeFigure({smiles, title}) {
  const svgRef = useRef(null);
  const renderIdRef = useRef(0);
  const colorMode = useDocumentColorMode();
  const [status, setStatus] = useState('loading');
  const source = String(smiles || '').trim();
  const accessibleTitle = typeof title === 'string' && title.trim()
    ? title.trim()
    : `Chemical structure: ${source}`;

  useEffect(() => {
    const svg = svgRef.current;
    const renderId = ++renderIdRef.current;
    let active = true;
    setStatus('loading');

    void drawSmiles(svg, source, colorMode, {
      isCurrent: () => active && renderIdRef.current === renderId,
    }).then((result) => {
      if (active && result) setStatus('ready');
    }).catch(() => {
      if (active) setStatus('error');
    });

    return () => {
      active = false;
    };
  }, [colorMode, source]);

  return (
    <figure className={styles.figure} data-smiles-state={status}>
      <div className={styles.surface}>
        <svg
          ref={svgRef}
          className={styles.structure}
          role="img"
          aria-label={accessibleTitle}
        />
        {status === 'loading' && (
          <span className={styles.status} role="status">Rendering structure…</span>
        )}
        {status === 'error' && (
          <span className={styles.error} role="alert">Unable to render this SMILES structure.</span>
        )}
      </div>
      <figcaption className={styles.caption}>
        {title && <span className={styles.title}>{title}</span>}
        <code>{source}</code>
      </figcaption>
    </figure>
  );
}
