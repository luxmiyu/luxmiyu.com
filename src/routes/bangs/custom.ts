import { type Bang } from './bang'

export const customBangs: Bang[] = [
  {
    c: 'Entertainment',
    d: 'luxmiyu.com',
    r: 0,
    s: 'luxmiyu',
    sc: 'Search',
    t: 'luxmiyu',
    u: 'https://luxmiyu.com/search?q={{{s}}}',
  },
  {
    c: 'Entertainment',
    d: 'dcag.art',
    r: 0,
    s: 'Daily Cute Anime Girl',
    sc: 'Search',
    t: 'dcag',
    u: 'https://dcag.art/search?q={{{s}}}',
  },
  {
    c: 'Entertainment',
    d: 'osu.ppy.sh',
    r: 0,
    s: 'osu! beatmaps',
    sc: 'Games (general)',
    t: 'osub',
    u: 'https://osu.ppy.sh/beatmapsets?q={{{s}}}',
  },
  {
    c: 'Multimedia',
    d: 'danbooru.donmai.us',
    r: 0,
    s: 'Danbooru (All)',
    sc: 'Images',
    t: 'booru',
    u: 'https://danbooru.donmai.us/posts?tags={{{s}}}',
  },
  {
    c: 'Multimedia',
    d: 'rule34.xxx',
    r: 0,
    s: 'Rule 34',
    sc: 'Images',
    t: 'r34',
    u: 'https://rule34.xxx/index.php?page=post&s=list&tags={{{s}}}',
  },
]
