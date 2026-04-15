import Link from 'next/link'
import { getPhases } from '@/lib/content'
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
  const username = process.env.GITHUB_USERNAME ?? 'davidbuckley'
  const { days, lastCommitDate } = await getContributionData(username)

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 space-y-12">
      <header className="space-y-2">
        <h1 className="text-4xl font-serif tracking-tight text-neutral-900">davidbuckley</h1>
        <p className="text-lg text-neutral-600">Junior software engineer, UK.</p>
      </header>

      <hr className="border-neutral-200" />

      <section className="space-y-4">
        <p className="text-sm text-neutral-700">18-month pivot, shipping in public.</p>
        {active && (
          <div>
            <p className="text-sm text-neutral-600 mb-1">
              Phase {active.phase.number} — {active.phase.name}
            </p>
            <ProgressBar percent={overallPercent} showPercent />
          </div>
        )}
        <p className="text-xs text-neutral-500">
          Last shipped:{' '}
          <span className="text-neutral-900">{formatRelativeTime(lastCommitDate)}</span>
        </p>
      </section>

      <section>
        <Heatmap days={days} />
      </section>

      <hr className="border-neutral-200" />

      <nav className="space-y-2 text-base">
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
        Follow along:{' '}
        <Link href="/phases" className="underline underline-offset-4 hover:text-neutral-900">
          the full programme
        </Link>{' '}
        — everything is free, steal it if you want it.
      </p>
    </main>
  )
}
