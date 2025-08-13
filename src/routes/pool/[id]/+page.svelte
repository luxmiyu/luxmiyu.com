<script lang="ts">
  import { Head, Footer, Container, Text, Grid } from '$lib/components'
  import { marked } from 'marked'
  import DOMPurify from 'dompurify'
  import Map from './Map.svelte'

  let { data } = $props()

  let html = $state('')

  $effect(() => {
    const dirty = marked(pool.description)
    if (typeof dirty === 'string') html = DOMPurify.sanitize(dirty)
  })

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

  let audio: HTMLAudioElement
  let playing: string | null = $state(null)
  const previewURL = (id: string) => `https://b.ppy.sh/preview/${id}.mp3`

  $effect(() => {
    audio.onended = () => (playing = null)
  })

  function play(id: string) {
    console.log(previewURL(id))

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
</script>

<Head title={pool.title} description={html} image={pool.maps[0]?.cover ?? '/preview/pool.jpg'} />

<audio bind:this={audio}></audio>

<Container fill>
  <Text>
    <Grid>
      <h1>{pool.title}</h1>

      {@html html}

      {#each Object.keys(sections) as section}
        <section>
          <h3>{section}</h3>
          <div class="maps" style:background-color={sections[section]![0].color}>
            <Grid gap="2px">
              {#each sections[section]! as map}
                <Map {map} {playing} {hidden} {toggleHidden} {play} />
              {/each}
            </Grid>
          </div>
        </section>
      {/each}

      <p class="subtitle">Mappool ID: {pool.id}</p>
    </Grid>
  </Text>

  <Footer />
</Container>

<style lang="sass">
  section
    display: flex
    flex-direction: column
    gap: 2px

    .maps
      padding: 2px
      border-radius: 4px
</style>
