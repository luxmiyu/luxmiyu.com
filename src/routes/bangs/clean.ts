import { type Bang, bangs } from './bang'
import { customBangs } from './custom'

export interface CleanBang {
  name: string
  bang: string
  domain: string
  url: string

  category?: string
  subcategory?: string

  r: number
}

function cleanBang(bang: Bang): CleanBang {
  return {
    name: bang.s,
    bang: bang.t,
    domain: bang.d,
    url: bang.u,

    category: bang.c,
    subcategory: bang.sc,

    r: bang.r,
  }
}

export const cleanBangs: CleanBang[] = customBangs
  .map(cleanBang)
  .concat(bangs.map(cleanBang))
  .sort((a, b) => a.bang.localeCompare(b.bang))
