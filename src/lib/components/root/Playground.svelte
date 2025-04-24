<script lang="ts">
  import Icon from '../Icon.svelte'

  let {
    tabs,
  }: {
    tabs: {
      name: string
      tools: { name: string; icon: string; status?: string }[]
    }[]
  } = $props()
</script>

<main>
  {#each tabs as tab}
    <div class="tab">
      <p class="subtitle">{tab.name}</p>
      <section>
        {#each tab.tools as { icon, name, status }}
          <a
            class="tool"
            href="/{name}"
            class:ready={status === 'ready'}
            class:wip={status === 'wip'}
            class:no={status === 'no'}
            class:golden={status === 'golden'}
          >
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

          user-select: none

          &.wip
            background: repeating-linear-gradient(
              -33deg,
              var(--input),
              var(--input) 10px,
              var(--card) 10px,
              var(--card) 12px
            )
          
          &.golden
            border: 2px solid var(--yellow)

          &:hover
            background: var(--input-hover)

          &.no
            cursor: not-allowed
            pointer-events: none
            background: var(--background-dots)
            color: var(--text-disabled)
</style>
