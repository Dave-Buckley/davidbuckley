import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getProjects, getProjectBySlug } from '@/lib/content'
import { renderMarkdown } from '@/lib/markdown'

export async function generateStaticParams() {
  return getProjects().map((p) => ({ slug: p.slug }))
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProjectBySlug(slug)
  if (!project) notFound()

  const html = await renderMarkdown(project.content)

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 space-y-8">
      <Link href="/projects" className="text-sm text-neutral-500 hover:text-neutral-900">
        ← All projects
      </Link>

      <header className="space-y-3">
        <p className="text-xs uppercase tracking-wider text-neutral-500">
          Phase {project.phase} · {project.status}
        </p>
        <h1 className="text-3xl font-serif tracking-tight">{project.title}</h1>
        <p className="text-neutral-600">{project.summary}</p>
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm pt-2">
          {project.live_url && (
            <a href={project.live_url} className="underline underline-offset-4">
              Live demo ↗
            </a>
          )}
          {project.repo_url && (
            <a href={project.repo_url} className="underline underline-offset-4">
              Repo ↗
            </a>
          )}
        </div>
      </header>

      <article
        className="prose prose-neutral max-w-none prose-headings:font-serif prose-a:text-neutral-900 prose-a:underline-offset-4"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  )
}
