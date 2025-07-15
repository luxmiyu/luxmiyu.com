<script lang="ts">
  import { Grid, Box, Button } from '$lib/components'
  import type Post from '../Post'

  let { previous, next }: { previous: Post | null; next: Post | null } = $props()
</script>

<Grid columns="3">
  {#if previous}
    <Button nested href="/blog/{previous.slug}" target="_self">
      &lsaquo; {previous.title}
    </Button>
  {:else}
    <Button nested disabled>&lsaquo; Previous</Button>
  {/if}

  <Button nested href="/blog" target="_self">Go Back</Button>

  {#if next}
    <Button nested href="/blog/{next.slug}" target="_self">
      {next.title} &rsaquo;
    </Button>
  {:else}
    <Button nested disabled>Next &rsaquo;</Button>
  {/if}
</Grid>
