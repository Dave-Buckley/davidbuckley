import Link from 'next/link'
import { getPhases, getNextActionableTask, parseTasks } from '@/lib/content'
import { computePhaseProgress, computeOverallProgress } from '@/lib/progress'
import { getContributionData } from '@/lib/github'
import { formatRelativeTime } from '@/lib/time'
import { ProgressBar } from '@/components/ProgressBar'
import { Heatmap } from '@/components/Heatmap'

export const revalidate = false

export default async function HomePage() {
  const phases = getPhases()
  const phaseProgress = phases.map((p) => ({ phase: p, prog: computePhaseProgress(p.content) }))
  const overallPercent = computeOverallProgress(phaseProgress.map((x) => x.prog))
  const active = phaseProgress.find((x) => x.phase.status === 'active') ?? phaseProgress[0]
  const username = process.env.GITHUB_USERNAME ?? 'Dave-Buckley'
  const { days, lastCommitDate } = await getContributionData(username)
  const next = getNextActionableTask()

  const totalTasks = phaseProgress.reduce((s, x) => s + x.prog.total, 0)
  const completedTasks = phaseProgress.reduce((s, x) => s + x.prog.completed, 0)
  const completePhases = phases.filter((p) => p.status === 'complete').length
  const totalPhases = phases.length
  const activeDays = days.filter((d) => d.contributionCount > 0).length

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 space-y-10">
      <header className="space-y-3">
        <h1 className="text-5xl font-serif tracking-tight text-neutral-900">David Buckley</h1>
        <p className="text-lg text-neutral-600">Junior software engineer, UK.</p>
        <p className="text-sm text-neutral-700">A structured programme, shipping in public.</p>
      </header>

      <div className="flex flex-wrap gap-x-6 gap-y-2 border-y border-neutral-200 py-3 text-sm">
        <div className="text-neutral-600">
          <span className="text-neutral-900 font-medium tabular-nums">{completedTasks}</span>
          <span className="text-neutral-400">/</span>
          <span className="tabular-nums">{totalTasks}</span> tasks
        </div>
        <div className="text-neutral-600">
          <span className="text-neutral-900 font-medium tabular-nums">{completePhases}</span>
          <span className="text-neutral-400">/</span>
          <span className="tabular-nums">{totalPhases}</span> phases
        </div>
        <div className="text-neutral-600">
          <span className="text-neutral-900 font-medium tabular-nums">{activeDays}</span>{' '}
          active days (30d)
        </div>
        <div className="text-neutral-600 ml-auto">
          Last shipped:{' '}
          <span className="text-neutral-900 font-medium">{formatRelativeTime(lastCommitDate)}</span>
        </div>
      </div>

      {active && (
        <section className="space-y-2">
          <p className="text-sm text-neutral-600">
            Phase {active.phase.number} — {active.phase.name}
          </p>
          <ProgressBar percent={overallPercent} showPercent variant="active" />
        </section>
      )}

      <section>
        <Heatmap days={days} />
      </section>

      {next && (
        <section className="border-l-4 border-amber-700 border-y border-r border-amber-200 bg-amber-50 rounded-sm p-5 space-y-3">
          <p className="text-xs uppercase tracking-wider text-amber-900 font-medium">
            Next action · Phase {next.phase.number}
          </p>
          <p className="text-base text-neutral-900 font-medium">{next.task.text}</p>
          <div className="flex flex-wrap gap-3 pt-1">
            {next.task.url && (
              <a
                href={next.task.url}
                className="text-sm font-medium border border-amber-700 bg-amber-700 text-white px-3 py-1.5 rounded-sm hover:bg-amber-800 hover:border-amber-800 transition-colors"
              >
                Open resource →
              </a>
            )}
            <Link
              href="/progress"
              className="text-sm font-medium border border-neutral-300 bg-white px-3 py-1.5 rounded-sm hover:border-neutral-900 transition-colors"
            >
              Progress
            </Link>
          </div>
        </section>
      )}

      <nav className="space-y-1 text-base">
        <Link
          href="/projects"
          className="flex justify-between py-2 hover:text-neutral-500 transition-colors border-b border-neutral-100"
        >
          <span>Projects</span>
          <span>→</span>
        </Link>
        <Link
          href="/journal"
          className="flex justify-between py-2 hover:text-neutral-500 transition-colors border-b border-neutral-100"
        >
          <span>Journal</span>
          <span>→</span>
        </Link>
        <Link
          href="/phases"
          className="flex justify-between py-2 hover:text-neutral-500 transition-colors border-b border-neutral-100"
        >
          <span>Phases</span>
          <span>→</span>
        </Link>
        <Link
          href="/about"
          className="flex justify-between py-2 hover:text-neutral-500 transition-colors border-b border-neutral-100"
        >
          <span>About</span>
          <span>→</span>
        </Link>
      </nav>

      <p className="text-sm text-neutral-600">
        See the{' '}
        <Link href="/phases" className="underline underline-offset-4 hover:text-neutral-900">
          full programme
        </Link>{' '}
        for the complete curriculum and live progress.
      </p>
    </main>
  )
}
