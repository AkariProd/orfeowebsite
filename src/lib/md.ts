// Tiny helper: escapes text and turns [label](url) into links.
export function inlineLinks(text: string): string {
  const esc = text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return esc.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_m, label, url) => {
    const ext = /^https?:/.test(url);
    return `<a href="${url}"${ext ? ' target="_blank" rel="noopener"' : ''}>${label}</a>`;
  });
}
