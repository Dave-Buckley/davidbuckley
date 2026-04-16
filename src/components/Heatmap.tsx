import type { ContributionDay } from '@/lib/github'

interface HeatmapProps {
  days: ContributionDay[]
  className?: string
}

function intensityClass(count: number): string {
  if (count === 0) return 'bg-neutral-200'
  if (count < 2) return 'bg-amber-300'
  if (count < 5) return 'bg-amber-500'
  return 'bg-amber-700'
}

export function Heatmap({ days, className = '' }: HeatmapProps) {
  const cells: ContributionDay[] =
    days.length >= 30
      ? days.slice(-30)
      : [...Array(30 - days.length).fill({ date: '', contributionCount: 0 }), ...days]

  const totalCommits = cells.reduce((sum, c) => sum + c.contributionCount, 0)
  const activeDays = cells.filter((c) => c.contributionCount > 0).length

  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex items-baseline justify-between gap-2">
        <p className="text-xs uppercase tracking-wider text-neutral-500">30-day activity</p>
        <p className="text-xs text-neutral-500 tabular-nums">
          <span className="text-neutral-900 font-medium">{activeDays}</span> active days ·{' '}
          <span className="text-neutral-900 font-medium">{totalCommits}</span> commits
        </p>
      </div>
      <div
        className="grid grid-cols-[repeat(30,1fr)] gap-1.5 p-3 border border-neutral-200 rounded-sm bg-white"
        aria-label="30-day commit heatmap"
      >
        {cells.map((d, i) => (
          <div
            key={d.date || `blank-${i}`}
            className={`aspect-square rounded-sm ${intensityClass(d.contributionCount)}`}
            title={d.date ? `${d.date}: ${d.contributionCount} commits` : 'no data'}
          />
        ))}
      </div>
    </div>
  )
}
