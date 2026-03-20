# Architectural Patterns

## 1. Single-Page Layout with Anchor Navigation

All content lives in one `index.html` file as stacked `<section>` elements with `id` attributes. Navigation links use `href="#section-id"`. Smooth scrolling is handled by JS (`script.js:132-144`) overriding native behavior.

**Convention:** New content areas go as additional `<section id="...">` blocks inside `index.html`. Do not create separate HTML pages.

---

## 2. Reveal-on-Scroll Animation

Elements that should animate in on scroll get `class="reveal"` (and optionally `reveal-delay-1` through `reveal-delay-4` for staggered timing). An IntersectionObserver in `script.js:61-74` adds `active` to trigger the CSS transition defined in `styles.css:86-96`.

**Usage pattern in HTML:**
```html
<div class="reveal">first element</div>
<div class="reveal reveal-delay-1">staggered second</div>
<div class="reveal reveal-delay-2">staggered third</div>
```

Delays are 0.1s increments (`styles.css:93-96`). Use up to `reveal-delay-4`.

---

## 3. Custom Tailwind Color Tokens

Colors are defined as custom Tailwind tokens in `script.js:1-22` (not in a config file). Use these tokens everywhere instead of raw hex values:

| Token | Value | Usage |
|---|---|---|
| `bg` | `#0B0F19` | Page background |
| `bg-secondary` | `#111827` | Section alt background |
| `card` | `#151C2C` | Card backgrounds |
| `fg` | `#F8FAFC` | Primary text |
| `muted` | `#64748B` | Secondary text |
| `accent` | `#00D4FF` | Cyan highlight color |
| `accent-dim` | `#0891B2` | Darker cyan variant |
| `border` | `#1E293B` | Dividers and borders |

Opacity variants work normally: `bg-accent/10`, `border-border/50`, etc.

---

## 4. Typography System

Two font families, both loaded from Google Fonts (`index.html:11-13`):

- **Display** — Space Grotesk, applied via `font-display` or `.font-display` class — used for headings, logo, numbers
- **Body** — DM Sans, set as default on `<body>` (`styles.css:19`) — used for paragraphs, nav links

**Convention:** All `<h1>`–`<h3>` get `font-display`. Body copy uses the default font.

---

## 5. Glass Morphism Utility

The `.glass` class (`styles.css:185-190`) provides a frosted-glass effect:
- Semi-transparent dark background
- `backdrop-filter: blur(20px)`
- Subtle bottom border

Used on the sticky navbar when scrolled (`script.js:146-154`) and on the mobile menu (`index.html:48`).

---

## 6. Button System

Two reusable button classes defined in `styles.css:98-183`:

- `.btn-primary` — gradient fill (accent → accent-dim), ripple on hover, used for primary CTAs
- `.btn-secondary` — transparent with accent border, shimmer on hover, used for secondary actions

Both have `::before` (hover overlay) and `::after` (ripple/shimmer) pseudo-elements. Wrap CTA text in `<span>` inside `.btn-primary` to keep it above the `z-index` stack (`styles.css:142`).

---

## 7. Glow Effects

Two CSS utility classes for the cyan glow aesthetic:

- `.glow-text` (`styles.css:49`) — text-shadow glow, applied to accent-colored headline text
- `.glow-border` (`styles.css:51-66`) — pseudo-element border glow that activates on hover, used on cards

---

## 8. Animated Particle Background

A continuous particle system (`script.js:43-58`) creates floating `.particle` elements inside `#particles` (`index.html:21`) and removes them after 6s. Particle appearance (size, speed, position) is randomized. The container is `fixed`, `pointer-events-none`, `z-0`.

---

## 9. Counter Animation Pattern

Stat numbers use `class="counter" data-target="<number>"` (`index.html:91`). An IntersectionObserver (`script.js:110-120`) triggers `animateCounter()` once when the element scrolls into view, then stops observing. This ensures the animation only plays once.

---

## 10. Responsive Layout Strategy

- Mobile-first using Tailwind breakpoints: `sm:`, `md:`, `lg:`
- Max content width: `max-w-7xl mx-auto` container with `px-4 sm:px-6 lg:px-8` gutters
- Mobile navigation: separate `#mobile-menu` div toggled by `#mobile-menu-btn`, hidden on `md:` and above
- Grids collapse: `grid md:grid-cols-2` or `grid lg:grid-cols-2` patterns throughout

---

## 11. Marquee / Infinite Scroll

The partners strip uses a duplicated list inside `.marquee-track` (`styles.css:73-77`, `index.html:116-134`). The track animates `translateX(-50%)` over 30s, creating a seamless loop because the second half is an exact copy of the first. Animation pauses on hover.
