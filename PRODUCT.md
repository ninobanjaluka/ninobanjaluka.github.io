# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: peers — photographers, developers, and makers who arrive from a specific post, a link, or search, then stay to look around. They are evaluating the work, not the author's availability for hire.

Secondary: people who know Nino personally, served mainly by the Life section and the Serbian translations.

## Product Purpose

One public home for fifteen years of continuous personal publishing across photography, code, art, and life. Success is depth of reading: a visitor moves from one piece into several rather than bouncing off a landing page.

## Positioning

Continuity. Nino has published without a real gap since 2011 — first on WordPress, now here — and most personal sites of this kind are abandoned within a couple of years. The archive's size is the argument; a newer personal site cannot honestly copy it.

## Operating Context

- Static Astro site on GitHub Pages. No server, no database, no auth.
- Content authored as MDX in four collections; publishing means committing files and rebuilding.
- Every post carries an English original and a Serbian companion (`*.sr.mdx`), held at full parity.
- Migration from WordPress is complete; the free-tier quota was the trigger.
- No contact form. The About page links two GitHub profiles (current and legacy) — deliberate, to keep the inbox clear.

## Capabilities and Constraints

- Photography: `camera`, `location`. Code: `tech`, `repo` URL. Art: `medium`, `tools`. Life: `camera`, `location`. Shared across all: `title`, `date`, `excerpt`, `tags`, `draft`, `pinned`, `coverImage`.
- Language toggle persists to `localStorage` under `post-lang`; Serbian is offered only where a translation exists.
- RSS, sitemap, and JSON-LD (`ProfilePage`, `AboutPage`) are in place.
- English is the default and the canonical language.
- Undecided: whether a fifth section is warranted; whether Serbian should move to its own URL subtree instead of the client-side toggle.

## Brand Commitments

- Name: Nino Katić. Based in Banja Luka.
- Voice: first person, informal, self-deprecating, deliberately unpolished. "I do not know what boredom is." Willing to be funny at his own expense.
- The Serbian voice is idiomatic and local (Banjaluka spelling), not a translation of the English register.
- All writing and photography is copyrighted; reproduction needs permission.
- Self-described as photographer, developer, engineer, and artist — stated, not argued.

## Evidence on Hand

- 20 published posts across the four collections, each with an English and Serbian version (`src/content/`).
- A photograph library in `src/assets/blog/`.
- Portrait at `public/nino.jpg`; hero background at `public/images/hero-bg.jpg`.
- Absences not to fabricate: no testimonials, no client list, no metrics, no press mentions, no public email.

## Product Principles

1. The archive is the product. Changes should make older work easier to reach, not only newer work easier to show.
2. Parity is a promise. A Serbian reader never meets a dead toggle on a post that has a translation.
3. Depth over conversion. Nothing should interrupt reading to chase an action.
4. Peer-to-peer register. Write to someone who makes things, not to a buyer.
5. Four sections hold until a fifth earns its place.
