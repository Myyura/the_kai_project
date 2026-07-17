const MAX_SMILES_LENGTH = 2000;

const MOLECULE_OPTIONS = {
  scale: 1,
  bondLength: 26,
  bondThickness: 1.1,
  shortBondLength: 0.8,
  bondSpacing: 4.5,
  fontSizeLarge: 10,
  fontSizeSmall: 4,
  padding: 16,
  compactDrawing: true,
  explicitHydrogens: true,
};

const REACTION_OPTIONS = {
  scale: 0.9,
  spacing: 14,
};

let smilesDrawerPromise = null;

function loadSmilesDrawer() {
  if (!smilesDrawerPromise) {
    smilesDrawerPromise = import('smiles-drawer')
      .then((module) => module.default || module)
      .catch((error) => {
        smilesDrawerPromise = null;
        throw error;
      });
  }
  return smilesDrawerPromise;
}

export function normalizeSmiles(value) {
  const smiles = String(value || '').trim();
  if (!smiles) {
    throw new Error('SMILES input is empty.');
  }
  if (smiles.length > MAX_SMILES_LENGTH) {
    throw new Error(`SMILES input exceeds ${MAX_SMILES_LENGTH} characters.`);
  }
  if (/\s/.test(smiles)) {
    throw new Error('SMILES input must be written on one line without spaces.');
  }
  return smiles;
}

function normalizeSvgSize(svg) {
  const viewBox = svg?.viewBox?.baseVal;
  if (!viewBox || !Number.isFinite(viewBox.width) || !Number.isFinite(viewBox.height)) return;
  if (viewBox.width <= 0 || viewBox.height <= 0) return;

  svg.style.removeProperty('width');
  svg.style.removeProperty('height');
  svg.setAttribute('width', String(Math.ceil(viewBox.width)));
  svg.setAttribute('height', String(Math.ceil(viewBox.height)));
  svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
}

/**
 * Draw a SMILES molecule or reaction into an existing SVG element.
 * The library is imported only in the browser and is split into a lazy chunk.
 */
export async function drawSmiles(svg, value, theme = 'light', options = {}) {
  if (!svg) throw new Error('SMILES render target is missing.');
  const smiles = normalizeSmiles(value);
  const SmilesDrawer = await loadSmilesDrawer();

  if (options.isCurrent && !options.isCurrent()) return null;

  const drawer = new SmilesDrawer.SmiDrawer(MOLECULE_OPTIONS, REACTION_OPTIONS);
  const colorTheme = theme === 'dark' ? 'dark' : 'light';

  return new Promise((resolve, reject) => {
    drawer.draw(
      smiles,
      svg,
      colorTheme,
      () => {
        normalizeSvgSize(svg);
        resolve(svg);
      },
      (error) => reject(error instanceof Error ? error : new Error(String(error))),
    );
  });
}

export function getDocumentColorMode() {
  if (typeof document === 'undefined') return 'light';
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
}

export {MAX_SMILES_LENGTH};
