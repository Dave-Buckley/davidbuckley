# David Buckley

The portfolio at **[davidbuckley.vercel.app](https://davidbuckley.vercel.app)**.

A structured self-directed programme to become an AI software engineer, documented in public. Zero cost — every resource and tool is free.

## What this is

A Next.js 16 portfolio that doubles as the accountability artifact. Every page is a function of markdown files in `content/`. The progress bar counts `- [x]` checkboxes in `content/phases/*.md` at build time. The last-shipped timestamp + 30-day heatmap come from the GitHub GraphQL API.

## Stack

- Next.js 16 (App Router, Turbopack, RSC)
- TypeScript + Tailwind CSS 4
- `gray-matter` + `remark` for markdown (no Contentlayer, no MDX)
- GitHub GraphQL API for heatmap data (build time only)
- Vitest for unit tests
- Vercel Hobby tier for hosting

## Local dev

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Env vars

Copy `.env.local.example` → `.env.local` and fill in:

- `GITHUB_TOKEN` — fine-grained PAT, `read:user` + public repo read
- `GITHUB_USERNAME` — your GitHub login

Without these, the heatmap renders greyed-out (no crash).

## Session workflow

```bash
npm run study:start   # creates today's journal entry, opens in editor
# ... do the study ...
npm run study:end     # prompts + commits + pushes
```

Each end-of-session commit deploys a new version automatically via Vercel's GitHub integration.

## Programme

Six phases — see [`/phases`](https://davidbuckley.vercel.app/phases) on the live site, or `content/phases/` in this repo.

Everything here is free. Steal it if you want it.

## Construction method

The scaffolding layer of this site (Next.js, libraries, components, deployment wiring) was produced via AI pair programming with **Claude Opus 4.6** through the **Claude Code** CLI. Subsequent programme artefacts shipped across Phases 2-6 — Python, machine learning, deployed applications, technical writeups — are authored directly, with Claude used only as a code reviewer, concept tutor, and debugger.

This distinction is surfaced on the site's about page and the Phase 1 project writeup.

## License

MIT — the code. The writeups and narrative are authored by David Buckley; please don't copy those verbatim, but feel free to adapt the shape.
