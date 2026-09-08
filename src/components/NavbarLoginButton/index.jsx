import React from 'react';
import Link from '@docusaurus/Link';
import {useLocation} from '@docusaurus/router';
import {FaUserCircle} from 'react-icons/fa';
import {useAuth} from '@site/src/hooks/useAuth';
import {useUiText} from '@site/src/i18n/useUiText';

// A single account destination for both desktop and mobile navigation.
export default function NavbarLoginButton({onClick}) {
  const {isConfigured, isLoggedIn, authReady} = useAuth();
  const t = useUiText('navbarLogin');
  const navbar = useUiText('navbar');
  const {pathname} = useLocation();

  if (!isConfigured) return null;

  if (!authReady) {
    return (
      <span className="navbar__link navbar__link--login kai-account-placeholder" aria-hidden="true">
        <FaUserCircle aria-hidden="true" />
        {t.login}
      </span>
    );
  }

  const destination = isLoggedIn ? '/me' : '/login';
  return (
    <Link
      to={destination}
      onClick={onClick}
      aria-current={pathname === destination ? 'page' : undefined}
      className={`navbar__link navbar__link--login${isLoggedIn ? ' navbar__link--login-active' : ''}`}>
      <FaUserCircle aria-hidden="true" />
      <span>{isLoggedIn ? navbar['个人中心'] : t.login}</span>
    </Link>
  );
}
