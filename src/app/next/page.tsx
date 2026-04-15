import Link from 'next/link'
import { getNextActionableTask, getPhases, parseTasks } from '@/lib/content'
import { computePhaseProgress } from '@/lib/progress'
import { ProgressBar } from '@/components/ProgressBar'
import { StuckCard } from '@/components/StuckCard'

export const metadata = {
  title: 'Next action — David Buckley',
}

export default function NextPage() {
  const next = getNextActionableTask()
  const phases = getPhases()
  const activePhases = phases.filter((p) => p.status === 'active')

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 space-y-10">
      <header className="space-y-2">
        <h1 className="text-3xl font-serif tracking-tight">Next action</h1>
        <p className="text-neutral-600">
          The single next item to work on, pulled from the active phase&apos;s task list.
        </p>
      </header>

      {next ? (
        <section className="border border-neutral-200 rounded-sm p-6 space-y-4">
          <div className="space-y-1">
            <p className="text-xs uppercase tracking-wider text-neutral-500">
              Phase {next.phase.number} · {next.phase.name}
            </p>
            <h2 className="text-xl font-medium text-neutral-900">{next.task.text}</h2>
            {next.task.reqId && (
              <p className="text-xs text-neutral-500">Requirement: {next.task.reqId}</p>
            )}
          </div>

          {next.task.url && (
            <div className="pt-2">
              <a
                href={next.task.url}
                className="inline-block text-sm font-medium border border-neutral-900 bg-neutral-900 text-white px-4 py-2 rounded-sm hover:bg-neutral-700 hover:border-neutral-700 transition-colors"
              >
                Open resource →
              </a>
            </div>
          )}

          <div className="border-t border-neutral-200 pt-4 text-sm text-neutral-700 space-y-2">
            <p className="font-medium text-neutral-900">Session workflow</p>
            <ol className="list-decimal list-inside space-y-1 text-neutral-700">
              <li>
                Run <code className="text-xs bg-neutral-100 px-1 py-0.5 rounded">npm run study:start</code> in the repository terminal.
              </li>
              <li>Work through the resource above. Write notes in the journal file that opens.</li>
              <li>
                Run <code className="text-xs bg-neutral-100 px-1 py-0.5 rounded">npm run study:end</code>, summarise what shipped, commit and push.
              </li>
            </ol>
          </div>
        </section>
      ) : (
        <section className="border border-neutral-200 rounded-sm p-6">
          <p className="text-neutral-700">
            No incomplete tasks in the active phase. The current phase may be ready to close.
          </p>
        </section>
      )}

      {activePhases.length > 0 && (
        <section className="space-y-4">
          <h2 className="text-lg font-medium">Active phase progress</h2>
          <ul className="space-y-4">
            {activePhases.map((phase) => {
              const prog = computePhaseProgress(phase.content)
              const tasks = parseTasks(phase.content)
              const remaining = tasks.filter((t) => !t.checked).slice(0, 5)
              return (
                <li key={phase.slug} className="border border-neutral-200 rounded-sm p-5 space-y-3">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-base font-medium">
                      <span className="text-neutral-500">
                        {String(phase.number).padStart(2, '0')}
                      </span>{' '}
                      {phase.name}
                    </h3>
                    <Link
                      href={`/phases/${phase.slug}`}
                      className="text-xs text-neutral-500 hover:text-neutral-900"
                    >
                      Phase page →
                    </Link>
                  </div>
                  <ProgressBar percent={prog.percent} />
                  <p className="text-xs text-neutral-500">
                    {prog.completed} of {prog.total} tasks complete
                  </p>
                  {remaining.length > 0 && (
                    <ul className="text-sm space-y-1 pt-1">
                      {remaining.map((t, i) => (
                        <li key={i} className="text-neutral-600">
                          {t.url ? (
                            <a
                              href={t.url}
                              className="underline underline-offset-4 hover:text-neutral-900"
                            >
                              {t.text}
                            </a>
                          ) : (
                            t.text
                          )}
                          {t.reqId && (
                            <span className="text-neutral-400"> ({t.reqId})</span>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </section>
      )}

      <StuckCard />
    </main>
  )
}
