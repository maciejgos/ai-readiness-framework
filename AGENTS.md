# Repository Guidelines

## Project Structure & Module Organization
- `app/` — main React app (Vite + Tailwind).
  - `app/src/` — source code (`.jsx` components, `.js` utilities).
  - `app/public/` — static assets (e.g., `logo.webp`).
  - Key configs: `vite.config.js`, `tailwind.config.js`, `eslint.config.js`, `postcss.config.js`.
- `README.md` — quick start and top‑level notes.

## Build, Test, and Development Commands
- `cd app && npm install` — install dependencies.
- `npm run dev` — start Vite dev server with HMR.
- `npm run build` — production build to `app/dist/` (uses `base: './'`).
- `npm run preview` — serve the production build locally.
- `npm run lint` — run ESLint on the project.
- `npm test` — run unit tests with Vitest.

## Coding Style & Naming Conventions
- Language: React 19 + JS modules; functional components and hooks only.
- Indentation: 2 spaces; keep lines focused and readable.
- Files: components in PascalCase (e.g., `App.jsx`), utilities in lowerCamelCase (e.g., `scoring.js`).
- Styling: Tailwind CSS; prefer utility classes over custom CSS.
- Linting: ESLint (`eslint.config.js`). Fix all reported issues before committing.

## Testing Guidelines
- Framework: Vitest. Co‑locate tests next to code using `*.test.js` (e.g., `scoring.test.js`).
- Scope: unit‑test pure logic (scoring, helpers). Keep tests deterministic and fast.
- Run: `cd app && npm test`. Add tests for new logic and bug fixes.

## Commit & Pull Request Guidelines
- Commits: imperative present tense (e.g., "Add scoring helpers"). Optional conventional prefix (e.g., `feat:`) is welcome.
- PRs: include a clear summary, linked issues, and screenshots/GIFs for UI changes.
- Checks: ensure `npm run lint`, `npm test`, and `npm run build` succeed.

## Security & Configuration Tips
- Do not commit secrets or credentials. Use sample data only.
- Vite `base` is set to `./` to support subdirectory hosting; change only if you control the deploy path.
- Tailwind scans `./index.html` and `./src/**/*.{js,ts,jsx,tsx}`; keep classes inline to avoid purging issues.
