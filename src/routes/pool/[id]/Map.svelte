<script lang="ts">
  import { Icon } from '$lib/components'
  import type { ComputedMap } from '$lib/types/osu'
  import MapText from './MapText.svelte'

  let {
    map,
    playing,
    hidden,
    toggleHidden,
    play,
  }: {
    map: ComputedMap
    playing: string | null
    hidden: string[]
    toggleHidden: (id: string) => void
    play: (id: string) => void
  } = $props()

  let disabled = $derived(hidden.includes(map.id))
</script>

{#snippet link(icon: string, url: string)}
  <div class="button">
    <a href={url} target="_blank">
      <Icon name={icon} size="16px" color="white" />
    </a>
  </div>
{/snippet}

{#snippet button(icon: string, fn: () => void)}
  <button class="button" onclick={fn}>
    <p>
      <Icon name={icon} size="16px" color="white" />
    </p>
  </button>
{/snippet}

<div class="card" style:border-color={map.color}>
  <img class="bg" src={map.cover} alt="cover art for {map.artist} - {map.title}" />
  <div class="main">
    <div class="label"><p style:background-color={map.color}>{map.label}</p></div>
    <div class="content">
      <div class="cover">
        <a class="img" href="https://osu.ppy.sh/b/{map.id}" target="_blank" class:disabled>
          <img src={map.cover} alt="cover art for {map.artist} - {map.title}" />
        </a>
        <div class="buttons">
          {@render button(disabled ? 'visibility_off' : 'visibility', () => toggleHidden(map.id))}
        </div>
        <div class="links" class:disabled>
          {@render link('keyboard_double_arrow_right', `osu://b/${map.id}`)}
          {@render link('save', `https://catboy.best/d/${map.set}`)}
          {@render button(playing === map.set ? 'stop' : 'play_arrow', () => play(map.set))}
        </div>
      </div>
      <MapText {map} {disabled} />
    </div>
  </div>
</div>

<style lang="sass">
  $breakpoint-m: 520px
  $breakpoint-s: 400px
  
  .card
    color: #fff
    background: #444
    width: 100%
    height: 52px

    border-radius: 4px
    overflow: hidden

    position: relative

    .bg
      position: absolute
      top: 0
      left: 0

      width: 100%
      height: 100%
      object-fit: cover

      filter: brightness(0.25) saturate(0.5) blur(8px)

      user-select: none

    .main
      position: absolute
      top: 0
      left: 0

      width: 100%
      height: 100%

      display: grid
      grid-template-columns: 18px 1fr

      .label
        width: 100%
        height: 100%
        padding: 4px
        padding-right: 0

        display: grid
        grid-template: 1fr / 1fr

        p
          width: 100%
          height: 100%
          background: white
          writing-mode: sideways-lr
          color: #000d
          text-align: center
          font-size: 12px
          font-weight: 500
          border-radius: 2px
          line-height: 0

          display: flex
          align-items: center
          justify-content: center

      .content
        width: 100%
        height: 100%

        display: grid
        grid-template-columns: 120px 1fr
        gap: 0

        .cover
          width: 100%
          height: 100%

          border-radius: 2px

          overflow: hidden

          position: relative

          .img
            width: calc(100% - 8px)
            height: calc(100% - 8px)

            position: absolute
            top: 4px
            left: 4px

            border-radius: 2px

            overflow: hidden

            img
              width: 100%
              height: 100%
              object-fit: cover

              transition: all 0.15s cubic-bezier(0.22, 1, 0.36, 1)

            &:hover
              img
                scale: 1.1
                filter: brightness(0.75)

            &.disabled
              pointer-events: none

              img
                filter: blur(3px)

          .buttons, .links
            position: absolute

            bottom: 6px
            left: 6px

            background: #000a
            border-radius: 2px

            display: flex
            gap: 2px
            padding: 2px

            &:hover
              background: #000d

            .button
              width: 16px
              height: 16px
              display: flex
              align-items: center
              justify-content: center

              background: none
              border: none
              padding: 0

              cursor: pointer

              &:hover
                background: #fff4

          .links
            top: auto
            left: auto
            bottom: 6px
            right: 6px

            &.disabled
              pointer-events: none
              opacity: 0.5
      
    @media screen and (max-width: $breakpoint-m)
      height: 100px

      .main
        .content
          grid-template-columns: 1fr
          grid-template-rows: 52px 1fr
      
    @media screen and (max-width: $breakpoint-s)
      height: 112px
</style>
