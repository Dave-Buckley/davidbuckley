import Link from 'next/link'
import { getPhases } from '@/lib/content'
import { computePhaseProgress } from '@/lib/progress'
import { ProgressBar } from '@/components/ProgressBar'
import { StatusPill } from '@/components/StatusPill'

export default function PhasesPage() {
  const phases = getPhases()

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-serif tracking-tight">Phases</h1>
        <p className="text-neutral-600">
          The programme is organised into five phases. Each phase has a defined status and a set
          of concrete deliverables tracked below.
        </p>
      </header>

      <ul className="space-y-4">
        {phases.map((p) => {
          const prog = computePhaseProgress(p.content)
          const isActive = p.status === 'active'
          const isComplete = p.status === 'complete'
          const borderColor = isActive
            ? 'border-amber-200 ring-1 ring-amber-100'
            : isComplete
              ? 'border-green-200'
              : 'border-neutral-200'
          const variant = isActive ? 'active' : isComplete ? 'complete' : 'default'
          return (
            <li key={p.slug}>
              <Link
                href={`/phases/${p.slug}`}
                className={`block space-y-3 border ${borderColor} rounded-sm p-5 hover:border-neutral-400 transition-colors bg-white`}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-lg font-medium flex items-baseline gap-2">
                    <span className="text-neutral-500">
                      {String(p.number).padStart(2, '0')}
                    </span>{' '}
                    {p.name}
                  </h2>
                  <StatusPill status={p.status} />
                </div>
                <ProgressBar percent={prog.percent} variant={variant} />
                <p className="text-xs text-neutral-500">
                  {prog.completed} of {prog.total} tasks
                </p>
              </Link>
            </li>
          )
        })}
      </ul>
    </main>
  )
}
