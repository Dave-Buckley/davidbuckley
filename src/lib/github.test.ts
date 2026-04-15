import { describe, it, expect, beforeEach } from 'vitest'
// Plan 03 implements: import { getContributionData } from './github'

describe.skip('getContributionData fallback (Plan 03)', () => {
  beforeEach(() => {
    delete process.env.GITHUB_TOKEN
  })

  it('returns empty data without throwing when GITHUB_TOKEN is unset', async () => {
    // const result = await getContributionData('anyuser')
    // expect(result).toEqual({ days: [], lastCommitDate: null })
    expect(true).toBe(false)
  })
})
