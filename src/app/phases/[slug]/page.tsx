import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getPhases, getPhaseBySlug, getProjects } from '@/lib/content'
import { computePhaseProgress } from '@/lib/progress'
import { renderMarkdown } from '@/lib/markdown'
import { ProgressBar } from '@/components/ProgressBar'
import { StuckCard } from '@/components/StuckCard'

export async function generateStaticParams() {
  return getPhases().map((p) => ({ slug: p.slug }))
}

export default async function PhaseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const phase = getPhaseBySlug(slug)
  if (!phase) notFound()

  const prog = computePhaseProgress(phase.content)
  const html = await renderMarkdown(phase.content)
  const artifacts = getProjects().filter(
    (pr) => pr.phase === phase.number && pr.status === 'shipped',
  )

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 space-y-8">
      <Link href="/phases" className="text-sm text-neutral-500 hover:text-neutral-900">
        ← All phases
      </Link>

      <header className="space-y-2">
        <p className="text-xs uppercase tracking-wider text-neutral-500">
          {phase.status} · {phase.window}
        </p>
        <h1 className="text-3xl font-serif tracking-tight">
          <span className="text-neutral-500">{String(phase.number).padStart(2, '0')}</span>{' '}
          {phase.name}
        </h1>
        <div className="pt-2">
          <ProgressBar percent={prog.percent} />
        </div>
        <p className="text-xs text-neutral-500">
          {prog.completed} of {prog.total} tasks
        </p>
      </header>

      <article
        className="prose prose-neutral max-w-none prose-headings:font-serif prose-a:text-neutral-900 prose-a:underline-offset-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />

      {phase.status === 'active' && <StuckCard />}

      {artifacts.length > 0 && (
        <section className="border-t border-neutral-200 pt-6">
          <h2 className="text-lg font-medium mb-3">Artifacts shipped</h2>
          <ul className="space-y-2">
            {artifacts.map((pr) => (
              <li key={pr.slug}>
                <Link href={`/projects/${pr.slug}`} className="underline underline-offset-4">
                  {pr.title}
                </Link>
                <span className="text-neutral-500"> — {pr.summary}</span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </main>
  )
}
