<script lang="ts">
  import { enhance } from '$app/forms'

  import {
    Head,
    Header,
    Footer,
    Container,
    Button,
    Icon,
    Bricks,
    Link,
    Playground,
  } from '$lib/components'

  import { tooltabs } from '$lib/tools'

  let { data } = $props()

  let flat = $derived(
    tooltabs.flatMap((tab) => tab.tools.map((tool) => ({ ...tool, tab: tab.name })))
  )

  const defaultDescription =
    "These are mini web tools I've made that you might find cool or useful :D"

  let current: string | null = $state(null)
  let description: string = $derived.by(() => {
    const tool = flat.find((tool) => tool.name === current)
    if (!tool) return defaultDescription
    return tool.description ?? `luxmiyu.com/${tool.name}`
  })
</script>

<Head
  title="luxmiyu → home"
  description="I do a bunch of things in my free time, but most of all, I love sharing stuff! I do dev, anime, gaming, vtubers and chill vibes. Here you'll find a list of my links, as well as a playground for tools I've made."
  image="/preview/luxmiyu.jpg"
/>

<main>
  <Container>
    <Header pfp />

    <p>
      I do a bunch of things in my free time, but most of all, I love sharing stuff! I do dev,
      anime, gaming, vtubers and chill vibes.
    </p>
    <Bricks>
      <Link url="https://dcag.art" icon="/icon/dcag.png" label="Daily Cute Anime Girl" />
      <Link url="https://discord.gg/komimau" icon="/icon/komimau.png" label="Komimau Discord" />
      <Link url="https://map.luxmiyu.com/" icon="/icon/squaremap.png" label="SMP Minecraft Map" />
    </Bricks>

    <form action="?/toggleTheme" method="post" use:enhance>
      <Button>
        <div class="toggleTheme">
          {#if data.lightTheme}
            <Icon name="dark_mode" size="20px" />
            <span>Switch to Dark Theme</span>
          {:else}
            <Icon name="light_mode" size="20px" />
            <span>Switch to Light Theme</span>
          {/if}
        </div>
      </Button>
    </form>

    <section>
      <h2>Playground</h2>
      <Playground bind:current />
      <p class="subtitle">
        {description}
      </p>
      <p class="subtitle">
        <span style="color: var(--green)">Updated</span> /
        <span style="color: var(--yellow)">Legacy</span> /
        <span style="color: var(--red)">Deprecated</span>
      </p>
    </section>

    <section>
      <h2>Active Accounts</h2>
      <p class="subtitle">Follow me on these platforms!</p>
      <Bricks>
        <Link url="https://anilist.co/user/luxmiyu" icon="/icon/anilist.png" label="Anilist" />
        <Link url="https://osu.ppy.sh/users/luxmiyu" icon="/icon/osu.png" label="osu!" />
        <Link url="https://steamcommunity.com/id/luxmiyu/" icon="/icon/steam.png" label="Steam" />
        <Link url="https://github.com/luxmiyu" icon="/icon/github.png" label="Github" />
        <Link url="https://www.youtube.com/@luxmiyu" icon="/icon/youtube.png" label="Youtube" />
        <Link url="https://pixiv.me/luxmiyu" icon="/icon/pixiv.png" label="Pixiv" />
        <Link url="https://modrinth.com/user/luxmiyu" icon="/icon/modrinth.png" label="Modrinth" />
      </Bricks>
    </section>

    <section>
      <h2>Inactive Accounts</h2>
      <p class="subtitle">Accounts I use but not frequently</p>
      <Bricks>
        <Link
          url="https://www.planetminecraft.com/member/luxmiyu"
          icon="/icon/planetminecraft.png"
          label="Planet Minecraft"
        />
        <Link url="https://ch.tetr.io/u/lux" icon="/icon/tetrio.png" label="TETR.IO" />
        <Link url="https://www.chess.com/member/luxmiyu" icon="/icon/chess.png" label="Chess.com" />
        <Link url="https://twitter.com/luxmiyu" icon="/icon/twitter.png" label="Twitter" />
        <Link url="https://x.com/luxmiyu" icon="/icon/x.png" label="X" />
        <Link url="https://www.reddit.com/user/luxmiyu" icon="/icon/reddit.png" label="Reddit" />
        <Link url="https://soundcloud.com/luxmiyu" icon="/icon/soundcloud.png" label="Soundcloud" />
        <Link url="https://bandcamp.com/luxmiyu" icon="/icon/bandcamp.png" label="Bandcamp" />
        <Link url="https://paypal.me/luxmiyu" icon="/icon/paypal.png" label="PayPal" />
        <Link
          url="https://stackoverflow.com/users/10943586/luxmiyu"
          icon="/icon/stackoverflow.png"
          label="Stack Overflow"
        />
        <Link url="https://tenor.com/users/luxmiyu" icon="/icon/tenor.png" label="Tenor" />
        <Link
          url="https://www.speedrun.com/users/luxmiyu"
          icon="/icon/speedrun.png"
          label="Speedrun.com"
        />
        <Link
          url="https://www.curseforge.com/members/luxmiyu/projects"
          icon="/icon/curseforge.png"
          label="Curseforge"
        />
        <Link
          url="https://bsky.app/profile/luxmiyu.bsky.social"
          icon="/icon/bluesky.png"
          label="Bluesky"
        />
      </Bricks>
    </section>

    <section>
      <h2>Unused Accounts</h2>
      <p class="subtitle">Accounts I own but don't use</p>
      <Bricks>
        <Link url="https://luxmiyu.fanbox.cc/" icon="/icon/fanbox.png" label="FANBOX" />
        <Link url="https://skeb.jp/@luxmiyu" icon="/icon/skeb.png" label="Skeb" />
        <Link
          url="https://www.deviantart.com/luxmiyu"
          icon="/icon/deviantart.png"
          label="DeviantArt"
        />
        <Link url="https://www.twitch.tv/luxmiyu" icon="/icon/twitch.png" label="Twitch" />
        <Link url="https://kick.com/luxmiyu" icon="/icon/kick.png" label="Kick" />
        <Link url="https://mastodon.social/@luxmiyu" icon="/icon/mastodon.png" label="Mastodon" />
        <Link url="https://misskey.io/@luxmiyu" icon="/icon/misskey.png" label="Misskey" />
        <Link
          url="https://www.instagram.com/luxmiyu"
          icon="/icon/instagram.png"
          label="Instagram"
        />
        <Link url="https://www.tiktok.com/@luxmiyu" icon="/icon/tiktok.png" label="TikTok" />
        <Link url="https://onlyfans.com/luxmiyu" icon="/icon/onlyfans.png" label="OnlyFans" />
        <Link url="https://fansly.com/luxmiyu" icon="/icon/fansly.png" label="Fansly" />
        <Link url="https://www.patreon.com/luxmiyu" icon="/icon/patreon.png" label="Patreon" />
        <Link url="https://www.fanvue.com/luxmiyu" icon="/icon/fanvue.png" label="Fanvue" />
        <Link url="https://ko-fi.com/luxmiyu" icon="/icon/ko-fi.png" label="Ko-fi" />
        <Link url="https://luxmiyu.gumroad.com/" icon="/icon/gumroad.png" label="Gumroad" />
        <Link url="https://ganknow.com/luxmiyu" icon="/icon/gank.png" label="Gank" />
        <Link url="https://konect.gg/luxmiyu" icon="/icon/konect.png" label="Konect" />
        <Link
          url="https://www.zerochan.net/user/luxmiyu"
          icon="/icon/zerochan.png"
          label="zerochan"
        />
      </Bricks>
    </section>

    <section>
      <h2>Archive</h2>
      <p class="subtitle">Discontinued stuff, here for archiving purposes</p>
      <Bricks>
        <Link url="https://legacy.luxmiyu.com/" icon="/icon/link.png" label="legacy.luxmiyu.com" />
        <Link url="https://dcag.luxmiyu.com/" icon="/icon/link.png" label="dcag.luxmiyu.com" />
        <Link
          url="https://legacy.luxmiyu.com/hsr_old"
          icon="/icon/link.png"
          label="luxmiyu.com/hsr_old"
        />
        <Link url="https://unduck.luxmiyu.com/" icon="/icon/link.png" label="unduck.luxmiyu.com" />
      </Bricks>
    </section>

    <Footer />
  </Container>
</main>

<style lang="sass">
  main
    display: flex
    flex-direction: column
    justify-content: center
    align-items: center
    gap: 8px

    width: 100%

    p
      text-align: justify

    form
      display: grid
      grid-template-columns: 1fr
      width: 100%

      .toggleTheme
        display: flex
        flex-direction: row
        justify-content: center
        align-items: center
        gap: 8px

    section
      display: flex
      flex-direction: column
      gap: 8px

      width: 100%
      padding: 8px 0

      h2
        font-size: 16px
        font-weight: 400
      
      p.subtitle
        font-size: 12px
        font-weight: 300
        line-height: .8
        color: var(--text-secondary)
</style>
