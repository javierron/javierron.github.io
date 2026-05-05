# Javier Ron Site

This repo now builds as a static site for GitHub Pages.

## Local development

```bash
nvm use
npm install
npm run dev
```

## Production build

```bash
nvm use
npm run build
```

The build writes the browser-ready static site to `dist/client/`, plus:

- `dist/client/404.html` for GitHub Pages SPA fallback behavior
- `dist/client/.nojekyll` to prevent Jekyll from interfering with asset paths

## GitHub Pages deployment

The workflow at `.github/workflows/deploy-pages.yml` deploys on pushes to `main`.

It currently assumes the site is published as the user site root:

`https://<owner>.github.io/`

If you switch back to a project site or use a custom domain path, update `BASE_PATH` in the workflow.
