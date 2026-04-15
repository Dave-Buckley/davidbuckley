import type { PhaseProgress } from './types'
export type { PhaseProgress }

const TASK_LINE = /^- \[[ xX]\]/
const CHECKED_LINE = /^- \[[xX]\]/

export function computePhaseProgress(rawMarkdown: string): PhaseProgress {
  const lines = rawMarkdown.split('\n').filter((l) => TASK_LINE.test(l))
  const completed = lines.filter((l) => CHECKED_LINE.test(l)).length
  const total = lines.length
  return {
    completed,
    total,
    percent: total > 0 ? Math.round((completed / total) * 100) : 0,
  }
}

export function computeOverallProgress(phases: PhaseProgress[]): number {
  const totalTasks = phases.reduce((s, p) => s + p.total, 0)
  const completedTasks = phases.reduce((s, p) => s + p.completed, 0)
  return totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0
}
