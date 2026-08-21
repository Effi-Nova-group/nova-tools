# Nova Tools

Marketing site for Nova Tools — AI-powered social listening, sentiment analysis, and predictive analytics platform.

Built with [Astro 5](https://astro.build/) + MDX content collections. Deployed via Cloudflare Pages.

## Local development

```bash
cd astro
npm install
npm run dev        # http://localhost:4330
```

## Build

```bash
cd astro
npm run build      # outputs to astro/dist/
npm run preview    # preview the built site
```

## Project structure

```
astro/
├── astro.config.mjs
├── package.json
├── src/
│   ├── content.config.ts        # Blog content collection schema
│   ├── content/blog/*.mdx       # Blog posts (frontmatter + markdown)
│   ├── layouts/                 # BaseLayout, BlogPostLayout
│   ├── components/              # Nav, Footer, BlogCard, ContactForm
│   ├── pages/                   # index, blogs/, 401, 404
│   └── styles/                  # global.css, blog.css
└── public/                      # Static assets served as-is
```

## Deployment (Cloudflare Pages)

Set these in the Cloudflare Pages project settings:

- **Build command:** `cd astro && npm install && npm run build`
- **Build output directory:** `astro/dist`
- **Root directory:** *(leave empty — repo root)*
- **Node version:** 20 or newer (build works on 24)

## Adding a new blog post

1. Create a new `.mdx` file in `astro/src/content/blog/` (the filename becomes the URL slug).
2. Add frontmatter — see any existing post for the required fields (`title`, `metaTitle`, `description`, `tag`, `readTime`, `date`, `lead`, `image`, `keywords`, `order`).
3. Drop the hero image in `astro/public/blog-images/` and reference it in `image:`.

The listing page and homepage "Latest insights" section pick up new posts automatically.

## Contact form

Powered by [Web3Forms](https://web3forms.com/). The access key lives in `src/components/ContactForm.astro`.
