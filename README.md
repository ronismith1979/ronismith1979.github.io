# Smith1979

**Portfolio of Roni Tresnawan: creative director, designer and multidisciplinary artist based in Bandung, Indonesia.**

Live site: **https://ronismith1979.github.io**

> Aesthetic storytelling through visual design and sounds.

## About

Smith1979 is a creative portfolio at the intersection of brand identity, art direction, music and motion. Nearly two decades of work across logos, brand systems, social campaigns, album art, print and video, shaped by a background in songwriting and composition.

## What's on the site

| Section | What you'll find |
|---|---|
| **Portfolio** | Selected brand identity, social media and campaign, music visuals, print and packaging, motion and experimental work, grouped by category |
| **Ready-Made** | Ready-to-use kits and packs to start a project faster *(coming soon)* |
| **Downloads** | Free fonts, prompt packs, templates and media *(coming soon)* |
| **Sounds** | Music projects, collaborations, scoring and writing |
| **About** | Background, services, experience and tools |
| **Contact** | Email, WhatsApp and social links |

## How it's built

- **[Eleventy](https://www.11ty.dev/) 3** static site generator (Nunjucks templates, Markdown content)
- **GitHub Actions** builds and deploys to **GitHub Pages** on every push to `main`
- Plain CSS with custom properties, automatic light and dark mode, responsive layout
- No frameworks and no client-side tracking; one small inline script powers the mobile menu
- SEO basics built in: canonical URLs, Open Graph tags, JSON-LD structured data and an auto-generated sitemap

## Repository structure

```
src/
  _data/          site, about and sound content (JSON)
  _includes/      layouts and components (base, card, tabs, project)
  assets/         CSS and images
  projects/       one Markdown file per portfolio project
  work/           portfolio listing and category pages
  *.njk           top-level pages (home, about, sounds, contact, ...)
eleventy.config.js
.github/workflows/deploy.yml
```

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:8080. For maintenance notes on adding projects and managing pages, see [CONTENT-GUIDE.md](CONTENT-GUIDE.md).

## Copyright

Portfolio content (images, videos, text, brand work and music) is © Roni Tresnawan, all rights reserved. Client names, logos and brand assets belong to their respective owners and appear for portfolio purposes only. The site's structure and code may be used as a reference, but please don't reuse the content.

## Contact

Have a brand, a release or a campaign in mind?

- Email: ronismith1979@gmail.com
- [Behance](https://www.behance.net/smith1979) · [Instagram](https://www.instagram.com/smi777h/) · [LinkedIn](https://www.linkedin.com/in/roni-tresnawan-smith1979/) · [X](https://x.com/smith1979_) · [Last.fm](https://www.last.fm/user/smith1979)
