export type CSV = {
  section: string
  label: string
  color: string

  id: string

  mods: string
}

export type Pool = {
  id: string
  edit: string

  title: string
  description: string

  csvs: CSV[]

  created: string
  updated: string
}

export type ComputedMap = {
  section: string
  label: string
  color: string

  id: string
  set: string
  cover: string

  artist: string
  title: string
  difficulty: string
  mapper: string

  stars: string
  combo: string
  length: string
  bpm: string

  cs: string
  ar: string
  od: string
  hp: string

  mods: string
}

export type ComputedPool = Omit<Pool, 'csvs'> & { maps: ComputedMap[] }

export type CachedBeatmap = {
  id: string
  beatmap: BeatmapExtended
  star_rating: Record<string, number>
  updated: string
}

// ###############################################################################################

export type Ruleset = 'osu' | 'taiko' | 'fruits' | 'mania'

export type Timestamp = string

export type Beatmap = {
  beatmapset_id: number
  difficulty_rating: number
  id: number
  mode: Ruleset
  status: string
  total_length: number
  user_id: number
  version: string
}

export type BeatmapExtended = Beatmap & {
  accuracy: number
  ar: number
  beatmapset_id: number
  bpm?: number
  convert: boolean
  count_circles: number
  count_sliders: number
  count_spinners: number
  cs: number
  deleted_at?: Timestamp
  drain: number
  hit_length: number
  is_scoreable: boolean
  last_updated: Timestamp
  mode_int: number
  passcount: number
  playcount: number
  ranked: number
  url: string

  beatmapset: Beatmapset
  max_combo: number
}

export type Covers = {
  cover: string
  'cover@2x': string
  card: string
  'card@2x': string
  list: string
  'list@2x': string
  slimcover: string
  'slimcover@2x': string
}

export type Beatmapset = {
  artist: string
  artist_unicode: string
  covers: Covers
  creator: string
  favourite_count: number
  id: number
  nsfw: boolean
  offset: number
  play_count: number
  preview_url: string
  source: string
  status: string
  spotlight: boolean
  title: string
  title_unicode: string
  user_id: number
  video: boolean
}

export type BeatmapDifficultyAttributes = {
  star_rating: number
  max_combo: number

  aim_difficulty: number
  aim_difficult_slider_count: number
  speed_difficulty: number
  speed_note_count: number
  slider_factor: number
  aim_difficult_strain_count: number
  speed_difficult_strain_count: number
}
