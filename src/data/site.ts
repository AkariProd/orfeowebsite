// ─────────────────────────────────────────────────────────────
//  ALL SITE CONTENT LIVES HERE.
//  Edit text, links and media below — the pages update themselves.
//
//  Images: drop files into /public/images and set e.g.
//          image: '/images/kubika.jpg'
//  Videos: paste the YouTube video ID (the part after v= in the URL),
//          e.g. youtube: 'dQw4w9WgXcQ'
//  Leave image/youtube empty ('') to show a placeholder.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Orfeo',
  fullName: 'Orfeo Gombert',
  displayName: 'Orfeo Walcott', // shown top-left and in the footer
  role: 'Composer',
  eyebrow: 'Composer & Sound Designer',
  location: 'Paris, France',
  timeZone: 'Europe/Paris',
  email: 'orfeo.a.gombert@gmail.com',
  avatar: '/images/avatar.jpg',
  cv: '', // e.g. '/files/orfeo-cv.pdf' — the button hides while empty

  // Contact form: create a free form at https://formspree.io and paste its ID
  // (the part after /f/). While empty, the form opens the visitor's email app.
  formspreeId: '',

  // Music player in the sidebar (untitled.stream embed). Set embed: '' to hide it.
  player: { embed: 'https://untitled.stream/embed/vXu937T23Jwk' },

  seo: {
    title: 'Orfeo — Composer & Sound Designer, Paris',
    description:
      'Orfeo is a Paris-based composer and sound designer making music for ad campaigns, indie games, film, creators and artists.',
  },
};

export const socials = [
  { label: 'Instagram — sound', handle: '@orfeo.akari', url: 'https://www.instagram.com/orfeo.akari' },
  { label: 'Instagram — piano', handle: '@orfeoaragon', url: 'https://www.instagram.com/orfeoaragon' },
  { label: 'LinkedIn', handle: 'in/orfeogombert', url: 'https://www.linkedin.com/in/orfeogombert' },
];

export const home = {
  // The last part of the headline is shown in grey.
  headline: "I'm Orfeo, a composer and sound designer based in Paris.",
  headlineGrey: 'Music for campaigns, games, film and artists.',
  intro: 'From the first idea at the piano to the final implementation in Wwise or FMOD.',
  reels: [
    { title: 'Music Reel', meta: 'Campaigns, games & film', year: '2026', youtube: '', image: '' },
    { title: 'Sound Design Reel', meta: 'Games & campaigns', year: '2026', youtube: '', image: '' },
  ],
  about: [
    "Hey, I'm Orfeo, a composer and sound designer based in Paris. I make music for ad campaigns, indie games, content creators and artists. Recently that's included a [Paco Rabanne × Netflix trailer](/work) and a [UNESCO campaign for World Peace Day](/work). I also love the implementation side in Wwise and FMOD, and switching between writing and the technical work keeps things fun for me.",
    "I co-founded a small game studio, where I did the music for [Kubika](/work), including its adaptive music system, which was one of my favourite things to build. Right now I'm also studying film and game scoring at ISART Digital.",
    "On the side, I build my own [VST plugins](/resources), and I'm working on a piano library sampled from my upright and some sound packs I'm excited to share soon.",
    "Outside of music, I love going to the cinema, and I'm always hunting for old gear to bring back to life.",
  ],
  experience: [
    { org: 'Freelance', role: 'Composer & Sound Designer', years: '2022-NOW' },
    { org: 'UNESCO', role: 'Campaign music', years: '2026' },
    { org: 'Paco Rabanne × Netflix', role: 'Trailer music', years: '2026' },
    { org: 'Kubika', role: 'Music & music system', years: '2024-26' },
    { org: 'ISART Digital', role: 'Film & game scoring', years: '2024-27' },
  ],
  toolsIntro: 'The software behind every cue, from sketch to implementation.',
  // Tool logos: 'color' shows the official colour logos, 'mono' shows them all in white.
  toolLogos: 'color' as 'color' | 'mono',
  // logo = white version (mono mode), logoColor = official colour version (color mode).
  // Tools without logoColor use their official one-colour logo in both modes.
  tools: [
    { name: 'Reaper', kind: 'DAW', logoColor: '/images/tools/reaper.png' },
    { name: 'Logic Pro', kind: 'DAW', logo: '/images/logic-pro-mono.png', logoColor: '/images/tools/logic-pro.png' },
    { name: 'FL Studio', kind: 'DAW', logoColor: '/images/tools/fl-studio.png' },
    { name: 'Ableton Live', kind: 'DAW' },
    { name: 'Wwise', kind: 'Middleware', brandColor: '#00549F' },
    { name: 'FMOD', kind: 'Middleware' },
    { name: 'Unreal Engine', kind: 'Game Engine' },
    { name: 'Unity', kind: 'Game Engine' },
    { name: 'Perforce', kind: 'Version Control', logoColor: '/images/tools/perforce.svg' },
    { name: 'Fork', kind: 'Git Client', logoColor: '/images/tools/fork.png' },
  ],
};

