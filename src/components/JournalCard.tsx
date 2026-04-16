import Link from 'next/link'
import type { JournalEntry } from '@/lib/types'

interface JournalCardProps {
  entry: JournalEntry
  preview?: string
}

export function JournalCard({ entry, preview }: JournalCardProps) {
  const date = new Date(entry.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
  return (
    <Link
      href={`/journal/${entry.slug}`}
      className="block py-4 border-b border-neutral-200 hover:bg-neutral-50 transition-colors"
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="text-lg font-medium text-neutral-900">{date}</h2>
        <span className="text-xs text-neutral-500">
          {entry.phase > 0 ? `Phase ${entry.phase}` : 'Setup'}
        </span>
      </div>
      {preview && <p className="mt-1 text-sm text-neutral-600 line-clamp-2">{preview}</p>}
    </Link>
  )
}
