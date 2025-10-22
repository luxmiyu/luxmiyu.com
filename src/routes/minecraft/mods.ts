export interface ModCategory {
  name: string
  mods: MinecraftMod[]
}

export interface MinecraftMod {
  name: string
  iconURL: string
  url: string
}

export const categories: ModCategory[] = [
  // {
  //   name: 'aaaa',
  //   iconURL: 'aaaa',
  //   url: null,
  //   curseforgeURL: null,
  //   category: 'aaaa',
  // },

  {
    name: 'Modpacks',
    mods: [
      {
        name: 'Vanillux',
        iconURL: 'vanillux.png',
        url: 'https://modrinth.com/mod/vanillux',
      },
      {
        name: 'Fabulously Optimized',
        iconURL: 'fabulously-optimized.png',
        url: 'https://modrinth.com/mod/fabulously-optimized',
      },
      {
        name: 'Simply Optimized',
        iconURL: 'simply-optimized.png',
        url: 'https://modrinth.com/mod/sop',
      },
    ],
  },

  {
    name: 'Shaderpacks',
    mods: [
      {
        name: 'Complementary Shaders - Unbound',
        iconURL: 'complementary-unbound.png',
        url: 'https://modrinth.com/mod/complementary-unbound',
      },
      {
        name: 'iterationT 3.2.0',
        iconURL: 'iterationt-3-2-0.png',
        url: 'https://www.curseforge.com/minecraft/shaders/iterationt-3-2-0',
      },
    ],
  },

  {
    name: 'Resource Packs',
    mods: [
      {
        name: 'Stay True',
        iconURL: 'stay-true.png',
        url: 'https://www.curseforge.com/minecraft/texture-packs/stay-true',
      },
      {
        name: 'Redstone Tweaks',
        iconURL: 'redstone-tweaks.png',
        url: 'https://modrinth.com/resourcepack/redstone-tweaks',
      },
      {
        name: 'Default Dark Mode',
        iconURL: 'default-dark-mode.png',
        url: 'https://modrinth.com/resourcepack/default-dark-mode',
      },
      {
        name: 'Even Better Enchants',
        iconURL: 'even-better-enchants.png',
        url: 'https://modrinth.com/resourcepack/even-better-enchants',
      },
    ],
  },

  {
    name: 'By luxmiyu',
    mods: [
      {
        name: 'MiniModList',
        iconURL: 'minimodlist.png',
        url: 'https://modrinth.com/mod/minimodlist',
      },
      {
        name: 'MiniTeleport',
        iconURL: 'miniteleport.png',
        url: 'https://modrinth.com/mod/miniteleport',
      },
      {
        name: 'Anything',
        iconURL: 'anything.png',
        url: 'https://modrinth.com/mod/anything',
      },
      {
        name: 'Any Dimension Mod 2',
        iconURL: 'adm2.png',
        url: 'https://modrinth.com/mod/adm2',
      },
      {
        name: 'Luxore',
        iconURL: 'luxore.png',
        url: 'https://modrinth.com/mod/luxore',
      },
      {
        name: "Lux's Furniture Mod",
        iconURL: 'lux-furniture-mod.png',
        url: 'https://www.curseforge.com/minecraft/mc-mods/lux-furniture-mod',
      },
      {
        name: 'Any Dimension Mod',
        iconURL: 'adm.png',
        url: 'https://www.curseforge.com/minecraft/mc-mods/any-dimension-mod-1-7-10',
      },
    ],
  },

  {
    name: 'Synchronized',
    mods: [
      {
        name: 'No Chat Reports',
        iconURL: 'no-chat-reports.png',
        url: 'https://modrinth.com/mod/no-chat-reports',
      },
      {
        name: 'Distant Horizons',
        iconURL: 'distanthorizons.png',
        url: 'https://modrinth.com/mod/distanthorizons',
      },
      {
        name: 'Jade',
        iconURL: 'jade.png',
        url: 'https://modrinth.com/mod/jade',
      },
      {
        name: 'Simple Voice Chat',
        iconURL: 'simple-voice-chat.png',
        url: 'https://modrinth.com/plugin/simple-voice-chat',
      },
      {
        name: 'Do a Barrel Roll',
        iconURL: 'do-a-barrel-roll.png',
        url: 'https://modrinth.com/mod/do-a-barrel-roll',
      },
      {
        name: 'KleeSlabs',
        iconURL: 'kleeslabs.png',
        url: 'https://modrinth.com/mod/kleeslabs',
      },
      {
        name: 'Inventory Sorting',
        iconURL: 'inventory-sorting.png',
        url: 'https://modrinth.com/mod/inventory-sorting',
      },
    ],
  },

  {
    name: 'UI / UX',
    mods: [
      {
        name: 'Mod Menu',
        iconURL: 'modmenu.png',
        url: 'https://modrinth.com/mod/modmenu',
      },
      {
        name: "Xaero's Minimap",
        iconURL: 'xaeros-minimap.png',
        url: 'https://modrinth.com/mod/xaeros-minimap',
      },
      {
        name: "Xaero's World Map",
        iconURL: 'xaeros-world-map.png',
        url: 'https://modrinth.com/mod/xaeros-world-map',
      },
      {
        name: 'AppleSkin',
        iconURL: 'appleskin.png',
        url: 'https://modrinth.com/mod/appleskin',
      },
      {
        name: 'Auto Reconnect Reforged',
        iconURL: 'autoreconnectrf.png',
        url: 'https://modrinth.com/mod/autoreconnectrf',
      },
      {
        name: 'Lightweight Inventory Sorting',
        iconURL: 'lightweight-inventory-sorting.png',
        url: 'https://modrinth.com/mod/lightweight-inventory-sorting',
      },
      {
        name: 'Item Scroller',
        iconURL: 'item-scroller.png',
        url: 'https://modrinth.com/mod/item-scroller',
      },
      {
        name: 'Zoomify',
        iconURL: 'zoomify.png',
        url: 'https://modrinth.com/mod/zoomify',
      },
      {
        name: 'Camera Enhancements',
        iconURL: 'camera-enhancements.png',
        url: 'https://modrinth.com/mod/camera-enhancements',
      },
      {
        name: 'Roughly Enough Items',
        iconURL: 'rei.png',
        url: 'https://modrinth.com/mod/rei',
      },
      {
        name: 'Litematica',
        iconURL: 'litematica.png',
        url: 'https://modrinth.com/mod/litematica',
      },
      {
        name: 'Bridging Mod',
        iconURL: 'bridging-mod.png',
        url: 'https://modrinth.com/mod/bridging-mod',
      },
      {
        name: 'Better Ping Display',
        iconURL: 'better-ping-display-fabric.png',
        url: 'https://modrinth.com/mod/better-ping-display-fabric',
      },
      {
        name: 'Ping View',
        iconURL: 'ping-view.png',
        url: 'https://modrinth.com/mod/ping-view',
      },
      {
        name: 'Presencium',
        iconURL: 'presencium.png',
        url: 'https://modrinth.com/mod/presencium',
      },
      {
        name: 'Auth Me',
        iconURL: 'auth-me.png',
        url: 'https://modrinth.com/mod/auth-me',
      },
      {
        name: 'Inventory HUD+',
        iconURL: 'inventory-hud-forge.png',
        url: 'https://www.curseforge.com/minecraft/mc-mods/inventory-hud-forge',
      },
      {
        name: 'Chat Heads',
        iconURL: 'chat-heads.png',
        url: 'https://modrinth.com/mod/chat-heads',
      },
      {
        name: 'Better Statistics Screen',
        iconURL: 'betterstats.png',
        url: 'https://www.curseforge.com/minecraft/mc-mods/betterstats',
      },
      {
        name: 'Language Reload',
        iconURL: 'language-reload.png',
        url: 'https://modrinth.com/mod/language-reload',
      },
      {
        name: 'Language Reload',
        iconURL: 'language-reload.png',
        url: 'https://modrinth.com/mod/language-reload',
      },
      {
        name: 'lazy-language-loader',
        iconURL: 'lazy-language-loader.png',
        url: 'https://modrinth.com/mod/lazy-language-loader',
      },
      {
        name: 'More Chat History',
        iconURL: 'morechathistory.png',
        url: 'https://modrinth.com/mod/morechathistory',
      },
      {
        name: 'Chat Animation',
        iconURL: 'chatanimation.png',
        url: 'https://modrinth.com/mod/chatanimation',
      },
      {
        name: 'Slot Cycler',
        iconURL: 'slot-cycler.png',
        url: 'https://modrinth.com/mod/slot-cycler',
      },
      {
        name: 'Smooth Scrolling',
        iconURL: 'smooth-scroll.png',
        url: 'https://modrinth.com/mod/smooth-scroll',
      },
      {
        name: 'Status Effect Bars',
        iconURL: 'status-effect-bars.png',
        url: 'https://modrinth.com/mod/status-effect-bars',
      },
    ],
  },

  {
    name: 'Performance',
    mods: [
      {
        name: 'Sodium',
        iconURL: 'sodium.png',
        url: 'https://modrinth.com/mod/sodium',
      },
      {
        name: 'Iris Shaders',
        iconURL: 'iris.png',
        url: 'https://modrinth.com/mod/iris',
      },
      {
        name: 'Sodium Extra',
        iconURL: 'sodium-extra.png',
        url: 'https://modrinth.com/mod/sodium-extra',
      },
      {
        name: "Reese's Sodium Options",
        iconURL: 'reeses-sodium-options.png',
        url: 'https://modrinth.com/mod/reeses-sodium-options',
      },
      {
        name: 'FerriteCore',
        iconURL: 'ferrite-core.png',
        url: 'https://modrinth.com/mod/ferrite-core',
      },
      {
        name: 'Dynamic FPS',
        iconURL: 'dynamic-fps.png',
        url: 'https://modrinth.com/mod/dynamic-fps',
      },
      {
        name: 'Entity Culling',
        iconURL: 'entityculling.png',
        url: 'https://modrinth.com/mod/entityculling',
      },
      {
        name: 'Cubes Without Borders',
        iconURL: 'cubes-without-borders.png',
        url: 'https://modrinth.com/mod/cubes-without-borders',
      },
      {
        name: 'Bobby',
        iconURL: 'bobby.png',
        url: 'https://modrinth.com/mod/bobby',
      },
    ],
  },

  {
    name: 'Cosmetic',
    mods: [
      {
        name: 'Model Gap Fix',
        iconURL: 'modelfix.png',
        url: 'https://modrinth.com/mod/modelfix',
      },
      {
        name: '3D Skin Layers',
        iconURL: '3dskinlayers.png',
        url: 'https://modrinth.com/mod/3dskinlayers',
      },
      {
        name: '3D Armor',
        iconURL: 'armor-3d.png',
        url: 'https://modrinth.com/mod/armor-3d',
      },
      {
        name: 'Continuity',
        iconURL: 'continuity.png',
        url: 'https://modrinth.com/mod/continuity',
      },
      {
        name: 'Continuity',
        iconURL: 'optigui.png',
        url: 'https://modrinth.com/mod/optigui',
      },
      {
        name: 'Entity Model Features',
        iconURL: 'entity-model-features.png',
        url: 'https://modrinth.com/mod/entity-model-features',
      },
      {
        name: 'Entity Texture Features',
        iconURL: 'entitytexturefeatures.png',
        url: 'https://modrinth.com/mod/entitytexturefeatures',
      },
      {
        name: 'Ambient Environment',
        iconURL: 'ambient-environment.png',
        url: 'https://modrinth.com/mod/ambient-environment',
      },
      {
        name: 'Cave Dust',
        iconURL: 'cave-dust.png',
        url: 'https://modrinth.com/mod/cave-dust',
      },
      {
        name: 'Falling Leaves',
        iconURL: 'fallingleaves.png',
        url: 'https://modrinth.com/mod/fallingleaves',
      },
      {
        name: 'Visuality',
        iconURL: 'visuality.png',
        url: 'https://modrinth.com/mod/visuality',
      },
      {
        name: 'Wavey Capes',
        iconURL: 'wavey-capes.png',
        url: 'https://modrinth.com/mod/wavey-capes',
      },
      {
        name: 'Sounds',
        iconURL: 'sounds.png',
        url: 'https://modrinth.com/mod/sound',
      },
      {
        name: 'Sound Physics Remastered',
        iconURL: 'sound-physics-remastered.png',
        url: 'https://modrinth.com/mod/sound-physics-remastered',
      },
      {
        name: 'Presence Footsteps',
        iconURL: 'presence-footsteps.png',
        url: 'https://modrinth.com/mod/presence-footsteps',
      },
      {
        name: 'AmbientSounds',
        iconURL: 'ambientsounds.png',
        url: 'https://modrinth.com/mod/ambientsounds',
      },
    ],
  },

  {
    name: 'Server',
    mods: [
      {
        name: 'Lithium',
        iconURL: 'lithium.png',
        url: 'https://modrinth.com/mod/lithium',
      },
      {
        name: 'spark',
        iconURL: 'spark.png',
        url: 'https://modrinth.com/mod/spark',
      },
      {
        name: 'Ledger',
        iconURL: 'ledger.png',
        url: 'https://modrinth.com/mod/ledger',
      },
      {
        name: 'Mods Command',
        iconURL: 'mods-command.png',
        url: 'https://modrinth.com/mod/mods-command',
      },
      {
        name: 'Chunky',
        iconURL: 'chunky.png',
        url: 'https://modrinth.com/mod/chunky',
      },
      {
        name: 'WorldEdit',
        iconURL: 'worldedit.png',
        url: 'https://modrinth.com/plugin/worldedit',
      },
      {
        name: 'Unlock All Recipes',
        iconURL: 'unlock-all-recipes.png',
        url: 'https://modrinth.com/datapack/unlock-all-recipes',
      },
      {
        name: 'RightClickHarvest',
        iconURL: 'rightclickharvest.png',
        url: 'https://modrinth.com/mod/rightclickharvest',
      },
      {
        name: 'FallingTree',
        iconURL: 'fallingtree.png',
        url: 'https://modrinth.com/mod/fallingtree',
      },
      {
        name: 'Veinminer',
        iconURL: 'sgtveinminer.png',
        url: 'https://modrinth.com/mod/sgtveinminer',
      },
      {
        name: 'Ore Harvester',
        iconURL: 'ore-harvester.png',
        url: 'https://modrinth.com/mod/ore-harvester',
      },
      {
        name: 'squaremap',
        iconURL: 'squaremap.png',
        url: 'https://modrinth.com/plugin/squaremap',
      },
      {
        name: 'Styled Player List',
        iconURL: 'styledplayerlist.png',
        url: 'https://modrinth.com/mod/styledplayerlist',
      },
      {
        name: 'Sit!',
        iconURL: 'sit.png',
        url: 'https://modrinth.com/mod/sit!',
      },
      {
        name: 'Discord-MC-Chat',
        iconURL: 'discord-mc-chat.png',
        url: 'https://modrinth.com/mod/discord-mc-chat',
      },
      {
        name: 'Convenient mobGriefing',
        iconURL: 'convenient-mobgriefing.png',
        url: 'https://modrinth.com/mod/convenient-mobgriefing',
      },
    ],
  },
]
