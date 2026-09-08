import {useThemeConfig} from '@docusaurus/theme-common';
import type {Props as NavbarItemConfig} from '@theme/NavbarItem';
import {useLanguage} from '@site/src/context/LanguageContext';

// Desktop and mobile consume the same configuration and recursive translation.
// The account entry is rendered by NavbarLoginButton in both layouts.
export default function useNavbarItems(): NavbarItemConfig[] {
  const {navbar} = useThemeConfig();
  const {t} = useLanguage();

  const translateItem = (item: NavbarItemConfig): NavbarItemConfig => {
    const nestedItems = (item as NavbarItemConfig & {items?: NavbarItemConfig[]}).items;
    return {
      ...item,
      label: item.label ? t(item.label, 'navbar') : item.label,
      ...(Array.isArray(nestedItems)
        ? {items: nestedItems.map(translateItem)}
        : {}),
    } as NavbarItemConfig;
  };

  return (navbar.items as NavbarItemConfig[]).map(translateItem);
}
