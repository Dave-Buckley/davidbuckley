import type { ContributionDay } from '@/lib/github'

interface HeatmapProps {
  days: ContributionDay[]
  className?: string
}

function intensityClass(count: number): string {
  if (count === 0) return 'bg-neutral-200'
  if (count < 2) return 'bg-neutral-400'
  if (count < 5) return 'bg-neutral-600'
  return 'bg-neutral-900'
}

export function Heatmap({ days, className = '' }: HeatmapProps) {
  const cells: ContributionDay[] =
    days.length >= 30
      ? days.slice(-30)
      : [...Array(30 - days.length).fill({ date: '', contributionCount: 0 }), ...days]

  return (
    <div
      className={`grid grid-cols-[repeat(30,1fr)] gap-1 ${className}`}
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
  )
}
