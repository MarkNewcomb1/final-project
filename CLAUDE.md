# CLAUDE.md — final-project-2019

## Overview

A vinyl/physical-media collection tracker built as a React SPA. Users search the [Discogs](https://www.discogs.com/developers/) database for albums and maintain an in-memory collection of records they own. The goal: a mobile reference to avoid duplicate purchases at record stores.

---

## Tech Stack

| Layer | Technology | Version |
|---|---|---|
| UI framework | React | `^16.10.2` |
| DOM renderer | react-dom | `^16.10.2` |
| Client-side routing | react-router-dom | `^5.1.2` |
| Build toolchain | Create React App (react-scripts) | `3.2.0` |
| Package managers | npm + yarn (both lock files present) | — |
| External API | Discogs REST API | v2 |
| Styling | Plain CSS (no preprocessor, no CSS-in-JS) | — |

Node/browser targets are set via the `browserslist` field in `package.json`. No TypeScript, no state management library, no component library.

---

## Exact Dependency Versions (package.json)

```json
"dependencies": {
  "react": "^16.10.2",
  "react-dom": "^16.10.2",
  "react-router-dom": "^5.1.2",
  "react-scripts": "3.2.0"
}
```

No devDependencies are declared (CRA bundles everything internally).

---

## File Structure

```
final-project/
├── public/
│   ├── index.html          # HTML shell; title is still CRA default "React App"
│   ├── manifest.json       # PWA manifest (CRA boilerplate, not customized)
│   ├── robots.txt
│   ├── favicon.ico
│   ├── logo192.png
│   ├── logo512.png
│   └── sample-data.json    # Discogs API response snapshot for Eagles query
│                           # (used for local dev instead of live API)
├── src/
│   ├── index.js            # Entry point — ReactDOM.render() into #root
│   ├── index.css           # CRA boilerplate body/code font stacks
│   ├── App.js              # Root component: state, API call, routing
│   ├── App.css             # Media queries + layout overrides
│   ├── App.test.js         # Single smoke test (renders without crashing)
│   ├── base.css            # Custom base reset: nav, flex-container, figure
│   ├── background.jpg      # Full-page background image (referenced in base.css)
│   ├── logo.svg            # React logo used in Nav
│   ├── serviceWorker.js    # CRA-generated SW utility (never registered)
│   ├── secret.js           # !! GITIGNORED — must be created locally (see below)
│   └── components/
│       ├── Nav.js          # Top nav bar with router Links
│       ├── Search.js       # Controlled input form; calls hitAPI on submit
│       ├── MusicApp.js     # Search results page: renders Search + Album list
│       ├── Album.js        # Single album card with add/remove toggle logic
│       └── Collection.js   # Collection page: renders Album list from state
├── package.json
├── package-lock.json
├── yarn.lock
├── .gitignore
└── readme.md
```

---

## Running Locally

### 1. Create `src/secret.js`

This file is gitignored. Without it the app will **fail to compile**. Create it manually:

```js
const secret = {
  APIKey: 'YOUR_DISCOGS_PERSONAL_ACCESS_TOKEN'
}
export default secret
```

Get a token at discogs.com → Settings → Developers → Generate new token.

To run without a real token during development, comment out the live fetch in `App.js` and uncomment the local sample:

```js
// fetch(`https://api.discogs.com/database/search?q=${searchTerm}&token=${secret.APIKey}`)
fetch('./sample-data.json')
```

### 2. Install and start

```bash
npm install   # or: yarn
npm start     # or: yarn start
```

---

## Known Issues

### Blocking

- **`src/secret.js` is missing from the repo.** Any fresh clone will fail to compile immediately. The API key strategy (a gitignored JS file) is non-standard and fragile — see modernization notes.

### Logic Bugs

- **Album toggle is broken in Collection view** (`Album.js:10-18`). `Album` is rendered in two contexts: the search results page (receives `addToCollection` + `removeFromCollection`) and the Collection page (receives only `removeFromCollection`). The conditional logic is:
  ```js
  if (selected) {
    props.removeFromCollection(id)         // removes on second click
  } else if (props.addToCollection) {
    props.addToCollection(props)           // adds on first click (search view)
  } else {
    props.removeFromCollection(id)         // ← fires immediately on first click in Collection
  }
  ```
  In Collection view, `selected` starts `false`, so the `else` branch fires on the very first click, removing the album from state instantly — before the user sees any visual feedback.

- **`addToCollection` receives the whole props object** (`props.addToCollection(props)` at `App.js:29`), not just the album data. `App.js:28-31` then calls `.map((album) => album.id)` on collection items, which works because each item has an `id` field, but passing props wholesale is unintentional.

### Missing Features / UX Gaps

- **No loading state.** During API fetch there is no spinner or disabled state on the submit button.
- **No error handling.** Network failures, API rate-limit errors (429), and missing/malformed responses are all silently swallowed.
- **Collection is not persisted.** Refreshing the page clears the collection entirely (state lives only in `App.js`).
- **Page title is the CRA default** ("React App") — `public/index.html:27`.
- **`'Varela Round'` font is never loaded.** `base.css:14` declares it as the body font but there is no `@import` or `<link>` for Google Fonts anywhere.
- **Service worker is dead code.** `serviceWorker.js` is never imported in `index.js`, so it has zero effect.
- **CSS conflict.** Both `index.css` and `base.css` define `body` styles. `base.css` (imported in `App.js`) partially overwrites `index.css` (imported in `index.js`).
- **Nav semantics.** `Nav.js:9` wraps `<li>` inside `<Link>` — the HTML spec requires `<li>` to be a direct child of `<ul>`. Should be `<li><Link>…</Link></li>`.

---

## What Would Need to Change to Modernize

### High priority

| Area | Current | Modern replacement | Notes |
|---|---|---|---|
| **Build toolchain** | Create React App (`react-scripts` 3.2.0) | Vite + `@vitejs/plugin-react` | CRA is unmaintained as of 2023; Vite is dramatically faster |
| **React** | 16.10.2 | 19.x | Hooks are already used, so upgrade is mostly mechanical |
| **Router** | react-router-dom v5 | v6 | `<Switch>` → `<Routes>`; `render` prop on `<Route>` → `element` prop; `<Link>` wrapping `<li>` pattern stays valid |
| **API key management** | `src/secret.js` (gitignored JS file) | `.env` file with `VITE_DISCOGS_KEY` | Use `import.meta.env.VITE_DISCOGS_KEY` in Vite, or `process.env.REACT_APP_DISCOGS_KEY` if staying on CRA |
| **TypeScript** | None | Add `tsconfig.json` + rename `.js` → `.tsx` | Catches the props/type bugs above at compile time |

### Medium priority

- **State management / persistence.** Move collection to `localStorage` (or IndexedDB) so it survives a page refresh. A simple custom hook (`useLocalStorage`) is sufficient; no need for Redux/Zustand at this scale.
- **Error + loading states.** Wrap the `hitAPI` fetch in try/catch, track `loading` and `error` in state, and render appropriate UI.
- **Fix the Album toggle bug.** Pass only the needed album fields to `addToCollection`, and disambiguate the two rendering contexts (search vs. collection) with a prop like `inCollection` rather than relying on whether `addToCollection` is defined.
- **Load 'Varela Round'.** Add `<link>` to Google Fonts in `public/index.html`, or use a self-hosted font via `@font-face`.

### Low priority / cleanup

- Delete `serviceWorker.js` or actually register it if PWA offline support is desired.
- Add a meaningful `<title>` to `public/index.html`.
- Fix Nav `<li>/<Link>` nesting.
- Remove `index.css` and consolidate into `base.css` to eliminate the duplicate `body` declaration.
- Add Prettier + ESLint config explicitly (CRA includes ESLint internally but it is not surfaced in the repo).
- Expand the test suite beyond the single smoke test — at minimum test `addToCollection` deduplication logic and the Album toggle behavior.
