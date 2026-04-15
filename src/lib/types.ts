export type PhaseStatus = 'planned' | 'active' | 'complete'
export type ProjectStatus = 'planned' | 'building' | 'shipped'

export interface Phase {
  number: number
  name: string
  window: string
  status: PhaseStatus
  slug: string
  content: string
}

export interface Project {
  title: string
  phase: number
  status: ProjectStatus
  live_url: string | null
  repo_url: string | null
  summary: string
  slug: string
  content: string
}

export interface JournalEntry {
  date: string
  phase: number
  slug: string
  content: string
}

export interface PhaseProgress {
  completed: number
  total: number
  percent: number
}
