import { bangs } from '../bangs/bang'

export interface CleanBang {
  name: string
  bang: string
  domain: string
  url: string

  category?: string
  subcategory?: string

  r: number
}

export const cleanBangs: CleanBang[] = bangs.map((bang) => {
  return {
    name: bang.s,
    bang: bang.t,
    domain: bang.d,
    url: bang.u,

    category: bang.c,
    subcategory: bang.sc,

    r: bang.r,
  }
})
