# noni — portfolio & blog

Built with Astro 6. Four content sections: Photography, Code, Art, Life.

## Requirements

- Node 22+ (Astro 6 drops Node 18/20)
- Check: `node -v`

## Local dev

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # build to dist/
npm run preview   # preview the build
```

## Adding a post

Create a `.mdx` file in the right folder. Filename = URL slug.

```
src/content/photography/my-post.mdx  →  /photography/my-post
src/content/code/my-post.mdx         →  /code/my-post
src/content/art/my-post.mdx          →  /art/my-post
src/content/life/my-post.mdx         →  /life/my-post
```

### Frontmatter by section

**Photography**
```mdx
---
title: "Title"
date: 2026-06-01
excerpt: "One sentence."
camera: "Canon EOS 5D Mark III"
location: "Banja Luka"
tags: ["landscape"]
---
```

**Code**
```mdx
---
title: "Title"
date: 2026-06-01
excerpt: "One sentence."
tech: ["Node.js", "Bash"]
repo: "https://github.com/katnino/repo"
tags: ["devlog"]
---
```

**Art**
```mdx
---
title: "Title"
date: 2026-06-01
excerpt: "One sentence."
medium: "Generative / Digital"
tools: ["p5.js", "Canvas API"]
tags: ["generative"]
---
```

**Life**
```mdx
---
title: "Title"
date: 2026-06-01
excerpt: "One sentence."
tags: ["whatever"]
---
```

## Deployment

Push to `main` → GitHub Actions builds and deploys automatically.

Repo → Settings → Pages → Source → GitHub Actions

## Changing the site name

Search for `noni` in `src/layouts/BaseLayout.astro` and replace.

## Changing section colors

Edit `src/styles/global.css`:
```css
--color-accent: #fbbf24;  /* photography / amber */
--color-code:   #6ee7b7;  /* code / green */
--color-art:    #f87171;  /* art / red */
--color-life:   #c084fc;  /* life / purple */
```
