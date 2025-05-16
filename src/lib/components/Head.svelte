<script lang="ts">
  let {
    title,
    description,
    image,
  }: {
    title?: string | null
    description?: string | null
    image?: string | null
  } = $props()
</script>

<svelte:head>
  {#if title}
    <title>{title}</title>
    <meta property="og:title" content={title} />
  {/if}

  {#if description}
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
  {/if}

  {#if image}
    <meta property="twitter:image" content={image} />
    <meta property="twitter:card" content="summary_large_image" />
  {/if}
</svelte:head>
