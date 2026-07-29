# Tanish Jain — Personal Portfolio

A clean, professional, recruiter-friendly portfolio website built with **pure HTML + CSS + Vanilla JavaScript** — zero build step, zero dependencies, deployable anywhere for free.

## ✨ Features

- Single-page with smooth-scroll anchor navigation
- Light / dark mode (persisted in `localStorage`)
- Fully responsive — mobile-first
- Fade-in-on-scroll micro-animations
- Project detail modal with image gallery and metrics
- Category-filtered projects and skills grid
- Certifications section
- All content editable in `script.js` (data arrays at the top)

---

## 🚀 Running Locally

No build step needed — just open `index.html` in a browser, or serve it with any static server:

```bash
# Option 1: Python (built into most systems)
python -m http.server 8080
# → http://localhost:8080

# Option 2: Node.js npx serve
npx serve .
# → http://localhost:3000

# Option 3: VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

---

## 📦 Deploying to GitHub Pages

### Method 1 — GitHub Actions (Recommended, automatic on push to `main`)

1. Push the project to a GitHub repository.
2. Go to **Settings → Pages**.
3. Under **Source**, select **GitHub Actions**.
4. Push to `main` — the workflow at `.github/workflows/deploy.yml` will automatically deploy the site.

> The workflow deploys the **repo root** directly — no build needed.

### Method 2 — Manual Deploy from Branch

1. Go to **Settings → Pages**.
2. Under **Source**, choose **Deploy from a branch**.
3. Select **main** branch, **/ (root)** folder.
4. Click Save — GitHub Pages will serve your site automatically.

---

## 📝 Customising Content

All content lives in the **data arrays at the top of `script.js`**:

| Array | What it controls |
|---|---|
| `PROJECTS` | Project cards, modal details, metrics, tech stack |
| `PUBLICATIONS` | Research paper citations |
| `AWARDS` | Achievement cards |
| `SKILLS` | Skill badge groups |
| `CERTS` | Certification cards |

Edit values there — no build, no JSX, changes take effect immediately on refresh.

---

## 🖼️ Adding Project Images

Place project screenshots in:
```
public/
  projects/
    ship-detection/cover.png, SCCOS.png, 6a13d38d-be4a-44ed-9300-bbebaefc3a5d.png, af417654-c086-45c8-aa49-c8b1dd72aa96_page-0001.jpg
    liver-segmentation/cover.png, FlowDiagram.png, ...
    neuralflow/NF1.png, NF2.png, NF3.png, cover.png
    android-camera-isp/ISP_1.png, ISP_2.png
    face-attendance/FR1.png, FR2.png, FR3.png
    heart-disease/HD_1.png, output.png
    query-engine/demo.jpg
  profile.jpg      ← already present
  resume.pdf       ← already present
```

Image paths in `script.js` already point to `public/projects/<folder>/<file>`.
These are served directly by GitHub Pages since `public/` is just a regular folder in the repo root.


---

## 📄 Adding Your Resume

Place your resume PDF at **`resume.pdf`** in the root. The "Download Résumé" button links to it.

---

## 🛠️ Tech Stack

- **HTML5** — semantic structure, accessibility
- **CSS** — custom properties (CSS vars), dark mode, responsive grid
- **Vanilla JavaScript** — dynamic rendering, modal system, filters
- **Font Awesome** — icons
- **Google Fonts** — Inter typeface
