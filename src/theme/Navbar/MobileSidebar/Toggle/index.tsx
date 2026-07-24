import React, {type ReactNode} from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import IconMenu from '@theme/Icon/Menu';
import {useUiText} from '@site/src/i18n/useUiText';

export default function MobileSidebarToggle(): ReactNode {
  const {toggle, shown} = useNavbarMobileSidebar();
  const t = useUiText('framework');
  return (
    <button
      onClick={toggle}
      aria-label={t.toggleNavigation}
      aria-expanded={shown}
      className="navbar__toggle clean-btn"
      type="button">
      <IconMenu />
    </button>
  );
}
