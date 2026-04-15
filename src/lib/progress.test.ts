import { describe, it, expect } from 'vitest'
import { computePhaseProgress, computeOverallProgress } from './progress'

describe('computePhaseProgress', () => {
  it('counts 3 checked + 2 unchecked as 60%', () => {
    const md = '- [x] a\n- [x] b\n- [x] c\n- [ ] d\n- [ ] e\n'
    expect(computePhaseProgress(md)).toEqual({ completed: 3, total: 5, percent: 60 })
  })

  it('returns zeros (not NaN) for empty markdown', () => {
    expect(computePhaseProgress('')).toEqual({ completed: 0, total: 0, percent: 0 })
  })

  it('returns zeros when no task lines present', () => {
    expect(computePhaseProgress('no checkboxes\njust text\n')).toEqual({
      completed: 0,
      total: 0,
      percent: 0,
    })
  })

  it('accepts both [x] and [X] (GFM case-insensitive)', () => {
    const md = '- [X] one\n- [x] two\n- [ ] three\n'
    expect(computePhaseProgress(md)).toEqual({ completed: 2, total: 3, percent: 67 })
  })
})

describe('computeOverallProgress', () => {
  it('returns 0 for empty phase array', () => {
    expect(computeOverallProgress([])).toBe(0)
  })

  it('sums tasks across phases before computing percent', () => {
    const phases = [
      { completed: 3, total: 5, percent: 60 },
      { completed: 0, total: 5, percent: 0 },
    ]
    expect(computeOverallProgress(phases)).toBe(30)
  })

  it('returns 0 when every phase has 0 tasks (no division by zero)', () => {
    expect(computeOverallProgress([{ completed: 0, total: 0, percent: 0 }])).toBe(0)
  })
})
