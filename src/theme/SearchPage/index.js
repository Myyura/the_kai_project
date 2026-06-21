import React from 'react';
import SearchPage from '@theme-original/SearchPage';
import NoIndex from '@site/src/components/NoIndex';

export default function SearchPageWrapper(props) {
  return (
    <>
      <NoIndex />
      <SearchPage {...props} />
    </>
  );
}
