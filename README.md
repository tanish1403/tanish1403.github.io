# Tanish Jain — Personal Portfolio

A clean, professional portfolio website built with **Vite + React + TypeScript + Tailwind CSS**, deployable for free on GitHub Pages.

## ✨ Features

- Single-page with smooth-scroll anchor navigation
- Light / dark mode (persisted in `localStorage`)
- Fully responsive — mobile-first
- Fade-in-on-scroll micro-animations
- All content in a single `src/data.ts` file — edit once, updates everywhere
- Optimised for SEO with Open Graph meta tags

---

## 🚀 Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 🏗️ Building for Production

```bash
npm run build
```

The output goes to `dist/`. Preview it locally with:

```bash
npm run preview
```

---

## 📦 Deploying to GitHub Pages

### Method 1 — GitHub Actions (Recommended)

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, select **GitHub Actions**.
4. Push to `main` — the workflow at `.github/workflows/deploy.yml` will automatically build and deploy.

> **Important:** Update the `base` value in `vite.config.ts` to match your repo name:
> ```ts
> base: '/YOUR-REPO-NAME/',
> ```

### Method 2 — Manual with `gh-pages` npm package

```bash
npm run deploy
```

This runs `npm run build && gh-pages -d dist`, pushing the built site to the `gh-pages` branch. Then in GitHub → Settings → Pages, set source to **Deploy from a branch** and choose `gh-pages`.

---

## 📝 Customising Content

All site content lives in **`src/data.ts`**. Edit the exported objects to update:

| Object | What it controls |
|---|---|
| `personal` | Name, title, tagline, bio, social links |
| `experience` | Work history cards |
| `projects` | Project grid + compact list |
| `publications` | Citation list |
| `awards` | Achievement cards |
| `skillGroups` | Skills badge grid |

No JSX changes needed — just update the data and rebuild.

---

## 📄 Adding Your Resume

Place your resume PDF at `public/resume.pdf`. The "Download Résumé" button in the hero is pre-linked to `/portfolio/resume.pdf` (update the path in `personal.resumePdf` in `data.ts` if you change the repo name).

---

## 🛠️ Tech Stack

- **Vite** — build tool
- **React 18** — UI framework
- **TypeScript** — type safety
- **Tailwind CSS v3** — utility-first styling
- **react-icons** — icon library
- **gh-pages** — manual deployment fallback
