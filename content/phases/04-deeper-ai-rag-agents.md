---
number: 4
name: "Deeper AI — RAG, Agents, Fine-tuning, MLOps"
window: ""
status: planned
---

Advance into production-grade AI engineering: retrieval-augmented generation, agentic systems, model fine-tuning, MLOps, and open-source contribution. This phase establishes the senior-track technical depth beyond foundational applied machine learning.

## Tasks

- [ ] Ship a deployed RAG application with ingestion, chunking, pgvector, citations, and evals (AIP-03)

<details>
<summary>More info · AIP-03 · RAG application</summary>

**What to do**
Build and deploy a retrieval-augmented generation application. Cover the full pipeline: document ingestion, chunking strategy, embedding and vector storage in pgvector (Neon's free tier supports it), similarity search, context injection into the prompt, and evidence-based output with citations back to source chunks. Ship with an evals harness measuring retrieval precision and answer faithfulness.

**What counts as complete**
Live deployment, public repository, writeup covering chunking decisions and evaluation methodology.
</details>

- [ ] [Ship a deployed agentic application using LangGraph with at least two tools and a reasoning trace](https://langchain-ai.github.io/langgraph/) (AIP-04)

<details>
<summary>More info · AIP-04 · Agentic application</summary>

**What to do**
Build and deploy an agent with LangGraph. At minimum two tools, a clear task definition, and an exposed reasoning trace so users can see what the agent did and why. Include failure-mode handling — what happens when tools fail or the agent loops.

**What counts as complete**
Live deployment, tools visible to the user or documented, observable trace output, writeup of design decisions.
</details>

- [ ] Every AI app has an evaluations harness and a quantified failure mode (AIP-06)

<details>
<summary>More info · AIP-06 · Evaluations everywhere</summary>

**What to do**
Retrofit evaluations onto every AI-powered application shipped so far (AIP-02, AIP-03, AIP-04). A small eval set (20-50 examples), a scoring method, and a published failure-mode analysis for each.

**What counts as complete**
Every AI app repository contains an `evals/` directory with test cases, a script to run them, and a `FAILURES.md` documenting known failure modes.
</details>

- [ ] Fine-tuning project beyond LoRA-on-toy, with eval harness and before/after comparison (DAI-01)

<details>
<summary>More info · DAI-01 · Fine-tuning</summary>

**What to do**
Fine-tune a small open model (Phi-3, Qwen 2.5, Llama 3.2 1B/3B) on a non-trivial task. Publish the adapter or merged model to Hugging Face. Include an evals harness comparing before and after fine-tuning on a held-out test set. Document the choice of base model, dataset, and hyperparameters.

**What counts as complete**
Adapter or merged model on Hugging Face Hub, eval notebook showing quantified improvement, writeup on the portfolio.
</details>

- [ ] MLOps artefact: CI, tests, versioning, and one monitored metric (DAI-02)

<details>
<summary>More info · DAI-02 · MLOps discipline</summary>

**What to do**
Add proper operational scaffolding to one of the AI applications. GitHub Actions CI running the eval suite on every PR. Unit and integration tests. Dataset and model versioning with DVC, Git LFS, or simple manifest files. One production metric monitored (Sentry free tier, Grafana Cloud free tier, or a simple self-hosted dashboard).

**What counts as complete**
A public repository demonstrating all four components, explained in a writeup.
</details>

- [ ] A merged pull request in an open-source AI or ML repository (DAI-03)

<details>
<summary>More info · DAI-03 · Open source contribution</summary>

**What to do**
Find a genuine bug, missing feature, or documentation gap in an open-source AI or ML project (LangChain, LlamaIndex, Hugging Face libraries, an MCP server implementation, a fast.ai contribution). Submit a PR. Iterate on review feedback. Land a merge.

**What counts as complete**
At least one merged PR linked from the portfolio. Process writeup covering the contribution end-to-end — selection criteria, development, review cycle, outcome.
</details>

- [ ] Six or more technical blog posts on the portfolio (DAI-04)

<details>
<summary>More info · DAI-04 · Technical blog posts</summary>

**What to do**
Across Phases 2-4, accumulate six substantive blog posts on the portfolio covering specific technical topics. Not phase summaries — focused deep-dives on things like a specific pattern, a failure analysis, a comparative evaluation, or a design decision worth documenting.

**What counts as complete**
Six posts under `content/` (a `content/blog/` directory is reasonable) each with concrete technical content, linked from the portfolio.
</details>

- [ ] Writeup: reviewing and refactoring AI-generated code with before/after diff (DAI-05)

<details>
<summary>More info · DAI-05 · AI code review writeup</summary>

**What to do**
Pick a piece of AI-generated code (either from this portfolio's scaffolding or from a new small project), identify what is wrong or sub-optimal about it, refactor it, and publish a writeup with before-and-after diffs explaining the reasoning. This is the explicit demonstration of "reviews AI-generated code competently" which is a named hiring criterion for junior AI engineers.

**What counts as complete**
Substantial writeup on the portfolio, at least one concrete code example with diffs, clear articulation of the improvements.
</details>

- [ ] [MCP server deliverable — expose or consume a Model Context Protocol server](https://modelcontextprotocol.io/) (MCP-01)

<details>
<summary>More info · MCP-01 · Model Context Protocol</summary>

**What to do**
Either build an MCP server that exposes a useful capability to AI agents, or build an application that consumes MCP servers. MCP is Anthropic's open protocol for giving language models structured access to tools and data; fluency here is a current differentiator.

**What counts as complete**
Working MCP server or consumer, public repository, writeup explaining the protocol and the implementation choices.
</details>

- [ ] [Ship one AI application with a FastAPI Python backend and a Next.js frontend](https://fastapi.tiangolo.com/) (MKT-02)

<details>
<summary>More info · MKT-02 · Python web backend</summary>

**What to do**
Build one AI application — typically a RAG or agent variant — with the backend implemented in FastAPI (Python) and the frontend in Next.js. The boundary is a REST or streaming HTTP contract. Deploy both halves. This is the split-stack pattern common in UK 2026 AI-product postings (HN London hiring cluster, Vercel AI SDK roles).

**What not to worry about**
- Duplicating AIP-03 or AIP-04 effort. This task can *be* the Phase 4 RAG or agent app rather than a separate one — the requirement is architectural (Python backend, TS frontend), not a third app.
- Rewriting existing TypeScript-only apps. Demonstrate the pattern once, in a new project.

**What counts as complete**
A deployed two-service application: FastAPI backend publicly reachable, Next.js frontend calling it over HTTP, both repositories public with clear READMEs explaining the contract between them.

**Why this exists**
FastAPI or Flask Python backends appear in roughly 55% of UK junior AI-product postings (MARKET_CRITERIA.md §A). TypeScript-only server evidence reads as a narrower engineer.
</details>

- [ ] [Deploy one artefact to a non-Vercel cloud provider and publish a comparison writeup](https://fly.io/docs/) (MKT-03)

<details>
<summary>More info · MKT-03 · Cloud platform exposure</summary>

**What to do**
Deploy one artefact — typically the Docker image from MKT-01, or an ML inference endpoint from Phase 3 — to a free-tier cloud provider other than Vercel. Recommended targets: Fly.io (free allowances, no card required), Render free tier, or Oracle Cloud Always Free. AWS Lightsail and GCP Cloud Run are acceptable if the card-on-file constraint is tolerated.

Publish a short writeup comparing the provider's build pipeline, cold-start behaviour, and environment-variable management with Vercel's equivalents.

**What not to worry about**
- Maintaining the deployment indefinitely. A live demo for 30 days is sufficient evidence; teardown is acceptable thereafter.
- Building multi-region infrastructure. One region, one service, one writeup.

**What counts as complete**
One publicly reachable deployment at a non-Vercel provider (or a documented teardown with screenshots and logs). One comparison writeup on the portfolio.

**Why this exists**
Roughly 85% of UK junior postings name AWS, GCP, or Azure explicitly (MARKET_CRITERIA.md §A). Vercel is a specialised platform; exposure to a second provider signals portability.
</details>

- [ ] [Work through ByteByteGo system design basics and publish a primer post](https://bytebytego.com/courses/system-design-interview) (MKT-04)

<details>
<summary>More info · MKT-04 · System design basics</summary>

**What to do**
Work through the ByteByteGo System Design Interview primer (the free introductory chapters and the public YouTube series), *Grokking the System Design Interview* summaries, and the HighScalability blog's primer posts. Focus on the eight primitives usually tested at junior level: load balancers, caching, CDN, databases (relational vs key-value vs document), message queues, rate limiting, leader-follower replication, and observability basics.

Publish one post on the portfolio walking through the system design of one of the shipped AI applications — AIP-03, AIP-04, or the MKT-02 split-stack app — at a whiteboard level. Diagrams are expected.

**What not to worry about**
- Learning senior-level system design. The target is "can articulate a junior-appropriate architecture out loud without panicking" — not architecture astronauts.
- Perfect diagrams. Hand-drawn on paper then photographed is acceptable.

**What counts as complete**
One primer post on the portfolio walking through the architecture of a shipped app, covering the eight primitives named above. Notes from the ByteByteGo and Grokking sources committed privately or to a notes repository.

**Why this exists**
JOB-07 (Phase 5) requires mock technical interviews covering "DSA plus system design basics plus AI-product design". Without a prerequisite study artefact, JOB-07 starts from zero — this task lifts the floor before the active hunt begins.
</details>

- [ ] Commission an external calibration: senior engineer walkthrough and hiring-manager feedback (ACC-03)

<details>
<summary>More info · ACC-03 · External calibration</summary>

**What to do**
Ask a senior engineer (the advocate contact or referrals from them) to walk through the portfolio and provide honest feedback. Separately, ask one UK engineering hiring manager to review and share what they would flag in a real application review. Incorporate the feedback.
</details>

- [ ] Add twenty senior engineers and UK AI hiring managers on LinkedIn (NET-05)

<details>
<summary>More info · NET-05 · Senior engineers and hiring managers</summary>

**What to do**
Add approximately twenty connections comprising senior engineers, engineering managers, and heads of AI or engineering at the UK companies on your shortlist for Phase 5. Pre-positions the network ahead of the active job hunt. Use templates 4 and 5 in `content/linkedin-templates.md` ("senior engineer engaged with" and "UK engineering leader at a target company").

**What not to worry about**
- Requesting anything. This is network *building*, not network *activation*. Asks come later via JOB-06.
- Reaching every target. The shortlist will exceed twenty; pick the top twenty where there is something specific to reference.

**What counts as complete**
Twenty personalised connection requests sent. Each references a specific piece of recent public output from the recipient or their company. Outcomes tracked privately. The connections are in place *before* applications start, not during.

**Why this phase**
Hiring managers and senior engineers respond poorly to cold outreach from applicants who have no prior context with them. Connecting now — four to six months before JOB-06 messages begin — converts cold outreach into warm follow-up on an established thread.
</details>

- [ ] Publish a LinkedIn phase-completion post summarising Phase 4 output (SOC-03)

<details>
<summary>More info · SOC-03 · Phase 4 close post</summary>

**What to do**
Professional LinkedIn post at Phase 4 close. Lead with the RAG or agentic application and one non-obvious lesson from the fine-tuning or MLOps work.
</details>

- [ ] Publish LinkedIn launch posts for AIP-03 and AIP-04 (SOC-04)

<details>
<summary>More info · SOC-04 · RAG and agent launch posts</summary>

**What to do**
One LinkedIn post per shipped project. Include a short demo video or screen recording for each.
</details>

- [ ] Publish a calibration post on LinkedIn after the external review (SOC-05)

<details>
<summary>More info · SOC-05 · Post-calibration reflection</summary>

**What to do**
Publish a post reflecting on the external calibration (ACC-03) — what the senior engineer flagged, what the hiring manager said, what is being adjusted. Honest reflection is stronger signal than polished claims.
</details>

## Resources

- [LangGraph docs](https://langchain-ai.github.io/langgraph/) — free
- [Model Context Protocol spec](https://modelcontextprotocol.io/) — Anthropic
- [Sentry free tier](https://sentry.io/) — MLOps monitoring
- [GitHub Actions](https://docs.github.com/en/actions) — free for public repos
- [Hugging Face Hub](https://huggingface.co/) — model hosting
