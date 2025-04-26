<script lang="ts">
  import Icon from '../Icon.svelte'
  import { legacy, disabled } from '../../../params/legacy'

  let {
    tabs,
  }: {
    tabs: {
      name: string
      tools: { name: string; icon: string }[]
    }[]
  } = $props()
</script>

<main>
  {#each tabs as tab}
    <div class="tab">
      <p class="subtitle">{tab.name}</p>
      <section>
        {#each tab.tools as { icon, name }}
          {#if disabled.includes(name)}
            <div class="tool disabled">
              <Icon name={icon} size="16px" />
              <p>{name}</p>
              <div class="dot"></div>
            </div>
          {:else}
            <a
              class="tool"
              href="/{name}"
              class:legacy={legacy.includes(name)}
              class:disabled={disabled.includes(name)}
              target={legacy.includes(name) ? '_blank' : '_self'}
            >
              <Icon name={icon} size="16px" />
              <p>{name}</p>
              <div class="dot"></div>
            </a>
          {/if}
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
          background-color: var(--input)

          user-select: none

          position: relative

          .dot
            position: absolute
            top: 6px
            right: 6px
            width: 2px
            height: calc(100% - 12px)
            border-radius: 1px
            background-color: var(--green)

          &.legacy
            .dot
              background-color: var(--yellow)

          &:hover
            background: var(--input-hover)

          &.disabled
            cursor: not-allowed
            background: var(--background-dots)
            color: var(--text-disabled)
            
            .dot
              background-color: var(--red)
</style>
