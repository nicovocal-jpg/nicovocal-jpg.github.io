# nicovocal-jpg.github.io

Portfolio of **Nicolás Villarroel Vocal**, biomedical engineer working on AI for medical imaging.
Live at <https://nicovocal-jpg.github.io/>.

Built with Next.js (static export), GSAP, Framer Motion and Tailwind CSS. Bilingual (EN / ES).

## Edit the content

Everything you see on the page lives in [`constants.js`](constants.js): hero text, skills, projects,
research tabs and contact. Text that changes with the language toggle is written as
`{ en: "...", es: "..." }`.

- Skill logos: `public/skills/<id>.svg`
- Project illustrations: `public/projects/*.svg`

## Run locally

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static site in ./out
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages. In the repo settings, **Pages → Build and deployment → Source** must be set to
**GitHub Actions**.

## Credits

Design based on [devfolio](https://github.com/shubh73/devfolio) by Shubh Porwal (MIT License).
