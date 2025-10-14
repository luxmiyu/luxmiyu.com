<script lang="ts">
  import { Head, Header, Footer, Container, Grid, Bricks, Text } from '$lib/components'
  import { categories } from './mods'
  import Mod from './Mod.svelte'
</script>

<Head
  title="luxmiyu → minecraft"
  description="A collection of my Minecraft content and favorite mods!"
  image="/preview/minecraft.jpg"
/>

<Container fill>
  <Header title="minecraft" description="a collection of vanilla-compatible minecraft mods" />

  <Text>
    <p>
      This is a collection of client-side and server-side mods that I love and use when playing
      vanilla Minecraft! I've also added some extras such as modpacks, shaderpacks, and resource
      packs.
    </p>
  </Text>

  <Grid>
    {#each categories as category}
      <h2>{category.name}</h2>

      <Grid minmax="200px">
        {#each category.mods as mod}
          <Mod {mod} />
        {/each}
      </Grid>
    {/each}
  </Grid>

  <Footer />
</Container>

<style lang="sass">
  h2
    margin-top: 2px
    font-weight: 450
</style>
