<script lang="ts">
  import { Button } from '$lib/components'

  let {
    value,

    width = 'auto',
  }: {
    value: string

    text?: string
    duration?: number

    borderless?: boolean
    nopadding?: boolean
    disabled?: boolean
    width?: string
  } = $props()

  function onclick() {
    navigator.clipboard.writeText(value)
  }
</script>

<Button {width} {onclick} nested>
  <p>{value}</p>
</Button>

<style lang="sass">
  p
    font-size: 56px
</style>
