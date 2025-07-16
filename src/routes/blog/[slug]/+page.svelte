<script lang="ts">
  import { Head, Footer, Container, Text, Grid, Box, Separate } from '$lib/components'
  import BlogNavigation from './BlogNavigation.svelte'
  import formatDate from '$lib/util/formatDate'

  let { data } = $props()

  let post = $derived(data.post)
  let Content = $derived(data.content)

  let [previous, next] = $derived([data.previous, data.next])
</script>

<Head title={post.title} description={post.description} image={post.image} />

<Container fill large={post.large}>
  <Box dark height="auto">
    <Grid>
      <Text>
        <h1 class="center">{post.title}</h1>
        <p class="subtitle">{post.description}</p>
      </Text>

      <BlogNavigation {post} {previous} {next} />
    </Grid>
  </Box>

  <Grid>
    <Box dark width="100%" height="auto">
      <Text lineHeight="1.25">
        <Content />
      </Text>
    </Box>

    <Box dark height="auto">
      <Grid>
        <BlogNavigation {post} {previous} {next} />
      </Grid>
    </Box>
  </Grid>

  <Footer />
</Container>
