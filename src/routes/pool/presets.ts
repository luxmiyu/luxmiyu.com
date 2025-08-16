type Preset = {
  title: string
  description: string
  csv: string
}

const presets: Preset[] = [
  {
    title: 'OWC 2024 Grand Finals',
    description: `This is the official map pool for the osu! World Cup 2024 Tournament! It was run by the [osu! team](https://osu.ppy.sh/wiki/en/People/osu%21_team) and various community members.

| Position | Member(s) |
| -------- | --------- |
| Manager | [Azer](https://osu.ppy.sh/users/2155578), [ChillierPear](https://osu.ppy.sh/users/9501251), [LeoFLT](https://osu.ppy.sh/users/3668779), [mangomizer](https://osu.ppy.sh/users/1893718), [Sakura006](https://osu.ppy.sh/users/10365024) |
| Mappool Selector | [Azer](https://osu.ppy.sh/users/2155578), [chiv](https://osu.ppy.sh/users/6701656), [Dada](https://osu.ppy.sh/users/9119507), [Librarian](https://osu.ppy.sh/users/10083084), [M I L E S](https://osu.ppy.sh/users/6036351), [megumic](https://osu.ppy.sh/users/7537133), [night](https://osu.ppy.sh/users/14390731) |
| Mappool quality assurance	| [alden](https://osu.ppy.sh/users/3545323), [Mordred](https://osu.ppy.sh/users/7265097), [Petal](https://osu.ppy.sh/users/7354729), [Shiina Noriko](https://osu.ppy.sh/users/1285637), [toybot](https://osu.ppy.sh/users/2848604) |
| Mappool playtester | [BATBALL](https://osu.ppy.sh/users/15173952), [Belladonna](https://osu.ppy.sh/users/11758404), [ChillierPear](https://osu.ppy.sh/users/9501251), [conradmittn](https://osu.ppy.sh/users/8208289), [D I O](https://osu.ppy.sh/users/3958619), [El Condor Pasa](https://osu.ppy.sh/users/4415285), [Emerald Ages](https://osu.ppy.sh/users/10224047), [enri](https://osu.ppy.sh/users/8640970), [EthantrixV2](https://osu.ppy.sh/users/10634348), [FcEazy](https://osu.ppy.sh/users/7825227), [fieryrage](https://osu.ppy.sh/users/3533958), [gnahus](https://osu.ppy.sh/users/12779141), [Jakson](https://osu.ppy.sh/users/8788058), [KonKonKinakoN](https://osu.ppy.sh/users/4733185), [kuromi](https://osu.ppy.sh/users/12904237), [MALISZEWSKI](https://osu.ppy.sh/users/12408961), [Mathyu](https://osu.ppy.sh/users/6303313), [rHO](https://osu.ppy.sh/users/1629553), [Riot](https://osu.ppy.sh/users/4256461), [vana](https://osu.ppy.sh/users/10917620), [Wieran](https://osu.ppy.sh/users/2303856), [Yip](https://osu.ppy.sh/users/5177569) |
| Commentator | [Azer](https://osu.ppy.sh/users/2155578), [Bubbleman](https://osu.ppy.sh/users/5182050), [ChillierPear](https://osu.ppy.sh/users/9501251), [D I O](https://osu.ppy.sh/users/3958619), [Damarsh](https://osu.ppy.sh/users/7465147), [Dohland](https://osu.ppy.sh/users/5220511), [Doomsday](https://osu.ppy.sh/users/18983), [fieryrage](https://osu.ppy.sh/users/3533958), [I-Flame](https://osu.ppy.sh/users/11257542), [Jordan The Bear](https://osu.ppy.sh/users/7477458), [Kano](https://osu.ppy.sh/users/3036203), [M I L E S](https://osu.ppy.sh/users/6036351), [Mavs](https://osu.ppy.sh/users/11076938), [SadShiba](https://osu.ppy.sh/users/10747626), [this1neguy](https://osu.ppy.sh/users/1797189), [Vordi](https://osu.ppy.sh/users/6659116) |
| Referee | [-Space](https://osu.ppy.sh/users/7720204), [Aetherian](https://osu.ppy.sh/users/6263040), [akace100](https://osu.ppy.sh/users/9308128), [Albionthegreat](https://osu.ppy.sh/users/9853595), [LeoFLT](https://osu.ppy.sh/users/3668779), [nik](https://osu.ppy.sh/users/10077264), [Suicune3](https://osu.ppy.sh/users/6895187), [tigereyes144](https://osu.ppy.sh/users/6499811), [Yazzehh](https://osu.ppy.sh/users/7068973)
| Statistician | [LeoFLT](https://osu.ppy.sh/users/3668779), [shdewz](https://osu.ppy.sh/users/10000899) |
| Design coordinator | [Sakura006](https://osu.ppy.sh/users/10365024), [kaetwo](https://osu.ppy.sh/users/1997719) |

You can read more about this tournament [here](https://osu.ppy.sh/wiki/en/Tournaments/OWC/2024).
`,
    csv: `Nomod,NM1,#fafafa,4881501,NM
Nomod,NM2,#fafafa,4881869,NM
Nomod,NM3,#fafafa,4881614,NM
Nomod,NM4,#fafafa,4881668,NM
Nomod,NM5,#fafafa,4881677,NM
Hidden,HD1,#e3b88c,4881712,HD
Hidden,HD2,#e3b88c,4881475,HD
Hidden,HD3,#e3b88c,4881714,HD
Hardrock,HR1,#e38c8e,2874944,HR
Hardrock,HR2,#e38c8e,4881729,HR
Hardrock,HR3,#e38c8e,2332178,HR
Doubletime,DT1,#8cafe3,4880978,DT
Doubletime,DT2,#8cafe3,4881745,DT
Doubletime,DT3,#8cafe3,74684,DT
Doubletime,DT4,#8cafe3,2067859,DT
Freemod,FM1,#a98ce3,4881757,-
Freemod,FM2,#a98ce3,4881763,-
Freemod,FM3,#a98ce3,4881931,-
Freemod,FM4,#a98ce3,4881760,-
Tiebreaker,TB,#eeaad5,4881796,-
`,
  },
]

export default presets
