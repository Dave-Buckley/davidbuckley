import fs from 'node:fs'
import path from 'node:path'

const FRONTMATTER_RE = /^---\s*\n([\s\S]*?)\n---/
const NUMBER_RE = /^number:\s*(\d+)\s*$/m
const STATUS_RE = /^status:\s*(\w+)\s*$/m

export function getActivePhaseNumber(
  contentRoot = path.join(process.cwd(), 'content', 'phases'),
) {
  if (!fs.existsSync(contentRoot)) return 1
  const files = fs.readdirSync(contentRoot).filter((f) => f.endsWith('.md'))
  const actives = []
  for (const f of files) {
    const raw = fs.readFileSync(path.join(contentRoot, f), 'utf8')
    const fm = raw.match(FRONTMATTER_RE)?.[1] ?? ''
    const status = fm.match(STATUS_RE)?.[1]
    const number = Number(fm.match(NUMBER_RE)?.[1] ?? NaN)
    if (status === 'active' && !Number.isNaN(number)) actives.push(number)
  }
  if (actives.length === 0) return 1
  return Math.min(...actives)
}
