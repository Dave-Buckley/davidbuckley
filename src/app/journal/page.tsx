import { getJournalEntries } from '@/lib/content'
import { JournalCard } from '@/components/JournalCard'

export default function JournalPage() {
  const entries = getJournalEntries()

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 space-y-8">
      <header className="space-y-2">
        <h1 className="text-3xl font-serif tracking-tight">Journal</h1>
        <p className="text-neutral-600">
          Session-by-session record, newest first. One entry per study day.
        </p>
      </header>

      {entries.length === 0 ? (
        <p className="text-neutral-500">No entries yet.</p>
      ) : (
        <ul>
          {entries.map((e) => {
            const preview = e.content
              .split('\n')
              .filter((l) => !/^session (started|ended)/.test(l))
              .join(' ')
              .replace(/\s+/g, ' ')
              .trim()
              .slice(0, 200)
            return (
              <li key={e.slug}>
                <JournalCard entry={e} preview={preview} />
              </li>
            )
          })}
        </ul>
      )}
    </main>
  )
}
