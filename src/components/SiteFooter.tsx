export function SiteFooter() {
  return (
    <footer className="border-t border-neutral-200 mt-16">
      <div className="max-w-2xl mx-auto px-6 py-6 flex flex-col sm:flex-row justify-between gap-2 text-xs text-neutral-500">
        <p>Everything here is free. Steal it if you want it.</p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Dave-Buckley/davidbuckley"
            className="hover:text-neutral-900"
          >
            GitHub
          </a>
          <a href="https://linkedin.com/in/davidbuckley" className="hover:text-neutral-900">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}
