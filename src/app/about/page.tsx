import Link from 'next/link'

export default function AboutPage() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 space-y-6">
      <header className="space-y-2">
        <h1 className="text-3xl font-serif tracking-tight">About</h1>
      </header>

      <div className="space-y-4 text-neutral-800 leading-relaxed">
        <p>
          David Buckley is a UK-based software and AI engineer, transitioning from a career in
          physical education. This site documents a structured eighteen-month programme designed
          to develop production-quality engineering capability across the full modern AI stack.
        </p>
        <p>
          The programme is organised into six phases covering CS fundamentals, the TypeScript web
          stack, applied machine learning, and deeper AI engineering including retrieval-augmented
          generation, agents, and MLOps. Each phase ships concrete artefacts: deployed
          applications, public repositories, and technical writeups. Progress against the
          programme is visible on the{' '}
          <Link href="/phases" className="underline underline-offset-4">
            phases page
          </Link>{' '}
          and is computed at build time from the completion state of each phase&apos;s task list.
        </p>
        <p>
          The curriculum draws on open, industry-respected resources including Harvard CS50,
          fast.ai, Andrew Ng&apos;s Machine Learning Specialization, Karpathy&apos;s Zero to Hero
          course, and the official Next.js and Vercel AI SDK documentation. All work is delivered
          in public and is available for technical review.
        </p>
        <p>
          The objective is to demonstrate engineering capability through shipped work, with every
          artefact reviewable at source.
        </p>
      </div>

      <hr className="border-neutral-200" />

      <div className="text-sm space-y-1 text-neutral-600">
        <p>
          Current phase:{' '}
          <span className="text-neutral-900">Phase 1 — Portfolio Foundation</span>
        </p>
        <p>
          Contact:{' '}
          <a
            href="https://linkedin.com/in/davidbuckley"
            className="underline underline-offset-4"
          >
            LinkedIn
          </a>{' '}
          ·{' '}
          <a href="https://github.com/Dave-Buckley" className="underline underline-offset-4">
            GitHub
          </a>
        </p>
      </div>
    </main>
  )
}
