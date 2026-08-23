import React, {forwardRef} from 'react';
import {Link as RspressLink} from '@rspress/core/theme';

function toHref(target) {
  if (typeof target === 'string') return target;
  if (!target || typeof target !== 'object') return '/';
  return `${target.pathname || ''}${target.search || ''}${target.hash || ''}` || '/';
}

/**
 * Keeps the existing `to` prop used throughout the application while using
 * Rspress' preloading-aware link implementation underneath.
 */
const Link = forwardRef(function Link({to, href, ...props}, ref) {
  return <RspressLink ref={ref} href={toHref(href ?? to)} {...props} />;
});

export default Link;
export {toHref};
