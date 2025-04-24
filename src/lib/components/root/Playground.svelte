<script lang="ts">
  import Box from '../Box.svelte'
  import Icon from '../Icon.svelte'

  let {
    tabs,
  }: {
    tabs: { name: string; tools: { name: string; icon: string }[] }[]
  } = $props()

  let tools: { tab: string; name: string; icon: string }[] = $derived(
    tabs.flatMap((tab) => tab.tools.map((tool) => ({ ...tool, tab: tab.name })))
  )

  let selectedTab = $state(tabs[0].name)
</script>

<main>
  {#each tabs as tab}
    <div class="tab">
      <p class="subtitle">{tab.name}</p>
      <section>
        {#each tab.tools as { icon, name }}
          <a class="tool" href="/{name}">
            <Icon name={icon} size="16px" />
            <p>{name}</p>
          </a>
        {/each}
      </section>
    </div>
  {/each}
</main>

<style lang="sass">
  main
    display: flex
    flex-direction: column
    gap: 12px

    width: 100%

    .tab
      display: flex
      flex-direction: column
      gap: 4px

      .subtitle
        font-size: 12px
        font-weight: 300
        color: var(--text-secondary)
        line-height: 1

      section
        display: grid
        grid-template-columns: repeat(auto-fill, minmax(128px, 1fr))
        gap: 2px

        .tool
          display: flex
          flex-direction: row
          align-items: center
          justify-content: start
          gap: 8px

          padding: 6px
          height: 32px
          width: 100%

          text-decoration: none
          color: var(--text)
          font-size: 12px
          font-weight: 400
          background: var(--input)

          &:hover
            background: var(--input-hover)

          &.hidden
            display: none
</style>
