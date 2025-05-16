<script lang="ts">
  import { browser } from '$app/environment'
  import { Head, Header, Footer, Container, Text } from '$lib/components'

  let now = $state(new Date())
  let percentage = $derived.by(() => {
    const start = new Date(now.getFullYear(), 0, 1)
    const end = new Date(now.getFullYear() + 1, 0, 1)
    return ((now.getTime() - start.getTime()) / (end.getTime() - start.getTime())) * 100
  })

  if (browser) {
    setInterval(() => {
      now = new Date()
    }, 10)
  }
</script>

<Head
  title="luxmiyu → progress"
  description="a progress bar for the current year"
  image="/preview/progress.jpg"
/>

<Container fill>
  <Header title="progress" description="a progress bar for the current year" />

  <div class="container">
    <div class="bar"></div>
  </div>

  <Text>
    <p class="subtitle center">{now.getFullYear()} is currently {percentage.toFixed(7)}% done</p>
  </Text>

  <Footer />
</Container>

<style lang="sass">
  .container
    width: 100%
    height: 36px

    background: var(--card)
    border: 2px solid var(--text)
    padding: 2px

    .bar
      width: 30%
      height: 100%
      background: var(--text)

      background: linear-gradient(-45deg, var(--red), var(--yellow), var(--green), var(--blue))
      animation: gradient 15s ease infinite
      background-size: 400% 400%

      @keyframes gradient
        0%
          background-position: 0% 50%
        
        50%
          background-position: 100% 50%
        
        100%
          background-position: 0% 50%
</style>
