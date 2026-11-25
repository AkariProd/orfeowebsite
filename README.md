# ORFEO — portfolio site

Built with [Astro](https://astro.build). Dark, simple, four pages: Home, Work, Contact, Resources (+ a project page for Shamanism).

## Run it

```
npm install
npm run dev
```
Then open http://localhost:4321

## Edit content

**Everything** — text, projects, reels, links, tools, resources — is in one file:

`src/data/site.ts`

- **Images:** put files in `public/images/` and set `image: '/images/your-file.jpg'`
- **Videos:** paste the YouTube video ID (the bit after `v=`) into `youtube: '...'` — it plays in place when clicked
- **CV:** put the PDF in `public/files/` and set `cv: '/files/your-cv.pdf'` (the button appears automatically)
- **Avatar:** `avatar: '/images/avatar.jpg'`
- **Brand logos:** set `logo: '/images/netflix.svg'` (white/transparent works best)
- **Resource videos:** add items to `resources.videos` — the section appears when the list isn't empty

## Contact form

Create a free form at https://formspree.io, copy its ID (the part after `/f/`) into `formspreeId`.
Until then, the form opens the visitor's email app with the message pre-filled.

## Pages

- `src/pages/index.astro` — Home
- `src/pages/work.astro` — Work
- `src/pages/work/shamanism.astro` — Shamanism project page (draft copy — review before launch)
- `src/pages/contact.astro` — Contact
- `src/pages/resources.astro` — Resources

## Publish

`npm run build` creates a `dist/` folder. Easiest hosting: connect the project to Netlify or Vercel
(both free), or drag the `dist/` folder onto https://app.netlify.com/drop.
When you have a domain, set it in `astro.config.mjs` (`site:`).

## Credits

Tool logos: [Simple Icons](https://simpleicons.org) (CC0, incl. Ableton), [FontAudio](https://github.com/fefanto/fontaudio) by fefanto (CC BY 4.0), [Tabler Icons](https://tabler.io/icons) (MIT). Logos are trademarks of their owners and are used only to show which tools Orfeo works with.
