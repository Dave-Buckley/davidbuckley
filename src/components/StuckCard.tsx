export function StuckCard() {
  return (
    <section className="border border-neutral-200 rounded-sm p-5 bg-neutral-50 space-y-2">
      <h3 className="text-sm font-medium uppercase tracking-wider text-neutral-500">
        Stuck or need a review?
      </h3>
      <p className="text-sm text-neutral-700 leading-relaxed">
        Open Claude Code in the repository terminal, paste the code or question, and ask for a
        review. The session will not produce code on your behalf — it will explain concepts, spot
        errors, and guide you to the fix.
      </p>
      <pre className="text-xs bg-white border border-neutral-200 rounded-sm p-3 overflow-x-auto">
        <code>{`cd "C:/Users/David/AI Projects/Websites/davidbuckley"
claude`}</code>
      </pre>
      <p className="text-xs text-neutral-500">
        Claude Code is installed on this machine. The first invocation in a new repository may
        prompt for a one-line project brief; answer it and proceed.
      </p>
    </section>
  )
}
