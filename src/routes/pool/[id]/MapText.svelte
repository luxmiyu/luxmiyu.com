<script lang="ts">
  import { Icon } from '$lib/components'
  import type { ComputedMap } from '$lib/types/osu'

  // 'EZHDDT' -> ['EZ', 'HD', 'DT']
  function splitMods(mods: string): string[] {
    return [...mods.matchAll(/.{2}/g)].map((m) => m[0])
  }

  let { map, disabled }: { map: ComputedMap; disabled: boolean } = $props()
</script>

{#snippet labeled(label: string, value: string, icon: boolean = false)}
  <div class="labeled">
    {#if icon}
      <Icon name={label} size="14px" overflow color="white" />
    {:else}
      <p class="label">{label}</p>
    {/if}
    <p class="value">{value}</p>
  </div>
{/snippet}

<div class="text" class:disabled>
  <div class="top">
    <div class="stars">
      <Icon name="star" size="20px" fill color="white" />
      <p>{map.stars}</p>
    </div>
    <a class="link" href="https://osu.ppy.sh/b/{map.id}" target="_blank">
      <div class="map">
        <p class="title">{map.artist} - {map.title}</p>
        <p class="difficulty">
          <strong style:color={map.color}>[{map.difficulty}]</strong> by {map.mapper}
        </p>
      </div>
    </a>
    <div class="mods">
      {#each splitMods(map.mods) as mod}
        <img class="mod" src="/pool/mods/{mod.toUpperCase()}.png" alt="{mod} mod icon" />
      {/each}
    </div>
  </div>
  <div class="bottom">
    <div class="left">
      <!-- {@render labeled('star', map.stars, true)} -->
      {@render labeled('animation', map.combo, true)}
      {@render labeled('timer', map.length, true)}
      {@render labeled('music_note', map.bpm, true)}
    </div>
    <div class="right">
      {@render labeled('CS', map.cs)}
      {@render labeled('AR', map.ar)}
      {@render labeled('OD', map.od)}
      {@render labeled('HP', map.hp)}
    </div>
  </div>
</div>

<style lang="sass">
  $breakpoint-m: 520px
  $breakpoint-s: 400px

  .text
    width: 100%
    height: 100%
    
    padding: 4px 4px 2px 0

    display: grid
    grid-template-rows: 1fr 14px
    gap: 4px

    transition: all 0.15s cubic-bezier(0.22, 1, 0.36, 1)

    &.disabled
      opacity: 0
      transform: translateX(32px)

    .top
      width: 100%
      height: 100%

      display: grid
      grid-template-columns: 52px 1fr auto 
      gap: 4px

      .stars
        width: 100%

        overflow: hidden
        
        display: flex
        justify-content: center
        align-items: center
        gap: 4px

        p
          width: auto
          font-size: 14px
          font-weight: 500
          padding-top: 2px

      .link
        min-width: 0

        .map
          height: 100%
          min-width: 0

          display: flex
          flex-direction: column
          gap: 2px

          color: white
          text-decoration: none
          overflow: hidden

          p
            white-space: nowrap
            overflow: hidden
            text-overflow: ellipsis

          .title
            font-size: 14px
            font-weight: 500

          .difficulty
            font-size: 12px
            font-weight: 300

      .mods
        width: 100%
        height: 100%

        display: flex
        flex-direction: row
        justify-content: flex-end
        align-items: center
        gap: 2px

        overflow: hidden

        .mod
          height: 24px
          max-width: 35px

    .bottom
      width: 100%
      height: 100%

      display: flex
      flex-direction: row
      justify-content: space-between
      align-items: end

      overflow: hidden

      .left, .right
        height: 100%

        display: flex
        gap: 4px

      .labeled
        display: flex
        flex-direction: row
        align-items: center
        gap: 6px

        p.label
          font-size: 12px
          font-weight: 300

          overflow: visible

        p.value
          font-size: 12px
          font-weight: 500

    @media screen and (max-width: $breakpoint-m)
      padding: 0px 4px 2px 4px

    @media screen and (max-width: $breakpoint-s)
      grid-template-rows: 1fr 28px
      gap: 0

      .bottom
        flex-direction: column
        align-items: center
</style>
