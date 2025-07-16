<script lang="ts">
  import { Head, Header, Footer, Container, Grid, Button } from '$lib/components'
  import formatDate from '$lib/util/formatDate'

  let { data } = $props()
</script>

<Head title="luxmiyu → blog" description="sometimes i write stuff" image="/preview/blog.jpg" />

<Container fill>
  <Header title="blog" description="sometimes i write stuff" />

  <Grid>
    {#each data.posts.filter((post) => post.published) as post}
      <Button nopadding href="/blog/{post.slug}" target="_self">
        <div class="post">
          <div class="image">
            <img src={post.image} alt={post.title} />
          </div>
          <div class="content">
            <div class="top">
              <h2>{post.title}</h2>
              <p class="description">{post.description}</p>
            </div>
            <div class="bottom">
              <div class="tags">
                {#each post.tags as tag}
                  <p class="tag">{tag}</p>
                {/each}
              </div>
              <p>{formatDate(new Date(post.date))}</p>
            </div>
          </div>
        </div>
      </Button>
    {/each}
  </Grid>

  <Footer />
</Container>

<style lang="sass">
  .post
    display: flex
    flex-direction: row
    gap: 8px

    width: 100%
    height: 100px

    padding: 8px

    .image
      width: 180px
      height: 100%
      overflow: hidden

      img
        width: 100%
        height: 100%
        object-fit: cover

        border-radius: 4px

    .content
      width: 0
      flex-grow: 1

      display: flex
      flex-direction: column
      gap: 4px

      height: 100%

      .top
        display: flex
        flex-direction: column
        gap: 4px

        height: 0
        flex-grow: 1

        h2
          font-size: 18px
          font-weight: 450

        .description
          display: -webkit-box
          -webkit-box-orient: vertical
          -webkit-line-clamp: 3
          overflow: hidden

          font-weight: 300
          text-align: justify

      .bottom
        display: flex
        justify-content: space-between
        align-items: end
        gap: 2px

        p 
          font-size: 12px
          font-weight: 300
          color: var(--text-secondary)

        .tags
          display: flex
          gap: 4px

          .tag
            padding: 2px 6px
            border-radius: 4px
            background: var(--input-hover)
            color: var(--text)

    @media screen and (max-width: 560px)
      flex-direction: column-reverse
      height: 150px
      gap: 8px

      .image
        width: 100%
        height: 50px

      .content
        width: 100%
        height: 100px
</style>
