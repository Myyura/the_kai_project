/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {Suspense, lazy, type ReactNode} from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import NavbarSearch from '@theme/Navbar/Search';
import type {Props} from '@theme/NavbarItem/SearchNavbarItem';

const LazySearchBar = lazy(() => import('@theme/SearchBar'));

function DeferredSearchBar(): ReactNode {
  return (
    <BrowserOnly fallback={null}>
      {() => (
        <Suspense fallback={null}>
          <LazySearchBar />
        </Suspense>
      )}
    </BrowserOnly>
  );
}

export default function SearchNavbarItem({
  mobile,
  className,
}: Props): ReactNode {
  if (mobile) {
    return null;
  }

  return (
    <NavbarSearch className={className}>
      <DeferredSearchBar />
    </NavbarSearch>
  );
}
