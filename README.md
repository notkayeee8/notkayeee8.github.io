# Kris Kaye Magallon Sanchez — portfolio

A React + Vite port of the original static portfolio site. The visual design,
content, and interactions are preserved from the original HTML/CSS/JS version.

## Local development

```powershell
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Production build

```powershell
npm run build
npm run preview
```

`npm run build` writes the static site to `dist/`.

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the app
and deploys `dist/` through GitHub Pages. The Pages source is configured to
use GitHub Actions rather than the legacy static publisher. The live site is
available at https://notkayeee8.github.io/.

Images and icons live in `public/` and are served from the site root.
