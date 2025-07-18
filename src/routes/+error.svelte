<script lang="ts">
  import { page } from '$app/state'
  import { Head, Header, Footer, Container, Text, Grid, Box } from '$lib/components'

  let data = $derived({
    status: page.status.toString(),
    error: page.error?.message ?? 'Unknown Error',
  })
</script>

<Head title="luxmiyu → error" description="error" image="/preview/error.jpg" />

<Container fill>
  <Header title={data.status} description={data.error} />

  <Grid>
    <Box>
      <Text>
        <p>You've found error code <code>{data.status}</code> with this message:</p>
        <blockquote>
          <p>{data.error}</p>
        </blockquote>

        <div class="gif">
          <img src="/error.gif" alt="luxmiyu" />
        </div>
      </Text>
    </Box>
  </Grid>

  <Footer />
</Container>

<style lang="sass">
  .gif 
    width: 100%
    aspect-ratio: 5 / 2
    position: relative
    overflow: hidden

    img 
      position: absolute
      inset: 0
      width: 100%
      height: 100%
      object-fit: cover
</style>
