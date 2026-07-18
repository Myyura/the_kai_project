import React from 'react';
import {AuthProvider} from '@site/src/context/AuthContext';

// Root 组件 - 语言初始化由 clientModules/languageInit.js 处理
export default function Root({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
