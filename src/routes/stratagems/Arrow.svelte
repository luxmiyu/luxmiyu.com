<script lang="ts">
  let {
    direction,
    size,
  }: {
    direction: 'w' | 'a' | 's' | 'd'
    size?: string
  } = $props()
</script>

<img
  src="/stratagems/arrow.png"
  alt="arrow {direction}"
  class={direction}
  style:width={size}
  style:height={size}
/>

<style lang="sass">
  img
    &.w
      transform: rotate(0deg)

    &.a
      transform: rotate(-90deg)

    &.s
      transform: rotate(180deg)

    &.d
      transform: rotate(90deg)
</style>
