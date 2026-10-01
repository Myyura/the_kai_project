const fs = require('node:fs');
const path = require('node:path');
const {createRequire} = require('node:module');
const babel = require('@babel/core');

// A small deterministic lifecycle boundary for async hook tests, without a DOM
// or a real account. Rendered UI is covered separately by browser verification.
module.exports = function createHookRuntime(dependencies = {}, globals = {}) {
  const slots = [];
  let cursor = 0;
  let renderHook;
  let value;
  let mounted = false;
  let scheduled = false;
  let pendingEffects = [];
  const changed = (left, right) => !left || !right
    || left.length !== right.length || left.some((item, index) => !Object.is(item, right[index]));
  const schedule = () => {
    if (!mounted || scheduled) return;
    scheduled = true;
    queueMicrotask(() => {
      scheduled = false;
      if (mounted) render();
    });
  };
  const react = {
    createContext: (initial) => ({Provider: 'provider', initial}),
    createElement: (type, props, ...children) => ({type, props: {...props, children}}),
    useState(initial) {
      const index = cursor++;
      if (!slots[index]) slots[index] = {value: typeof initial === 'function' ? initial() : initial};
      return [slots[index].value, (next) => {
        const result = typeof next === 'function' ? next(slots[index].value) : next;
        if (!Object.is(result, slots[index].value)) {
          slots[index].value = result;
          schedule();
        }
      }];
    },
    useRef(initial) {
      const index = cursor++;
      if (!slots[index]) slots[index] = {current: initial};
      return slots[index];
    },
    useMemo(compute, deps) {
      const index = cursor++;
      if (!slots[index] || changed(slots[index].deps, deps)) slots[index] = {value: compute(), deps};
      return slots[index].value;
    },
    useCallback(callback, deps) {return react.useMemo(() => callback, deps);},
    useEffect(effect, deps) {
      const index = cursor++;
      if (!slots[index] || changed(slots[index].deps, deps)) {
        const previous = slots[index];
        slots[index] = {deps, cleanup: previous?.cleanup};
        pendingEffects.push(() => {
          slots[index].cleanup?.();
          slots[index].cleanup = effect();
        });
      }
    },
  };
  const render = () => {
    cursor = 0;
    value = renderHook();
    const effects = pendingEffects;
    pendingEffects = [];
    effects.forEach((effect) => effect());
    return value;
  };
  const cache = new Map();
  const load = (filename) => {
    filename = path.resolve(filename);
    if (cache.has(filename)) return cache.get(filename).exports;
    const loaded = {exports: {}};
    cache.set(filename, loaded);
    const nativeRequire = createRequire(filename);
    const requireLocal = (request) => {
      if (request === 'react') return react;
      if (Object.hasOwn(dependencies, request)) return dependencies[request];
      const resolved = nativeRequire.resolve(request);
      return resolved.includes(`${path.sep}src${path.sep}`) && resolved.endsWith('.js')
        ? load(resolved) : nativeRequire(request);
    };
    const {code} = babel.transformSync(fs.readFileSync(filename, 'utf8'), {
      filename, babelrc: false, configFile: false,
      presets: [require('@babel/preset-react')],
      plugins: [require('@babel/plugin-transform-dynamic-import'), require('@babel/plugin-transform-modules-commonjs')],
    });
    Function('module', 'exports', 'require', ...Object.keys(globals), code)(
      loaded, loaded.exports, requireLocal, ...Object.values(globals),
    );
    return loaded.exports;
  };
  return {
    load,
    mount(hook) {renderHook = hook; mounted = true; return render();},
    render,
    get current() {return value;},
    async flush() {await new Promise(setImmediate); return value;},
    unmount() {mounted = false; slots.forEach((slot) => slot?.cleanup?.());},
  };
};
