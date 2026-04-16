---
number: 2
name: "Web Stack & First AI Products"
window: ""
status: planned
---

Develop proficiency in the modern TypeScript web stack — Next.js, React Server Components, Postgres, authentication, deployment — and ship two publicly available AI-powered applications demonstrating end-to-end product capability.

## Portfolio stack fundamentals

Before shipping new applications, achieve a deep understanding of the technologies used to build this portfolio site itself. The site is the first reference implementation; reading and explaining every file is the entry criterion for authoring new applications in the same stack.

- [ ] [Read the TypeScript Handbook: Everyday Types and Narrowing sections, then apply to the portfolio's `src/lib/`](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html) (STACK-01)

<details>
<summary>More info · STACK-01 · TypeScript fundamentals</summary>

**What to do**
Read the *Everyday Types*, *Narrowing*, and *More on Functions* sections of the TypeScript Handbook. Then open `src/lib/types.ts` and `src/lib/content.ts` and understand every type declaration.

**What counts as complete**
Able to explain `interface`, `type`, `?` (optional), `as` (assertion), generic type parameters, and union/intersection types using examples from `src/lib/`.
</details>

- [ ] [Complete the official Next.js Learn course (App Router, Server Components, data fetching)](https://nextjs.org/learn) (STACK-02)

<details>
<summary>More info · STACK-02 · Next.js fundamentals</summary>

**What to do**
Complete the Next.js Learn course end-to-end. It covers App Router, file-system routing, Server Components, Server Actions, and data fetching — all patterns this portfolio uses.

**What counts as complete**
The course example app is built and deployed, and you can point to equivalent patterns (async RSCs, `generateStaticParams`, layouts) in this repository's `src/app/`.
</details>

- [ ] [Read the React documentation covering Server Components, async components, and generateStaticParams](https://react.dev/reference/rsc/server-components) (STACK-03)

<details>
<summary>More info · STACK-03 · React Server Components</summary>

**What to do**
Read the React documentation on Server Components, async components, and the `use` hook. Understand the server/client boundary — when `'use client'` is required.

**What counts as complete**
Can articulate why `src/app/page.tsx` is a server component without an explicit directive, and why the components in `src/components/` are all server components by default.
</details>

- [ ] [Work through the Tailwind CSS v4 documentation, including the `@theme` and `@plugin` directives used in `globals.css`](https://tailwindcss.com/docs) (STACK-04)

<details>
<summary>More info · STACK-04 · Tailwind CSS v4</summary>

**What to do**
Read the Tailwind v4 docs, focusing on the CSS-first config model (`@theme`, `@plugin`). This is a significant departure from v3's JavaScript config. The portfolio uses both directives.

**What counts as complete**
Can explain the portfolio's theme tokens, use arbitrary-value utilities (`bg-[...]`), and apply typography plugin directives correctly.
</details>

- [ ] [Review the Node.js documentation for `fs`, `path`, `readline`, and `child_process` as used in `scripts/`](https://nodejs.org/docs/latest-v24.x/api/fs.html) (STACK-05)

<details>
<summary>More info · STACK-05 · Node.js standard library</summary>

**What to do**
Read the API docs for the four core modules used in the session CLI: `node:fs`, `node:path`, `node:readline`, `node:child_process`. Then review `scripts/study-start.mjs` and `scripts/study-end.mjs` and explain each function call.

**What counts as complete**
Able to reproduce the session-start behaviour (create-or-append a markdown file, open it in an editor) from scratch without referring to the existing code.
</details>

- [ ] [Read the Vitest guide and review every test file in the portfolio repository](https://vitest.dev/guide/) (STACK-06)

<details>
<summary>More info · STACK-06 · Vitest</summary>

**What to do**
Read the Vitest getting-started and mocking guides. Review every `*.test.ts` and `*.test.mjs` file in this repository. Understand `describe`/`it`/`expect`, `beforeEach`/`afterEach`, and `vi.stubGlobal` as used in `src/lib/github.test.ts`.

**What counts as complete**
Able to write a failing test, a passing implementation, and a passing test against fixture data in a tmp directory — the patterns `content.test.ts` demonstrates.
</details>

- [ ] [Work through unifiedjs's Learn guide covering the remark and rehype pipeline used in `src/lib/markdown.ts`](https://unifiedjs.com/learn/) (STACK-07)

<details>
<summary>More info · STACK-07 · unified / remark / rehype</summary>

**What to do**
Work through the unifiedjs Learn materials covering syntax trees (MDAST, HAST) and the unified pipeline. Understand the distinction between parsing, transforming, and stringifying.

**What counts as complete**
Can explain why `rehype-raw` is in the pipeline (it parses inline HTML like the `<details>` blocks you are reading right now).
</details>

- [ ] [Review the GitHub GraphQL API documentation and understand the query in `src/lib/github.ts`](https://docs.github.com/en/graphql) (STACK-08)

<details>
<summary>More info · STACK-08 · GitHub GraphQL API</summary>

**What to do**
Read the GraphQL schema explorer and the docs on personal access tokens. Inspect the `contributionsCollection` query in `src/lib/github.ts` and understand each nested field.

**What counts as complete**
Can modify the query to retrieve different user data (starred repositories, PR counts) and render it somewhere on the portfolio as a minor enhancement.
</details>

- [ ] [Review Vercel platform documentation covering builds, environment variables, and GitHub integration](https://vercel.com/docs) (STACK-09)

<details>
<summary>More info · STACK-09 · Vercel platform</summary>

**What to do**
Read the Vercel docs covering build output, environment variables, deployment environments (production, preview, development), and the GitHub integration. Understand how the portfolio's `GITHUB_TOKEN` is scoped across environments.

**What counts as complete**
Can deploy a new Vercel project from scratch, configure its environment variables, and explain the difference between preview and production deployments.
</details>

- [ ] Author a technical writeup explaining every file in `src/` and `scripts/` of this repository in your own words (STACK-10)

<details>
<summary>More info · STACK-10 · Repository walkthrough writeup</summary>

**What to do**
Write a substantial technical document walking through every file in `src/` and `scripts/` — what it does, why it exists, how it connects to the rest. Publish to the portfolio.

**What counts as complete**
A reader can understand the entire portfolio codebase from the writeup alone, without reading the source. This is the forcing function for confidence that the scaffolding is genuinely understood.
</details>

## Web backend and databases

- [ ] [Complete SQLBolt and the Mode Analytics SQL tutorial, then ship a Neon Postgres project with non-trivial queries](https://sqlbolt.com/) (FND-05)

<details>
<summary>More info · FND-05 · SQL and Postgres</summary>

**What to do**
Complete all SQLBolt lessons and the Mode Analytics SQL tutorial. Create a free Neon Postgres database and build a small project exercising joins, aggregations, window functions, and indexes. Publish schema and example queries.

**What counts as complete**
Neon project deployed with non-trivial data, README documenting the schema and the five to ten most interesting queries, linked from this portfolio.
</details>

## Applied AI products

- [ ] Build a non-trivial Next.js application beyond the portfolio itself (FND-06)

<details>
<summary>More info · FND-06 · First standalone Next.js app</summary>

**What to do**
Build a Next.js application that is not the portfolio and not a course tutorial. Choose a problem you actually want to solve. Ship to a public repository, deploy on Vercel.

**What counts as complete**
A deployed, reachable Next.js application with its own URL, linked from the portfolio Projects page.
</details>

- [ ] [Ship a full-stack CRUD application: Next.js, Neon, Drizzle ORM, authentication, deployed](https://orm.drizzle.team/) (AIP-01)

<details>
<summary>More info · AIP-01 · Full-stack CRUD</summary>

**What to do**
Build a full-stack app with create/read/update/delete operations backed by a real Postgres database. Use Drizzle as the ORM, Next.js App Router for routing and Server Actions, and a free auth provider (Auth.js with a GitHub OAuth provider is lowest-friction).

**What counts as complete**
Live deployment with sign-up/sign-in, at least one resource users can CRUD, persistent storage in Neon, schema migrations managed via Drizzle Kit.
</details>

- [ ] [Ship an AI-powered web application using the Vercel AI SDK, a free-tier model provider, and rate limiting](https://sdk.vercel.ai/docs) (AIP-02)

<details>
<summary>More info · AIP-02 · AI-powered web app</summary>

**What to do**
Build a web app that integrates an AI model for a specific user-facing feature. Use the Vercel AI SDK. Free-tier provider (Google Gemini Flash is a good default — generous free quota, no card). Add rate limiting via Upstash Redis (free tier).

**What counts as complete**
Live deployment with a genuine AI feature, README explaining prompt strategy and eval approach, abuse prevention visible.
</details>

- [ ] At least one of the two applications functions as the domain-flavoured capstone (AIP-05)

<details>
<summary>More info · AIP-05 · Domain capstone</summary>

**What to do**
One of AIP-01 or AIP-02 is the single domain-flavoured project permitted. Choose the domain — education, sports analytics, DJ/audio — and build around a genuine problem within it. The other application stays generic.

**What counts as complete**
The capstone has a domain-specific problem statement in its README and delivers a domain-specific result.
</details>

- [ ] Ship a no-code or low-code AI automation artefact (AUTO-01)

<details>
<summary>More info · AUTO-01 · No-code AI automation</summary>

**What to do**
Build a small AI automation using a no-code or low-code tool (Make.com, n8n self-hosted, Zapier). Document the flow in a blog post including a diagram of the nodes and the model prompts used.

**What counts as complete**
A running automation (or detailed teardown if the trigger is private), a public writeup on the portfolio.
</details>

- [ ] [Containerise one shipped application with Docker and publish a deployment writeup](https://docs.docker.com/get-started/) (MKT-01)

<details>
<summary>More info · MKT-01 · Docker fundamentals</summary>

**What to do**
Write a `Dockerfile` and `docker-compose.yml` for either AIP-01 (the CRUD app) or AIP-02 (the AI-powered app). Include the application itself plus its Postgres dependency. Build and run the container locally; confirm parity with the Vercel deployment. Publish a short writeup on the portfolio covering image layers, the multi-stage build pattern, and the differences between a Docker-run instance and the Vercel Functions runtime.

**What not to worry about**
- Shipping a Docker-based production deployment. Vercel remains the production host. Docker is for demonstrating containerisation fluency.
- Kubernetes. Not required at junior level.

**What counts as complete**
A working `Dockerfile` and `docker-compose.yml` in the chosen project's repository. A short technical writeup on the portfolio covering image layers, build caching, and the runtime differences between the container and Vercel.

**Why this exists**
Docker appears in roughly 70% of UK junior software and AI postings (MARKET_CRITERIA.md §A). Vercel alone does not signal containerisation fluency — this task closes that gap cheaply.
</details>

## Milestones and communication

- [ ] Publish a mid-programme checkpoint writeup reviewing progress against the market criteria (ACC-02)

<details>
<summary>More info · ACC-02 · Mid-programme checkpoint</summary>

**What to do**
Write an honest self-review at the mid-point of the programme. Compare what has shipped against the job-market criteria research in the planning documents. Identify gaps, calibrate the rest of the programme, publish to the portfolio.
</details>

- [ ] Add fifteen engineers at UK target-stack companies on LinkedIn (NET-03)

<details>
<summary>More info · NET-03 · Target-company engineers</summary>

**What to do**
Add approximately fifteen engineers at UK companies whose stack matches the Phase 2 projects — TypeScript, Next.js, Vercel AI SDK, Postgres, Python. Each connection request references a specific shipped portfolio project (AIP-01 or AIP-02). Use template 3 in `content/linkedin-templates.md` ("junior engineer at a target-stack company").

**What not to worry about**
- Seniority. Mid-level engineers are ideal targets — they read connection requests and are not yet inundated.
- Acceptance rate. 30-50% is normal for "strangers with a reason".

**What counts as complete**
Fifteen personalised connection requests sent, each referencing a specific shipped portfolio project. Outcomes tracked privately. This is the first batch of strangers-with-a-reason outreach — the reason is that something has been shipped.

**Why this phase**
Before Phase 2, there is no shipped work to reference. Attempting target-company outreach earlier produces lower acceptance and weaker signal. After shipping AIP-01 and AIP-02, each request anchors to a concrete artefact.
</details>

- [ ] Publish a LinkedIn phase-completion post summarising Phase 2 output (SOC-03)

<details>
<summary>More info · SOC-03 · Phase 2 close post</summary>

**What to do**
Short professional LinkedIn post when Phase 2 closes. Template in `content/linkedin-templates.md`. Include links to specific shipped projects.
</details>

- [ ] Publish LinkedIn launch posts for AIP-01 and AIP-02 (SOC-04)

<details>
<summary>More info · SOC-04 · Project launch posts</summary>

**What to do**
One LinkedIn post per shipped project, published when the project goes live. Lead with the problem and the result, not the tech stack.
</details>

- [ ] Publish a mid-programme calibration post on LinkedIn (SOC-05)

<details>
<summary>More info · SOC-05 · Mid-programme calibration</summary>

**What to do**
Public calibration note at the programme's mid-point — what is on track, what is lagging, what has changed. Demonstrates reflective practice.
</details>

## Resources

- [Next.js Learn](https://nextjs.org/learn) — official App Router tutorial
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [React documentation](https://react.dev/)
- [Tailwind CSS v4 docs](https://tailwindcss.com/docs)
- [Vitest guide](https://vitest.dev/guide/)
- [unifiedjs Learn](https://unifiedjs.com/learn/)
- [SQLBolt](https://sqlbolt.com/)
- [Mode Analytics SQL tutorial](https://mode.com/sql-tutorial/)
- [Neon free tier](https://neon.tech/)
- [Drizzle ORM](https://orm.drizzle.team/)
- [Vercel AI SDK](https://sdk.vercel.ai/docs)
- [Auth.js](https://authjs.dev/)
- [Upstash free tier](https://upstash.com/)
