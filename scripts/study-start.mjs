#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { getActivePhaseNumber } from './lib/active-phase.mjs'
import { getPhaseConfig, parsePhaseFlag, hasFlag } from './lib/phase-config.mjs'

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
const phase = parsePhaseFlag(process.argv) ?? getActivePhaseNumber()
const config = getPhaseConfig(phase)

const sessionTemplate = `## Session — ${hh}:${min}

### What I did
-

### What I learned
-

### Stuck points
-

### Next session
-

`

if (!fs.existsSync(file)) {
  const stub = `---\ndate: "${dateStr}"\nphase: ${phase}\n---\n\n${sessionTemplate}`
  fs.writeFileSync(file, stub)
  console.log(`[study:start] created ${path.relative(process.cwd(), file)}`)
} else {
  fs.appendFileSync(file, `\n${sessionTemplate}`)
  console.log(
    `[study:start] appended new session template to existing ${path.relative(process.cwd(), file)}`,
  )
}

const skipTerminals = hasFlag(process.argv, '--no-terminals')
if (!skipTerminals && config.terminals.length > 0) {
  spawnPhaseTerminals(config)
} else if (config.terminals.length === 0) {
  console.log(`[study:start] Phase ${phase}: no terminals required`)
}

function pickEditor() {
  if (process.env.PORTFOLIO_EDITOR) return process.env.PORTFOLIO_EDITOR
  if (process.platform === 'win32') return 'code'
  return process.env.EDITOR || process.env.VISUAL || 'nano'
}

const editor = pickEditor()
console.log(`[study:start] opening in ${editor}`)

const quote = (s) => `"${s.replace(/"/g, '\\"')}"`
const isVSCode = /(^|[\\/])code(-insiders)?(\.cmd|\.exe)?$/i.test(editor)

const command = isVSCode
  ? `${editor} --reuse-window ${quote(process.cwd())} ${quote(file)}`
  : `${editor} ${quote(file)}`

const result = spawnSync(command, {
  stdio: 'inherit',
  shell: true,
})

if (result.error) {
  console.warn(`[study:start] could not launch editor '${editor}': ${result.error.message}`)
  console.warn(`[study:start] open the file manually: ${file}`)
}

function spawnPhaseTerminals(cfg) {
  console.log(`[study:start] Phase ${phase} (${cfg.name}): opening ${cfg.terminals.length} terminal(s)`)
  for (const term of cfg.terminals) {
    console.log(`[study:start]   - ${term.label}: ${term.command}  // ${term.note}`)
    const spawned = spawnTerminal(term)
    if (!spawned) {
      console.warn(`[study:start]     (skipped — platform ${process.platform} not supported; run manually: ${term.command})`)
    }
  }
}

function spawnTerminal(term) {
  if (process.platform === 'win32') {
    const cmd = `start "${term.label}" cmd /k ${term.command}`
    const res = spawnSync(cmd, { shell: true, detached: true, stdio: 'ignore' })
    return !res.error
  }
  if (process.platform === 'darwin') {
    const script = `tell application "Terminal" to do script "cd ${process.cwd().replace(/"/g, '\\"')} && ${term.command}"`
    const res = spawnSync('osascript', ['-e', script], { stdio: 'ignore' })
    return !res.error
  }
  return false
}
