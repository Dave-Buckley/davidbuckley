---
number: 1
name: "Programming & CS Fundamentals"
window: ""
status: active
---

Establish a foundation in Python, computer science fundamentals, data structures and algorithms, professional Git workflow, and core systems and networking concepts. Each topic is evidenced through working code and technical writeups rather than certificates alone.

## Tasks

- [ ] [Complete CS50P and ship three Python artefacts with writeups](https://cs50.harvard.edu/python/) (FND-01)

<details>
<summary>More info · FND-01 · CS50P</summary>

**What to do**
Work through all ten weeks of CS50P directly on `cs50.harvard.edu/python/`. Each week: watch the lecture, attempt the problem set. No course account or enrolment is required — the materials are free and open.

After (or alongside) the course, ship three substantial Python artefacts beyond the problem sets: small command-line tools, scripts, or mini-applications. Each gets its own public GitHub repository with a `README.md` describing problem, approach, and usage.

**What not to worry about**
- Do not enrol in the paid edX verified-certificate track. Ignore it.
- Do not enrol in the edX audit track unless you specifically want automated problem-set grading through edX. The course content is identical on the free `cs50.harvard.edu/python/` site.
- `check50` and `submit50` (CS50's command-line grading tools) are optional. Your own code + tests in a public repository are sufficient evidence.

**What counts as complete**
All ten weeks' problem sets solved and committed to a personal repository. Three additional Python artefacts shipped as separate public repositories with READMEs. The final project for CS50P linked from this portfolio.

**Where progress is tracked**
This site. Start each session with `npm run study:start`; close it with `npm run study:end`. Commits accrue on the GitHub contributions graph and the homepage heatmap. Tick this task in the phase file when the deliverables above are in place.
</details>

- [ ] [Complete MIT Missing Semester and demonstrate Git and CLI fluency in commit history](https://missing.csail.mit.edu/) (FND-04)

<details>
<summary>More info · FND-04 · Missing Semester</summary>

**What to do**
Work through all eleven lectures of MIT's Missing Semester. Each lecture has a video, notes, and exercises. Complete the exercises by running commands in a real terminal and committing any resulting scripts to a dedicated repository.

**What not to worry about**
- The course assumes a Unix shell. On Windows, use Git Bash, WSL, or PowerShell with the commands translated where needed. Notes on differences are in the lecture pages.
- Not every exercise produces a shippable artefact. That is expected — some lectures are about fluency, not deliverables.

**What counts as complete**
All eleven lecture exercises attempted. Commit history in other programme repositories demonstrably clean: meaningful commit messages, feature branches where appropriate, no bulk "fix stuff" commits.

**Why this comes early**
Shell fluency and Git hygiene compound across every subsequent phase. Doing this after CS50P Week 0 means every future commit is practising the right habits.
</details>

- [ ] [Complete Harvard CS50x with a publicly linked final project](https://cs50.harvard.edu/x/) (FND-02)

<details>
<summary>More info · FND-02 · CS50x</summary>

**What to do**
Complete all ten weeks of CS50x. This is the general computer-science course: C, arrays, algorithms, memory, data structures, Python refresher, SQL, web basics. The final project is your choice — a substantial piece of work that demonstrates multiple concepts from the course.

**What not to worry about**
- C will feel alien if you are coming from Python. That is the point. Writing memory-managed code once makes every language that follows easier to reason about.
- Ignore paid edX certificate offers.

**What counts as complete**
All problem sets solved, the final project shipped to a public repository with a README, and the CS50x final project page linked from this portfolio.

**Why this follows CS50P**
CS50P establishes Python fluency. CS50x uses that fluency as a jumping-off point into systems thinking. The order matters — doing CS50x first without Python creates unnecessary friction.
</details>

- [ ] [Build a DSA repository of fifty LeetCode-style problems plus a patterns blog post](https://neetcode.io/roadmap) (FND-03)

<details>
<summary>More info · FND-03 · DSA repository</summary>

**What to do**
Create a dedicated public repository for data-structures-and-algorithms practice. Work through the NeetCode Roadmap, grouping problems by pattern: arrays and two-pointer, sliding window, binary search, linked lists, trees, graphs, dynamic programming basics. Solve at least fifty problems in total.

For each problem, commit a solution file named after the problem. Include a short comment block at the top of each file stating the approach and time/space complexity.

After solving fifty, write a blog post summarising the three or four patterns that gave you the most trouble and how you learned to recognise them. Publish it as a markdown file in `content/` on this portfolio.

**What not to worry about**
- Solving problems optimally on the first attempt. Brute force first, optimise second, write the learning down third.
- The exact platform. LeetCode is the default but the same problems are on HackerRank, Codeforces, and others. The solutions and the learning are what matter.

**What counts as complete**
Fifty solved problems in a public repository, organised by pattern folder, with approach and complexity notes in every file. One accompanying blog post live on this portfolio.

**Sequencing**
Start this once Python is comfortable and CS50x is in progress. DSA practice without underlying CS fluency is memorisation; with it, it is genuine skill-building.
</details>

- [ ] Publish a blog post covering HTTP, DNS, TCP, and REST with a worked example (FND-08)

<details>
<summary>More info · FND-08 · Networking blog post</summary>

**What to do**
Write one substantial blog post for the portfolio explaining what happens between typing a URL into a browser and seeing the page render. Cover DNS resolution, TCP handshake, HTTP request/response, REST conventions, and the role of DNS caching and keep-alive connections. Use a concrete worked example — for instance, what happens when the browser requests `davidbuckley.vercel.app`.

**What not to worry about**
- Being exhaustive. Coverage of the four layers at a working-engineer level of understanding is sufficient. This is not a networking textbook.
- Getting every minor detail perfect. The post is an artefact of learning, not a Wikipedia article.

**What counts as complete**
One published post in `content/` (a new `content/blog/` directory is reasonable — or integrate into the journal), linked from the `/phases/01-programming-cs-fundamentals` page and the `/projects` page. Explains the full request lifecycle clearly enough that a non-specialist can follow.

**Source material**
Multiple free resources work: *High Performance Browser Networking* by Ilya Grigorik (free online), the Missing Semester networking lecture, and the HTTP chapters of *Computer Systems: A Programmer's Perspective*.
</details>

- [ ] [Read *Software Engineering at Google* and demonstrate practices in commits](https://abseil.io/resources/swe-book) (FND-07)

<details>
<summary>More info · FND-07 · SWE at Google</summary>

**What to do**
Read *Software Engineering at Google* — the open-access book on engineering practices at scale. Focus on the chapters covering code review, testing, style, and deprecation. As you read, apply what you learn to the existing programme repositories: introduce code review via pull requests to yourself, add tests before refactoring, keep style consistent.

**What not to worry about**
- Reading every chapter. It is a 600-page reference. Cover the practical chapters (parts II and III) in depth; skim the organisational chapters.
- Applying every practice immediately. The book describes practices appropriate for large engineering organisations. Select the handful that fit a solo learner.

**What counts as complete**
Read the core practical chapters. Demonstrate in recent commits across the programme repositories: proper commit messages, PR-based workflow where appropriate, test coverage on non-trivial changes, consistent style. A short personal writeup published to the portfolio summarising which practices transferred and which did not.

**Why this comes late in Phase 1**
The book is most valuable once you have actual code to apply its practices to. Reading it before CS50P finishes is premature.
</details>

- [ ] Add ten peer connections on LinkedIn using the peer-pivoter template (NET-02)

<details>
<summary>More info · NET-02 · Peer connections</summary>

**What to do**
Add approximately ten peer connections on LinkedIn — other engineers documenting a similar career transition, CS50 cohort members active in public channels, and contributors to public DSA repositories. Use template 2 in `content/linkedin-templates.md` ("peer engineer mid-transition").

**What not to worry about**
- Acceptance rate. A 40-60% acceptance rate is normal and sufficient.
- Matching all ten within a single week — pace across the phase.

**What counts as complete**
Ten personalised connection requests sent, each referencing a specific piece of the recipient's public work. Outcomes (sent / accepted / replied) recorded in a private tracking document.

**Why this phase**
Peer-pivoter connections are low-friction, build reciprocity early, and compound as both sides ship more public work across subsequent phases.
</details>

- [ ] Publish a LinkedIn phase-completion post summarising Phase 1 output (SOC-03)

<details>
<summary>More info · SOC-03 · Phase 1 close post</summary>

**What to do**
Write and publish a single LinkedIn post at the end of Phase 1 summarising what shipped: the CS50P and CS50x completions, the DSA repository, the networking post, and the key lesson from the SWE at Google reading. Include a link to the portfolio. Use a professional register — no casual slang, no filler.

**What not to worry about**
- Engagement metrics. The post is evidence of completion, not a marketing campaign.
- Hashtags beyond two or three relevant ones.

**What counts as complete**
Post published on LinkedIn with a link to the `/phases/01-programming-cs-fundamentals` page. Post URL pasted into `content/journal/phase-1-close.md` for the record.

**Template starting point**
See `content/linkedin-templates.md` in the repository. The post should stand on the work, not the framing — lead with what shipped, not with the pivot narrative.
</details>

## Recommended sequence

1. **CS50P Week 0** — Functions and Variables lecture, then Problem Set 0 (Indoor Voice)
2. **CS50P onwards** — work through problem sets in order, commit every session
3. **Missing Semester Lecture 1** — shell basics, begin after CS50P is flowing
4. **CS50x Week 0** — C-based introduction to computer science, run in parallel with CS50P
5. **DSA repository** — start with arrays and two-pointer patterns, aim for two to three problems per session

## Resources

- [CS50P — Introduction to Programming with Python](https://cs50.harvard.edu/python/) — free, Harvard
- [CS50x — Introduction to Computer Science](https://cs50.harvard.edu/x/) — free, Harvard
- [MIT Missing Semester](https://missing.csail.mit.edu/) — shell, Git, command-line fluency
- [NeetCode Roadmap](https://neetcode.io/roadmap) — structured DSA pattern sequence
- [Software Engineering at Google](https://abseil.io/resources/swe-book) — free online
- [LeetCode](https://leetcode.com/) — problem set for DSA repo
