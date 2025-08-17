<script lang="ts">
  import { Head, Footer, Separate, Text, Grid } from '$lib/components'
  import { marked } from 'marked'
  import DOMPurify from 'dompurify'
  import Map from './Map.svelte'

  let { data } = $props()

  let interval: NodeJS.Timeout | null = null
  $effect(() => {
    async function update() {
      const response = await fetch(`/pool/api/get?id=${pool.id}`)
      const json = await response.json()
      pool = json
    }

    if (interval) clearInterval(interval)
    interval = setInterval(update, 1000)
  })

  let pool = $derived(data.pool)
  let sections = $derived(Object.groupBy(pool.maps, (map) => map.section))

  let hidden: string[] = $state([])
  function toggleHidden(id: string) {
    if (hidden.includes(id)) hidden = hidden.filter((i) => i !== id)
    else hidden = [...hidden, id]
  }
  const showAll = () => (hidden = [])
  const hideAll = () => (hidden = pool.maps.map((map) => map.id))

  let audio: HTMLAudioElement
  let playing: string | null = $state(null)
  const previewURL = (id: string) => `https://b.ppy.sh/preview/${id}.mp3`

  $effect(() => {
    audio.onended = () => (playing = null)
  })

  function play(id: string) {
    console.log('now playing', previewURL(id))

    if (playing === id) {
      audio.pause()
      playing = null
    } else {
      audio.src = previewURL(id)
      audio.currentTime = 0
      audio.play()
      playing = id
    }
  }

  let html = $state('')
  $effect(() => {
    const dirty = marked(pool.description)
    if (typeof dirty === 'string') html = DOMPurify.sanitize(dirty)
  })
</script>

<Head
  title={pool.title}
  description={pool.description}
  image={pool.maps[0]?.cover ?? '/preview/pool.jpg'}
/>

<audio bind:this={audio}></audio>

<div class="container">
  <Text>
    <Grid>
      <h1>{pool.title}</h1>

      {#each Object.keys(sections) as section}
        <section>
          <h3 class:single={sections[section]!.length === 1}>{section}</h3>
          <div class="maps" style:--background-color={sections[section]![0].color}>
            {#each sections[section]! as map}
              <div class="map" style:--border-color={map.color}>
                <Map {map} {playing} {hidden} {toggleHidden} {play} />
              </div>
            {/each}
          </div>
        </section>
      {/each}

      <Separate>
        <p class="subtitle">Mappool ID: {pool.id}</p>
        <div class="hidebuttons">
          <button onclick={showAll}>Show All</button> ·
          <button onclick={hideAll}>Hide All</button>
        </div>
      </Separate>

      {@html html}
    </Grid>
  </Text>

  <Footer />
</div>

<style lang="sass">
  $breakpoint: 1000px

  .container
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 8px
    padding: 8px

    width: 100%
    overflow: hidden

    max-width: 1200px
    min-height: 100dvh

    section
      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      gap: 2px

      h3.single
        max-width: 604px

      .maps
        padding: 2px
        border-radius: 4px

        display: flex
        flex-direction: row
        justify-content: center
        flex-wrap: wrap
        gap: 2px

        width: 100%

        .map
          width: 400px
          max-width: 600px
          flex-grow: 1
          border-radius: 4px
          overflow: hidden

          border: 2px solid var(--border-color)

    .hidebuttons
      display: flex
      flex-direction: row
      justify-content: center
      align-items: center
      gap: 6px
      color: var(--text-secondary)

      button
        cursor: pointer
        border: none
        background: none
        color: var(--text-secondary)
        font-size: 12px
        width: max-content
        padding: 0

        &:hover
          text-decoration: underline

    @media screen and (max-width: $breakpoint)
      max-width: 727px

      section
        .maps
          display: flex
          flex-direction: column
          
          max-width: 100%

          .map
            width: auto
            max-width: none
</style>
