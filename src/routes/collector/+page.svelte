<script lang="ts">
  import { browser } from '$app/environment'
  import { Container, Button, Header, Grid, Footer } from '$lib/components'
  import { type Item, items } from './items'

  const done: string[] = $state([])

  const toggle = (item: Item) => {
    if (done.includes(item.id)) {
      done.splice(done.indexOf(item.id), 1)
    } else {
      done.push(item.id)
    }
    save()
  }

  const todoAll = () => {
    done.splice(0, done.length)
    save()
  }

  const doneAll = () => {
    done.splice(0, done.length)
    for (const item of items) {
      done.push(item.id)
    }
    save()
  }

  const save = () => {
    localStorage.setItem('collector.items', JSON.stringify(done))
  }

  const load = () => {
    const saved = localStorage.getItem('collector.items')
    if (saved) {
      done.splice(0, done.length)
      done.push(...JSON.parse(saved))
    }
  }

  if (browser) load()
</script>

<Container large>
  <Header title="collector" description="The Collector quest tracker for Escape from Tarkov" />

  <Grid minmax="250px" gap="2px">
    {#each items as item}
      <button class="item" onclick={() => toggle(item)} class:done={done.includes(item.id)}>
        <div class="img">
          <img
            src="/collector/{item.id}.png"
            alt={item.name}
            class:smol={item.w === 1 && item.h === 1}
          />
        </div>
        <h2>{item.name}</h2>
      </button>
    {/each}
  </Grid>

  <Grid columns="2">
    <Button onclick={todoAll}>Reset all</Button>
    <Button onclick={doneAll}>Mark all as done</Button>
  </Grid>

  <Footer />
</Container>

<style lang="sass">
  .item
    display: flex
    flex-direction: row
    align-items: center
    justify-content: start
    gap: 8px
    padding: 0

    width: 100%
    height: 80px

    color: var(--text)
    background: var(--card)
    border-radius: 2px
    overflow: hidden

    border: 1px solid var(--yellow)

    cursor: pointer

    .img
      display: flex
      justify-content: center
      align-items: center

      height: 100%
      aspect-ratio: 1 / 1
      padding: 4px

      background: #241b27
      
      img
        max-height: 100%
        max-width: 100%

        clip-path: inset(2px)

    &:hover
      filter: brightness(1.2)

  .item.done
    border: 1px solid var(--text-secondary)
    filter: brightness(0.5)

    color: var(--text-secondary)
    text-decoration: line-through

    &:hover
      filter: brightness(0.75)
</style>
