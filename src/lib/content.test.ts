import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'

let tmpRoot: string
let originalCwd: string

beforeEach(() => {
  tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'dbportfolio-'))
  originalCwd = process.cwd()
  process.chdir(tmpRoot)
  fs.mkdirSync(path.join(tmpRoot, 'content', 'phases'), { recursive: true })
  fs.mkdirSync(path.join(tmpRoot, 'content', 'journal'), { recursive: true })
  fs.mkdirSync(path.join(tmpRoot, 'content', 'projects'), { recursive: true })
  vi.resetModules()
})

afterEach(() => {
  process.chdir(originalCwd)
  fs.rmSync(tmpRoot, { recursive: true, force: true })
})

function write(rel: string, contents: string) {
  const p = path.join(tmpRoot, rel)
  fs.mkdirSync(path.dirname(p), { recursive: true })
  fs.writeFileSync(p, contents)
}

describe('getPhases', () => {
  it('returns empty array when no phase files exist', async () => {
    const { getPhases } = await import('./content')
    expect(getPhases()).toEqual([])
  })

  it('sorts phases by frontmatter number ascending', async () => {
    write(
      'content/phases/03-c.md',
      `---\nnumber: 3\nname: C\nwindow: Month 6\nstatus: planned\n---\nbody`,
    )
    write(
      'content/phases/01-a.md',
      `---\nnumber: 1\nname: A\nwindow: Month 1\nstatus: active\n---\nbody`,
    )
    write(
      'content/phases/02-b.md',
      `---\nnumber: 2\nname: B\nwindow: Month 3\nstatus: planned\n---\nbody`,
    )
    const { getPhases } = await import('./content')
    const phases = getPhases()
    expect(phases.map((p) => p.number)).toEqual([1, 2, 3])
    expect(phases[0]).toMatchObject({ name: 'A', status: 'active', slug: '01-a' })
  })
})

describe('getProjects', () => {
  it('returns projects with all required fields', async () => {
    write(
      'content/projects/portfolio.md',
      `---\ntitle: Portfolio\nphase: 1\nstatus: shipped\nlive_url: https://davidbuckley.vercel.app\nrepo_url: https://github.com/davidbuckley/davidbuckley\nsummary: This site.\n---\nbody`,
    )
    const { getProjects } = await import('./content')
    const projects = getProjects()
    expect(projects).toHaveLength(1)
    expect(projects[0]).toMatchObject({
      title: 'Portfolio',
      phase: 1,
      status: 'shipped',
      live_url: 'https://davidbuckley.vercel.app',
      repo_url: 'https://github.com/davidbuckley/davidbuckley',
      summary: 'This site.',
    })
  })

  it('allows null live_url/repo_url for planned projects', async () => {
    write(
      'content/projects/future.md',
      `---\ntitle: Future\nphase: 3\nstatus: planned\nsummary: TBD\n---\nbody`,
    )
    const { getProjects } = await import('./content')
    const [p] = getProjects()
    expect(p.live_url).toBeNull()
    expect(p.repo_url).toBeNull()
  })
})

describe('getJournalEntries', () => {
  it('sorts entries by date descending (newest first)', async () => {
    write(
      'content/journal/2026-04-10.md',
      `---\ndate: 2026-04-10\nphase: 1\n---\nearlier`,
    )
    write(
      'content/journal/2026-04-16.md',
      `---\ndate: 2026-04-16\nphase: 1\n---\nlater`,
    )
    const { getJournalEntries } = await import('./content')
    const entries = getJournalEntries()
    expect(entries.map((e) => e.date)).toEqual(['2026-04-16', '2026-04-10'])
  })
})

describe('getPhaseBySlug', () => {
  it('returns null for missing slug', async () => {
    const { getPhaseBySlug } = await import('./content')
    expect(getPhaseBySlug('nope')).toBeNull()
  })
})

describe('renderMarkdown', () => {
  it('renders GFM task list checkboxes as HTML inputs', async () => {
    const { renderMarkdown } = await import('./markdown')
    const html = await renderMarkdown('- [x] done\n- [ ] todo\n')
    expect(html).toContain('<input')
    expect(html).toMatch(/type="checkbox"/)
  })
})
