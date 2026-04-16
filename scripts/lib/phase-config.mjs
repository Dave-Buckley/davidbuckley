export const PHASE_CONFIG = {
  1: {
    name: 'Programming & CS Fundamentals',
    sketchExt: 'py',
    sketchRunner: 'python',
    terminals: [
      { label: 'python', command: 'python', note: 'Python REPL for CS50P and DSA practice' },
    ],
  },
  2: {
    name: 'Web Stack & First AI Products',
    sketchExt: 'mjs',
    sketchRunner: 'node',
    terminals: [
      { label: 'portfolio dev', command: 'npm run dev', note: 'Next.js dev server at http://localhost:3000' },
    ],
  },
  3: {
    name: 'ML Fundamentals & Applied ML',
    sketchExt: 'py',
    sketchRunner: 'python',
    terminals: [
      { label: 'python', command: 'python', note: 'Python REPL for fast.ai and ML sketches' },
    ],
  },
  4: {
    name: 'Deeper AI — RAG, Agents, Fine-tuning, MLOps',
    sketchExt: 'py',
    sketchRunner: 'python',
    terminals: [
      { label: 'python', command: 'python', note: 'Python REPL for RAG, LangGraph, and MCP work' },
    ],
  },
  5: {
    name: 'Job Hunt & Landing',
    sketchExt: 'md',
    sketchRunner: null,
    terminals: [],
  },
}

export function getPhaseConfig(phase) {
  return PHASE_CONFIG[phase] ?? PHASE_CONFIG[2]
}

export function parsePhaseFlag(argv) {
  const idx = argv.findIndex((a) => a === '--phase')
  if (idx === -1) return null
  const next = argv[idx + 1]
  const n = Number(next)
  if (!Number.isFinite(n) || n < 1 || n > 5) return null
  return n
}

export function hasFlag(argv, flag) {
  return argv.includes(flag)
}
