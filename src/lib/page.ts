/* Page lifecycle shared by every component script.
   The site swaps only <main> when you change pages (see router.ts), so the
   sidebar and its music player keep running. Component scripts register with
   onPage(): the callback runs now and after every page change, and can return
   a cleanup function that runs before the next change. */
type Cleanup = void | (() => void);
type Reg = { fns: (() => Cleanup)[]; cleanups: (() => void)[] };

const reg: Reg = ((window as any).__orfeoPage ||= { fns: [], cleanups: [] });

const run = (fn: () => Cleanup) => {
  try { const c = fn(); if (typeof c === 'function') reg.cleanups.push(c); } catch (e) { console.error(e); }
};

export function onPage(fn: () => Cleanup) {
  reg.fns.push(fn);
  run(fn);
}

export function pageLeave() {
  const cs = reg.cleanups.splice(0);
  cs.forEach((c) => { try { c(); } catch (e) { console.error(e); } });
}

export function pageEnter() {
  reg.fns.forEach(run);
  document.dispatchEvent(new Event('orfeo:page'));
}
