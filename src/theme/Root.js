import React from 'react';
import { SyncProvider } from '@site/src/context/SyncContext';
import { PublicProfileProvider } from '@site/src/context/PublicProfileContext';

// Root 组件 - 语言初始化由 clientModules/languageInit.js 处理
export default function Root({ children }) {
  return (
    <SyncProvider>
      <PublicProfileProvider>
        {children}
      </PublicProfileProvider>
    </SyncProvider>
  );
}
