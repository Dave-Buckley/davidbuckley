interface ProgressBarProps {
  percent: number
  label?: string
  showPercent?: boolean
  className?: string
}

export function ProgressBar({ percent, label, showPercent = true, className = '' }: ProgressBarProps) {
  const clamped = Math.max(0, Math.min(100, percent))
  return (
    <div className={`w-full ${className}`}>
      {label && <div className="mb-1 text-sm text-neutral-600">{label}</div>}
      <div className="flex items-center gap-3">
        <div className="flex-1 h-2 rounded-full bg-neutral-200 overflow-hidden">
          <div
            className="h-full bg-neutral-900 transition-[width]"
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
