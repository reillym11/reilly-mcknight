# Personal Portfolio — Mono-Editorial (Dario-style reference)

Single-page personal site closely modeled on the attached reference. Light cream/white background, monospace body throughout, large thin display font for the name, two-column desktop layout. All content is realistic placeholders you can edit in one data file later.

## Layout (matches reference exactly)

```
┌──────────────────────────────────────────────────────────┐
│  [avatar] Y.N.I                          X  LinkedIn  GH │
├──────────────────────┬───────────────────────────────────┤
│ Hi! I'm              │  01                                │
│                      │                                    │
│ Your Name            │  Work                              │
│ (large thin display) │  [mono paragraphs w/ underlined    │
│                      │   links + ↗ arrows]                │
│ [portrait photo      │  ──────────────────────────────    │
│  placeholder]        │  02                                │
│                      │  Projects                          │
│ Short bio paragraph  │  [paragraph]                       │
│ in mono...           │  All projects ›                    │
│                      │  ──────────────────────────────    │
│ you@stanford.edu     │  03 Adventures ...                 │
│                      │  04 Writing ...                    │
│                      │  05 Favorites ...                  │
└──────────────────────┴───────────────────────────────────┘
```

On mobile: header collapses, left column stacks above right column.

## Visual system

- **Background**: warm off-white `oklch(0.985 0.005 90)` (matches the cream tone in the screenshot)
- **Foreground**: near-black `oklch(0.18 0 0)`
- **Borders/dividers**: light gray `oklch(0.88 0 0)`, 1px, used between sections AND as the vertical column split
- **Typography**:
  - Body / labels / numbers: **JetBrains Mono** (loaded via `<link>` in `__root.tsx`)
  - Display name only: **Cormorant** or **Italiana** (thin, elegant) — large, ~5–7rem
- **Links**: underlined, with a small `↗` glyph for external links
- **No motion, no gradients, no shadows** — restraint is the aesthetic

## Sections (placeholder content using the copy you provided)

1. **Work** — three mono paragraphs: current role, past role, investing
2. **Projects** — short intro + "All projects ›" link
3. **Adventures** — short intro + "All adventures ›" link
4. **Writing** — short intro + "All writing ›" link
5. **Favorites** — short intro + "All favorites ›" link

The "All X ›" links route to placeholder sub-pages (`/projects`, `/adventures`, `/writing`, `/favorites`) each containing a simple mono list with placeholder rows ready for you to fill in.

## Files

```
src/routes/
  __root.tsx         (font links + meta defaults)
  index.tsx          (entire homepage)
  projects.tsx       (placeholder list)
  adventures.tsx     (placeholder list)
  writing.tsx        (placeholder list)
  favorites.tsx      (placeholder list)
src/components/
  site-header.tsx    (initials + social icons)
  section.tsx        (numbered section wrapper: "01" + title + body + divider)
  ext-link.tsx       (underlined link with ↗)
src/data/
  profile.ts         (name, initials, email, social URLs, bio, photo)
  sections.ts        (the 5 sections' copy — single edit point)
```

Photo uses a placeholder portrait (generated abstract or initials block) until you provide a real one.

## Technical details

- Update `src/styles.css`: new oklch tokens, `@theme inline` mappings, register JetBrains Mono + display serif as `--font-mono` / `--font-display`
- Each route defines its own `head()` with unique title/description; root sets sitewide defaults and Geist/JetBrains/Cormorant font `<link>` tags
- Lucide icons for X / LinkedIn / GitHub in the header
- No backend, no Cloud, no extra packages beyond what's already installed

## Out of scope

- Real photo (placeholder for now)
- Sub-page real content (placeholder rows)
- Dark mode (reference is light-only; can add later)

After approval I'll build it; swapping in your real resume/LinkedIn content later is editing `src/data/profile.ts` + `src/data/sections.ts`.
