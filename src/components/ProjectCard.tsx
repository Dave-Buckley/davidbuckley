import Link from 'next/link'
import type { Phase, Project } from '@/lib/types'

interface ProjectCardProps {
  phase: Phase
  project: Project | null
}

export function ProjectCard({ phase, project }: ProjectCardProps) {
  const isLive = project && project.status === 'shipped'
  return (
    <div
      className={`border border-neutral-200 rounded-sm p-5 ${isLive ? '' : 'bg-neutral-50 opacity-70'}`}
    >
      <div className="flex items-baseline justify-between gap-2 mb-2">
        <p className="text-xs uppercase tracking-wider text-neutral-500">Phase {phase.number}</p>
        <span className="text-xs uppercase tracking-wider text-neutral-500">
          {isLive ? 'Live' : 'Planned'}
        </span>
      </div>
      <h3 className="text-lg font-medium mb-1">{project?.title ?? phase.name}</h3>
      <p className="text-sm text-neutral-600 mb-3">
        {project?.summary ?? `Planned deliverable for Phase ${phase.number}.`}
      </p>
      {isLive && project && (
        <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm">
          {project.live_url && (
            <a
              href={project.live_url}
              className="underline underline-offset-4 hover:text-neutral-500"
            >
              Live demo ↗
            </a>
          )}
          {project.repo_url && (
            <a
              href={project.repo_url}
              className="underline underline-offset-4 hover:text-neutral-500"
            >
              Repo ↗
            </a>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className="underline underline-offset-4 hover:text-neutral-500"
          >
            Writeup →
          </Link>
        </div>
      )}
    </div>
  )
}
