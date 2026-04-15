import { describe, it, expect } from 'vitest'
// Plan 02 implements these:
// import { computePhaseProgress, computeOverallProgress } from './progress'

describe.skip('computePhaseProgress (Plan 02)', () => {
  it('counts 3 checked + 2 unchecked as 60%', () => {
    const md = '- [x] a\n- [x] b\n- [x] c\n- [ ] d\n- [ ] e\n'
    // expect(computePhaseProgress(md)).toEqual({ completed: 3, total: 5, percent: 60 })
    expect(true).toBe(false) // placeholder until Plan 02 imports real fn
  })

  it('returns zeros (not NaN) for empty markdown', () => {
    // expect(computePhaseProgress('')).toEqual({ completed: 0, total: 0, percent: 0 })
    expect(true).toBe(false)
  })
})

describe.skip('computeOverallProgress (Plan 02)', () => {
  it('returns 0 for empty phase array', () => {
    // expect(computeOverallProgress([])).toBe(0)
    expect(true).toBe(false)
  })
})
