<script lang="ts">
  import { Button } from '$lib/components'

  let {
    value,

    text = 'Copy',
    confirmText = 'Copied!',
    duration = 1000,

    borderless = false,
    nopadding = false,
    disabled = false,
    nested = false,
    width = 'auto',
  }: {
    value: string

    text?: string
    confirmText?: string
    duration?: number

    borderless?: boolean
    nopadding?: boolean
    disabled?: boolean
    nested?: boolean
    width?: string
  } = $props()

  let timeout: NodeJS.Timeout | null = null
  let currentText: string = $state(text)

  function onclick() {
    navigator.clipboard.writeText(value)
    currentText = confirmText
    if (timeout) clearTimeout(timeout)
    timeout = setTimeout(() => (currentText = text), duration)
  }

  $effect(() => {
    if (timeout) clearTimeout(timeout)
  })
</script>

<Button {borderless} {nopadding} {disabled} {nested} {width} {onclick}>{currentText}</Button>
