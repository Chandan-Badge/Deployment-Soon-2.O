# Coming Soon &mdash; New Project • Chandan Chaudhary

A retro-arcade "coming soon" landing page for [chandanchaudhary.in](https://www.chandanchaudhary.in) — neon CRT styling, a pixel-art invader march, a fake deployment progress bar, and a scrolling marquee, all rendered client-side with React and Tailwind.

It acts as a placeholder while the real site is being built, and points visitors to the other live platforms in the meantime.

## Stack

| | |
|---|---|
| Framework | React 19 |
| Build tool | Vite 8 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Icons | `lucide-react` + local brand SVGs |
| Font | Press Start 2P (Google Fonts) |
| Linting | ESLint 10 (flat config) |

## Getting started

```bash
npm install
npm run dev
```

The dev server prints a local URL (Vite defaults to `http://localhost:5173`).

### Scripts

| Command | What it does |
|---|---|
| `npm run dev` | Start the Vite dev server with HMR |
| `npm run build` | Produce a production build in `dist/` |
| `npm run preview` | Serve the built `dist/` locally |
| `npm run lint` | Run ESLint across the project |

## Project structure

```
src/
├── App.jsx                  # Page shell — starfield, perspective grid, vignette, scanlines
├── main.jsx                 # React root
├── index.css                # Tailwind import, @theme tokens, keyframes
└── components/
    ├── Header.jsx           # C2Codebase logo + "Book Consultation" CTA
    ├── ComingSoon.jsx       # Hero, invaders, loading bar, platform links, socials
    ├── Footer.jsx           # Infinite marquee ticker + copyright
    └── BrandIcons.jsx       # GitHub / LinkedIn / Instagram / YouTube SVGs
public/                      # favicon + static icons
```

## How the pieces work

**Background atmosphere** — [App.jsx](src/App.jsx) generates 90 randomly-placed stars once via `useMemo`, each with its own twinkle duration and delay passed as CSS custom properties. Layered over that: a perspective-transformed magenta grid that scrolls upward, a radial vignette, and a repeating scanline gradient.

**Invaders** — [ComingSoon.jsx](src/components/ComingSoon.jsx) draws two 11×8 pixel grids as nested divs and flips between them on a 500ms interval, giving the classic two-frame march.

**Loading bar** — a 20-segment meter that climbs by a random 1–4% every 180ms and deliberately parks at 95%, with the status label (`BOOTING SERVERS...` → `FINAL TOUCH: PENDING...`) derived from the current value.

**Marquee** — [Footer.jsx](src/components/Footer.jsx) measures one copy of the ticker with a `ResizeObserver`, renders just enough copies to cover the viewport plus one spare, and advances the track with `requestAnimationFrame` using real elapsed time (so speed stays constant across refresh rates). It pauses on hover/touch and does not run at all under `prefers-reduced-motion`.

Motion-sensitive users are respected throughout — every animated element carries `motion-reduce:animate-none`.

## Customising the content

Editable text and links live in a `CONFIG` object at the top of [ComingSoon.jsx](src/components/ComingSoon.jsx) and [Footer.jsx](src/components/Footer.jsx) — brand name, tagline, headline copy, social links, and the ticker items. The four platform buttons (Portfolio, Client Portal, C2Codebase, Stack Gallery) are inline in `ComingSoon.jsx`.

## Theme tokens

The arcade palette and animations are defined as Tailwind 4 `@theme` tokens in [index.css](src/index.css), so they are available as ordinary utilities:

```
arcade-cyan   #00f0ff      arcade-green  #39ff14
arcade-pink   #ff2bd6      arcade-ice    #9be7ff
arcade-yellow #ffe600      arcade-fog    #e8f6ff
arcade-amber  #ffde00      arcade-slate  #8aa3c7
arcade-rose   #ff9bea      arcade-void   #05010f
```

Animations: `animate-twinkle`, `animate-gridmove`, `animate-floaty`, `animate-neon-pulse`, `animate-blink`, `animate-blink-slow`, `animate-blink-coin`.

## Deployment

`npm run build` emits a fully static bundle to `dist/` — deployable as-is to Vercel, Netlify, GitHub Pages, or any static host. No environment variables or backend required.

## Links

- Portfolio — [chandanchaudhary.in](https://www.chandanchaudhary.in)
- Client Portal — [clientportal.chandanchaudhary.in](https://clientportal.chandanchaudhary.in)
- C2Codebase — [c2codebase.chandanchaudhary.in](https://c2codebase.chandanchaudhary.in)
- Stack Gallery — [stackgallery.chandanchaudhary.in](https://stackgallery.chandanchaudhary.in)
- YouTube — [@c2explains](https://www.youtube.com/@c2explains)
