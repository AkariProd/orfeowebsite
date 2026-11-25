/* Tiny client-side router: internal links fetch the next page and swap only
   <main>, so the sidebar (and the [untitled] player in it) never reloads. */
import { pageEnter, pageLeave } from './page';

const w = window as any;
if (!w.__orfeoRouter) {
  w.__orfeoRouter = true;

  const cache = new Map<string, Promise<string>>();
  const get = (url: string) => {
    if (!cache.has(url)) cache.set(url, fetch(url).then((r) => { if (!r.ok) throw new Error(String(r.status)); return r.text(); }).catch((e) => { cache.delete(url); throw e; }));
    return cache.get(url)!;
  };
  const seenInline = new Set([...document.querySelectorAll('script:not([src])')].map((s) => s.textContent || ''));

  const internal = (a: HTMLAnchorElement, e?: MouseEvent) => {
    if (e && (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey)) return false;
    if (a.target && a.target !== '_self') return false;
    if (a.hasAttribute('download') || a.dataset.reload !== undefined) return false;
    const u = new URL(a.href, location.href);
    if (u.origin !== location.origin) return false;
    if (/\.(pdf|zip|png|jpe?g|webp|mp3|wav|bank)$/i.test(u.pathname)) return false;
    if (u.pathname === location.pathname && u.search === location.search && u.hash) return false; // same-page anchor
    return true;
  };

  const loadScript = (old: HTMLScriptElement) => new Promise<void>((res) => {
    const s = document.createElement('script');
    for (const { name, value } of [...old.attributes]) s.setAttribute(name, value);
    if (old.src) { s.onload = s.onerror = () => res(); } else { s.textContent = old.textContent; res(); }
    document.head.appendChild(s);
  });

  let navId = 0;
  async function go(href: string, push: boolean) {
    const id = ++navId;
    const url = new URL(href, location.href);
    let html: string;
    try { html = await get(url.pathname + url.search); } catch { location.href = href; return; }
    if (id !== navId) return;
    const doc = new DOMParser().parseFromString(html, 'text/html');
    const nextMain = doc.getElementById('main');
    const main = document.getElementById('main');
    if (!nextMain || !main) { location.href = href; return; }

    // styles the next page needs
    const haveHrefs = new Set([...document.head.querySelectorAll<HTMLLinkElement>('link[rel=stylesheet]')].map((l) => l.href));
    const haveStyles = new Set([...document.head.querySelectorAll('style')].map((s) => s.textContent));
    const pending: Promise<void>[] = [];
    doc.head.querySelectorAll<HTMLLinkElement>('link[rel=stylesheet]').forEach((l) => {
      const abs = new URL(l.getAttribute('href')!, url).href;
      if (haveHrefs.has(abs)) return;
      const n = document.createElement('link'); n.rel = 'stylesheet'; n.href = abs;
      pending.push(new Promise((r) => { n.onload = n.onerror = () => r(); }));
      document.head.appendChild(n);
    });
    doc.head.querySelectorAll('style').forEach((s) => { if (!haveStyles.has(s.textContent)) document.head.appendChild(s.cloneNode(true)); });
    await Promise.race([Promise.all(pending), new Promise((r) => setTimeout(r, 1500))]);
    if (id !== navId) return;

    if (push) {
      history.replaceState({ ...history.state, scroll: scrollY }, '');
      history.pushState({ scroll: 0 }, '', url.href);
    }

    const haveSrc = new Set([...document.querySelectorAll<HTMLScriptElement>('script[src]')].map((s) => s.src));
    pageLeave();
    document.body.style.overflow = '';
    nextMain.querySelectorAll('script').forEach((sc) => sc.setAttribute('data-inert', ''));
    main.replaceChildren(...[...nextMain.childNodes].map((n) => document.importNode(n, true)));
    main.querySelectorAll('script[data-inert]').forEach((sc) => sc.remove());
    document.title = doc.title;

    // sidebar + mobile topbar active state
    const nowItems = document.querySelectorAll('.nav-item');
    const nextItems = doc.querySelectorAll('.nav-item');
    nowItems.forEach((el, i) => {
      const n = nextItems[i]; if (!n) return;
      el.className = n.className;
      const cur = n.getAttribute('aria-current');
      cur ? el.setAttribute('aria-current', cur) : el.removeAttribute('aria-current');
    });

    // scripts the next page needs that aren't loaded yet
    const fresh: HTMLScriptElement[] = [];
    doc.querySelectorAll<HTMLScriptElement>('script').forEach((s) => {
      if (s.src) { const abs = new URL(s.getAttribute('src')!, url).href; if (!haveSrc.has(abs)) { s.setAttribute('src', abs); fresh.push(s); } }
      else if (s.type === 'module' && !seenInline.has(s.textContent || '')) { seenInline.add(s.textContent || ''); fresh.push(s); }
    });

    pageEnter();                        // re-init scripts already loaded
    for (const s of fresh) await loadScript(s); // new scripts init themselves

    if (url.hash) document.querySelector(url.hash)?.scrollIntoView();
    else if (push) scrollTo(0, 0);
    else scrollTo(0, history.state?.scroll || 0);
  }

  document.addEventListener('click', (e) => {
    const a = (e.target as HTMLElement).closest?.('a') as HTMLAnchorElement | null;
    if (!a || !internal(a, e)) return;
    e.preventDefault();
    const u = new URL(a.href, location.href);
    if (u.href === location.href) { scrollTo({ top: 0, behavior: 'smooth' }); return; }
    go(a.href, true);
  });
  document.addEventListener('pointerover', (e) => {
    const a = (e.target as HTMLElement).closest?.('a') as HTMLAnchorElement | null;
    if (a && internal(a)) { const u = new URL(a.href, location.href); get(u.pathname + u.search).catch(() => {}); }
  });
  history.scrollRestoration = 'manual';
  addEventListener('popstate', () => go(location.href, false));
}
