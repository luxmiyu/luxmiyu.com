<script lang="ts">
  import { Head, Header, Footer, Container, Box, Copy, Bricks, Text } from '$lib/components'
  import categories from './kaomoji'
</script>

<Head
  title="luxmiyu → kaomoji"
  description="a collection of japanese text emojis"
  image="/preview/kaomoji.jpg"
/>

<Container fill>
  <Header title="kaomoji" description="a collection of japanese text emojis" />

  {#each categories as { name, kaomoji }}
    <Text>
      <h3>{name}</h3>
      <Bricks gap="4px">
        {#each kaomoji as kao}
          <Copy text={kao} confirmText={kao + ' 📋'} value={kao} nested />
        {/each}
      </Bricks>
    </Text>
  {/each}

  <Footer />
</Container>

<style lang="sass">
  //
</style>
