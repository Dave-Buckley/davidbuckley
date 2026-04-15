---
title: "davidbuckley (this site)"
phase: 1
status: shipped
live_url: "https://davidbuckley.vercel.app"
repo_url: "https://github.com/davidbuckley/davidbuckley"
summary: "The portfolio itself — Next.js 16, file-system content, build-time progress bar, zero infra cost."
---

## Problem

Self-taught pivots fail silently. Nobody sees the work. Motivation rots. Eighteen months can pass without a hiring manager ever having a reason to click.

## Approach

Make the portfolio the accountability artifact. One URL. Public repo. Progress bar that counts checkboxes in markdown files on every push. Last-shipped timestamp in seconds-old precision. No streak counter — the honest number stays black even when it's embarrassing.

Stack: Next.js 16 App Router, TypeScript, Tailwind 4, deployed free on Vercel Hobby. Content is plain markdown + gray-matter. Heatmap pulls from the GitHub GraphQL API at build time. Session CLI is two npm scripts that timestamp, prompt, commit, push.

## Results

- `davidbuckley.vercel.app` — live
- `github.com/davidbuckley/davidbuckley` — source of truth, public
- Build-time progress bar across 6 phases
- Zero external services beyond GitHub + Vercel (both free tier)
- First journal entry: 2026-04-16

This card exists because the site counts as the first shipped project (PORT-07).
