<script lang="ts">
  let {
    title = 'luxmiyu',
    description = '@luxmiyu',
    pfp = false,
  }: {
    title?: string
    description?: string
    pfp?: boolean
  } = $props()
</script>

<div>
  {#if pfp}
    <img src="/luxmiyu.png" alt="luxmiyu" />
  {/if}

  <div class="text">
    <h1>{title}</h1>
    <p>{description}</p>
  </div>
</div>

<style lang="sass">
  div
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 6px

    width: 100%

    img
      display: block

      width: 150px
      height: 150px

      box-shadow: 4px 4px 0px 0px var(--shadow)
      margin-top: 12px

    h1
      font-size: 24px
      font-weight: 600
      text-shadow: 3px 3px 0 var(--shadow)
      margin-top: 4px

    p
      font-size: 12px
      font-weight: 300
      color: var(--text-secondary)
      margin-bottom: 2px
</style>
