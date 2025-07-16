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

        <Separate>
          <p class="subtitle">Author: {post.author}</p>
          <p class="subtitle right">Date: {formatDate(new Date(post.date))}</p>
        </Separate>
      </Text>

      <BlogNavigation {previous} {next} />
    </Grid>
  </Box>

  <Box dark>
    <Text height="100%" lineHeight="1.25">
      <Content />

      <p class="subtitle right raw">
        <a href="/blog/{post.slug}.md" target="_blank">/blog/{post.slug}.md</a>
      </p>
    </Text>
  </Box>

  <Box dark height="auto">
    <Grid>
      <BlogNavigation {previous} {next} />
    </Grid>
  </Box>

  <Footer />
</Container>

<style lang="sass">
  .raw
    display: flex
    flex-direction: column
    justify-content: flex-end

    height: 16px
    flex-grow: 1
</style>
