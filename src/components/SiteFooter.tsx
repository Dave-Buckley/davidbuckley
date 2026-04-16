export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="max-w-2xl mx-auto px-6 py-6 space-y-2">
        <div className="flex flex-col sm:flex-row justify-between gap-2 text-xs text-neutral-600">
          <p>&copy; {year} David Buckley · MIT licensed</p>
          <div className="flex gap-4">
            <a
              href="https://github.com/Dave-Buckley/davidbuckley"
              className="hover:text-neutral-900 transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/davidbuckley"
              className="hover:text-neutral-900 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <p className="text-xs text-neutral-400">
          Site scaffolded with Claude Opus via Claude Code. Programme artefacts authored directly.
        </p>
      </div>
    </footer>
  )
}
