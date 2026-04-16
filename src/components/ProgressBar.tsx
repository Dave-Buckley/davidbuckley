interface ProgressBarProps {
  percent: number
  label?: string
  showPercent?: boolean
  variant?: 'default' | 'active' | 'complete'
  className?: string
}

export function ProgressBar({
  percent,
  label,
  showPercent = true,
  variant = 'default',
  className = '',
}: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percent))
  const fillColor =
    variant === 'active'
      ? 'bg-amber-700'
      : variant === 'complete'
        ? 'bg-green-700'
        : 'bg-neutral-900'
  return (
    <div className={`w-full ${className}`}>
      {label && <div className="mb-1 text-sm text-neutral-600">{label}</div>}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 rounded-full bg-neutral-200 overflow-hidden">
          <div
            className={`h-full ${fillColor} transition-[width] duration-500`}
            style={{ width: `${clamped}%` }}
            aria-valuenow={clamped}
            aria-valuemin={0}
            aria-valuemax={100}
            role="progressbar"
          />
        </div>
        {showPercent && (
          <span className="text-sm tabular-nums text-neutral-700 min-w-[3ch] text-right">
            {clamped}%
          </span>
        )}
      </div>
    </div>
  )
}
