import { type CleanBang, cleanBangs } from '../bangs/clean'

const LS_DEFAULT_BANG = 'g'
const defaultBang = cleanBangs.find((b) => b.bang === LS_DEFAULT_BANG)

function getBang(query: string): CleanBang {
  const match = query.match(/!(\S+)/i)
  const bangCandidate = match?.[1]?.toLowerCase()
  return cleanBangs.find((b) => b.bang === bangCandidate) ?? defaultBang!
}

function replaceUrl(url: string, query: string): string {
  return url.replace(
    '{{{s}}}',
    // Replace %2F with / to fix formats like "!ghr+t3dotgg/unduck"
    encodeURIComponent(query).replace(/%2F/g, '/')
  )
}

export interface Result {
  query: string
  url: string

  bang: CleanBang
}

export function getResult(search: string): Result | null {
  if (search === '') return null

  const bang = getBang(search)
  if (!bang) return null

  const query = search.replace(/!\S+\s*/i, '').trim()
  const url = replaceUrl(bang.url, query)
  return { query, url, bang }
}
