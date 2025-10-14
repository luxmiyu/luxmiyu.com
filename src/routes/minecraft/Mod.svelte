<script lang="ts">
  import { Button, Center, Columns, Grid } from '$lib/components'
  import type { MinecraftMod } from './mods'

  let { mod }: { mod: MinecraftMod } = $props()
</script>

<Button href={mod.url} target="_blank">
  <div class="container">
    <img src={`/minecraft/mods/${mod.iconURL}`} alt={mod.name} />
    <p>{mod.name}</p>
  </div>
</Button>

<style lang="sass">
  .container
    display: flex
    justify-content: flex-start
    align-items: center
    gap: 8px

    width: 100%
    height: 100%
    padding-right: 8px

    img
      height: 24px
</style>
