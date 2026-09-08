/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {type ReactNode} from 'react';
import Link from '@docusaurus/Link';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarItem from '@theme/NavbarItem';
import NavbarLoginButton from '@site/src/components/NavbarLoginButton';
import useNavbarItems from '@site/src/hooks/useNavbarItems';
import {useUiText} from '@site/src/i18n/useUiText';

// The primary menu displays the navbar items
export default function NavbarMobilePrimaryMenu(): ReactNode {
  const mobileSidebar = useNavbarMobileSidebar();
  const framework = useUiText('framework');
  const items = useNavbarItems();

  return (
    <ul className="menu__list">
      <li className="menu__list-item">
        <Link className="menu__link kai-mobile-search-link" to="/search" onClick={() => mobileSidebar.toggle()}>
          {framework.searchLabel}
          <span aria-hidden="true">→</span>
        </Link>
      </li>
      {items.map((item, i) => (
          <NavbarItem
            mobile
            {...item}
            onClick={() => mobileSidebar.toggle()}
            key={i}
          />
      ))}
      <li className="menu__list-item kai-mobile-account">
        <NavbarLoginButton onClick={() => mobileSidebar.toggle()} />
      </li>
    </ul>
  );
}
