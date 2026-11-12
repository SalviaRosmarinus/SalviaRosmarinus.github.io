# Shunsuke Yasunaga — research website

Astro source for a static academic website at `https://salviarosmarinus.github.io/`.

## Develop

```sh
npm install
npm run dev
```

## Publish

Push the source to the `main` branch of `SalviaRosmarinus/SalviaRosmarinus.github.io`. In the repository's **Settings → Pages → Build and deployment**, choose **GitHub Actions**. The included workflow then builds and publishes on each push. Add papers in `src/data/publications.ts`, and edit the research description in `src/pages/index.astro`.

The left sidebar navigates between the site's sections. To list invited seminars separately from conference talks, add entries to `src/data/seminars.ts` (newest first); the Seminars section displays a short placeholder until entries are provided. On narrow screens, the sidebar is available from the **Menu** button.

The site intentionally does not publish an email address or attach a CV; add those once the desired public details are confirmed.
