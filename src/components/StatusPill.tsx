import type { PhaseStatus } from '@/lib/types'

const STYLES: Record<PhaseStatus, string> = {
  active: 'bg-amber-100 text-amber-900 border-amber-200',
  planned: 'bg-neutral-100 text-neutral-600 border-neutral-200',
  complete: 'bg-green-100 text-green-900 border-green-200',
}

const LABELS: Record<PhaseStatus, string> = {
  active: 'Active',
  planned: 'Planned',
  complete: 'Complete',
}

export function StatusPill({ status }: { status: PhaseStatus }) {
  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full border ${STYLES[status]}`}
    >
      {LABELS[status]}
    </span>
  )
}
