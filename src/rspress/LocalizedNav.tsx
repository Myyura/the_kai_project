import React, {useEffect, useMemo, useRef} from 'react';
import {createPortal} from 'react-dom';
import {useNav, useSite} from '@rspress/core/runtime';
import {
  IconSmallMenu,
  NavTitle,
  SocialLinks,
  SvgWrapper,
  SwitchAppearance,
  useHoverGroup,
  type NavProps,
} from '@rspress/core/theme-original';
import {isDarkModeSwitchEnabled} from '@rspress/shared';
import clsx from 'clsx';

// These are Rspress' own menu primitives. Rspress currently exposes the full
// theme through `dist/*`, while only the complete Nav is part of the public
// barrel. Reusing the primitives preserves native active-link, dropdown and
// mobile-menu behaviour while letting the project supply localized labels.
import {
  NavLangs,
  NavMenu,
  NavMenuDivider,
  NavVersions,
} from '@rspress/core/dist/theme/components/Nav/NavMenu.js';
import {useNavScreen} from '@rspress/core/dist/theme/components/NavHamburger/useNavScreen.js';
import {
  NavScreenDivider,
} from '@rspress/core/dist/theme/components/NavScreen/index.js';
import {NavScreenLangs} from '@rspress/core/dist/theme/components/NavScreen/NavScreenLangs.js';
import {NavScreenMenu} from '@rspress/core/dist/theme/components/NavScreen/NavScreenMenu.js';
import {NavScreenVersions} from '@rspress/core/dist/theme/components/NavScreen/NavScreenVersions.js';

import {useCurrentLanguage} from '@site/src/context/LanguageContext';
import {getUiMessage} from '@site/src/i18n/messages';
import {useUiText} from '@site/src/i18n/useUiText';
import {LocalizedSearch} from './LocalizedSearch';
import {localizeNavItems} from './localizeNav';

type LocalizedNavScreenProps = {
  isScreenOpen: boolean;
  menuItems: ReturnType<typeof useNav>;
  closeScreen: () => void;
  label: string;
  returnFocusRef: React.RefObject<HTMLButtonElement | null>;
};

const MOBILE_NAV_DIALOG_ID = 'kai-mobile-navigation-dialog';
const FOCUSABLE_ELEMENT_SELECTOR = [
  'a[href]:not([tabindex="-1"])',
  'button:not([disabled]):not([tabindex="-1"])',
  'input:not([disabled]):not([tabindex="-1"])',
  'select:not([disabled]):not([tabindex="-1"])',
  'textarea:not([disabled]):not([tabindex="-1"])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

function LocalizedNavScreen({
  isScreenOpen,
  menuItems,
  closeScreen,
  label,
  returnFocusRef,
}: LocalizedNavScreenProps) {
  const screen = useRef<HTMLDivElement>(null);
  const closeScreenRef = useRef(closeScreen);
  closeScreenRef.current = closeScreen;

  useEffect(() => {
    if (!isScreenOpen || !screen.current) return undefined;

    const activeScreen = screen.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const focusFrame = window.requestAnimationFrame(() => {
      const firstFocusable = activeScreen.querySelector<HTMLElement>(
        FOCUSABLE_ELEMENT_SELECTOR,
      );
      (firstFocusable ?? activeScreen).focus({preventScroll: true});
    });
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        closeScreenRef.current();
        return;
      }

      if (event.key !== 'Tab') return;
      const focusableElements = Array.from(
        activeScreen.querySelectorAll<HTMLElement>(FOCUSABLE_ELEMENT_SELECTOR),
      );
      if (!focusableElements.length) {
        event.preventDefault();
        activeScreen.focus({preventScroll: true});
        return;
      }

      const firstFocusable = focusableElements[0];
      const lastFocusable = focusableElements[focusableElements.length - 1];
      const activeElement = document.activeElement;
      if (event.shiftKey && (activeElement === firstFocusable || !activeScreen.contains(activeElement))) {
        event.preventDefault();
        lastFocusable.focus({preventScroll: true});
      } else if (!event.shiftKey && activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus({preventScroll: true});
      }
    };
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      returnFocusRef.current?.focus({preventScroll: true});
    };
  }, [isScreenOpen, returnFocusRef]);

  return (
    <div
      id={MOBILE_NAV_DIALOG_ID}
      className={clsx('rp-nav-screen', {
        'rp-nav-screen--open': isScreenOpen,
      })}
      ref={screen}
      role="dialog"
      aria-modal="true"
      aria-label={label}
      tabIndex={-1}
      onClick={closeScreen}
    >
      <nav
        className="rp-nav-screen__container"
        aria-label={label}
        onClick={(event) => event.stopPropagation()}
      >
        <NavScreenMenu menuItems={menuItems} />
        <NavScreenDivider />
        <LocalizedNavScreenAppearance />
        <NavScreenLangs />
        <NavScreenVersions />
        <NavScreenDivider />
        <SocialLinks />
      </nav>
    </div>
  );
}

