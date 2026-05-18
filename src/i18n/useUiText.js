import {useCurrentLanguage} from '@site/src/context/LanguageContext';
import {getUiMessages} from './messages';

export function useUiText(namespace) {
  const language = useCurrentLanguage();
  return getUiMessages(namespace, language);
}
