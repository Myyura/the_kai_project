import React from 'react';
import Head from './Head';

/**
 * Rspress owns the site chrome for component routes. This compatibility
 * wrapper preserves per-page metadata expected by the existing application
 * pages without rendering a second navbar or footer.
 */
export default function Layout({title, description, children}) {
  return (
    <>
      <Head>
        {title ? <title>{title}</title> : null}
        {title ? <meta property="og:title" content={title} /> : null}
        {description ? <meta name="description" content={description} /> : null}
      </Head>
      {children}
    </>
  );
}
