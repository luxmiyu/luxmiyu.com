<script lang="ts">
  import Container from '$lib/components/Container.svelte'
  import ProfilePicture from '$lib/components/root/ProfilePicture.svelte'
  import Masonry from '$lib/components/root/Masonry.svelte'
  import Link from '$lib/components/root/Link.svelte'
  import Toolbox from '$lib/components/root/Toolbox.svelte'
  import Tool from '$lib/components/root/Tool.svelte'
</script>

<main>
  <Container>
    <ProfilePicture />

    <p>
      I do a bunch of things in my free time, but most of all, I love sharing stuff! I do dev,
      anime, gaming, vtubers and chill vibes.
    </p>
    <Masonry>
      <Link url="https://dcag.art" icon="/icon/dcag.png" label="Daily Cute Anime Girl" />
      <Link url="https://discord.gg/komimau" icon="/icon/komimau.png" label="Komimau Discord" />
      <Link url="https://map.luxmiyu.com/" icon="/icon/squaremap.png" label="Komimau Minecraft" />
    </Masonry>

    <section>
      <h2>Tools</h2>
      <p class="subtitle">Things I've made that you might find cool or useful</p>
      <Toolbox>
        <Tool icon="html" name="template" />
        <Tool icon="music_note" name="bpmconverter" />
        <Tool icon="touch_app" name="bpmtap" />
        <Tool icon="tune" name="metronome" />
        <Tool icon="square_foot" name="convert" />
        <Tool icon="colors" name="color" />
        <Tool icon="numbers" name="rng" />
        <Tool icon="hourglass" name="progress" />
        <Tool icon="text_format" name="base64" />
        <Tool icon="timer_10" name="base" />
        <Tool icon="subscript" name="binary" />
        <Tool icon="media_link" name="youtube" />
        <Tool icon="keyboard" name="keyboard" />
        <Tool icon="font_download" name="emoji" />
        <Tool icon="sticky_note" name="lorem" />
      </Toolbox>
    </section>

    <section>
      <h2>Utility</h2>
      <p class="subtitle">Tools I've made for communities I'm a part of</p>
      <Toolbox>
        <Tool icon="forum" name="uwufier" />
        <Tool icon="switches" name="sliders" />
        <Tool icon="wall_art" name="dcag" />
        <Tool icon="label" name="advancements" />
        <Tool icon="lists" name="hsr" />
        <Tool icon="group" name="osucollab" />
        <Tool icon="steps" name="speedtune" />
        <Tool icon="playing_cards" name="qingque" />
        <Tool icon="open_with" name="stratagems" />
        <Tool icon="lists" name="wuwa" />
        <Tool icon="brightness_empty" name="convene" />
        <Tool icon="door_open" name="adm2" />
        <Tool icon="apparel" name="anything" />
        <Tool icon="stack_hexagon" name="luxore" />
      </Toolbox>
    </section>

    <section>
      <h2>Games</h2>
      <p class="subtitle">Mini browser games I've made that you might find fun</p>
      <Toolbox>
        <Tool icon="password" name="wordle" />
        <Tool icon="grid_3x3" name="tictactoe" />
        <Tool icon="floor" name="snake" />
        <Tool icon="bomb" name="minesweeper" />
        <Tool icon="pace" name="reaction" />
        <Tool icon="page_control" name="mastermind" />
        <Tool icon="backlight_low" name="lights" />
        <Tool icon="album" name="drums" />
      </Toolbox>
    </section>

    <section>
      <h2>Active Accounts</h2>
      <p class="subtitle">Follow me on these platforms!</p>
      <Masonry>
        <Link url="https://anilist.co/user/luxmiyu" icon="/icon/anilist.png" label="Anilist" />
        <Link url="https://osu.ppy.sh/users/luxmiyu" icon="/icon/osu.png" label="osu!" />
        <Link url="https://steamcommunity.com/id/luxmiyu/" icon="/icon/steam.png" label="Steam" />
        <Link url="https://github.com/luxmiyu" icon="/icon/github.png" label="Github" />
        <Link url="https://www.youtube.com/@luxmiyu" icon="/icon/youtube.png" label="Youtube" />
        <Link url="https://pixiv.me/luxmiyu" icon="/icon/pixiv.png" label="Pixiv" />
        <Link url="https://modrinth.com/user/luxmiyu" icon="/icon/modrinth.png" label="Modrinth" />
      </Masonry>
    </section>

    <section>
      <h2>Inactive Accounts</h2>
      <p class="subtitle">Accounts I use but not frequently</p>
      <Masonry>
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
      </Masonry>
    </section>

    <section>
      <h2>Unused Accounts</h2>
      <p class="subtitle">Accounts I own but don't use</p>
      <Masonry>
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
      </Masonry>
    </section>

    <section>
      <h2>Legacy</h2>
      <p class="subtitle">Discontinued stuff, here for archiving purposes</p>
      <Masonry>
        <Link url="https://dcag.luxmiyu.com/" icon="/icon/link.png" label="dcag.luxmiyu.com" />
        <Link url="https://luxmiyu.com/hsr_old" icon="/icon/link.png" label="luxmiyu.com/hsr_old" />
      </Masonry>
    </section>
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
