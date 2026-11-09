# Lyniezel Mae R. Ricardel — Portfolio

A React recreation of the original static GitHub Pages portfolio. The layout,
colors, typography, responsive breakpoints, and page content are preserved.

## Tech stack

- React 19
- React Router (BrowserRouter)
- Vite
- Plain CSS (`src/styles/global.css`)

## Run locally

```bash
npm install
npm run dev
```

Open the URL printed by Vite (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

The production files are written to `dist/`. The build also creates
`dist/404.html`, which is required for GitHub Pages to resolve deep links such
as `/about` and `/work`.

Preview the production build with:

```bash
npm run preview
```

## Deploy to GitHub Pages

This repository is a user site (`lyniezelricardel1.github.io`), so Vite uses
`base: '/'`. If you ever move the site to a project repository such as
`username/project-name`, change `base` in `vite.config.js` to
`'/project-name/'`.

### Option 1 — `gh-pages` branch (recommended)

```bash
npm run build
npx gh-pages -d dist --dotfiles
```

The `--dotfiles` flag keeps `.nojekyll` in the published branch.

Then open the repository settings and choose:

**Pages → Build and deployment → Source: Deploy from a branch → `gh-pages` / root**

### Option 2 — publish manually

1. Run `npm run build`.
2. Create or switch to a `gh-pages` branch.
3. Copy the **contents** of `dist/` into the branch root (not the `dist`
   folder itself).
4. Commit and push the branch.
5. Set **Pages → Source** to the `gh-pages` branch.

Keep `404.html`, `index.html`, the `assets/` folder, `favicon.svg`, and
`.nojekyll` together in the published output.

## Project structure

```text
src/
  assets/profile.jpg
  components/          Shared navbar, cards, form, page header, etc.
  data/                Navigation, skills, projects, and contact data
  pages/               Home, About, Skills, Work, Contact, NotFound
  styles/global.css    Shared design system
  App.jsx              Route definitions
  main.jsx             App entry point
```

## Work filters

The filter pills on the Work page are functional. Selecting a category shows
only matching projects, and dropdown links such as `/work#web-design` reset the
filter so the requested project is visible.

## Original static version

The pre-React version is preserved locally on the `static-site-backup` branch
and the `static-site-v1` tag.