function LocalizedNavScreenAppearance() {
  const {site} = useSite();
  const t = useUiText('rspressChrome');
  const hasAppearanceSwitch = isDarkModeSwitchEnabled(site.themeConfig.darkMode);

  return hasAppearanceSwitch ? (
    <div className="rp-nav-screen-appearance">
      <div className="rp-nav-screen-appearance__left">{t.themeText}</div>
      <div className="rp-nav-screen-appearance__right">
        <SwitchAppearance />
      </div>
    </div>
  ) : null;
}

function LocalizedNavHamburger({menuItems}: {menuItems: ReturnType<typeof useNav>}) {
  const t = useUiText('rspressChrome');
  const mobileHamburgerRef = useRef<HTMLButtonElement>(null);
  const auxiliaryItems = (
    <div className="rp-nav-hamburger__md__hover-group">
      <LocalizedNavScreenAppearance />
      <NavVersions />
      <NavLangs />
      <NavScreenDivider />
      <SocialLinks />
    </div>
  );
  const {isScreenOpen, closeScreen, toggleScreen} = useNavScreen();
  const {handleMouseEnter, handleMouseLeave, hoverGroup} = useHoverGroup({
    position: 'right',
    customChildren: (
      <div className="rp-nav-menu__others-mobile__container">
        {auxiliaryItems}
      </div>
    ),
  });
  const modalContainer = typeof document === 'undefined'
    ? null
    : document.getElementById('__rspress_modal_container');

  return (
    <>
      {isScreenOpen && modalContainer && createPortal(
        <LocalizedNavScreen
          isScreenOpen={isScreenOpen}
          menuItems={menuItems}
          closeScreen={closeScreen}
          label={t.openNavigationLabel}
          returnFocusRef={mobileHamburgerRef}
        />,
        modalContainer,
      )}
      <button
        ref={mobileHamburgerRef}
        type="button"
        onClick={toggleScreen}
        aria-label={isScreenOpen ? t.closeNavigationLabel : t.openNavigationLabel}
        aria-expanded={isScreenOpen}
        aria-haspopup="dialog"
        aria-controls={MOBILE_NAV_DIALOG_ID}
        className={clsx('rp-nav-hamburger', 'rp-nav-hamburger__sm', {
          'rp-nav-hamburger--active': isScreenOpen,
        })}
      >
        <SvgWrapper icon={IconSmallMenu} />
      </button>
      <button
        type="button"
        aria-label={t.openNavigationLabel}
        className={clsx('rp-nav-hamburger', 'rp-nav-hamburger__md', {
          'rp-nav-hamburger--active': isScreenOpen,
        })}
        onClick={handleMouseEnter}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <SvgWrapper icon={IconSmallMenu} />
        {hoverGroup}
      </button>
    </>
  );
}

/**
 * Rspress-native navigation chrome with labels sourced from the same
 * single-path language state as the rest of the application.
 */
export function LocalizedNav({
  beforeNavTitle,
  afterNavTitle,
  beforeNavMenu,
  afterNavMenu,
  navTitle,
}: NavProps) {
  const navList = useNav();
  const language = useCurrentLanguage();
  const {site} = useSite();
  const localizedNavList = useMemo(
    () => localizeNavItems(
      navList,
      (text: string) => getUiMessage('navbar', text, language),
    ),
    [language, navList],
  );
  const hasAppearanceSwitch = isDarkModeSwitchEnabled(site.themeConfig.darkMode);

  return (
    <header className="rp-nav">
      <div className="rp-nav__left">
        {beforeNavTitle}
        {navTitle ?? <NavTitle />}
        <NavMenu menuItems={localizedNavList} position="left" />
        {afterNavTitle}
      </div>
      <div className="rp-nav__right">
        {beforeNavMenu}
        <LocalizedSearch />
        <NavMenu menuItems={localizedNavList} position="right" />
        <div className="rp-nav__others">
          <NavMenuDivider />
          <NavLangs />
          <NavVersions />
          {hasAppearanceSwitch && <SwitchAppearance />}
          <SocialLinks />
        </div>
        <LocalizedNavHamburger menuItems={localizedNavList} />
        {afterNavMenu}
      </div>
    </header>
  );
}
