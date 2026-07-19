<script>
  import { Footer, Text, Copy, Button, Center } from '$lib/components'

  const value =
    '0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1\n2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3\n0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1\n2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3\n0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1\n2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3\n0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,1\n2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3,2,3'

  function onclick() {
    navigator.clipboard.writeText(value)
    alert('Copied to clipboard!')
  }
</script>

<div class="bottom">
  <Footer />
</div>

<div class="topleft">
  <Text>
    <p class="subtitle">F-ZERO Barrier Editor by luxmiyu</p>
  </Text>
</div>

<div class="topright">
  <Button nested {onclick}>Export as CSV</Button>
</div>

<div class="center">
  <Center>
    <Text>
      <h1 class="center">PRETEND THIS IS A WORKING EDITOR</h1>
    </Text>
  </Center>
</div>

<style lang="sass">
  .center
    position: absolute
    top: 0
    left: 0
    bottom: 0
    right: 0
    overflow: hidden
    margin: 8px
    pointer-events: none

  .bottom
    position: absolute
    left: 0
    bottom: 0
    right: 0
    overflow: hidden
    margin: 8px

  .topleft
    position: absolute
    top: 0
    left: 0
    overflow: hidden
    margin: 8px

  .topright
    position: absolute
    top: 0
    right: 0
    overflow: hidden
    margin: 6px
    padding: 2px
</style>
