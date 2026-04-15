import { describe, it, expect, beforeEach, afterEach } from 'vitest'
import fs from 'node:fs'
import path from 'node:path'
import os from 'node:os'
import { getActivePhaseNumber } from './active-phase.mjs'

let tmp
beforeEach(() => {
  tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'dbscripts-'))
})
afterEach(() => {
  fs.rmSync(tmp, { recursive: true, force: true })
})

function write(name, body) {
  fs.writeFileSync(path.join(tmp, name), body)
}

describe('getActivePhaseNumber', () => {
  it('returns 1 when directory does not exist', () => {
    expect(getActivePhaseNumber(path.join(tmp, 'nope'))).toBe(1)
  })

  it('returns number of the single active phase', () => {
    write(
      '02-cs.md',
      `---\nnumber: 2\nname: CS\nwindow: Months 1-4\nstatus: active\n---\nbody`,
    )
    write(
      '01-port.md',
      `---\nnumber: 1\nname: Port\nwindow: Month 1\nstatus: complete\n---\nbody`,
    )
    expect(getActivePhaseNumber(tmp)).toBe(2)
  })

  it('returns 1 fallback when no phase is active', () => {
    write(
      '01-port.md',
      `---\nnumber: 1\nname: Port\nwindow: Month 1\nstatus: planned\n---\nbody`,
    )
    expect(getActivePhaseNumber(tmp)).toBe(1)
  })

  it('returns lowest active number when multiple are active', () => {
    write(
      '02-cs.md',
      `---\nnumber: 2\nname: CS\nwindow: Months 1-4\nstatus: active\n---\nbody`,
    )
    write(
      '03-web.md',
      `---\nnumber: 3\nname: Web\nwindow: Months 3-7\nstatus: active\n---\nbody`,
    )
    expect(getActivePhaseNumber(tmp)).toBe(2)
  })
})
