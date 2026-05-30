# juzztjawa.github.io

Personal site of **Jawahar A S** — terminal-flavoured portfolio with blog posts, project writeups, and a git-log style life roadmap.

Live at **[juzztjawa.github.io](https://juzztjawa.github.io)**.

---

## Stack

- [Astro 6](https://astro.build) — static output
- [Tailwind CSS v4](https://tailwindcss.com/) via the Vite plugin
- MDX for blog and project content
- JetBrains Mono + Space Mono via Google Fonts
- Deployed to GitHub Pages via Actions

---

## Setup

Requires **Node `>=22.12`** and [**pnpm**](https://pnpm.io/).

```sh
git clone https://github.com/juzztjawa/juzztjawa.github.io.git
cd juzztjawa.github.io
pnpm install
pnpm dev
```

Dev server runs at `http://localhost:4321` (it will pick a free port if 4321 is busy). Hot-reload works for `.astro`, `.mdx`, `.ts`, and CSS.

### Available scripts

| Command         | What it does                                     |
| :-------------- | :----------------------------------------------- |
| `pnpm dev`      | Dev server with HMR                              |
| `pnpm build`    | Static build to `./dist/`                        |
| `pnpm preview`  | Serve the built `./dist/` locally                |
| `pnpm astro …`  | Astro CLI (`astro check`, `astro sync`, etc.)    |

---

## Adding a new blog post

1. **Drop an image** for the post hero into `public/assets/images/blogN/` (any folder name — keeps things tidy).
2. **Create a new `.mdx` file** in `src/content/blog/`. The filename becomes the URL slug (`my-cool-post.mdx` → `/blog/my-cool-post`).

   ```mdx
   ---
   title: "Your post title goes here"
   description: "One-sentence hook that shows on the card and on the post page."
   pubDate: 2026-05-30
   heroImage: "/assets/images/blogN/cover.jpg"
   heroAlt: "Alt text for the hero image"
   author: "Jawahar A S"
   tags: ["AI", "MCP", "notes"]
   draft: false
   ---

   import Figure from '../../components/mdx/Figure.astro';
   import Callout from '../../components/mdx/Callout.astro';

   Write the post body in markdown / MDX here.

   ## Subheadings work

   Use the helper components when you need them:

   <Figure src="/assets/images/blogN/diagram.png" alt="diagram" caption="A diagram." />

   <Callout type="info">Notes look like this.</Callout>
   ```

3. **Frontmatter reference** (validated by `src/content.config.ts`):

   | Field          | Required | Notes                                            |
   | :------------- | :------- | :----------------------------------------------- |
   | `title`        | yes      | Shown as the page H1                             |
   | `description`  | yes      | Used for SEO, card subtitle, post header         |
   | `pubDate`      | yes      | `YYYY-MM-DD` — drives sort order (newest first)  |
   | `heroImage`    | yes      | Absolute path under `/assets/...`                |
   | `heroAlt`      | yes      | Alt text                                         |
   | `author`       | no       | Defaults to `Jawahar A S`                        |
   | `tags`         | no       | Shown as syntax-string badges                    |
   | `updatedDate`  | no       | Optional                                         |
   | `draft`        | no       | `true` hides it from index + home page           |

4. **Save** — the dev server hot-reloads. The post appears at `/blog/<filename>` and in the pinned "writing" section on the homepage automatically.

---

## Adding a new project

Same pattern, different folder.

1. **Drop images** into `public/assets/images/projectN/`.
2. **Create a new `.mdx` file** in `src/content/projects/`. Filename → URL slug.

   ```mdx
   ---
   title: "Project name"
   description: "What it does, in one sentence."
   pubDate: 2026-05-30
   heroImage: "/assets/images/projectN/cover.png"
   heroAlt: "Alt text"
   tags: ["Python", "PyTorch", "research"]
   github: "https://github.com/juzztjawa/the-repo"
   demo: "https://demo-url-if-any"
   order: 1
   draft: false
   ---

   import Figure from '../../components/mdx/Figure.astro';

   ## Purpose

   …

   ## How it works

   …
   ```

3. **Frontmatter reference**:

   | Field          | Required | Notes                                              |
   | :------------- | :------- | :------------------------------------------------- |
   | `title`        | yes      | Shown as the page H1                               |
   | `description`  | yes      | Card subtitle + comment in the project header      |
   | `pubDate`      | yes      | `YYYY-MM-DD`                                       |
   | `heroImage`    | yes      | Absolute `/assets/...` path                        |
   | `heroAlt`      | yes      | Alt text                                           |
   | `tags`         | yes      | Languages, libraries, themes                       |
   | `github`       | no       | Source repo URL — renders the "git clone" button   |
   | `demo`         | no       | Live demo URL — renders the "./run demo" button    |
   | `order`        | no       | Lower number = appears earlier (default 99)        |
   | `draft`        | no       | `true` hides it everywhere                         |

The new project appears in the pinned "projects" section and at `/projects/<filename>`.

---

## Updating the journey roadmap

The git-log style roadmap on the homepage is driven by `src/data/journey.ts`. Each entry is a "commit":

```ts
{
  hash: 'a7f2e91',                              // 7-char fake sha
  kind: 'work',                                 // 'work' | 'education' | 'milestone'
  ref: [{ label: 'HEAD -> main', type: 'head' }], // optional refs/tags
  title: 'feat: ai/ml engineer @ avasoft',
  org: 'Avasoft',
  period: 'present',
  date: '2026-now',
  description: 'optional one-liner',
}
```

Add a new milestone by appending an entry to the array. Order in the file = display order (newest first, like real `git log`).

---

## Project structure

```
src/
├── components/        # all Astro components
│   ├── Hero.astro            # terminal-window + profile pane
│   ├── Journey.astro         # git-log roadmap
│   ├── PinnedProjects.astro  # scroll-pinned projects section
│   ├── PinnedWriting.astro   # scroll-pinned blog section
│   ├── ProjectCard.astro     # IDE-style card
│   ├── BlogCard.astro        # markdown-file card
│   ├── Header.astro          # VSCode tab-bar nav
│   ├── StatusBar.astro       # VSCode-style bottom bar
│   ├── Footer.astro
│   └── mdx/                  # helpers usable inside .mdx (Figure, Callout, YouTube)
├── content/
│   ├── blog/         # blog posts (.mdx)
│   └── projects/     # project writeups (.mdx)
├── content.config.ts  # zod schema for blog / projects frontmatter
├── data/
│   ├── journey.ts    # life roadmap entries
│   └── site.ts       # name, github, linkedin URLs
├── layouts/
│   ├── BaseLayout.astro
│   ├── PageLayout.astro
│   ├── BlogPostLayout.astro
│   └── ProjectLayout.astro
├── pages/
│   ├── index.astro
│   ├── blog/index.astro · [...slug].astro
│   └── projects/index.astro · [...slug].astro
└── styles/global.css  # theme tokens, components, animations

public/
└── assets/images/...  # all static images
```

---

## Deployment

Pushes to `main` trigger `.github/workflows/deploy.yml`, which builds the site with pnpm and publishes `dist/` to GitHub Pages. No manual step needed.

To preview the production build locally:

```sh
pnpm build && pnpm preview
```
