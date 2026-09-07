# Ek chhoti si baat

A private, scroll-driven digital letter — built as a single-page interactive
editorial experience. Warm ivory paper, deep Alta red, one continuous story.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

To make a production build: `npm run build` (output in `dist/`, deployable
anywhere — Vercel, Netlify, any static host).

## Make it yours (2 steps)

1. **Photo** — copy your photograph to `public/my-photo.jpg`
   (portrait orientation, ~3:4, at least 900px wide looks best).
   Until the file exists, an elegant placeholder holds its place.

2. **Details** — edit [`src/config/invitation.js`](src/config/invitation.js):
   name, day, date, time, room, book title, poem title, signature.
   Nothing else needs touching.

## What's inside

- **React + Vite** — instant dev server, small production bundle
- **GSAP ScrollTrigger** — scroll-linked motion: the ghost "Rajdhani Express"
  type, the light streaks, the red signal that warms from ash to Alta red as
  she scrolls, the brush stroke that draws itself in the Alta section
- **Lenis** — soft momentum scrolling (disabled automatically when the
  visitor prefers reduced motion)
- **Web Audio** — a small generative soundscape (distant rails → silence →
  a warm pad and occasional chime), synthesised in the browser so it is
  royalty-free by construction. Off by default; the little circle at the
  bottom-right toggles it. The story never depends on sound.

## Design notes

- The story is one continuous page. Nothing autoplays, nothing forces
  progression, nothing disappears when she scrolls back.
- Palette: ivory `#FAF8F3`, antique paper `#F3EEE5`, deep Alta red `#8F1D2C`,
  muted gold `#B49A68`, warm charcoal `#2B2927`.
- Tested at 360×800, 390×844, 412×915 and desktop; no horizontal scroll.
- `prefers-reduced-motion` is fully respected: every reveal appears
  statically and the pinned signal sequence becomes a normal section.
# Shiuli
