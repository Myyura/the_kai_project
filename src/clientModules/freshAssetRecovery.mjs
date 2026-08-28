export function markFreshAssetStartupSuccessful(browserWindow) {
  const recovery = browserWindow?.__kaiChunkRecovery;
  if (typeof recovery?.markStartupSuccessful !== 'function') return false;

  recovery.markStartupSuccessful();
  return true;
}

export function requestFreshAssetReload(browserWindow, force = false) {
  const recovery = browserWindow?.__kaiChunkRecovery;
  if (typeof recovery?.reloadWithFreshAssets !== 'function') return false;

  return recovery.reloadWithFreshAssets(force);
}
