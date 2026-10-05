# Apex Medical Billing

Marketing website for Apex Medical Billing, a revenue cycle management (RCM) company serving U.S. healthcare practices. It is a single-page React app with seven pages, a contact form, and a "Free Practice Audit" request modal.

## Tech stack

- [React 19](https://react.dev) + TypeScript
- [Vite 8](https://vite.dev) for the dev server and build
- [React Router 8](https://reactrouter.com) with browser history routing
- [Tailwind CSS 4](https://tailwindcss.com) via `@tailwindcss/vite`
- [Framer Motion](https://motion.dev) for page and scroll animations
- [Lucide](https://lucide.dev) icons
- [Web3Forms](https://web3forms.com) for emailing form submissions

## Getting started

**Prerequisites:** Node.js 20.19+ or 22.12+ (required by Vite 8)

```bash
npm install
cp .env.example .env   # then set VITE_WEB3FORMS_KEY
npm run dev
```

The dev server runs at http://localhost:3000 and is also exposed on your local network (`--host=0.0.0.0`).

## Environment variables

| Variable             | Required | Description                                                                                                         |
| -------------------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| `VITE_WEB3FORMS_KEY` | Yes      | Web3Forms access key used by every form. Find it at app.web3forms.com → Forms → your form → Access Key. |

Vite bakes `VITE_*` variables into the client bundle at build time. This means you need to:

- restart `npm run dev` after editing `.env`, and
- set the variable in your hosting provider before it builds the site.

Without the key, form submissions fail and visitors see an error asking them to email `sales@apexmb.com`.

## Scripts

| Command           | Description                                       |
| ----------------- | ------------------------------------------------- |
| `npm run dev`     | Start the dev server on port 3000                 |
| `npm run build`   | Build for production into `dist/`                 |
| `npm run preview` | Serve the production build locally                |
| `npm run lint`    | Type-check with TypeScript (`tsc --noEmit`)       |

## Routes

| Path             | Page          |
| ---------------- | ------------- |
| `/`              | Home          |
| `/about-us`      | About Us      |
| `/services`      | Services      |
| `/specialties`   | Specialties   |
| `/why-choose-us` | Why Choose Us |
| `/contact-us`    | Contact Us    |

Unknown paths redirect to `/`. Routes are defined in `src/App.tsx`.

## Project structure

```
├── index.html               HTML shell: meta tags, favicons, Google Fonts
├── vercel.json              SPA rewrite rule for Vercel
├── public/assets/           Favicons and logo files, served as-is
└── src/
    ├── main.tsx             Entry point (BrowserRouter + App)
    ├── App.tsx              Layout, routes, page transitions, audit modal state
    ├── index.css            Tailwind import, brand tokens, custom animations
    ├── pages/               One component per route
    ├── components/          Shared UI (Navbar, Footer, Hero, AuditModal, LogoSlider, DevBanner, …)
    ├── hooks/               useFormSubmission: submit state, honeypot, rate limiting
    ├── services/            web3forms.ts: sends form data to Web3Forms
    ├── utils/               Animation presets, form validation, rate limiter
    └── assets/images/       Page photography and partner logos (bundled by Vite)
```

## Forms

The site has two forms:

- the **Contact** page (`/contact-us`)
- the **Free Practice Audit** modal, opened by the "Get a Free Practice Audit" buttons across the site

Both submit through `useFormSubmission` → `sendFormSubmission`. Web3Forms then emails the submission to the address linked to the access key.

The forms have two built-in spam guards:

- **Honeypot:** a hidden `company_website` field. If it is filled in, the submission is silently dropped.
- **Rate limit:** at most 3 submissions per hour, with a 60-second cooldown between them. The limit is shared across both forms and stored in `localStorage`. To change it, edit `RATE_LIMIT` in `src/hooks/useFormSubmission.ts`.

Both guards run in the browser only, so they deter casual abuse but do not replace Web3Forms' own server-side protection.

## Styling

- **Tailwind CSS 4** has no `tailwind.config` file. It is loaded with `@import "tailwindcss"` in `src/index.css`.
- **Brand colors** are listed as CSS variables in `src/index.css`. Components use the hex values directly as arbitrary Tailwind classes:

  | Color     | Hex       | Typical use                       |
  | --------- | --------- | --------------------------------- |
  | Green     | `#57B836` | Primary buttons, accents          |
  | Evergreen | `#0E2925` | Headings, dark sections           |
  | Cream     | `#F8FAF7` | Page background                   |
  | Beige     | `#E2E7DF` | Borders, dividers                 |
  | Tint      | `#EAF7E6` | Light text on dark sections       |
  | Ink       | `#1E2423` | Body text                         |
  | Muted     | `#747773` | Secondary text                    |

- **Fonts:** Instrument Serif for headings (`h1`, `h2`, `.font-editorial`) and Plus Jakarta Sans for body text. Both are loaded from Google Fonts in `index.html`.
- **Animations:** shared easing and viewport settings live in `src/utils/animations.ts`. The CSS animations (banner sheen, logo marquee, phone ring) are turned off when the visitor's system requests reduced motion (`prefers-reduced-motion`).

## Development banner

`<DevBanner />` in `src/App.tsx` shows an "In Development" notice at the top of every page. Remove that line before launch. The banner publishes its height as `--dev-banner-height` so the sticky navbar sits below it. Every use of that variable falls back to `0px`, so nothing else needs to change when it is removed.

## Deployment

The site uses browser history routing, so the host must serve `index.html` for every path (an "SPA fallback"). Without it, refreshing a page such as `/services` returns a 404.

- **Vercel:** already handled by `vercel.json`.
- **Other hosts:** add an equivalent rewrite rule, such as `_redirects` on Netlify or `try_files` on Nginx.

On any host:

- build with `npm run build`
- serve the `dist/` folder
- set `VITE_WEB3FORMS_KEY` in the host's environment variables
