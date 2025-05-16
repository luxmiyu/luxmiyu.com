<script lang="ts">
  import { Head, Header, Footer, Container, Input } from '$lib/components'

  // regex source:
  // https://gist.github.com/rodrigoborgesdeoliveira/987683cfbfcc8d800192da1e73adc486?permalink_comment_id=4342805#gistcomment-4342805
  const REGEX = /(?<=[=\/&])[a-zA-Z0-9_\-]{11}(?=[=\/&?#\n\r]|$)/

  function getYoutubeUrl(id: string): string {
    return `https://www.youtube.com/watch?v=${id}`
  }

  function getThumbnailUrl(id: string): string {
    return `https://img.youtube.com/vi/${id}/maxresdefault.jpg`
  }

  function getVideoId(url: string): string | null {
    const match = url.match(REGEX)
    return match ? match[0] : null
  }

  let value = $state('')
  let id = $derived(getVideoId(value))
  let src = $derived(id ? getThumbnailUrl(id) : '')
  let href = $derived(id ? getYoutubeUrl(id) : '')
</script>

<Head
  title="luxmiyu → youtube"
  description="a youtube thumbnail grabber"
  image="/preview/youtube.jpg"
/>

<Container fill large>
  <Header title="youtube" description="a youtube thumbnail grabber" />

  {#if id}
    <a {href} target="_blank">
      <img {src} alt="thumbnail of {id}" />
    </a>
  {/if}

  <Input.Text bind:value width="100%" focus />

  <Footer />
</Container>

<style lang="sass">
  img
    max-width: 100%
</style>
