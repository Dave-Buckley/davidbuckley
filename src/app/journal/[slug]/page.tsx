import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getJournalEntries, getJournalEntryBySlug } from '@/lib/content'
import { renderMarkdown } from '@/lib/markdown'

export async function generateStaticParams() {
  return getJournalEntries().map((e) => ({ slug: e.slug }))
}

export default async function JournalEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const entry = getJournalEntryBySlug(slug)
  if (!entry) notFound()

  const html = await renderMarkdown(entry.content)
  const date = new Date(entry.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <main className="max-w-2xl mx-auto px-6 py-16 space-y-8">
      <Link href="/journal" className="text-sm text-neutral-500 hover:text-neutral-900">
        ← All entries
      </Link>
      <header className="space-y-1">
        <p className="text-xs uppercase tracking-wider text-neutral-500">
          {entry.phase > 0 ? `Phase ${entry.phase}` : 'Setup'}
        </p>
        <h1 className="text-3xl font-serif tracking-tight">{date}</h1>
      </header>
      <article
        className="prose prose-neutral max-w-none prose-headings:font-serif"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  )
}
