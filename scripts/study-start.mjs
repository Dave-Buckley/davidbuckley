#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { getActivePhaseNumber } from './lib/active-phase.mjs'

const today = new Date()
const yyyy = today.getFullYear()
const mm = String(today.getMonth() + 1).padStart(2, '0')
const dd = String(today.getDate()).padStart(2, '0')
const hh = String(today.getHours()).padStart(2, '0')
const min = String(today.getMinutes()).padStart(2, '0')
const dateStr = `${yyyy}-${mm}-${dd}`

const journalDir = path.join(process.cwd(), 'content', 'journal')
fs.mkdirSync(journalDir, { recursive: true })

const file = path.join(journalDir, `${dateStr}.md`)
const phase = getActivePhaseNumber()

if (!fs.existsSync(file)) {
  const stub = `---\ndate: "${dateStr}"\nphase: ${phase}\n---\n\nsession started ${hh}:${min}\n\n`
  fs.writeFileSync(file, stub)
  console.log(`[study:start] created ${path.relative(process.cwd(), file)}`)
} else {
  fs.appendFileSync(file, `\nsession started ${hh}:${min}\n\n`)
  console.log(
    `[study:start] appended session-started to existing ${path.relative(process.cwd(), file)}`,
  )
}

function pickEditor() {
  if (process.env.PORTFOLIO_EDITOR) return process.env.PORTFOLIO_EDITOR
  if (process.platform === 'win32') return 'code'
  return process.env.EDITOR || process.env.VISUAL || 'nano'
}

const editor = pickEditor()
console.log(`[study:start] opening in ${editor}`)

const result = spawnSync(editor, [file], {
  stdio: 'inherit',
  shell: true,
  detached: true,
})

if (result.error) {
  console.warn(`[study:start] could not launch editor '${editor}': ${result.error.message}`)
  console.warn(`[study:start] open the file manually: ${file}`)
}
