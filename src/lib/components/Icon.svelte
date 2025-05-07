<script lang="ts">
  let {
    name = 'star',
    size = '40px',
    color = undefined,
    secondary = false,
    debug = false,

    bookmarked = false,
    followed = false,
    hearted = false,
    starred = false,

    fill = false,
    weight = 400,
    grad = 0,
    opsz = 40,
  }: {
    name?: string
    size?: string
    color?: string
    secondary?: boolean
    debug?: boolean

    bookmarked?: boolean
    followed?: boolean
    hearted?: boolean
    starred?: boolean

    fill?: boolean
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700
    grad?: -25 | 0 | 200
    opsz?: 20 | 24 | 40 | 48
  } = $props()

  let filled = $derived(fill || starred || bookmarked || followed || hearted)

  let colored = $derived.by(() => {
    if (color) return color

    if (bookmarked) return 'var(--blue)'
    if (followed) return 'var(--green)'
    if (hearted) return 'var(--red)'
    if (starred) return 'var(--yellow)'
  })
</script>

<span
  class="material-symbols-rounded"
  class:secondary
  class:debug
  style:font-size={size}
  style:color={colored}
  style:font-variation-settings="'FILL' {filled ? 1 : 0}, 'wght' {weight}, 'GRAD' {grad}, 'opsz' {opsz}"
>
  {name}
</span>

<style lang="sass">
  .material-symbols-rounded
    font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 40

    color: var(--text)

    display: flex
    justify-content: center
    align-items: center

    &.secondary
      color: var(--text-secondary)

    &.debug
      background: rgba(255, 255, 255, 0.05)
</style>
