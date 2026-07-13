import {useContext} from 'react';
import {PublicProfileContext} from '@site/src/context/PublicProfileContext';

export function usePublicProfile() {
  const value = useContext(PublicProfileContext);
  if (!value) {
    throw new Error('usePublicProfile must be used within <PublicProfileProvider>.');
  }
  return value;
}

