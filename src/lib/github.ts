export interface ContributionDay {
  date: string
  contributionCount: number
}

export interface ContributionData {
  days: ContributionDay[]
  lastCommitDate: string | null
}

const FALLBACK: ContributionData = { days: [], lastCommitDate: null }
const GITHUB_GRAPHQL = 'https://api.github.com/graphql'

export async function getContributionData(
  username: string,
  opts: { daysWindow?: number } = {},
): Promise<ContributionData> {
  const token = process.env.GITHUB_TOKEN
  if (!token) {
    console.warn('[github.ts] GITHUB_TOKEN not set — returning empty contribution data')
    return FALLBACK
  }

  const query = `
    query($login: String!) {
      user(login: $login) {
        contributionsCollection {
          contributionCalendar {
            weeks {
              contributionDays { date contributionCount }
            }
          }
        }
      }
    }
  `

  try {
    const res = await fetch(GITHUB_GRAPHQL, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
        'User-Agent': 'davidbuckley-portfolio',
      },
      body: JSON.stringify({ query, variables: { login: username } }),
      cache: 'no-store',
    })
    if (!res.ok) {
      console.warn(`[github.ts] non-200 response: ${res.status}`)
      return FALLBACK
    }
    const json = (await res.json()) as {
      data?: {
        user?: {
          contributionsCollection?: {
            contributionCalendar?: { weeks: Array<{ contributionDays: ContributionDay[] }> }
          }
        }
      }
    }
    const weeks = json.data?.user?.contributionsCollection?.contributionCalendar?.weeks
    if (!weeks) return FALLBACK
    const allDays: ContributionDay[] = weeks.flatMap((w) => w.contributionDays)

    const daysWindow = opts.daysWindow ?? 30
    const cutoff = new Date()
    cutoff.setDate(cutoff.getDate() - daysWindow)
    const days = allDays.filter((d) => new Date(d.date) >= cutoff)
    const lastActive = [...allDays].reverse().find((d) => d.contributionCount > 0)

    return { days, lastCommitDate: lastActive?.date ?? null }
  } catch (err) {
    console.warn('[github.ts] fetch failed:', err)
    return FALLBACK
  }
}
