<script lang="ts">
  import Arrow from './Arrow.svelte'

  let {
    arrows,
    size,
  }: {
    arrows: string
    size?: string
  } = $props()

  function filter(char: string): char is 'w' | 'a' | 's' | 'd' {
    return ['w', 'a', 's', 'd'].includes(char)
  }

  let directions = arrows.split('').filter(filter)
</script>

{#each directions as direction}
  <Arrow {direction} {size} />
{/each}
