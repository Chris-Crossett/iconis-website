# Iconis Bioceuticals — Website

Modern redesign of [myiconis.com](https://myiconis.com) built with React + Vite.

## Quick Start

```bash
# Install dependencies
npm install

# Start dev server (opens http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Opening in Visual Studio Code

1. Unzip this folder to your preferred location
2. Open VS Code → **File → Open Folder** → select `iconis-website`
3. Open the integrated terminal (`` Ctrl+` ``)
4. Run `npm install` then `npm run dev`
5. The site will open at `http://localhost:3000`

## Project Structure

```
iconis-website/
├── index.html                    # Entry HTML
├── package.json                  # Dependencies & scripts
├── vite.config.js                # Vite configuration
├── src/
│   ├── main.jsx                  # React mount point
│   ├── index.css                 # Global styles & reset
│   ├── App.jsx                   # Root component (composition)
│   ├── data/
│   │   ├── images.js             # All image URLs (your owned assets)
│   │   └── products.js           # Product data (content, pricing, ingredients)
│   ├── hooks/
│   │   └── useInView.js          # Intersection Observer hook
│   └── components/
│       ├── FadeIn.jsx            # Scroll-reveal animation wrapper
│       ├── Navbar.jsx / .css     # Fixed navigation with mobile menu
│       ├── Hero.jsx / .css       # Full-screen hero section
│       ├── TrustBar.jsx / .css   # Trust badges strip
│       ├── ProductsSection.jsx / .css
│       ├── ProductCard.jsx / .css
│       ├── ProductDetailModal.jsx / .css
│       ├── AboutSection.jsx / .css
│       ├── ContactSection.jsx / .css
│       └── Footer.jsx / .css
```

## Images

All images are loaded from `myiconis.com` (your existing WordPress media library).
If you want to self-host them, download each image from the URLs in `src/data/images.js`
and place them in the `public/images/` directory, then update the paths.

## Deployment

After `npm run build`, the `dist/` folder contains static files ready for any host:
- **GCP Cloud Run** (Docker)
- **Netlify / Vercel** (drag & drop the `dist` folder)
- **Traditional hosting** (upload `dist/` contents to your web root)

## Tech Stack

- **React 18** — UI components
- **Vite 6** — Build tooling & dev server
- **Google Fonts** — Cormorant Garamond + DM Sans
- **Pure CSS** — No CSS framework, hand-crafted styles
