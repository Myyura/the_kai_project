import React, {type ReactNode, useEffect, useRef} from 'react';
import ColorModeToggleOriginal from '@theme-original/ColorModeToggle';
import {useUiText} from '@site/src/i18n/useUiText';
import type {Props} from '@theme/ColorModeToggle';

export default function ColorModeToggle(props: Props): ReactNode {
  const rootRef = useRef<HTMLSpanElement | null>(null);
  const t = useUiText('framework');

  useEffect(() => {
    const button = rootRef.current?.querySelector('button');
    if (!button) return;
    const mode = props.value === 'dark'
      ? t.colorModeDark
      : props.value === 'light'
        ? t.colorModeLight
        : t.colorModeSystem;
    button.title = mode;
    button.setAttribute('aria-label', t.colorModeToggle(mode));
  }, [props.value, t]);

  return (
    <span ref={rootRef} style={{display: 'contents'}}>
      <ColorModeToggleOriginal {...props} />
    </span>
  );
}
