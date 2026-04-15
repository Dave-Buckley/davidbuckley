import Link from 'next/link'
import { getPhases } from '@/lib/content'
import { computePhaseProgress } from '@/lib/progress'
import { ProgressBar } from '@/components/ProgressBar'

export default function PhasesPage() {
  const phases = getPhases()

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-serif tracking-tight">Phases</h1>
        <p className="text-neutral-600">
          The eighteen-month programme is organised into six phases. Each phase has a defined
          window, a status, and a set of concrete deliverables tracked below.
        </p>
      </header>

      <ul className="space-y-6">
        {phases.map((p) => {
          const prog = computePhaseProgress(p.content)
          return (
            <li key={p.slug} className="border-b border-neutral-200 pb-6">
              <Link
                href={`/phases/${p.slug}`}
                className="block space-y-2 hover:bg-neutral-50 -mx-2 px-2 py-2 rounded-sm transition-colors"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h2 className="text-lg font-medium">
                    <span className="text-neutral-500">
                      {String(p.number).padStart(2, '0')}
                    </span>{' '}
                    {p.name}
                  </h2>
                  <span className="text-xs uppercase tracking-wider text-neutral-500">
                    {p.status}
                  </span>
                </div>
                <p className="text-sm text-neutral-600">{p.window}</p>
                <ProgressBar percent={prog.percent} />
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
