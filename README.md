# AM Digital website

Static-first Astro website for AM Digital. Content is stored in Astro Content Collections and pages are pre-rendered at build time.

## Local development

```sh
npm install
npm run dev
```

## Production

```sh
npm run build
```

The deployable static output is written to `dist/`.

## GitHub and Vercel

1. Push this repository to GitHub.
2. Import the repository in Vercel. Vercel detects Astro automatically.
3. Add `SITE_URL` to the Vercel Production environment using the final public domain, including `https://` and no trailing slash.
4. Deploy from the `main` branch. Other branches and pull requests can be used as preview deployments.

The site is fully static. No Vercel adapter or server runtime is required.
