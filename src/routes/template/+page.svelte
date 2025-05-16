<script lang="ts">
  import { Head, Header, Footer, Container, Grid, Text, Button } from '$lib/components'

  let count = $state(0)
  let label = $state('a button with an icon')

  function onclick() {
    count += 1
    label = `a button you've pressed ${count} times`

    if (count === 1) {
      label = `a button you've pressed ${count} time`
    }
  }
</script>

<Head title="luxmiyu → template" description="a generic web template" image="/preview/empty.jpg" />

<Container fill>
  <Header title="luxmiyu" description="a generic web template" pfp />

  <Text>
    <p>
      A clean and simple, light-weight mobile-first web template used in my own projects. Using <a
        href="https://en.wikipedia.org/wiki/HTML"
        target="_blank">HTML</a
      >,
      <a href="https://sass-lang.com/" target="_blank">Sass</a> and
      <a href="https://www.typescriptlang.org/" target="_blank">TypeScript</a>, and built with
      <a href="https://vitejs.dev/">Vite</a>.
    </p>
  </Text>

  <Grid>
    <Button {onclick}>
      <div class="button">
        <img src="/luxmiyu.png" alt="luxmiyu icon" />
        <p>{label}</p>
      </div>
    </Button>
  </Grid>

  <Footer />
</Container>

<style lang="sass">
  .button
    display: flex

    align-items: center
    gap: 8px

    width: 100%
    height: 100%

    img
      width: 32px
      height: 32px
</style>
