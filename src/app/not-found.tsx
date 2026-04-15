import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="max-w-2xl mx-auto px-6 py-16 space-y-4">
      <h1 className="text-3xl font-serif tracking-tight">404</h1>
      <p className="text-neutral-600">
        The requested page could not be found. Return to the{' '}
        <Link href="/" className="underline">
          homepage
        </Link>
        .
      </p>
    </main>
  )
}
