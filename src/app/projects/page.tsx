import { getPhases, getProjects } from '@/lib/content'
import { ProjectCard } from '@/components/ProjectCard'

export default function ProjectsPage() {
  const phases = getPhases()
  const projects = getProjects()

  return (
    <main className="max-w-3xl mx-auto px-6 py-16 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-serif tracking-tight">Projects</h1>
        <p className="text-neutral-600">
          One shipped project per phase — live demo, public repo, Problem → Approach → Results
          writeup for each.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {phases.map((phase) => {
          const shipped =
            projects.find((p) => p.phase === phase.number && p.status === 'shipped') ?? null
          return <ProjectCard key={phase.number} phase={phase} project={shipped} />
        })}
      </div>
    </main>
  )
}
