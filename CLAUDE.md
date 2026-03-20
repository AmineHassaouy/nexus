# NEXUS Tech Agency Website

Marketing and portfolio website for NEXUS Tech Agency — a software development studio specializing in web, mobile, and AI solutions.

## Tech Stack

- **HTML/CSS/JS** — no framework, no build step
- **Tailwind CSS** — loaded via CDN; custom config defined at `script.js:1-22`
- **Google Fonts** — Space Grotesk (display) + DM Sans (body), loaded in `index.html:11-13`
- **Vanilla JavaScript** — all interactivity in `script.js`

## Project Structure

```
index.html      Single-page app with all sections (home, about, services, solutions, portfolio, contact)
styles.css      Custom CSS: animations, utilities, component styles, glassmorphism
script.js       Tailwind config + all JS (particles, scroll, observers, nav, counters, modals)
assets/         Logos and images used in marquee and portfolio sections
```

## Key Directories

| Path | Purpose |
|------|---------|
| `assets/images/` | Portfolio project screenshots and thumbnails |
| `.claude/docs/` | Additional context for Claude — see below |

## Running Locally

No build step required. Open `index.html` directly in a browser, or serve with any static file server:

```bash
npx serve .
# or
python -m http.server
```

## Sections in index.html

| Section ID | Line range | Content |
|---|---|---|
| `#home` | ~60–108 | Hero, stats counters |
| Partners marquee | ~110–136 | Client logo scroll |
| About | ~138–218 | Values, code mock |
| `#services` | ~220+ | Service cards |
| `#solutions` | later | Case studies |
| `#portfolio` | later | Project grid |
| `#contact` | later | Contact form |

## Additional Documentation

| File | When to consult |
|------|----------------|
| `.claude/docs/architectural_patterns.md` | Before adding new sections, animations, components, or JS behavior |
