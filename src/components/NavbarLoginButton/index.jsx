/**
 * NavbarLoginButton — 导航栏登录按钮（动态显示登录状态）
 *
 * - 未登录 → 绿色按钮 "登录" / "ログイン"，点击跳转 /login
 * - 已登录 → 显示邮箱前缀，点击跳转 /login（管理页面）
 * - SSR 时不渲染（BrowserOnly）
 */

import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import { useSync } from '@site/src/hooks/useSync';
import { useLanguage } from '@site/src/context/LanguageContext';

const T = {
  zh: { login: '登录', loggedIn: '已登录' },
  ja: { login: 'ログイン', loggedIn: 'ログイン中' },
};

function LoginButtonInner() {
  const { isConfigured, user, isLoggedIn, authReady } = useSync();
  const { language } = useLanguage();
  const t = language === 'ja' ? T.ja : T.zh;

  // 环境变量未配置 → 不显示
  if (!isConfigured) return null;

  // 认证状态尚未确认 → 不渲染，避免闪烁
  if (!authReady && !user) return null;

  if (isLoggedIn) {
    // 取邮箱 @ 前的部分作为显示名
    const display = user?.email
      ? user.email.split('@')[0]
      : t.loggedIn;

    return (
      <Link
        to="/login"
        className="navbar__link navbar__link--login navbar__link--login-active"
        title={user?.email || t.loggedIn}
      >
        {display}
      </Link>
    );
  }

  return (
    <Link to="/login" className="navbar__link navbar__link--login">
      {t.login}
    </Link>
  );
}

export default function NavbarLoginButton() {
  return (
    <BrowserOnly fallback={null}>
      {() => <LoginButtonInner />}
    </BrowserOnly>
  );
}
