export interface Stratagem {
  id: string
  name: string
  code: string
  type: 'blue' | 'red' | 'green' | 'yellow'
}

export const stratagems: Stratagem[] = [
  // Patriotic Administration Center
  { id: 'machine_gun', name: 'MG-43 Machine Gun', code: 'saswd', type: 'blue' },
  { id: 'antimateriel_rifle', name: 'APW-1 Anti-Materiel Rifle', code: 'sadws', type: 'blue' },
  { id: 'stalwart', name: 'M-105 Stalwart', code: 'saswwa', type: 'blue' },
  { id: 'expendable_antitank', name: 'EAT-17 Expendable Anti-Tank', code: 'ssawd', type: 'blue' },
  { id: 'recoilless_rifle', name: 'GR-8 Recoilless Rifle', code: 'sadda', type: 'blue' },
  { id: 'flamethrower', name: 'FLAM-40 Flamethrower', code: 'sawsw', type: 'blue' },
  { id: 'autocannon', name: 'AC-8 Autocannon', code: 'saswwd', type: 'blue' },
  { id: 'heavy_machine_gun', name: 'MG-206 Heavy Machine Gun', code: 'sawss', type: 'blue' },
  {
    id: 'airburst_rocket_launcher',
    name: 'RL-77 Airburst Rocket Launcher',
    code: 'swwad',
    type: 'blue',
  },
  { id: 'commando', name: 'MLS-4X Commando', code: 'sawsd', type: 'blue' },
  { id: 'railgun', name: 'RS-422 Railgun', code: 'sdswad', type: 'blue' },
  { id: 'spear', name: 'FAF-14 Spear', code: 'sswss', type: 'blue' },
  { id: 'wasp_launcher', name: 'StA-X3 W.A.S.P. Launcher', code: 'sswsd', type: 'blue' },

  // Orbital Cannons
  { id: 'gatling_barrage', name: 'Orbital Gatling Barrage', code: 'dsaww', type: 'red' },
  { id: 'airburst_strike', name: 'Orbital Airburst Strike', code: 'ddd', type: 'red' },
  { id: '120mm_he_barrage', name: 'Orbital 120mm HE Barrage', code: 'ddsads', type: 'red' },
  { id: '380mm_he_barrage', name: 'Orbital 380mm HE Barrage', code: 'dswwass', type: 'red' },
  { id: 'walking_barrage', name: 'Orbital Walking Barrage', code: 'dsdsds', type: 'red' },
  { id: 'laser', name: 'Orbital Laser', code: 'dswds', type: 'red' },
  { id: 'napalm_barrage', name: 'Orbital Napalm Barrage', code: 'ddsadw', type: 'red' },
  { id: 'railcannon_strike', name: 'Orbital Railcannon Strike', code: 'dwssd', type: 'red' },

  // Hangar
  { id: 'strafing_run', name: 'Eagle Strafing Run', code: 'wdd', type: 'red' },
  { id: 'airstrike', name: 'Eagle Airstrike', code: 'wdsd', type: 'red' },
  { id: 'cluster_bomb', name: 'Eagle Cluster Bomb', code: 'wdssd', type: 'red' },
  { id: 'napalm_airstrike', name: 'Eagle Napalm Airstrike', code: 'wdsw', type: 'red' },
  { id: 'jump_pack', name: 'LIFT-850 Jump Pack', code: 'swwsw', type: 'blue' },
  { id: 'smoke_strike', name: 'Eagle Smoke Strike', code: 'wdws', type: 'red' },
  { id: '110mm_rocket_pods', name: 'Eagle 110mm Rocket Pods', code: 'wdwa', type: 'red' },
  { id: '500kg_bomb', name: 'Eagle 500kg Bomb', code: 'wdsss', type: 'red' },
  { id: 'fast_recon_vehicle', name: 'M-102 Fast Recon Vehicle', code: 'asdsdsw', type: 'blue' },

  // Bridge
  { id: 'orbital_precision_strike', name: 'Orbital Precision Strike', code: 'ddw', type: 'red' },
  { id: 'orbital_gas_strike', name: 'Orbital Gas Strike', code: 'ddsd', type: 'red' },
  { id: 'orbital_ems_strike', name: 'Orbital EMS Strike', code: 'ddas', type: 'red' },
  { id: 'orbital_smoke_strike', name: 'Orbital Smoke Strike', code: 'ddsw', type: 'red' },
  { id: 'hmg_emplacement', name: '	E/MG-101 HMG Emplacement', code: 'swadda', type: 'green' },
  {
    id: 'shield_generator_relay',
    name: 'FX-12 Shield Generator Relay',
    code: 'ssadad',
    type: 'green',
  },
  { id: 'tesla_tower', name: 'A/ARC-3 Tesla Tower', code: 'swdwad', type: 'green' },
  {
    id: 'grenadier_battlement',
    name: 'E/GL-21 Grenadier Battlement',
    code: 'sdsad',
    type: 'green',
  },

  // Engineering Bay
  {
    id: 'antipersonnel_minefield',
    name: 'MD-6 Anti-Personnel Minefield',
    code: 'sawd',
    type: 'green',
  },
  { id: 'supply_pack', name: 'B-1 Supply Pack', code: 'saswws', type: 'blue' },
  { id: 'grenade_launcher', name: 'GL-21 Grenade Launcher', code: 'sawas', type: 'blue' },
  { id: 'laser_cannon', name: 'LAS-98 Laser Cannon', code: 'saswa', type: 'blue' },
  { id: 'incendiary_mines', name: 'MD-I4 Incendiary Mines', code: 'saas', type: 'green' },
  { id: 'guard_dog_rover', name: 'AX/LAS-5 "Guard Dog" Rover', code: 'swawdd', type: 'blue' },
  {
    id: 'ballistic_shield_backpack',
    name: 'SH-20 Ballistic Shield Backpack',
    code: 'sasswa',
    type: 'blue',
  },
  { id: 'arc_thrower', name: 'ARC-3 Arc Thrower', code: 'sdswaa', type: 'blue' },
  { id: 'antitank_mines', name: 'MD-17 Anti-Tank Mines', code: 'saww', type: 'green' },
  { id: 'quasar_cannon', name: 'LAS-99 Quasar Cannon', code: 'sswad', type: 'blue' },
  {
    id: 'shield_generator_pack',
    name: 'SH-32 Shield Generator Pack',
    code: 'swadad',
    type: 'blue',
  },
  { id: 'gas_mines', name: 'MD-8 Gas Mines', code: 'saad', type: 'green' },

  // Robotics Workshop
  { id: 'machine_gun_sentry', name: 'A/MG-43 Machine Gun Sentry', code: 'swddw', type: 'green' },
  { id: 'gatling_sentry', name: 'A/G-16 Gatling Sentry', code: 'swda', type: 'green' },
  { id: 'mortar_sentry', name: 'A/M-12 Mortar Sentry', code: 'swdds', type: 'green' },
  { id: 'guard_dog', name: 'AX/AR-23 "Guard Dog"', code: 'swawds', type: 'blue' },
  { id: 'autocannon_sentry', name: 'A/AC-8 Autocannon Sentry', code: 'swdwaw', type: 'green' },
  { id: 'rocket_sentry', name: 'A/MLS-4X Rocket Sentry', code: 'swdda', type: 'green' },
  { id: 'ems_mortar_sentry', name: 'A/M-23 EMS Mortar Sentry', code: 'swdsd', type: 'green' },
  { id: 'patriot_exosuit', name: 'EXO-45 Patriot Exosuit', code: 'asdwass', type: 'blue' },
  { id: 'emancipator_exosuit', name: 'EXO-49 Emancipator Exosuit', code: 'asdwasw', type: 'blue' },

  // Warbonds
  { id: 'sterilizer', name: 'TX-41 Sterilizer', code: 'sawsa', type: 'blue' },
  {
    id: 'guard_dog_dog_breath',
    name: 'AX/TX-13 "Guard Dog" Dog Breath',
    code: 'swawdw',
    type: 'blue',
  },
  { id: 'directional_shield', name: 'SH-51 Directional Shield', code: 'swadww', type: 'blue' },
  {
    id: 'antitank_emplacement',
    name: '	E/AT-12 Anti-Tank Emplacement',
    code: 'swaddd',
    type: 'green',
  },
  { id: 'flame_sentry', name: 'A/FLAM-40 Flame Sentry', code: 'swdsww', type: 'green' },
  { id: 'portable_hellbomb', name: 'B-100 Portable Hellbomb', code: 'sdwww', type: 'blue' },
  { id: 'hover_pack', name: 'LIFT-860 Hover Pack', code: 'swwsad', type: 'blue' },
  { id: 'one_true_flag', name: 'CQC-1 One True Flag', code: 'saddw', type: 'blue' },

  // Common
  { id: 'reinforce', name: 'Reinforce', code: 'wsdaw', type: 'yellow' },
  { id: 'sos_beacon', name: 'SoS Beacon', code: 'wsdw', type: 'yellow' },
  { id: 'resupply', name: 'Resupply', code: 'sswd', type: 'yellow' },
  { id: 'eagle_rearm', name: 'Eagle Rearm', code: 'wwawd', type: 'yellow' },

  // Objectives
  { id: 'sssd_delivery', name: 'SSSD Delivery', code: 'sssww', type: 'yellow' },
  { id: 'prospecting_drill', name: 'Prospecting Drill', code: 'ssadss', type: 'yellow' },
  { id: 'super_earth_flag', name: 'Super Earth Flag', code: 'swsw', type: 'yellow' },
  { id: 'hellbomb', name: 'Hellbomb', code: 'swaswdsw', type: 'yellow' },
  { id: 'upload_data', name: 'Upload Data', code: 'adwww', type: 'yellow' },
  { id: 'seismic_probe', name: 'Seismic Probe', code: 'wwadss', type: 'yellow' },
  { id: 'illumination_flare', name: 'Orbital Illumination Flare', code: 'ddaa', type: 'yellow' },
  { id: 'seaf_artillery', name: 'SEAF Artillery', code: 'dwws', type: 'yellow' },
  { id: 'dark_fluid_vessel', name: 'Dark Fluid Vessel', code: 'wadsww', type: 'yellow' },
  { id: 'tectonic_drill', name: 'Tectonic Drill', code: 'wswsws', type: 'yellow' },
  { id: 'hive_breaker_drill', name: 'Hive Breaker Drill', code: 'awsdsss', type: 'yellow' },
]
