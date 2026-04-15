#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import readline from 'node:readline'
import { execSync } from 'node:child_process'
import { getActivePhaseNumber } from './lib/active-phase.mjs'

const today = new Date()
const yyyy = today.getFullYear()
const mm = String(today.getMonth() + 1).padStart(2, '0')
const dd = String(today.getDate()).padStart(2, '0')
const hh = String(today.getHours()).padStart(2, '0')
const min = String(today.getMinutes()).padStart(2, '0')
const dateStr = `${yyyy}-${mm}-${dd}`

const journalDir = path.join(process.cwd(), 'content', 'journal')
const file = path.join(journalDir, `${dateStr}.md`)

if (!fs.existsSync(file)) {
  console.error(
    `[study:end] no journal file for today (${dateStr}). Run 'npm run study:start' first.`,
  )
  process.exit(1)
}

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.question('what shipped today? (one line): ', (answerRaw) => {
  rl.close()
  const answer = answerRaw.trim() || '(no summary)'

  fs.appendFileSync(file, `\nsession ended ${hh}:${min} — ${answer}\n`)
  console.log(`[study:end] appended to ${path.relative(process.cwd(), file)}`)

  const phase = getActivePhaseNumber()
  const commitMsg = `study(phase-${phase}): ${answer}`

  try {
    execSync('git add content/', { stdio: 'inherit' })
    execSync(`git commit -m "${commitMsg.replace(/"/g, '\\"')}"`, { stdio: 'inherit' })
    console.log(`[study:end] committed: ${commitMsg}`)
  } catch (err) {
    console.error(`[study:end] git commit failed (nothing to commit?): ${err.message}`)
    process.exit(2)
  }

  try {
    execSync('git remote get-url origin', { stdio: 'ignore' })
    execSync('git push', { stdio: 'inherit' })
    console.log('[study:end] pushed.')
  } catch {
    console.warn('[study:end] no remote configured — skipping push. Commit is still local.')
  }
})
