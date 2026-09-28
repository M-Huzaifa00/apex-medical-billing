# Apex Medical Billing

Marketing website for Apex Medical Billing, built with React, React Router, Vite, Tailwind CSS and Framer Motion.

## Run locally

**Prerequisites:** Node.js 20.19+

1. Install dependencies: `npm install`
2. Start the dev server: `npm run dev` (http://localhost:3000)

## Scripts

| Command           | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start the dev server on port 3000        |
| `npm run build`   | Build for production into `dist/`        |
| `npm run preview` | Serve the production build locally       |
| `npm run lint`    | Type-check with TypeScript               |

## Routes

| Path             | Page          |
| ---------------- | ------------- |
| `/`              | Home          |
| `/about-us`      | About Us      |
| `/services`      | Services      |
| `/why-choose-us` | Why Choose Us |
| `/contact-us`    | Contact Us    |

Unknown paths redirect to `/`.

## Deployment

The site uses browser history routing, so the host must serve `index.html` for every path
(an "SPA fallback" / rewrite rule). Without it, refreshing on a page like `/services` returns 404.
