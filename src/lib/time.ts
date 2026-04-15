const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })

export function formatRelativeTime(date: string | Date | null): string {
  if (!date) return 'never'
  const then = typeof date === 'string' ? new Date(date) : date
  const now = new Date()
  const diffMs = then.getTime() - now.getTime()
  const diffDays = Math.round(diffMs / (1000 * 60 * 60 * 24))
  if (diffDays === 0) return 'today'
  if (Math.abs(diffDays) < 7) return rtf.format(diffDays, 'day')
  if (Math.abs(diffDays) < 30) return rtf.format(Math.round(diffDays / 7), 'week')
  return rtf.format(Math.round(diffDays / 30), 'month')
}
