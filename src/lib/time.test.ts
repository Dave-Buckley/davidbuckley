import { describe, it, expect } from 'vitest'
import { formatRelativeTime } from './time'

describe('formatRelativeTime', () => {
  it('returns "never" for null', () => {
    expect(formatRelativeTime(null)).toBe('never')
  })

  it('returns "today" for current date', () => {
    expect(formatRelativeTime(new Date())).toBe('today')
  })

  it('returns "yesterday" or "1 day ago" for 1 day prior', () => {
    const yesterday = new Date()
    yesterday.setDate(yesterday.getDate() - 1)
    const result = formatRelativeTime(yesterday)
    expect(result).toMatch(/yesterday|1 day ago/)
  })

  it('returns a week-scoped string for 10 days ago', () => {
    const d = new Date()
    d.setDate(d.getDate() - 10)
    const result = formatRelativeTime(d)
    expect(result).toMatch(/week/)
  })
})
