## Javier Ron — Personal Website

A single long-page personal site with a terminal/hacker aesthetic: monospace typography, ASCII dividers, dark background with a phosphor-green accent, blinking cursor in the hero, and a sticky top nav of section anchors.

### Look & feel

- **Font**: monospace throughout (JetBrains Mono / IBM Plex Mono).
- **Palette**: near-black background (`#0b0f0a`), soft off-white body text, phosphor green (`#7CFFB2`) accent for headings, links, and the cursor. Muted gray for secondary metadata (dates, locations).
- **Chrome**: subtle window-style top bar with `● ● ●` dots and a `~/javier-ron $` prompt label. ASCII rule lines (`────────────`) separate sections. Section headings rendered like `## about` / `## experience`.
- **Hero**: large name, role line with a blinking block cursor, short tagline. Quick-jump links to each section directly under the tagline.
- **Sticky nav**: thin top bar with `[about] [experience] [education] [publications] [awards] [skills] [contact]` — current section highlighted.
- **Hover/focus**: links underline + invert (green bg, black text), keyboard-friendly.
- **Responsive**: same single column on mobile; nav collapses to a horizontal scrollable row.

### Page structure (one route, smooth-scroll anchors)

```text
┌────────────────────────────────────────────┐
│  ● ● ●   ~/javier-ron $                    │  ← sticky top bar + nav
├────────────────────────────────────────────┤
│  > javier ron_                             │  ← hero (name + cursor)
│  systems programmer · researcher · ...     │
│  [about] [exp] [pubs] [awards] [contact]   │
├────────────────────────────────────────────┤
│  ## about                                  │
│  ## experience                             │
│  ## education                              │
│  ## publications                           │
│    > first-authored                        │
│    > collaborations                        │
│    > thesis supervision                    │
│  ## awards & honors                        │
│  ## skills                                 │
│  ## languages                              │
│  ## contact                                │
└────────────────────────────────────────────┘
```

### Section content

- **About** — short bio drawn from your three-line summary (systems programmer, researcher on AI-on-code / verifiable software supply chains / systems reliability, game programmer).
- **Experience** — chronological list (Meta → Firstset → KTH RA → Criptext → GSoC/CROSS → Freaky Creations). Each entry: role, org · location · dates, 1–2 line summary, tech tags rendered as `[Java] [Thrift] [React]`.
- **Education** — KTH PhD, KTH MSc, ESPOL, with supervisor / thesis notes.
- **Publications** — three subsections (First-authored, Collaborations, Thesis supervision). Each item: title, venue · year (italic muted), one-line description, tech tags where provided.
- **Awards & honors** — KTH scholarships and the two ETH hackathon 1st-place wins.
- **Skills** — languages list as inline chips.
- **Languages** — English / Spanish / Swedish with proficiency.
- **Contact** — email (obfuscated as `javierron90 [at] gmail [dot] com` with a "copy" button) plus icon links: GitHub, Twitter/X, **Google Scholar**, **ORCID**, **LinkedIn** (URLs to be filled in — I'll leave clear `TODO` placeholders for the three new ones so you can paste in the exact links).

### SEO / metadata

- Title: `Javier Ron — Systems Programmer & Researcher`
- Meta description from the about blurb.
- Open Graph + Twitter card tags with the same text.
- A favicon using a green `>` glyph on dark background.

### Technical notes

- Single TanStack Start route at `src/routes/index.tsx` (replaces placeholder).
- Smooth-scroll anchors via `scrollIntoView({ behavior: 'smooth' })`; sticky nav highlights active section using `IntersectionObserver`.
- Theme tokens added to `src/styles.css` (`--background`, `--foreground`, `--accent`) so the terminal palette is the default — no theme toggle.
- Monospace font loaded from Google Fonts via a `<link>` in `__root.tsx` head.
- Content lives as typed arrays inside the route file (experience, publications, etc.) so it's easy to edit later.
- No backend, no database, no Lovable Cloud — pure static page.

### Open items I'll mark as TODO in the code

- Google Scholar URL
- ORCID URL
- LinkedIn URL
- Exact publication years currently listed as "Year" for N-ETH, Galapagos, VCD