// `link`: a page on this site (e.g. '/work/shamanism') or an external URL (YouTube, Instagram…)
// Work page. Every box opens into a gallery you scroll through.
// image = cover shown on the box. gallery = the images inside (add as many as you like):
//   gallery: ['/images/kubika/1.jpg', { src: '/images/kubika/2.jpg', caption: 'Wwise session' }]
// While a gallery is empty, placeholder slots are shown. link = button inside the gallery (page or URL).
export const projects = [
  { title: 'Kubika', meta: 'Music & adaptive music system', years: '2024 – 2026', kind: 'Game', inProduction: false,
    description: '[A few lines about the game, the score and the adaptive music system you built.]', link: '', linkLabel: '', image: '', gallery: [] },
  { title: 'Paco Rabanne × Netflix', meta: 'Instagram trailer — music', years: 'Aug 2026', kind: 'Campaign', inProduction: false,
    description: '[A few lines about the campaign and the music.]', link: '', linkLabel: '', image: '', gallery: [] },
  { title: 'UNESCO — World Peace Day', meta: 'Instagram campaign — music', years: 'Sep 2026', kind: 'Campaign', inProduction: false,
    description: '[A few lines about the campaign and the music.]', link: '', linkLabel: '', image: '', gallery: [] },
  { title: 'Shamanism', meta: 'ISART Digital — original score', years: '2026', kind: 'Game', inProduction: true,
    description: 'A climb up a tower, guided by an eagle spirit, with a Tibetan-led adaptive score built in Wwise for Unreal.', link: '/work/shamanism', linkLabel: 'Project page', image: '', gallery: [] },
  { title: 'Seyni', meta: 'Short film by Ilham — score', years: '2026', kind: 'Film', inProduction: true,
    description: '[A few lines about the film and the score.]', link: '', linkLabel: '', image: '', gallery: [] },
  { title: 'Live performance', meta: 'Piano & keys', years: '', kind: 'Live', inProduction: false,
    description: '[A few lines about the performance.]', link: '', linkLabel: 'Watch on YouTube', image: '', gallery: [] },
  // The artists box: its gallery is built from the `artists` list below.
  { title: "Artists I've worked with", meta: 'Sessions, live shows & records', years: '', kind: 'Artists', inProduction: false,
    description: 'Keys, production and arrangement for artists in Paris and beyond.', link: '', linkLabel: '', image: '', gallery: 'artists' },
] as Project[];

export type GalleryItem = string | { src: string; caption?: string };
export type Project = {
  title: string; meta: string; years: string; kind: string; inProduction: boolean;
  description: string; link: string; linkLabel: string; image: string; gallery: GalleryItem[] | 'artists';
};

// Artists shown inside the "Artists I've worked with" box on the Work page (one image each).
// image: '/images/artists/name.jpg' (portrait works best, ~4:5). link: Instagram/Spotify/YouTube (optional).
export const artists = [
  { name: '[Artist name]', role: 'Keys & production', year: '2026', text: '[A line or two about what you did together: the record, the show, the session.]', image: '', link: '' },
  { name: '[Artist name]', role: 'Live keys', year: '2026', text: '[A line or two about what you did together.]', image: '', link: '' },
  { name: '[Artist name]', role: 'Piano session', year: '2025', text: '[A line or two about what you did together.]', image: '', link: '' },
  { name: '[Artist name]', role: 'Arrangement', year: '2025', text: '[A line or two about what you did together.]', image: '', link: '' },
  { name: '[Artist name]', role: 'Production', year: '2024', text: '[A line or two about what you did together.]', image: '', link: '' },
  { name: '[Artist name]', role: 'Rhodes & synths', year: '2024', text: '[A line or two about what you did together.]', image: '', link: '' },
];

export const resources = {
  intro: 'Tools and sounds I make for other musicians',
  items: [
    { title: 'Open-source VST', text: 'A granular, rhythmic effect I’m building — free and open source. Coming soon.', link: '' },
    { title: 'Instagram — @orfeo.akari', text: 'Audio production, sound design redesigns and plugins.', link: 'https://www.instagram.com/orfeo.akari' },
    { title: 'Instagram — @orfeoaragon', text: 'Piano, chords and voicings.', link: 'https://www.instagram.com/orfeoaragon' },
    { title: 'Sound Packs', text: 'Coming soon.', link: '' },
    { title: 'Piano Library', text: 'Coming soon — a sampled upright piano for Kontakt.', link: '' },
  ],
  // Add videos here when they're ready; the section hides while the list is empty.
  videos: [] as { title: string; youtube: string; image?: string }[],
};

export const contact = {
  intro: 'Got a campaign, a game or a film that needs music or sound? Tell me about it.',
  projectTypes: ['Campaign / ad', 'Game', 'Film', 'Live / artist', 'Sound design'],
};

/* ── Interactive FMOD demo (Home page) ─────────────────────────────
   Files live in public/fmod/:
     fmodstudio.js + fmodstudio.wasm  ← from the FMOD Engine HTML5 package
                                         (api/studio/lib/wasm/), same 2.03.x
                                         version as the FMOD Studio that built the banks
     banks/…                          ← built banks (strings bank first)
   Every event in the banks shows up in the picker; `events` sets which one
   is selected first. Parameters are read from the bank automatically. */
export const fmod = {
  enabled: false,
  title: 'Kubika — adaptive music, live in FMOD',
  text: 'This is the real FMOD Studio runtime running in your browser with the game’s own banks. Pick an event, press play and move the parameters.',
  lib: '/fmod/fmodstudio.js',
  bankPath: '/fmod/banks/',
  banks: ['Master.strings.bank', 'Master.bank'],
  events: ['event:/MUSIQUE/Musique'],
  /** only list events whose path starts with one of these (empty = all) */
  include: [] as string[],
};
