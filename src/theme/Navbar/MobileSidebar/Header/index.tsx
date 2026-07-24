import React, {type ReactNode} from 'react';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarColorModeToggle from '@theme/Navbar/ColorModeToggle';
import IconClose from '@theme/Icon/Close';
import NavbarLogo from '@theme/Navbar/Logo';
import {useUiText} from '@site/src/i18n/useUiText';

function CloseButton() {
  const mobileSidebar = useNavbarMobileSidebar();
  const t = useUiText('framework');
  return (
    <button
      type="button"
      aria-label={t.closeNavigation}
      className="clean-btn navbar-sidebar__close"
      onClick={() => mobileSidebar.toggle()}>
      <IconClose color="var(--ifm-color-emphasis-600)" />
    </button>
  );
}

export default function NavbarMobileSidebarHeader(): ReactNode {
  return (
    <div className="navbar-sidebar__brand">
      <NavbarLogo />
      <NavbarColorModeToggle className="margin-right--md" />
      <CloseButton />
    </div>
  );
}
