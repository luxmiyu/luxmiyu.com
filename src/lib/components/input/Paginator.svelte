<script lang="ts">
  import { Box, Icon, Columns, Button, Center, Text } from '$lib/components'

  let {
    page = $bindable(),
    pages,
    width = '100%',
    label = false,
    long = false,
    loop = false,
  }: {
    page: number
    pages: number
    label?: boolean
    long?: boolean
    loop?: boolean
    width?: string
  } = $props()

  function prev() {
    page--
    if (page < 1) page = loop ? pages : 1
  }

  function next() {
    page++
    if (page > pages) page = loop ? 1 : pages
  }

  let middle = $derived(Math.max(5, Math.min(pages - 4, page)))
</script>

{#snippet button(buttonPage: number, currentPage: number)}
  <Button nested selected={buttonPage === currentPage} onclick={() => (page = buttonPage)}>
    {buttonPage}
  </Button>
{/snippet}

<Box {width} padding="4px" height="auto">
  <Columns template={long ? '160px 1fr 160px' : '36px 1fr 36px'} gap="4px">
    <Button nested onclick={prev}>
      {#if long}
        <Center><p>Previous Page</p></Center>
      {:else}
        <Icon name="keyboard_arrow_left" size="15px" />
      {/if}
    </Button>

    {#if pages <= 9}
      <Columns template="repeat({pages}, 1fr)" gap="4px">
        {#each Array(pages) as _, i}
          {@render button(i + 1, page)}
        {/each}
      </Columns>
    {:else}
      <Columns template="repeat(9, 1fr)" gap="4px">
        {@render button(1, page)}

        {#if page <= 5}
          {@render button(2, page)}
        {:else}
          <Center><p>...</p></Center>
        {/if}

        {@render button(middle - 2, page)}
        {@render button(middle - 1, page)}
        {@render button(middle, page)}
        {@render button(middle + 1, page)}
        {@render button(middle + 2, page)}

        {#if page > pages - 5}
          {@render button(pages - 1, page)}
        {:else}
          <Center><p>...</p></Center>
        {/if}

        {@render button(pages, page)}
      </Columns>
    {/if}

    <Button nested onclick={next}>
      {#if long}
        <Center><p>Next Page</p></Center>
      {:else}
        <Icon name="keyboard_arrow_right" size="15px" />
      {/if}
    </Button>
  </Columns>
</Box>

{#if label}
  <Text>
    <p class="subtitle">Page {page} of {pages}</p>
  </Text>
{/if}
