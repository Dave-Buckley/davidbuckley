import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-serif tracking-tight">About</h1>
      </header>

      <div className="space-y-4 text-neutral-800 leading-relaxed">
        <p>
          I'm David — based in the UK, pivoting from eight years of PE teaching into software and
          AI engineering. No CS degree, no bootcamp, no MSc (yet). Everything you see here is
          built from free resources: Harvard CS50, fast.ai, Andrew Ng, LangChain docs, the Next.js
          Learn course. Nothing paid.
        </p>
        <p>
          The programme is eighteen months, split into six phases. Each phase ships real artifacts
          — deployed apps, GitHub repos, writeups. The portfolio you're reading is the first of
          them. Every checkbox on the{' '}
          <Link href="/phases" className="underline underline-offset-4">
            phases page
          </Link>{' '}
          is a single unit of shippable work; the progress bar above counts them live.
        </p>
        <p>
          I'm not hiding the teaching background — it's why I can explain a gnarly system clearly
          — but this is an engineering portfolio. The work is the work.
        </p>
        <p>
          If you're doing something similar, or just want to see how far this goes, the full
          programme is public and the code is free to copy.
        </p>
      </div>

      <hr className="border-neutral-200" />

      <div className="text-sm space-y-1 text-neutral-600">
        <p>
          Currently: <span className="text-neutral-900">Phase 1 — Portfolio Foundation</span>
        </p>
        <p>Target: junior software / AI engineer role in the UK by month 18</p>
        <p>
          Contact:{' '}
          <a href="https://linkedin.com/in/davidbuckley" className="underline underline-offset-4">
            LinkedIn
          </a>{' '}
          ·{' '}
          <a href="https://github.com/davidbuckley" className="underline underline-offset-4">
            GitHub
          </a>
        </p>
      </div>
    </main>
  )
}
