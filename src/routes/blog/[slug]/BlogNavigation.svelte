<script lang="ts">
  import { Grid, Text, Separate, Button } from '$lib/components'
  import formatDate from '$lib/util/formatDate'
  import type Post from '../Post'

  let { post, previous, next }: { post: Post; previous: Post | null; next: Post | null } = $props()
</script>

<Text>
  <Separate>
    <p class="subtitle">Author: {post.author}</p>
    <p class="subtitle center">
      <a href="/blog/{post.slug}.md" target="_blank">{post.slug}.md</a>
    </p>
    <p class="subtitle right">Date: {formatDate(new Date(post.date))}</p>
  </Separate>
</Text>
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
