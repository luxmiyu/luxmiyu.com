<script lang="ts">
  import {
    Head,
    Header,
    Footer,
    Container,
    Box,
    Columns,
    Button,
    Grid,
    Center,
  } from '$lib/components'

  const LOTS_OF_NUMEERS = [
    52, 25, 12, 68, 10, 94, 86, 24, 61, 7, 37, 90, 2, 95, 76, 45, 40, 44, 36, 19, 0, 65, 22, 28, 82,
    82, 55, 28, 78, 14, 66, 15, 45, 45, 63, 11, 47, 21, 13, 23, 59, 85, 46, 34, 50, 13, 78, 100, 19,
    55, 91, 100, 1, 25, 7, 19, 84, 31, 16, 52, 96, 39, 30, 58, 12, 1, 25, 24, 26, 21, 67, 60, 25,
    22, 8, 53, 50, 84, 90, 77, 5, 51, 100, 39, 19, 17, 47, 2, 94, 79, 5, 67, 18, 3, 39, 10, 39, 83,
    36, 43,
  ]

  const PER_PAGE = 5

  let page = $state(1)
  let pages = $derived(Math.ceil(LOTS_OF_NUMEERS.length / PER_PAGE))
  let pagedNumbers = $derived(LOTS_OF_NUMEERS.slice((page - 1) * PER_PAGE, page * PER_PAGE))
</script>

<Head title="luxmiyu → test" description="a test page" image="/preview/test.jpg" />

<Container fill>
  <Header title="test" description="a test page" />

  <Grid>
    {#each pagedNumbers as num}
      <Box>{num}</Box>
    {/each}
  </Grid>

  <Columns template="100px 1fr 100px">
    <Button onclick={() => page--}>prev</Button>
    <Center><p>Page {page} of {pages}</p></Center>
    <Button onclick={() => page++}>next</Button>
  </Columns>

  <Footer />
</Container>
