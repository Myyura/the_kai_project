import {markFreshAssetStartupSuccessful} from './freshAssetRecovery.mjs';
import {markSchoolShardNavigationSuccessful} from '../theme/SchoolShardReload/requestSchoolShardNavigation.mjs';

export const ROUTE_RECOVERY_STABILITY_DELAY_MS = 15000;

const RECOVERY_PAGE_SELECTOR = [
  '[data-kai-error-page]',
  '[data-kai-school-shard-reload]',
].join(',');

const scheduledChecks = new WeakMap();

export function markRouteRecoveryReady(browserWindow, browserDocument) {
  if (!browserWindow || !browserDocument) return false;
  if (browserDocument.querySelector(RECOVERY_PAGE_SELECTOR)) return false;

  markFreshAssetStartupSuccessful(browserWindow);
  markSchoolShardNavigationSuccessful(browserWindow);
  return true;
}

export function cancelRouteRecoveryReadyCheck(browserWindow) {
  const scheduled = browserWindow && scheduledChecks.get(browserWindow);
  if (!scheduled) return false;

  browserWindow.clearTimeout(scheduled.timeoutId);
  scheduledChecks.delete(browserWindow);
  return true;
}

/**
 * Route commits happen before every lazy child has necessarily settled. Keep
 * both reload guards until the page has stayed mounted for a short window, so
 * a late chunk failure cannot clear its own loop protection first.
 */
export function scheduleRouteRecoveryReady(
  browserWindow,
  browserDocument,
  delay = ROUTE_RECOVERY_STABILITY_DELAY_MS,
) {
  if (
    !browserWindow
    || !browserDocument
    || typeof browserWindow.setTimeout !== 'function'
    || typeof browserWindow.clearTimeout !== 'function'
  ) {
    return false;
  }

  cancelRouteRecoveryReadyCheck(browserWindow);
  const scheduled = {};
  scheduled.timeoutId = browserWindow.setTimeout(() => {
    if (scheduledChecks.get(browserWindow) !== scheduled) return;
    scheduledChecks.delete(browserWindow);
    markRouteRecoveryReady(browserWindow, browserDocument);
  }, Math.max(0, delay));
  scheduledChecks.set(browserWindow, scheduled);
  return true;
}

export function onRouteUpdate() {
  cancelRouteRecoveryReadyCheck(
    typeof window === 'undefined' ? null : window,
  );
}

export function onRouteDidUpdate() {
  scheduleRouteRecoveryReady(
    typeof window === 'undefined' ? null : window,
    typeof document === 'undefined' ? null : document,
  );
}
