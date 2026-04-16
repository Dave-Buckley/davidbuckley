#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { spawnSync } from 'node:child_process'
import { getActivePhaseNumber } from './lib/active-phase.mjs'
import { getPhaseConfig, parsePhaseFlag } from './lib/phase-config.mjs'

const today = new Date()
const yyyy = today.getFullYear()
const mm = String(today.getMonth() + 1).padStart(2, '0')
const dd = String(today.getDate()).padStart(2, '0')
const hh = String(today.getHours()).padStart(2, '0')
const min = String(today.getMinutes()).padStart(2, '0')
const dateStr = `${yyyy}-${mm}-${dd}`

const phase = parsePhaseFlag(process.argv) ?? getActivePhaseNumber()
const config = getPhaseConfig(phase)
const ext = config.sketchExt

const sketchesDir = path.join(process.cwd(), 'sketches')
fs.mkdirSync(sketchesDir, { recursive: true })

function resolveSketchPath() {
  const base = path.join(sketchesDir, `${dateStr}.${ext}`)
  if (!fs.existsSync(base)) return base
  let n = 2
  while (fs.existsSync(path.join(sketchesDir, `${dateStr}-${n}.${ext}`))) n++
  return path.join(sketchesDir, `${dateStr}-${n}.${ext}`)
}

const file = resolveSketchPath()
const relFile = path.relative(process.cwd(), file).replace(/\\/g, '/')

const templates = {
  py: `# Sketch — ${dateStr} ${hh}:${min}
# Phase ${phase} — ${config.name}
# Run with:  python ${relFile}

print('sketchpad ready')
`,
  mjs: `// Sketch — ${dateStr} ${hh}:${min}
// Phase ${phase} — ${config.name}
// Run with:  node ${relFile}

console.log('sketchpad ready')
`,
  md: `# Sketch — ${dateStr} ${hh}:${min}

Phase ${phase} — ${config.name}

Scratch notes for this session.
`,
}

const template = templates[ext] ?? templates.mjs
fs.writeFileSync(file, template)
console.log(`[study:sketch] created ${relFile} (Phase ${phase}: ${config.name})`)

function pickEditor() {
  if (process.env.PORTFOLIO_EDITOR) return process.env.PORTFOLIO_EDITOR
  if (process.platform === 'win32') return 'code'
  return process.env.EDITOR || process.env.VISUAL || 'nano'
}

const editor = pickEditor()
console.log(`[study:sketch] opening in ${editor}`)

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
  console.warn(`[study:sketch] could not launch editor '${editor}': ${result.error.message}`)
  console.warn(`[study:sketch] open the file manually: ${file}`)
}
