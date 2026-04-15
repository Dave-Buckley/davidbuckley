---
title: "Portfolio Site"
phase: 1
status: shipped
live_url: "https://davidbuckley.vercel.app"
repo_url: "https://github.com/Dave-Buckley/davidbuckley"
summary: "A Next.js 16 portfolio with a build-time progress bar driven by markdown content, deployed on Vercel."
---

## Problem

A self-directed eighteen-month engineering programme requires a single source of truth for progress, deliverables, and documentation. Without visible, structured output, individual study sessions risk becoming invisible and unaccountable.

## Approach

The portfolio is the accountability artefact: a public URL backed by a public repository, where every page is rendered from markdown content files. The progress bar is computed at build time by parsing `- [x]` checkboxes across `content/phases/*.md`, giving an automatic measure of completion without a separate tracking system. A thirty-day commit heatmap is fetched from the GitHub GraphQL API during the production build, and the last-shipped timestamp is rendered via `Intl.RelativeTimeFormat`.

### Stack

- Next.js 16 (App Router, React Server Components, Turbopack)
- TypeScript with strict mode
- Tailwind CSS 4 with the `@plugin` directive
- `gray-matter` and `unified` / `remark` / `rehype` for markdown processing
- GitHub GraphQL API for contribution data (build-time only, with graceful fallback)
- Vitest for unit tests
- Vercel (Hobby tier) for hosting and CI/CD

### Engineering decisions

- Content-as-filesystem rather than a CMS or database — zero runtime cost, fully version-controlled
- All data loading in async React Server Components; no client-side fetching
- Pure functions for progress computation with test coverage for edge cases (empty content, case-insensitive checkbox matching, division-by-zero guards)
- A two-command session CLI (`study:start` / `study:end`) using only the Node.js standard library

### Construction method

The portfolio scaffolding was produced via AI pair programming with **Claude Opus 4.6**, driven through the **Claude Code** CLI. This is explicit: the infrastructure layer of this site — Next.js routing, TypeScript libraries, React components, deployment configuration — was generated with substantial AI assistance, then reviewed and shipped.

Subsequent programme artefacts, beginning with Phase 2 (Python, CS fundamentals, DSA), are authored directly. Claude is used only as a code reviewer, concept tutor, and debugger in that work — not as an author. This distinction matters: the portfolio is the container; the programme output is the evidence.

## Results

- Live deployment at `davidbuckley.vercel.app` with automatic redeploy on push to `main`
- Public repository at `github.com/Dave-Buckley/davidbuckley`
- Build-time progress tracking across six phases with zero external dependencies
- Twenty-six passing unit tests covering content loaders, progress computation, GitHub API client, and session helpers
- Total infrastructure cost: zero (Vercel Hobby, GitHub public repo, personal access token on free tier)
