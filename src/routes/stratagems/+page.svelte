<script lang="ts">
  import { Head, Header, Footer, Container, Grid } from '$lib/components'
  import Arrows from './Arrows.svelte'
  import { stratagems } from './stratagems'
</script>

<Head
  title="luxmiyu → stratagems"
  description="a list of stratagems from Helldivers 2"
  image="/preview/stratagems.jpg"
/>

<Container large fill>
  <Header title="stratagems" description="delivering managed democracy at their doorstep" />

  <Grid minmax="300px">
    {#each stratagems as stratagem}
      <div class="stratagem {stratagem.type}">
        <img src="/stratagems/{stratagem.id}.webp" alt={stratagem.name} />
        <div class="content">
          <h2>{stratagem.name}</h2>
          <div class="arrows"><Arrows arrows={stratagem.code} size="24px" /></div>
        </div>
      </div>
    {/each}
  </Grid>

  <Footer />
</Container>

<style lang="sass">
  .stratagem
    width: 100%
    height: 100px
    padding: 8px

    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    gap: 8px

    background: var(--card)
    border: var(--text) solid 2px

    &.blue
      border-color: var(--blue)

    &.red
      border-color: var(--red)

    &.green
      border-color: var(--green)

    &.yellow
      border-color: var(--yellow)

    img
      height: 100%
      aspect-ratio: 1 / 1

    .content
      width: 100%
      height: 100%

      display: flex
      flex-direction: column
      justify-content: center
      align-items: center
      gap: 8px

      text-align: center

      h2
        font-size: 16px
        font-weight: 500

      .arrows
        display: flex
        flex-direction: row
        justify-content: center
        align-items: center
        gap: 2px
</style>
