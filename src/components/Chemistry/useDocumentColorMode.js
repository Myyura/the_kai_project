import {useEffect, useState} from 'react';
import {getDocumentColorMode} from './smilesRenderer';

/**
 * Follow the effective color mode on <html>. Docusaurus deliberately lets its
 * context value lag during hydration, while chemistry SVG colors must match the
 * theme that is actually visible to the user.
 */
export default function useDocumentColorMode() {
  const [colorMode, setColorMode] = useState('light');

  useEffect(() => {
    const root = document.documentElement;
    const syncColorMode = () => setColorMode(getDocumentColorMode());
    syncColorMode();

    const observer = new MutationObserver(syncColorMode);
    observer.observe(root, {attributes: true, attributeFilter: ['data-theme']});
    return () => observer.disconnect();
  }, []);

  return colorMode;
}
