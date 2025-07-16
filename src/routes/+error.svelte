<script lang="ts">
  import { page } from '$app/state'
  import { Head, Header, Footer, Container, Text, Grid, Box } from '$lib/components'

  let data = $derived({
    status: page.status.toString(),
    error: page.error?.message ?? 'Unknown Error',
  })
</script>

<Head title="luxmiyu → empty" description="empty" image="/preview/empty.jpg" />

<Container fill>
  <Header title={data.status} description={data.error} />

  <Grid>
    <Box>
      <Text>
        <p>You've found error code <code>{data.status}</code> with this message:</p>
        <blockquote>
          <p>{data.error}</p>
        </blockquote>
      </Text>
    </Box>
  </Grid>

  <Footer />
</Container>
