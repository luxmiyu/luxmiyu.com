<script lang="ts">
  import { Header, Footer, Container, Text, Button, Grid } from '$lib/components'

  let short = $state(true)
</script>

<Container fill>
  <Header title="lorem ipsum" description="lorem ipsum dolor sit amet" />

  {#if short}
    <Text>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis risus eget metus
        ultricies, eget egestas lectus luctus. Sed sed enim sit amet dui efficitur blandit. Quisque
        vitae convallis erat. Aenean ullamcorper erat nec commodo sollicitudin. Integer tincidunt
        leo sit amet volutpat lobortis. Nam scelerisque blandit nisi, id fringilla leo laoreet a.
        Nam aliquam sem vitae orci euismod gravida.
      </p>

      <p>
        In hac habitasse platea dictumst. Nullam tristique justo in nisi volutpat, ut tempus diam
        maximus. Pellentesque feugiat mattis urna ac maximus. Duis aliquam pulvinar odio, sit amet
        lobortis odio dignissim et. Pellentesque vehicula auctor faucibus. Nam hendrerit, metus
        ornare scelerisque lacinia, quam ante efficitur purus, vitae laoreet tortor velit sed nisl.
        Suspendisse finibus tincidunt ligula eget semper. Duis quis ante pellentesque, tempor metus
        id, convallis elit. Nunc tempor vestibulum enim, quis semper urna gravida placerat. Nullam
        sapien nunc, molestie sed nunc id, sodales vehicula augue.
      </p>

      <p>
        Curabitur tempor erat lacus, sit amet dictum velit ultricies a. Integer nec ipsum a metus
        dapibus bibendum. Phasellus posuere scelerisque consectetur. Phasellus volutpat tincidunt
        tortor, vitae maximus sapien dictum eget. Quisque lobortis malesuada diam, dapibus bibendum
        mi rhoncus at. Morbi ultricies, ante a ornare dignissim, odio quam tincidunt tellus, eget
        aliquet leo justo ut velit. Mauris lacus nibh, pretium non metus ut, lacinia dictum sapien.
      </p>

      <p>
        Nam facilisis eget elit a viverra. Duis sagittis a velit sit amet suscipit. Donec in ipsum
        molestie massa fermentum tincidunt. Donec et orci lobortis, efficitur justo et, vehicula
        ipsum. Nulla vulputate vel felis euismod egestas. Nullam sed consequat arcu. Mauris
        scelerisque lacus a ante pulvinar, non porta mi bibendum. Cras non aliquet augue.
      </p>
    </Text>
  {:else}
    <Text>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mollis risus eget metus
        ultricies, eget egestas lectus luctus. Sed sed enim sit amet dui efficitur blandit. Quisque
        vitae convallis erat. Aenean ullamcorper erat nec commodo sollicitudin. Integer tincidunt
        leo sit amet volutpat lobortis. Nam scelerisque blandit nisi, id fringilla leo laoreet a.
        Nam aliquam sem vitae orci euismod gravida.
      </p>

      <p>
        In hac habitasse platea dictumst. Nullam tristique justo in nisi volutpat, ut tempus diam
        maximus. Pellentesque feugiat mattis urna ac maximus. Duis aliquam pulvinar odio, sit amet
        lobortis odio dignissim et. Pellentesque vehicula auctor faucibus. Nam hendrerit, metus
        ornare scelerisque lacinia, quam ante efficitur purus, vitae laoreet tortor velit sed nisl.
        Suspendisse finibus tincidunt ligula eget semper. Duis quis ante pellentesque, tempor metus
        id, convallis elit. Nunc tempor vestibulum enim, quis semper urna gravida placerat. Nullam
        sapien nunc, molestie sed nunc id, sodales vehicula augue.
      </p>

      <p>
        Curabitur tempor erat lacus, sit amet dictum velit ultricies a. Integer nec ipsum a metus
        dapibus bibendum. Phasellus posuere scelerisque consectetur. Phasellus volutpat tincidunt
        tortor, vitae maximus sapien dictum eget. Quisque lobortis malesuada diam, dapibus bibendum
        mi rhoncus at. Morbi ultricies, ante a ornare dignissim, odio quam tincidunt tellus, eget
        aliquet leo justo ut velit. Mauris lacus nibh, pretium non metus ut, lacinia dictum sapien.
        Nam facilisis eget elit a viverra. Duis sagittis a velit sit amet suscipit. Donec in ipsum
        molestie massa fermentum tincidunt. Donec et orci lobortis, efficitur justo et, vehicula
        ipsum. Nulla vulputate vel felis euismod egestas. Nullam sed consequat arcu. Mauris
        scelerisque lacus a ante pulvinar, non porta mi bibendum. Cras non aliquet augue.
      </p>

      <p>
        In pellentesque dolor in ornare semper. Vestibulum quis diam sapien. Vestibulum interdum
        placerat feugiat. Morbi orci velit, condimentum at ipsum nec, molestie varius neque. Ut
        euismod diam orci, eu hendrerit velit iaculis sed. Aliquam vitae maximus nunc, varius
        venenatis lorem. Fusce sed finibus nisi. Duis quis lorem nisl. Sed rutrum scelerisque
        fermentum. Aliquam sagittis volutpat purus eget elementum. Nunc sed lacus nisi. Fusce augue
        magna, ullamcorper vitae orci eget, cursus imperdiet tortor. Sed ipsum enim, lacinia et nibh
        id, efficitur sodales nunc.
      </p>

      <p>
        Nullam venenatis nibh sit amet odio dignissim malesuada. Class aptent taciti sociosqu ad
        litora torquent per conubia nostra, per inceptos himenaeos. Phasellus faucibus eget nibh eu
        euismod. Nunc condimentum eget eros sagittis faucibus. Etiam a odio in lectus laoreet
        condimentum ac sed ante. Suspendisse at tristique nisi, a posuere enim. Aenean risus est,
        tristique eu lacinia nec, condimentum quis quam. Nullam aliquam ligula at nulla gravida
        fermentum. Vivamus vitae magna finibus, mattis nulla eget, tempor elit.
      </p>

      <p>
        Suspendisse pretium fringilla dignissim. Vestibulum ut nulla massa. Praesent efficitur nisl
        at nulla suscipit, pellentesque mollis ex auctor. Curabitur eget malesuada ligula. Nulla
        facilisi. Fusce tristique est nulla. Vivamus lobortis velit in libero tincidunt, ac pretium
        ipsum aliquet. Vivamus bibendum, ipsum at volutpat luctus, ante ex finibus ex, ut
        scelerisque lorem lectus eget enim. Integer porta purus posuere erat dapibus egestas. Nulla
        facilisi. Etiam ut risus blandit, posuere nibh sed, eleifend sem. Nunc dictum euismod urna,
        eget faucibus erat malesuada eget. Nunc ut justo vulputate, eleifend urna vitae, ultrices
        sapien. Etiam non tincidunt mi. Etiam in lorem ut nisl convallis interdum. Curabitur
        ultrices leo at nulla pulvinar tincidunt.
      </p>

      <p>
        Pellentesque eu vestibulum elit. Integer porta et tortor eget dapibus. Phasellus sit amet
        iaculis justo. Suspendisse potenti. Nunc nec quam ullamcorper, viverra quam ut, tincidunt
        enim. Donec convallis sem felis, non aliquet urna pulvinar ac. Donec hendrerit ipsum eu
        porttitor euismod. Phasellus lobortis ultrices magna, at feugiat libero eleifend pretium.
        Pellentesque nunc nunc, tempus sed nulla id, malesuada lacinia neque. Nam eu orci faucibus,
        facilisis massa sit amet, mattis tortor. Donec ultrices placerat sem, vitae bibendum metus
        gravida ac.
      </p>

      <p>
        Vivamus malesuada risus sed est hendrerit facilisis eget non elit. Integer mollis tellus non
        erat sollicitudin, eu semper diam hendrerit. Sed sollicitudin lectus ac fermentum tincidunt.
        Suspendisse nec rutrum lectus, et laoreet mauris. Cras et imperdiet ipsum. Phasellus et
        turpis efficitur, dapibus justo consequat, accumsan tortor. Maecenas fringilla, tellus vitae
        luctus consequat, tellus orci cursus nisi, at pellentesque sapien nibh quis nisi. Sed
        dapibus dolor vitae mauris venenatis suscipit. Cras lectus mauris, ullamcorper ac elit non,
        fermentum facilisis neque. Ut mollis velit sit amet odio maximus, in lacinia nisi egestas.
        Ut porttitor, erat vel scelerisque viverra, elit tortor placerat urna, sed ultrices arcu
        massa at turpis.
      </p>

      <p>
        Nulla consectetur ligula vel magna ultrices, nec tristique elit aliquet. Proin cursus
        convallis dolor, vitae dapibus augue ornare et. Cras velit felis, porta ac purus at,
        eleifend posuere nisi. Phasellus scelerisque ligula et risus ornare venenatis. Vestibulum
        ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Fusce semper
        tellus ut massa rhoncus ultrices. In hac habitasse platea dictumst. Praesent finibus porta
        facilisis. Suspendisse bibendum, lacus vel lobortis pretium, nunc nisl placerat tortor,
        vitae hendrerit magna augue vitae purus. Sed lectus mi, vestibulum at tristique eget,
        porttitor ac leo. Suspendisse at porttitor tortor, eu pretium odio. Cras egestas nulla
        efficitur imperdiet cursus. Aliquam malesuada, risus nec lobortis auctor, metus felis
        volutpat sapien, in iaculis risus dolor sed neque. Cras fermentum hendrerit consectetur.
      </p>

      <p>
        Curabitur at nisi elit. Aenean ac tristique justo, in accumsan ligula. Ut volutpat sit amet
        diam id lacinia. Suspendisse potenti. Nullam egestas sapien at sodales porta. Ut interdum,
        felis et faucibus imperdiet, ex tortor faucibus arcu, vel fermentum sem arcu eu massa. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum placerat ipsum nunc, ut
        maximus velit faucibus ullamcorper. Sed a egestas leo, at vulputate diam. Nunc ut finibus
        libero. Phasellus aliquam rutrum euismod. Integer sit amet massa pharetra, volutpat quam
        fringilla, facilisis quam. Quisque gravida imperdiet ligula, vel fermentum libero tempus
        sed. Etiam vitae libero tempor, semper nunc sed, aliquam risus. In convallis libero massa,
        eget rhoncus felis pulvinar pulvinar. Proin consectetur ac urna sit amet malesuada.
      </p>

      <p>
        Phasellus a dapibus orci. Class aptent taciti sociosqu ad litora torquent per conubia
        nostra, per inceptos himenaeos. Nulla vel neque vel dolor ultricies finibus in in purus.
        Nulla efficitur sodales erat. Vestibulum ante ipsum primis in faucibus orci luctus et
        ultrices posuere cubilia curae; Nam blandit ex non scelerisque varius. Donec in aliquam
        purus. Nullam eget orci euismod, porta ante eu, pellentesque lectus. Duis ac nisi sit amet
        erat placerat tempor. Fusce tristique nisl ac malesuada suscipit. Proin eget odio vel enim
        tincidunt lacinia ut in lorem. Cras vehicula nisl in nulla sagittis, ut sodales ligula
        feugiat. Nunc blandit fermentum ligula a laoreet. Morbi in rutrum quam. Orci varius natoque
        penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>

      <p>
        Nullam porttitor, erat non semper fringilla, quam ex posuere dui, non convallis neque turpis
        eu massa. Nunc elementum libero a laoreet finibus. Sed arcu mi, scelerisque eu accumsan
        efficitur, tincidunt et lacus. Cras vitae ornare lectus. Donec at nulla non lectus ornare
        suscipit. Vivamus ultrices eros turpis, non tristique diam bibendum congue. Suspendisse
        condimentum cursus nisl sit amet volutpat.
      </p>

      <p>
        Donec eu purus accumsan elit consequat rhoncus. Morbi ac tincidunt lectus. Praesent cursus
        nunc libero, non aliquam ex porttitor eu. Nullam non tellus id nunc gravida pulvinar.
        Vestibulum iaculis tellus sit amet accumsan ornare. Vestibulum ante ipsum primis in faucibus
        orci luctus et ultrices posuere cubilia curae; Donec quam nunc, auctor eget est in, feugiat
        vulputate purus. Nulla facilisi. Sed volutpat massa quis urna feugiat, nec tempor nunc
        auctor.
      </p>

      <p>
        Vivamus hendrerit metus eu est sollicitudin, ac ullamcorper magna ultricies. Pellentesque ut
        est eu nisi varius porttitor. Nulla id suscipit nunc, sit amet volutpat massa. Nulla
        vestibulum mi at ullamcorper sollicitudin. Duis luctus, massa sed sodales dignissim, nibh
        urna pulvinar nisl, eu eleifend libero lectus ut arcu. Cras ac ipsum posuere, viverra sapien
        eget, fringilla sapien. Curabitur ante erat, lacinia at magna at, interdum pulvinar augue.
      </p>
    </Text>
  {/if}

  <Grid>
    <Button onclick={() => (short = !short)}>{short ? 'Expand Text' : 'Shorten Text'}</Button>
  </Grid>

  <Footer />
</Container>

<style lang="sass">
  //
</style>
