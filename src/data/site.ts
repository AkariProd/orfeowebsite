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
    description: "Kubika is a cozy, minimalist 3D puzzle game by KubiCorp, the independent studio I co-founded. You flip gravity to guide little cubes through dreamlike worlds, from the rolling hills of the Vale to the misty nights of the Bayou.\n\nI composed the soundtrack and designed its adaptive music system. Instead of looping tracks, the music grows with the player's progress through each world. The video shows it across the Vale: no music at first, then a flute and a few sparse piano notes, then guitar and harp, fuller layers as the puzzles get harder, and finally fewer percussive elements and a violin to carry the player to the end of the world.\n\nIn the box after the video, you can play with the Bayou's music yourself: it runs on the real FMOD engine, right in your browser.",
    link: 'https://store.steampowered.com/app/4384150/KUBIKA/', linkLabel: 'Wishlist on Steam',
    image: '/images/work/kubika/keyart.jpg', imagePosition: 'left center',
    lineupTitle: 'Team',
    lineup: [
      { name: 'Orfeo Walcott', role: 'Music composer' },
      { name: 'Arthur Kowskii Croquebois', role: 'Technical sound designer' },
      { name: 'Léonard Gombert', role: 'Project lead' },
      { name: 'François Iakouchev', role: 'Creative director' },
      { name: 'Kilian Allaire', role: 'Studio head' },
    ],
    gallery: [
      { video: '/videos/kubika-adaptive-music.mp4', poster: '/images/work/kubika/keyart.jpg', caption: 'Adaptive music across the Vale, levels 1 to 20' },
      { fmod: true, caption: 'Press start, then play, and move Scene and Intensity' },
      '/images/work/kubika/screen-1.jpg',
      '/images/work/kubika/screen-2.jpg',
      '/images/work/kubika/screen-3.jpg',
      '/images/work/kubika/screen-4.jpg',
      { src: '/images/work/kubika/screen-5.jpg', caption: 'World map, the Vale' },
      '/images/work/kubika/screen-6.jpg',
    ] },
  { title: 'Netflix × Rabanne — Nouvelle École', meta: 'Music & sound design, season launch reel', years: 'Aug 2026', kind: 'Campaign', inProduction: false,
    description: "A reel launching the new season of Nouvelle École, Netflix France's rap competition, made with Rabanne. It invites rap fans to take part in « Sur qui tu poses ton million », with Kid Lonni and Tsuku as hosts.\n\nIl-Ham Mohamed Said, a director friend, was asked to make it and called me at the last minute: I had one hour to make the audio so the production could see a first version. Twenty-four hours later I made a second version, again in about an hour, and that's the one you hear. The music and sound design are fully co-produced with Milan Gombert.\n\nIt went out on Kid Lonni's and Nouvelle École's Instagram accounts in August 2026.",
    link: 'https://www.instagram.com/reel/Db3f8zKNzZz/', linkLabel: 'Watch on Instagram',
    image: '/images/work/netflix/logo-card.jpg',
    lineupTitle: 'Credits',
    lineup: [
      { name: 'Orfeo Walcott', role: 'Music & sound design' },
      { name: 'Milan Gombert', role: 'Music & sound design' },
      { name: 'Il-Ham Mohamed Said', role: 'Direction' },
    ],
    gallery: [
      { instagram: 'Db3f8zKNzZz', caption: 'The reel' },
      { src: '/images/work/netflix/still-1.jpg', ratio: 9 / 16 },
      { src: '/images/work/netflix/still-2.jpg', ratio: 9 / 16 },
      { src: '/images/work/netflix/still-3.jpg', ratio: 9 / 16 },
      { src: '/images/work/netflix/still-4.jpg', ratio: 9 / 16 },
      { src: '/images/work/netflix/still-5.jpg', ratio: 9 / 16 },
    ] },
  { title: 'UNESCO — Les voix de la paix', meta: 'Music, International Day of Peace film', years: 'Sep 2026', kind: 'Campaign', inProduction: false,
    description: "Les voix de la paix is a short film for the International Day of Peace, made for La France à l'UNESCO. Filmed inside the Maison de l'UNESCO in Paris, it carries the poetry of Aimé Césaire and Maryse Condé, with one idea at its heart: peace isn't only the absence of conflict, it is built every day through education, culture and dialogue.\n\nAfter Nouvelle École, Il-Ham Mohamed Said called me again, and I delivered the music in a day. He directed the film with Inès Casimirius-Ouadah.\n\nIt was released on 21 September 2026, the International Day of Peace, on La France à l'UNESCO's Instagram.",
    link: 'https://www.instagram.com/p/DdjitnTtA6Y/', linkLabel: 'Watch on Instagram',
    image: '/images/work/unesco/cover.jpg',
    lineupTitle: 'Credits',
    lineup: [
      { name: 'Orfeo Walcott', role: 'Music' },
      { name: 'Il-Ham Mohamed Said', role: 'Direction' },
      { name: 'Inès Casimirius-Ouadah', role: 'Direction' },
    ],
    gallery: [
      { instagram: 'DdjitnTtA6Y', ratio: 4 / 3, caption: 'The film' },
      '/images/work/unesco/still-1.jpg',
      '/images/work/unesco/still-2.jpg',
      '/images/work/unesco/still-3.jpg',
      '/images/work/unesco/still-4.jpg',
      '/images/work/unesco/still-5.jpg',
      '/images/work/unesco/still-6.jpg',
    ] },
  { title: 'Shamanism', meta: 'ISART Digital — original score', years: '2026', kind: 'Game', inProduction: true,
    description: 'A climb up a tower, guided by an eagle spirit, with a Tibetan-led adaptive score built in Wwise for Unreal.', link: '/work/shamanism', linkLabel: 'Project page', image: '', gallery: [] },
  { title: 'Seyni', meta: 'Short film by Ilham — score', years: '2026', kind: 'Film', inProduction: true,
    description: '[A few lines about the film and the score.]', link: '', linkLabel: '', image: '', gallery: [] },
  { title: 'Choka — Blondel Live Session 01', meta: 'Live performance, co-arrangement & composition', years: '2026', kind: 'Live', inProduction: false,
    description: "Blondel Live Session 01 is an acoustic live session with Choka, an artist I've worked alongside for years. Over several months, we reshaped a selection of his songs from the past five years into a 20-minute set about grief and letting go of the past, the idea behind its title, Il fallait que je fasse mon deuil.\n\nI co-arranged the live versions of every song, composed two of the pieces, Ça va and J'irai mieux tout seul, and played piano on the session. Every arrangement was built around Choka's voice and words, so the songs could breathe in a stripped-back setting with piano, cello and bass.\n\nIt's one of the projects I'm proudest of, and the start of something bigger: Choka's next project arrives in early 2027. The session is out on all platforms.",
    link: 'https://youtu.be/XSjbgxFl47Y', linkLabel: 'Watch on YouTube',
    image: 'https://i.ytimg.com/vi/XSjbgxFl47Y/maxresdefault.jpg',
    lineup: [
      { name: 'Choka (Brian Chapin)', role: 'Vocals' },
      { name: 'Orfeo Walcott', role: 'Piano' },
      { name: 'Francois Dupré', role: 'Cello' },
      { name: 'Milan Gombert', role: 'Bass' },
      { name: 'Félix Famy', role: 'Piano', note: "on L'odeur des anges" },
    ],
    gallery: [
      { youtube: 'XSjbgxFl47Y', caption: 'Full performance' },
      { src: '/images/work/choka/stage.jpg', caption: 'Photo: Flore Royer' },
      { src: '/images/work/choka/live.jpg', ratio: 1200 / 1800, caption: 'Photo: Flore Royer' },
      { src: '/images/work/choka/band.jpg', ratio: 1093 / 1800, caption: 'Photo: Flore Royer' },
      { src: '/images/work/choka/session.jpg', ratio: 1, caption: 'Photo: Il-Ham Mohamed Said' },
    ] },
  // The artists box: its gallery is built from the `artists` list below.
  { title: "Artists I've worked with", meta: 'Sessions, live shows & records', years: '', kind: 'Artists', inProduction: false,
    description: 'Keys, production and arrangement for artists in Paris and beyond.', link: '', linkLabel: '', image: '', gallery: 'artists' },
] as Project[];

