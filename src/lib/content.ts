import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'
import type { Phase, Project, JournalEntry, PhaseStatus, ProjectStatus } from './types'

const CONTENT_DIR = () => path.join(process.cwd(), 'content')

function readDir(subdir: string): string[] {
  const dir = path.join(CONTENT_DIR(), subdir)
  if (!fs.existsSync(dir)) return []
  return fs.readdirSync(dir).filter((f) => f.endsWith('.md'))
}

function readFile(subdir: string, filename: string) {
  const raw = fs.readFileSync(path.join(CONTENT_DIR(), subdir, filename), 'utf8')
  return matter(raw)
}

export function getPhases(): Phase[] {
  const files = readDir('phases')
  const phases: Phase[] = files.map((filename) => {
    const { data, content } = readFile('phases', filename)
    return {
      number: Number(data.number),
      name: String(data.name ?? ''),
      window: String(data.window ?? ''),
      status: (data.status ?? 'planned') as PhaseStatus,
      slug: filename.replace(/\.md$/, ''),
      content,
    }
  })
  return phases.sort((a, b) => a.number - b.number)
}

export function getPhaseBySlug(slug: string): Phase | null {
  return getPhases().find((p) => p.slug === slug) ?? null
}

export function getProjects(): Project[] {
  const files = readDir('projects')
  return files
    .map((filename) => {
      const { data, content } = readFile('projects', filename)
      return {
        title: String(data.title ?? ''),
        phase: Number(data.phase),
        status: (data.status ?? 'planned') as ProjectStatus,
        live_url: data.live_url ? String(data.live_url) : null,
        repo_url: data.repo_url ? String(data.repo_url) : null,
        summary: String(data.summary ?? ''),
        slug: filename.replace(/\.md$/, ''),
        content,
      }
    })
    .sort((a, b) => a.phase - b.phase)
}

export function getProjectBySlug(slug: string): Project | null {
  return getProjects().find((p) => p.slug === slug) ?? null
}

function formatDate(raw: unknown, fallback: string): string {
  if (raw instanceof Date) return raw.toISOString().slice(0, 10)
  if (typeof raw === 'string' && raw.length > 0) return raw
  return fallback
}

export function getJournalEntries(): JournalEntry[] {
  const files = readDir('journal')
  const entries: JournalEntry[] = files.map((filename) => {
    const { data, content } = readFile('journal', filename)
    const slug = filename.replace(/\.md$/, '')
    return {
      date: formatDate(data.date, slug),
      phase: Number(data.phase ?? 0),
      slug,
      content,
    }
  })
  return entries.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getJournalEntryBySlug(slug: string): JournalEntry | null {
  return getJournalEntries().find((e) => e.slug === slug) ?? null
}
