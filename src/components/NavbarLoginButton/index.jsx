/**
 * NavbarLoginButton — 导航栏登录按钮（动态显示登录状态）
 *
 * - 未登录 → 绿色按钮 "登录" / "ログイン"，点击跳转 /login
 * - 已登录 → 显示全站统一昵称，点击跳转 /me（个人中心）
 * - SSR 时不渲染（BrowserOnly）
 */

import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import Link from '@docusaurus/Link';
import { useAuth } from '@site/src/hooks/useAuth';
import {useUiText} from '@site/src/i18n/useUiText';

function LoginButtonInner() {
  const { isConfigured, user, isLoggedIn, authReady } = useAuth();
  const t = useUiText('navbarLogin');

  // 环境变量未配置 → 不显示
  if (!isConfigured) return null;

  // 认证状态尚未确认 → 渲染占位符保持布局稳定，避免闪烁
  if (!authReady) {
    return (
      <span
        className="navbar__link navbar__link--login"
        style={{ visibility: 'hidden', pointerEvents: 'none' }}
        aria-hidden="true"
      >
        {t.login}
      </span>
    );
  }

  if (isLoggedIn) {
    return (
      <Link
        to="/me"
        className="navbar__link navbar__link--login navbar__link--login-active"
        title={user?.email || t.loggedIn}
      >
        {t.loggedIn}
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
  // SSR fallback：渲染与真实按钮尺寸一致的不可见占位符，防止 hydration 布局跳动
  const fallback = (
    <span
      className="navbar__link navbar__link--login"
      style={{ visibility: 'hidden', pointerEvents: 'none' }}
      aria-hidden="true"
    >
      {/* 用中文"登录"作为占位宽度基准 */}
      登录
    </span>
  );

  return (
    <BrowserOnly fallback={fallback}>
      {() => <LoginButtonInner />}
    </BrowserOnly>
  );
}