/** A gallery entry: an image path, an image with a caption, or a YouTube video (id from the youtu.be link). */
export type GalleryItem = string | { src: string; caption?: string; ratio?: number } | { youtube: string; caption?: string } | { video: string; poster?: string; caption?: string } | { instagram: string; ratio?: number; caption?: string } | { fmod: true; caption?: string };
// fmod = the interactive FMOD player (settings in `fmod` below)
// instagram = the post id from an instagram.com/reel/ID or /p/ID link; ratio = shape of Instagram's video box (reels 4/5, landscape posts 4/3)
// video = a video file in public/ (e.g. '/videos/clip.mp4'), poster = image shown before it plays
// ratio = width / height of the photo, so portrait or square photos aren't cropped (leave it out for landscape)
export type Project = {
  title: string; meta: string; years: string; kind: string; inProduction: boolean;
  description: string; link: string; linkLabel: string; image: string; gallery: GalleryItem[] | 'artists';
  /** optional musicians / credits shown under the description */
  lineup?: { name: string; role: string; note?: string }[];  // note is shown in italics
  lineupTitle?: string;   // heading above the lineup (default 'Lineup')
  imagePosition?: string; // which part of the key art to keep when the card crops it, e.g. 'left center'
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
  enabled: true,
  /** also show it on the Home page (it always lives in the Kubika gallery) */
  showOnHome: false,
  title: 'Kubika — The Bayou, adaptive music live in FMOD',
  text: 'This is the real FMOD Studio runtime running in your browser with the game’s own banks. Press play and move the parameters.',
  lib: '/fmod/fmodstudio.js',
  bankPath: '/fmod/banks/',
  banks: ['Master.strings.bank', 'Master.bank'],
  events: ['event:/Music_TheBayou'],
  /** only list events whose path starts with one of these (empty = all) */
  include: [] as string[],
  /** parameters not shown as sliders (they keep their default value) */
  hide: ['MusicStartMode'] as string[],
};
