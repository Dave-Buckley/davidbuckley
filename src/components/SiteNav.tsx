import Link from 'next/link'

export function SiteNav() {
  return (
    <header className="border-b border-neutral-200">
      <div className="max-w-2xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="font-serif text-lg tracking-tight text-neutral-900">
          David Buckley
        </Link>
        <nav className="flex items-center gap-5 text-sm text-neutral-600">
          <Link href="/progress" className="text-neutral-900 font-medium hover:text-neutral-600 transition-colors">
            Progress
          </Link>
          <Link href="/projects" className="hover:text-neutral-900 transition-colors">
            Projects
          </Link>
          <Link href="/phases" className="hover:text-neutral-900 transition-colors">
            Phases
          </Link>
          <Link href="/journal" className="hover:text-neutral-900 transition-colors">
            Journal
          </Link>
          <Link href="/about" className="hover:text-neutral-900 transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  )
}
