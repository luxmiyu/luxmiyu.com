<script lang="ts">
  import { Head, Header, Footer, Container, Text, Box } from '$lib/components'

  let { data } = $props()

  let metadata = $derived(data.metadata)
  let Content = $derived(data.content)
</script>

<Head title={metadata.title} description={metadata.description} image={metadata.image} />

<Container fill large={metadata.large}>
  <Header title={metadata.title} description={metadata.description} />

  <Box dark>
    <Text lineHeight="1.25">
      <p class="subtitle">
        <a href="/blog">&lsaquo; Go Back</a>
      </p>

      <Content />
    </Text>
  </Box>

  <Footer />
</Container>

<style lang="sass">
  //
</style>
