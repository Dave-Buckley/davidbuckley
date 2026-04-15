import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { getContributionData } from './github'

describe('getContributionData', () => {
  beforeEach(() => {
    delete process.env.GITHUB_TOKEN
    vi.restoreAllMocks()
  })

  afterEach(() => {
    vi.restoreAllMocks()
  })

  it('returns empty data when GITHUB_TOKEN is unset (Pitfall 6)', async () => {
    const result = await getContributionData('anyuser')
    expect(result).toEqual({ days: [], lastCommitDate: null })
  })

  it('parses a valid GraphQL response and returns contribution days', async () => {
    process.env.GITHUB_TOKEN = 'fake'
    const today = new Date().toISOString().slice(0, 10)
    const mockResponse = {
      data: {
        user: {
          contributionsCollection: {
            contributionCalendar: {
              weeks: [{ contributionDays: [{ date: today, contributionCount: 3 }] }],
            },
          },
        },
      },
    }
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => mockResponse,
      }),
    )
    const result = await getContributionData('dave')
    expect(result.days.length).toBeGreaterThan(0)
    expect(result.lastCommitDate).toBe(today)
  })

  it('falls back when fetch throws (network error)', async () => {
    process.env.GITHUB_TOKEN = 'fake'
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('network down')))
    const result = await getContributionData('dave')
    expect(result).toEqual({ days: [], lastCommitDate: null })
  })

  it('falls back on non-200 response', async () => {
    process.env.GITHUB_TOKEN = 'fake'
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue({ ok: false, status: 401 }))
    const result = await getContributionData('dave')
    expect(result).toEqual({ days: [], lastCommitDate: null })
  })
})
