const colors = [
  {
    name: 'Air Force Blue (Raf)',
    hex: '#5d8aa8',
    rgb: [93, 138, 168],
  },
  {
    name: 'Air Force Blue (Usaf)',
    hex: '#00308f',
    rgb: [0, 48, 143],
  },
  {
    name: 'Air Superiority Blue',
    hex: '#72a0c1',
    rgb: [114, 160, 193],
  },
  {
    name: 'Alabama Crimson',
    hex: '#a32638',
    rgb: [163, 38, 56],
  },
  {
    name: 'Alice Blue',
    hex: '#f0f8ff',
    rgb: [240, 248, 255],
  },
  {
    name: 'Alizarin Crimson',
    hex: '#e32636',
    rgb: [227, 38, 54],
  },
  {
    name: 'Alloy Orange',
    hex: '#c46210',
    rgb: [196, 98, 16],
  },
  {
    name: 'Almond',
    hex: '#efdecd',
    rgb: [239, 222, 205],
  },
  {
    name: 'Amaranth',
    hex: '#e52b50',
    rgb: [229, 43, 80],
  },
  {
    name: 'Amber',
    hex: '#ffbf00',
    rgb: [255, 191, 0],
  },
  {
    name: 'Amber (Sae/Ece)',
    hex: '#ff7e00',
    rgb: [255, 126, 0],
  },
  {
    name: 'American Rose',
    hex: '#ff033e',
    rgb: [255, 3, 62],
  },
  {
    name: 'Amethyst',
    hex: '#96c',
    rgb: [153, 102, 204],
  },
  {
    name: 'Android Green',
    hex: '#a4c639',
    rgb: [164, 198, 57],
  },
  {
    name: 'Anti-Flash White',
    hex: '#f2f3f4',
    rgb: [242, 243, 244],
  },
  {
    name: 'Antique Brass',
    hex: '#cd9575',
    rgb: [205, 149, 117],
  },
  {
    name: 'Antique Fuchsia',
    hex: '#915c83',
    rgb: [145, 92, 131],
  },
  {
    name: 'Antique Ruby',
    hex: '#841b2d',
    rgb: [132, 27, 45],
  },
  {
    name: 'Antique White',
    hex: '#faebd7',
    rgb: [250, 235, 215],
  },
  {
    name: 'Ao (English)',
    hex: '#008000',
    rgb: [0, 128, 0],
  },
  {
    name: 'Apple Green',
    hex: '#8db600',
    rgb: [141, 182, 0],
  },
  {
    name: 'Apricot',
    hex: '#fbceb1',
    rgb: [251, 206, 177],
  },
  {
    name: 'Aqua',
    hex: '#0ff',
    rgb: [0, 255, 255],
  },
  {
    name: 'Aquamarine',
    hex: '#7fffd4',
    rgb: [127, 255, 212],
  },
  {
    name: 'Army Green',
    hex: '#4b5320',
    rgb: [75, 83, 32],
  },
  {
    name: 'Arsenic',
    hex: '#3b444b',
    rgb: [59, 68, 75],
  },
  {
    name: 'Arylide Yellow',
    hex: '#e9d66b',
    rgb: [233, 214, 107],
  },
  {
    name: 'Ash Grey',
    hex: '#b2beb5',
    rgb: [178, 190, 181],
  },
  {
    name: 'Asparagus',
    hex: '#87a96b',
    rgb: [135, 169, 107],
  },
  {
    name: 'Atomic Tangerine',
    hex: '#f96',
    rgb: [255, 153, 102],
  },
  {
    name: 'Auburn',
    hex: '#a52a2a',
    rgb: [165, 42, 42],
  },
  {
    name: 'Aureolin',
    hex: '#fdee00',
    rgb: [253, 238, 0],
  },
  {
    name: 'Aurometalsaurus',
    hex: '#6e7f80',
    rgb: [110, 127, 128],
  },
  {
    name: 'Avocado',
    hex: '#568203',
    rgb: [86, 130, 3],
  },
  {
    name: 'Azure',
    hex: '#007fff',
    rgb: [0, 127, 255],
  },
  {
    name: 'Azure Mist/Web',
    hex: '#f0ffff',
    rgb: [240, 255, 255],
  },
  {
    name: 'Baby Blue',
    hex: '#89cff0',
    rgb: [137, 207, 240],
  },
  {
    name: 'Baby Blue Eyes',
    hex: '#a1caf1',
    rgb: [161, 202, 241],
  },
  {
    name: 'Baby Pink',
    hex: '#f4c2c2',
    rgb: [244, 194, 194],
  },
  {
    name: 'Ball Blue',
    hex: '#21abcd',
    rgb: [33, 171, 205],
  },
  {
    name: 'Banana Mania',
    hex: '#fae7b5',
    rgb: [250, 231, 181],
  },
  {
    name: 'Banana Yellow',
    hex: '#ffe135',
    rgb: [255, 225, 53],
  },
  {
    name: 'Barn Red',
    hex: '#7c0a02',
    rgb: [124, 10, 2],
  },
  {
    name: 'Battleship Grey',
    hex: '#848482',
    rgb: [132, 132, 130],
  },
  {
    name: 'Bazaar',
    hex: '#98777b',
    rgb: [152, 119, 123],
  },
  {
    name: 'Beau Blue',
    hex: '#bcd4e6',
    rgb: [188, 212, 230],
  },
  {
    name: 'Beaver',
    hex: '#9f8170',
    rgb: [159, 129, 112],
  },
  {
    name: 'Beige',
    hex: '#f5f5dc',
    rgb: [245, 245, 220],
  },
  {
    name: 'Big Dip O’Ruby',
    hex: '#9c2542',
    rgb: [156, 37, 66],
  },
  {
    name: 'Bisque',
    hex: '#ffe4c4',
    rgb: [255, 228, 196],
  },
  {
    name: 'Bistre',
    hex: '#3d2b1f',
    rgb: [61, 43, 31],
  },
  {
    name: 'Bittersweet',
    hex: '#fe6f5e',
    rgb: [254, 111, 94],
  },
  {
    name: 'Bittersweet Shimmer',
    hex: '#bf4f51',
    rgb: [191, 79, 81],
  },
  {
    name: 'Black',
    hex: '#000',
    rgb: [0, 0, 0],
  },
  {
    name: 'Black Bean',
    hex: '#3d0c02',
    rgb: [61, 12, 2],
  },
  {
    name: 'Black Leather Jacket',
    hex: '#253529',
    rgb: [37, 53, 41],
  },
  {
    name: 'Black Olive',
    hex: '#3b3c36',
    rgb: [59, 60, 54],
  },
  {
    name: 'Blanched Almond',
    hex: '#ffebcd',
    rgb: [255, 235, 205],
  },
  {
    name: 'Blast-Off Bronze',
    hex: '#a57164',
    rgb: [165, 113, 100],
  },
  {
    name: 'Bleu De France',
    hex: '#318ce7',
    rgb: [49, 140, 231],
  },
  {
    name: 'Blizzard Blue',
    hex: '#ace5ee',
    rgb: [172, 229, 238],
  },
  {
    name: 'Blond',
    hex: '#faf0be',
    rgb: [250, 240, 190],
  },
  {
    name: 'Blue',
    hex: '#00f',
    rgb: [0, 0, 255],
  },
  {
    name: 'Blue Bell',
    hex: '#a2a2d0',
    rgb: [162, 162, 208],
  },
  {
    name: 'Blue (Crayola)',
    hex: '#1f75fe',
    rgb: [31, 117, 254],
  },
  {
    name: 'Blue Gray',
    hex: '#69c',
    rgb: [102, 153, 204],
  },
  {
    name: 'Blue-Green',
    hex: '#0d98ba',
    rgb: [13, 152, 186],
  },
  {
    name: 'Blue (Munsell)',
    hex: '#0093af',
    rgb: [0, 147, 175],
  },
  {
    name: 'Blue (Ncs)',
    hex: '#0087bd',
    rgb: [0, 135, 189],
  },
  {
    name: 'Blue (Pigment)',
    hex: '#339',
    rgb: [51, 51, 153],
  },
  {
    name: 'Blue (Ryb)',
    hex: '#0247fe',
    rgb: [2, 71, 254],
  },
  {
    name: 'Blue Sapphire',
    hex: '#126180',
    rgb: [18, 97, 128],
  },
  {
    name: 'Blue-Violet',
    hex: '#8a2be2',
    rgb: [138, 43, 226],
  },
  {
    name: 'Blush',
    hex: '#de5d83',
    rgb: [222, 93, 131],
  },
  {
    name: 'Bole',
    hex: '#79443b',
    rgb: [121, 68, 59],
  },
  {
    name: 'Bondi Blue',
    hex: '#0095b6',
    rgb: [0, 149, 182],
  },
  {
    name: 'Bone',
    hex: '#e3dac9',
    rgb: [227, 218, 201],
  },
  {
    name: 'Boston University Red',
    hex: '#c00',
    rgb: [204, 0, 0],
  },
  {
    name: 'Bottle Green',
    hex: '#006a4e',
    rgb: [0, 106, 78],
  },
  {
    name: 'Boysenberry',
    hex: '#873260',
    rgb: [135, 50, 96],
  },
  {
    name: 'Brandeis Blue',
    hex: '#0070ff',
    rgb: [0, 112, 255],
  },
  {
    name: 'Brass',
    hex: '#b5a642',
    rgb: [181, 166, 66],
  },
  {
    name: 'Brick Red',
    hex: '#cb4154',
    rgb: [203, 65, 84],
  },
  {
    name: 'Bright Cerulean',
    hex: '#1dacd6',
    rgb: [29, 172, 214],
  },
  {
    name: 'Bright Green',
    hex: '#6f0',
    rgb: [102, 255, 0],
  },
  {
    name: 'Bright Lavender',
    hex: '#bf94e4',
    rgb: [191, 148, 228],
  },
  {
    name: 'Bright Maroon',
    hex: '#c32148',
    rgb: [195, 33, 72],
  },
  {
    name: 'Bright Pink',
    hex: '#ff007f',
    rgb: [255, 0, 127],
  },
  {
    name: 'Bright Turquoise',
    hex: '#08e8de',
    rgb: [8, 232, 222],
  },
  {
    name: 'Bright Ube',
    hex: '#d19fe8',
    rgb: [209, 159, 232],
  },
  {
    name: 'Brilliant Lavender',
    hex: '#f4bbff',
    rgb: [244, 187, 255],
  },
  {
    name: 'Brilliant Rose',
    hex: '#ff55a3',
    rgb: [255, 85, 163],
  },
  {
    name: 'Brink Pink',
    hex: '#fb607f',
    rgb: [251, 96, 127],
  },
  {
    name: 'British Racing Green',
    hex: '#004225',
    rgb: [0, 66, 37],
  },
  {
    name: 'Bronze',
    hex: '#cd7f32',
    rgb: [205, 127, 50],
  },
  {
    name: 'Brown (Traditional)',
    hex: '#964b00',
    rgb: [150, 75, 0],
  },
  {
    name: 'Brown (Web)',
    hex: '#a52a2a',
    rgb: [165, 42, 42],
  },
  {
    name: 'Bubble Gum',
    hex: '#ffc1cc',
    rgb: [255, 193, 204],
  },
  {
    name: 'Bubbles',
    hex: '#e7feff',
    rgb: [231, 254, 255],
  },
  {
    name: 'Buff',
    hex: '#f0dc82',
    rgb: [240, 220, 130],
  },
  {
    name: 'Bulgarian Rose',
    hex: '#480607',
    rgb: [72, 6, 7],
  },
  {
    name: 'Burgundy',
    hex: '#800020',
    rgb: [128, 0, 32],
  },
  {
    name: 'Burlywood',
    hex: '#deb887',
    rgb: [222, 184, 135],
  },
  {
    name: 'Burnt Orange',
    hex: '#c50',
    rgb: [204, 85, 0],
  },
  {
    name: 'Burnt Sienna',
    hex: '#e97451',
    rgb: [233, 116, 81],
  },
  {
    name: 'Burnt Umber',
    hex: '#8a3324',
    rgb: [138, 51, 36],
  },
  {
    name: 'Byzantine',
    hex: '#bd33a4',
    rgb: [189, 51, 164],
  },
  {
    name: 'Byzantium',
    hex: '#702963',
    rgb: [112, 41, 99],
  },
  {
    name: 'Cadet',
    hex: '#536872',
    rgb: [83, 104, 114],
  },
  {
    name: 'Cadet Blue',
    hex: '#5f9ea0',
    rgb: [95, 158, 160],
  },
  {
    name: 'Cadet Grey',
    hex: '#91a3b0',
    rgb: [145, 163, 176],
  },
  {
    name: 'Cadmium Green',
    hex: '#006b3c',
    rgb: [0, 107, 60],
  },
  {
    name: 'Cadmium Orange',
    hex: '#ed872d',
    rgb: [237, 135, 45],
  },
  {
    name: 'Cadmium Red',
    hex: '#e30022',
    rgb: [227, 0, 34],
  },
  {
    name: 'Cadmium Yellow',
    hex: '#fff600',
    rgb: [255, 246, 0],
  },
  {
    name: 'Café Au Lait',
    hex: '#a67b5b',
    rgb: [166, 123, 91],
  },
  {
    name: 'Café Noir',
    hex: '#4b3621',
    rgb: [75, 54, 33],
  },
  {
    name: 'Cal Poly Green',
    hex: '#1e4d2b',
    rgb: [30, 77, 43],
  },
  {
    name: 'Cambridge Blue',
    hex: '#a3c1ad',
    rgb: [163, 193, 173],
  },
  {
    name: 'Camel',
    hex: '#c19a6b',
    rgb: [193, 154, 107],
  },
  {
    name: 'Cameo Pink',
    hex: '#efbbcc',
    rgb: [239, 187, 204],
  },
  {
    name: 'Camouflage Green',
    hex: '#78866b',
    rgb: [120, 134, 107],
  },
  {
    name: 'Canary Yellow',
    hex: '#ffef00',
    rgb: [255, 239, 0],
  },
  {
    name: 'Candy Apple Red',
    hex: '#ff0800',
    rgb: [255, 8, 0],
  },
  {
    name: 'Candy Pink',
    hex: '#e4717a',
    rgb: [228, 113, 122],
  },
  {
    name: 'Capri',
    hex: '#00bfff',
    rgb: [0, 191, 255],
  },
  {
    name: 'Caput Mortuum',
    hex: '#592720',
    rgb: [89, 39, 32],
  },
  {
    name: 'Cardinal',
    hex: '#c41e3a',
    rgb: [196, 30, 58],
  },
  {
    name: 'Caribbean Green',
    hex: '#0c9',
    rgb: [0, 204, 153],
  },
  {
    name: 'Carmine',
    hex: '#960018',
    rgb: [150, 0, 24],
  },
  {
    name: 'Carmine (M&P)',
    hex: '#d70040',
    rgb: [215, 0, 64],
  },
  {
    name: 'Carmine Pink',
    hex: '#eb4c42',
    rgb: [235, 76, 66],
  },
  {
    name: 'Carmine Red',
    hex: '#ff0038',
    rgb: [255, 0, 56],
  },
  {
    name: 'Carnation Pink',
    hex: '#ffa6c9',
    rgb: [255, 166, 201],
  },
  {
    name: 'Carnelian',
    hex: '#b31b1b',
    rgb: [179, 27, 27],
  },
  {
    name: 'Carolina Blue',
    hex: '#99badd',
    rgb: [153, 186, 221],
  },
  {
    name: 'Carrot Orange',
    hex: '#ed9121',
    rgb: [237, 145, 33],
  },
  {
    name: 'Catalina Blue',
    hex: '#062a78',
    rgb: [6, 42, 120],
  },
  {
    name: 'Ceil',
    hex: '#92a1cf',
    rgb: [146, 161, 207],
  },
  {
    name: 'Celadon',
    hex: '#ace1af',
    rgb: [172, 225, 175],
  },
  {
    name: 'Celadon Blue',
    hex: '#007ba7',
    rgb: [0, 123, 167],
  },
  {
    name: 'Celadon Green',
    hex: '#2f847c',
    rgb: [47, 132, 124],
  },
  {
    name: 'Celeste (Colour)',
    hex: '#b2ffff',
    rgb: [178, 255, 255],
  },
  {
    name: 'Celestial Blue',
    hex: '#4997d0',
    rgb: [73, 151, 208],
  },
  {
    name: 'Cerise',
    hex: '#de3163',
    rgb: [222, 49, 99],
  },
  {
    name: 'Cerise Pink',
    hex: '#ec3b83',
    rgb: [236, 59, 131],
  },
  {
    name: 'Cerulean',
    hex: '#007ba7',
    rgb: [0, 123, 167],
  },
  {
    name: 'Cerulean Blue',
    hex: '#2a52be',
    rgb: [42, 82, 190],
  },
  {
    name: 'Cerulean Frost',
    hex: '#6d9bc3',
    rgb: [109, 155, 195],
  },
  {
    name: 'Cg Blue',
    hex: '#007aa5',
    rgb: [0, 122, 165],
  },
  {
    name: 'Cg Red',
    hex: '#e03c31',
    rgb: [224, 60, 49],
  },
  {
    name: 'Chamoisee',
    hex: '#a0785a',
    rgb: [160, 120, 90],
  },
  {
    name: 'Champagne',
    hex: '#fad6a5',
    rgb: [250, 214, 165],
  },
  {
    name: 'Charcoal',
    hex: '#36454f',
    rgb: [54, 69, 79],
  },
  {
    name: 'Charm Pink',
    hex: '#e68fac',
    rgb: [230, 143, 172],
  },
  {
    name: 'Chartreuse (Traditional)',
    hex: '#dfff00',
    rgb: [223, 255, 0],
  },
  {
    name: 'Chartreuse (Web)',
    hex: '#7fff00',
    rgb: [127, 255, 0],
  },
  {
    name: 'Cherry',
    hex: '#de3163',
    rgb: [222, 49, 99],
  },
  {
    name: 'Cherry Blossom Pink',
    hex: '#ffb7c5',
    rgb: [255, 183, 197],
  },
  {
    name: 'Chestnut',
    hex: '#cd5c5c',
    rgb: [205, 92, 92],
  },
  {
    name: 'China Pink',
    hex: '#de6fa1',
    rgb: [222, 111, 161],
  },
  {
    name: 'China Rose',
    hex: '#a8516e',
    rgb: [168, 81, 110],
  },
  {
    name: 'Chinese Red',
    hex: '#aa381e',
    rgb: [170, 56, 30],
  },
  {
    name: 'Chocolate (Traditional)',
    hex: '#7b3f00',
    rgb: [123, 63, 0],
  },
  {
    name: 'Chocolate (Web)',
    hex: '#d2691e',
    rgb: [210, 105, 30],
  },
  {
    name: 'Chrome Yellow',
    hex: '#ffa700',
    rgb: [255, 167, 0],
  },
  {
    name: 'Cinereous',
    hex: '#98817b',
    rgb: [152, 129, 123],
  },
  {
    name: 'Cinnabar',
    hex: '#e34234',
    rgb: [227, 66, 52],
  },
  {
    name: 'Cinnamon',
    hex: '#d2691e',
    rgb: [210, 105, 30],
  },
  {
    name: 'Citrine',
    hex: '#e4d00a',
    rgb: [228, 208, 10],
  },
  {
    name: 'Classic Rose',
    hex: '#fbcce7',
    rgb: [251, 204, 231],
  },
  {
    name: 'Cobalt',
    hex: '#0047ab',
    rgb: [0, 71, 171],
  },
  {
    name: 'Cocoa Brown',
    hex: '#d2691e',
    rgb: [210, 105, 30],
  },
  {
    name: 'Coffee',
    hex: '#6f4e37',
    rgb: [111, 78, 55],
  },
  {
    name: 'Columbia Blue',
    hex: '#9bddff',
    rgb: [155, 221, 255],
  },
  {
    name: 'Congo Pink',
    hex: '#f88379',
    rgb: [248, 131, 121],
  },
  {
    name: 'Cool Black',
    hex: '#002e63',
    rgb: [0, 46, 99],
  },
  {
    name: 'Cool Grey',
    hex: '#8c92ac',
    rgb: [140, 146, 172],
  },
  {
    name: 'Copper',
    hex: '#b87333',
    rgb: [184, 115, 51],
  },
  {
    name: 'Copper (Crayola)',
    hex: '#da8a67',
    rgb: [218, 138, 103],
  },
  {
    name: 'Copper Penny',
    hex: '#ad6f69',
    rgb: [173, 111, 105],
  },
  {
    name: 'Copper Red',
    hex: '#cb6d51',
    rgb: [203, 109, 81],
  },
  {
    name: 'Copper Rose',
    hex: '#966',
    rgb: [153, 102, 102],
  },
  {
    name: 'Coquelicot',
    hex: '#ff3800',
    rgb: [255, 56, 0],
  },
  {
    name: 'Coral',
    hex: '#ff7f50',
    rgb: [255, 127, 80],
  },
  {
    name: 'Coral Pink',
    hex: '#f88379',
    rgb: [248, 131, 121],
  },
  {
    name: 'Coral Red',
    hex: '#ff4040',
    rgb: [255, 64, 64],
  },
  {
    name: 'Cordovan',
    hex: '#893f45',
    rgb: [137, 63, 69],
  },
  {
    name: 'Corn',
    hex: '#fbec5d',
    rgb: [251, 236, 93],
  },
  {
    name: 'Cornell Red',
    hex: '#b31b1b',
    rgb: [179, 27, 27],
  },
  {
    name: 'Cornflower Blue',
    hex: '#6495ed',
    rgb: [100, 149, 237],
  },
  {
    name: 'Cornsilk',
    hex: '#fff8dc',
    rgb: [255, 248, 220],
  },
  {
    name: 'Cosmic Latte',
    hex: '#fff8e7',
    rgb: [255, 248, 231],
  },
  {
    name: 'Cotton Candy',
    hex: '#ffbcd9',
    rgb: [255, 188, 217],
  },
  {
    name: 'Cream',
    hex: '#fffdd0',
    rgb: [255, 253, 208],
  },
  {
    name: 'Crimson',
    hex: '#dc143c',
    rgb: [220, 20, 60],
  },
  {
    name: 'Crimson Glory',
    hex: '#be0032',
    rgb: [190, 0, 50],
  },
  {
    name: 'Cyan',
    hex: '#0ff',
    rgb: [0, 255, 255],
  },
  {
    name: 'Cyan (Process)',
    hex: '#00b7eb',
    rgb: [0, 183, 235],
  },
  {
    name: 'Daffodil',
    hex: '#ffff31',
    rgb: [255, 255, 49],
  },
  {
    name: 'Dandelion',
    hex: '#f0e130',
    rgb: [240, 225, 48],
  },
  {
    name: 'Dark Blue',
    hex: '#00008b',
    rgb: [0, 0, 139],
  },
  {
    name: 'Dark Brown',
    hex: '#654321',
    rgb: [101, 67, 33],
  },
  {
    name: 'Dark Byzantium',
    hex: '#5d3954',
    rgb: [93, 57, 84],
  },
  {
    name: 'Dark Candy Apple Red',
    hex: '#a40000',
    rgb: [164, 0, 0],
  },
  {
    name: 'Dark Cerulean',
    hex: '#08457e',
    rgb: [8, 69, 126],
  },
  {
    name: 'Dark Chestnut',
    hex: '#986960',
    rgb: [152, 105, 96],
  },
  {
    name: 'Dark Coral',
    hex: '#cd5b45',
    rgb: [205, 91, 69],
  },
  {
    name: 'Dark Cyan',
    hex: '#008b8b',
    rgb: [0, 139, 139],
  },
  {
    name: 'Dark Electric Blue',
    hex: '#536878',
    rgb: [83, 104, 120],
  },
  {
    name: 'Dark Goldenrod',
    hex: '#b8860b',
    rgb: [184, 134, 11],
  },
  {
    name: 'Dark Gray',
    hex: '#a9a9a9',
    rgb: [169, 169, 169],
  },
  {
    name: 'Dark Green',
    hex: '#013220',
    rgb: [1, 50, 32],
  },
  {
    name: 'Dark Imperial Blue',
    hex: '#00416a',
    rgb: [0, 65, 106],
  },
  {
    name: 'Dark Jungle Green',
    hex: '#1a2421',
    rgb: [26, 36, 33],
  },
  {
    name: 'Dark Khaki',
    hex: '#bdb76b',
    rgb: [189, 183, 107],
  },
  {
    name: 'Dark Lava',
    hex: '#483c32',
    rgb: [72, 60, 50],
  },
  {
    name: 'Dark Lavender',
    hex: '#734f96',
    rgb: [115, 79, 150],
  },
  {
    name: 'Dark Magenta',
    hex: '#8b008b',
    rgb: [139, 0, 139],
  },
  {
    name: 'Dark Midnight Blue',
    hex: '#036',
    rgb: [0, 51, 102],
  },
  {
    name: 'Dark Olive Green',
    hex: '#556b2f',
    rgb: [85, 107, 47],
  },
  {
    name: 'Dark Orange',
    hex: '#ff8c00',
    rgb: [255, 140, 0],
  },
  {
    name: 'Dark Orchid',
    hex: '#9932cc',
    rgb: [153, 50, 204],
  },
  {
    name: 'Dark Pastel Blue',
    hex: '#779ecb',
    rgb: [119, 158, 203],
  },
  {
    name: 'Dark Pastel Green',
    hex: '#03c03c',
    rgb: [3, 192, 60],
  },
  {
    name: 'Dark Pastel Purple',
    hex: '#966fd6',
    rgb: [150, 111, 214],
  },
  {
    name: 'Dark Pastel Red',
    hex: '#c23b22',
    rgb: [194, 59, 34],
  },
  {
    name: 'Dark Pink',
    hex: '#e75480',
    rgb: [231, 84, 128],
  },
  {
    name: 'Dark Powder Blue',
    hex: '#039',
    rgb: [0, 51, 153],
  },
  {
    name: 'Dark Raspberry',
    hex: '#872657',
    rgb: [135, 38, 87],
  },
  {
    name: 'Dark Red',
    hex: '#8b0000',
    rgb: [139, 0, 0],
  },
  {
    name: 'Dark Salmon',
    hex: '#e9967a',
    rgb: [233, 150, 122],
  },
  {
    name: 'Dark Scarlet',
    hex: '#560319',
    rgb: [86, 3, 25],
  },
  {
    name: 'Dark Sea Green',
    hex: '#8fbc8f',
    rgb: [143, 188, 143],
  },
  {
    name: 'Dark Sienna',
    hex: '#3c1414',
    rgb: [60, 20, 20],
  },
  {
    name: 'Dark Slate Blue',
    hex: '#483d8b',
    rgb: [72, 61, 139],
  },
  {
    name: 'Dark Slate Gray',
    hex: '#2f4f4f',
    rgb: [47, 79, 79],
  },
  {
    name: 'Dark Spring Green',
    hex: '#177245',
    rgb: [23, 114, 69],
  },
  {
    name: 'Dark Tan',
    hex: '#918151',
    rgb: [145, 129, 81],
  },
  {
    name: 'Dark Tangerine',
    hex: '#ffa812',
    rgb: [255, 168, 18],
  },
  {
    name: 'Dark Taupe',
    hex: '#483c32',
    rgb: [72, 60, 50],
  },
  {
    name: 'Dark Terra Cotta',
    hex: '#cc4e5c',
    rgb: [204, 78, 92],
  },
  {
    name: 'Dark Turquoise',
    hex: '#00ced1',
    rgb: [0, 206, 209],
  },
  {
    name: 'Dark Violet',
    hex: '#9400d3',
    rgb: [148, 0, 211],
  },
  {
    name: 'Dark Yellow',
    hex: '#9b870c',
    rgb: [155, 135, 12],
  },
  {
    name: 'Dartmouth Green',
    hex: '#00703c',
    rgb: [0, 112, 60],
  },
  {
    name: "Davy'S Grey",
    hex: '#555',
    rgb: [85, 85, 85],
  },
  {
    name: 'Debian Red',
    hex: '#d70a53',
    rgb: [215, 10, 83],
  },
  {
    name: 'Deep Carmine',
    hex: '#a9203e',
    rgb: [169, 32, 62],
  },
  {
    name: 'Deep Carmine Pink',
    hex: '#ef3038',
    rgb: [239, 48, 56],
  },
  {
    name: 'Deep Carrot Orange',
    hex: '#e9692c',
    rgb: [233, 105, 44],
  },
  {
    name: 'Deep Cerise',
    hex: '#da3287',
    rgb: [218, 50, 135],
  },
  {
    name: 'Deep Champagne',
    hex: '#fad6a5',
    rgb: [250, 214, 165],
  },
  {
    name: 'Deep Chestnut',
    hex: '#b94e48',
    rgb: [185, 78, 72],
  },
  {
    name: 'Deep Coffee',
    hex: '#704241',
    rgb: [112, 66, 65],
  },
  {
    name: 'Deep Fuchsia',
    hex: '#c154c1',
    rgb: [193, 84, 193],
  },
  {
    name: 'Deep Jungle Green',
    hex: '#004b49',
    rgb: [0, 75, 73],
  },
  {
    name: 'Deep Lilac',
    hex: '#95b',
    rgb: [153, 85, 187],
  },
  {
    name: 'Deep Magenta',
    hex: '#c0c',
    rgb: [204, 0, 204],
  },
  {
    name: 'Deep Peach',
    hex: '#ffcba4',
    rgb: [255, 203, 164],
  },
  {
    name: 'Deep Pink',
    hex: '#ff1493',
    rgb: [255, 20, 147],
  },
  {
    name: 'Deep Ruby',
    hex: '#843f5b',
    rgb: [132, 63, 91],
  },
  {
    name: 'Deep Saffron',
    hex: '#f93',
    rgb: [255, 153, 51],
  },
  {
    name: 'Deep Sky Blue',
    hex: '#00bfff',
    rgb: [0, 191, 255],
  },
  {
    name: 'Deep Tuscan Red',
    hex: '#66424d',
    rgb: [102, 66, 77],
  },
  {
    name: 'Denim',
    hex: '#1560bd',
    rgb: [21, 96, 189],
  },
  {
    name: 'Desert',
    hex: '#c19a6b',
    rgb: [193, 154, 107],
  },
  {
    name: 'Desert Sand',
    hex: '#edc9af',
    rgb: [237, 201, 175],
  },
  {
    name: 'Dim Gray',
    hex: '#696969',
    rgb: [105, 105, 105],
  },
  {
    name: 'Dodger Blue',
    hex: '#1e90ff',
    rgb: [30, 144, 255],
  },
  {
    name: 'Dogwood Rose',
    hex: '#d71868',
    rgb: [215, 24, 104],
  },
  {
    name: 'Dollar Bill',
    hex: '#85bb65',
    rgb: [133, 187, 101],
  },
  {
    name: 'Drab',
    hex: '#967117',
    rgb: [150, 113, 23],
  },
  {
    name: 'Duke Blue',
    hex: '#00009c',
    rgb: [0, 0, 156],
  },
  {
    name: 'Earth Yellow',
    hex: '#e1a95f',
    rgb: [225, 169, 95],
  },
  {
    name: 'Ebony',
    hex: '#555d50',
    rgb: [85, 93, 80],
  },
  {
    name: 'Ecru',
    hex: '#c2b280',
    rgb: [194, 178, 128],
  },
  {
    name: 'Eggplant',
    hex: '#614051',
    rgb: [97, 64, 81],
  },
  {
    name: 'Eggshell',
    hex: '#f0ead6',
    rgb: [240, 234, 214],
  },
  {
    name: 'Egyptian Blue',
    hex: '#1034a6',
    rgb: [16, 52, 166],
  },
  {
    name: 'Electric Blue',
    hex: '#7df9ff',
    rgb: [125, 249, 255],
  },
  {
    name: 'Electric Crimson',
    hex: '#ff003f',
    rgb: [255, 0, 63],
  },
  {
    name: 'Electric Cyan',
    hex: '#0ff',
    rgb: [0, 255, 255],
  },
  {
    name: 'Electric Green',
    hex: '#0f0',
    rgb: [0, 255, 0],
  },
  {
    name: 'Electric Indigo',
    hex: '#6f00ff',
    rgb: [111, 0, 255],
  },
  {
    name: 'Electric Lavender',
    hex: '#f4bbff',
    rgb: [244, 187, 255],
  },
  {
    name: 'Electric Lime',
    hex: '#cf0',
    rgb: [204, 255, 0],
  },
  {
    name: 'Electric Purple',
    hex: '#bf00ff',
    rgb: [191, 0, 255],
  },
  {
    name: 'Electric Ultramarine',
    hex: '#3f00ff',
    rgb: [63, 0, 255],
  },
  {
    name: 'Electric Violet',
    hex: '#8f00ff',
    rgb: [143, 0, 255],
  },
  {
    name: 'Electric Yellow',
    hex: '#ff0',
    rgb: [255, 255, 0],
  },
  {
    name: 'Emerald',
    hex: '#50c878',
    rgb: [80, 200, 120],
  },
  {
    name: 'English Lavender',
    hex: '#b48395',
    rgb: [180, 131, 149],
  },
  {
    name: 'Eton Blue',
    hex: '#96c8a2',
    rgb: [150, 200, 162],
  },
  {
    name: 'Fallow',
    hex: '#c19a6b',
    rgb: [193, 154, 107],
  },
  {
    name: 'Falu Red',
    hex: '#801818',
    rgb: [128, 24, 24],
  },
  {
    name: 'Fandango',
    hex: '#b53389',
    rgb: [181, 51, 137],
  },
  {
    name: 'Fashion Fuchsia',
    hex: '#f400a1',
    rgb: [244, 0, 161],
  },
  {
    name: 'Fawn',
    hex: '#e5aa70',
    rgb: [229, 170, 112],
  },
  {
    name: 'Feldgrau',
    hex: '#4d5d53',
    rgb: [77, 93, 83],
  },
  {
    name: 'Fern Green',
    hex: '#4f7942',
    rgb: [79, 121, 66],
  },
  {
    name: 'Ferrari Red',
    hex: '#ff2800',
    rgb: [255, 40, 0],
  },
  {
    name: 'Field Drab',
    hex: '#6c541e',
    rgb: [108, 84, 30],
  },
  {
    name: 'Fire Engine Red',
    hex: '#ce2029',
    rgb: [206, 32, 41],
  },
  {
    name: 'Firebrick',
    hex: '#b22222',
    rgb: [178, 34, 34],
  },
  {
    name: 'Flame',
    hex: '#e25822',
    rgb: [226, 88, 34],
  },
  {
    name: 'Flamingo Pink',
    hex: '#fc8eac',
    rgb: [252, 142, 172],
  },
  {
    name: 'Flavescent',
    hex: '#f7e98e',
    rgb: [247, 233, 142],
  },
  {
    name: 'Flax',
    hex: '#eedc82',
    rgb: [238, 220, 130],
  },
  {
    name: 'Floral White',
    hex: '#fffaf0',
    rgb: [255, 250, 240],
  },
  {
    name: 'Fluorescent Orange',
    hex: '#ffbf00',
    rgb: [255, 191, 0],
  },
  {
    name: 'Fluorescent Pink',
    hex: '#ff1493',
    rgb: [255, 20, 147],
  },
  {
    name: 'Fluorescent Yellow',
    hex: '#cf0',
    rgb: [204, 255, 0],
  },
  {
    name: 'Folly',
    hex: '#ff004f',
    rgb: [255, 0, 79],
  },
  {
    name: 'Forest Green (Traditional)',
    hex: '#014421',
    rgb: [1, 68, 33],
  },
  {
    name: 'Forest Green (Web)',
    hex: '#228b22',
    rgb: [34, 139, 34],
  },
  {
    name: 'French Beige',
    hex: '#a67b5b',
    rgb: [166, 123, 91],
  },
  {
    name: 'French Blue',
    hex: '#0072bb',
    rgb: [0, 114, 187],
  },
  {
    name: 'French Lilac',
    hex: '#86608e',
    rgb: [134, 96, 142],
  },
  {
    name: 'French Lime',
    hex: '#cf0',
    rgb: [204, 255, 0],
  },
  {
    name: 'French Raspberry',
    hex: '#c72c48',
    rgb: [199, 44, 72],
  },
  {
    name: 'French Rose',
    hex: '#f64a8a',
    rgb: [246, 74, 138],
  },
  {
    name: 'Fuchsia',
    hex: '#f0f',
    rgb: [255, 0, 255],
  },
  {
    name: 'Fuchsia (Crayola)',
    hex: '#c154c1',
    rgb: [193, 84, 193],
  },
  {
    name: 'Fuchsia Pink',
    hex: '#f7f',
    rgb: [255, 119, 255],
  },
  {
    name: 'Fuchsia Rose',
    hex: '#c74375',
    rgb: [199, 67, 117],
  },
  {
    name: 'Fulvous',
    hex: '#e48400',
    rgb: [228, 132, 0],
  },
  {
    name: 'Fuzzy Wuzzy',
    hex: '#c66',
    rgb: [204, 102, 102],
  },
  {
    name: 'Gainsboro',
    hex: '#dcdcdc',
    rgb: [220, 220, 220],
  },
  {
    name: 'Gamboge',
    hex: '#e49b0f',
    rgb: [228, 155, 15],
  },
  {
    name: 'Ghost White',
    hex: '#f8f8ff',
    rgb: [248, 248, 255],
  },
  {
    name: 'Ginger',
    hex: '#b06500',
    rgb: [176, 101, 0],
  },
  {
    name: 'Glaucous',
    hex: '#6082b6',
    rgb: [96, 130, 182],
  },
  {
    name: 'Glitter',
    hex: '#e6e8fa',
    rgb: [230, 232, 250],
  },
  {
    name: 'Gold (Metallic)',
    hex: '#d4af37',
    rgb: [212, 175, 55],
  },
  {
    name: 'Gold (Web) (Golden)',
    hex: '#ffd700',
    rgb: [255, 215, 0],
  },
  {
    name: 'Golden Brown',
    hex: '#996515',
    rgb: [153, 101, 21],
  },
  {
    name: 'Golden Poppy',
    hex: '#fcc200',
    rgb: [252, 194, 0],
  },
  {
    name: 'Golden Yellow',
    hex: '#ffdf00',
    rgb: [255, 223, 0],
  },
  {
    name: 'Goldenrod',
    hex: '#daa520',
    rgb: [218, 165, 32],
  },
  {
    name: 'Granny Smith Apple',
    hex: '#a8e4a0',
    rgb: [168, 228, 160],
  },
  {
    name: 'Gray',
    hex: '#808080',
    rgb: [128, 128, 128],
  },
  {
    name: 'Gray-Asparagus',
    hex: '#465945',
    rgb: [70, 89, 69],
  },
  {
    name: 'Gray (Html/Css Gray)',
    hex: '#808080',
    rgb: [128, 128, 128],
  },
  {
    name: 'Gray (X11 Gray)',
    hex: '#bebebe',
    rgb: [190, 190, 190],
  },
  {
    name: 'Green (Color Wheel) (X11 Green)',
    hex: '#0f0',
    rgb: [0, 255, 0],
  },
  {
    name: 'Green (Crayola)',
    hex: '#1cac78',
    rgb: [28, 172, 120],
  },
  {
    name: 'Green (Html/Css Green)',
    hex: '#008000',
    rgb: [0, 128, 0],
  },
  {
    name: 'Green (Munsell)',
    hex: '#00a877',
    rgb: [0, 168, 119],
  },
  {
    name: 'Green (Ncs)',
    hex: '#009f6b',
    rgb: [0, 159, 107],
  },
  {
    name: 'Green (Pigment)',
    hex: '#00a550',
    rgb: [0, 165, 80],
  },
  {
    name: 'Green (Ryb)',
    hex: '#66b032',
    rgb: [102, 176, 50],
  },
  {
    name: 'Green-Yellow',
    hex: '#adff2f',
    rgb: [173, 255, 47],
  },
  {
    name: 'Grullo',
    hex: '#a99a86',
    rgb: [169, 154, 134],
  },
  {
    name: 'Guppie Green',
    hex: '#00ff7f',
    rgb: [0, 255, 127],
  },
  {
    name: 'Halayà úBe',
    hex: '#663854',
    rgb: [102, 56, 84],
  },
  {
    name: 'Han Blue',
    hex: '#446ccf',
    rgb: [68, 108, 207],
  },
  {
    name: 'Han Purple',
    hex: '#5218fa',
    rgb: [82, 24, 250],
  },
  {
    name: 'Hansa Yellow',
    hex: '#e9d66b',
    rgb: [233, 214, 107],
  },
  {
    name: 'Harlequin',
    hex: '#3fff00',
    rgb: [63, 255, 0],
  },
  {
    name: 'Harvard Crimson',
    hex: '#c90016',
    rgb: [201, 0, 22],
  },
  {
    name: 'Harvest Gold',
    hex: '#da9100',
    rgb: [218, 145, 0],
  },
  {
    name: 'Heart Gold',
    hex: '#808000',
    rgb: [128, 128, 0],
  },
  {
    name: 'Heliotrope',
    hex: '#df73ff',
    rgb: [223, 115, 255],
  },
  {
    name: 'Hollywood Cerise',
    hex: '#f400a1',
    rgb: [244, 0, 161],
  },
  {
    name: 'Honeydew',
    hex: '#f0fff0',
    rgb: [240, 255, 240],
  },
  {
    name: 'Honolulu Blue',
    hex: '#007fbf',
    rgb: [0, 127, 191],
  },
  {
    name: "Hooker'S Green",
    hex: '#49796b',
    rgb: [73, 121, 107],
  },
  {
    name: 'Hot Magenta',
    hex: '#ff1dce',
    rgb: [255, 29, 206],
  },
  {
    name: 'Hot Pink',
    hex: '#ff69b4',
    rgb: [255, 105, 180],
  },
  {
    name: 'Hunter Green',
    hex: '#355e3b',
    rgb: [53, 94, 59],
  },
  {
    name: 'Iceberg',
    hex: '#71a6d2',
    rgb: [113, 166, 210],
  },
  {
    name: 'Icterine',
    hex: '#fcf75e',
    rgb: [252, 247, 94],
  },
  {
    name: 'Imperial Blue',
    hex: '#002395',
    rgb: [0, 35, 149],
  },
  {
    name: 'Inchworm',
    hex: '#b2ec5d',
    rgb: [178, 236, 93],
  },
  {
    name: 'India Green',
    hex: '#138808',
    rgb: [19, 136, 8],
  },
  {
    name: 'Indian Red',
    hex: '#cd5c5c',
    rgb: [205, 92, 92],
  },
  {
    name: 'Indian Yellow',
    hex: '#e3a857',
    rgb: [227, 168, 87],
  },
  {
    name: 'Indigo',
    hex: '#6f00ff',
    rgb: [111, 0, 255],
  },
  {
    name: 'Indigo (Dye)',
    hex: '#00416a',
    rgb: [0, 65, 106],
  },
  {
    name: 'Indigo (Web)',
    hex: '#4b0082',
    rgb: [75, 0, 130],
  },
  {
    name: 'International Klein Blue',
    hex: '#002fa7',
    rgb: [0, 47, 167],
  },
  {
    name: 'International Orange (Aerospace)',
    hex: '#ff4f00',
    rgb: [255, 79, 0],
  },
  {
    name: 'International Orange (Engineering)',
    hex: '#ba160c',
    rgb: [186, 22, 12],
  },
  {
    name: 'International Orange (Golden Gate Bridge)',
    hex: '#c0362c',
    rgb: [192, 54, 44],
  },
  {
    name: 'Iris',
    hex: '#5a4fcf',
    rgb: [90, 79, 207],
  },
  {
    name: 'Isabelline',
    hex: '#f4f0ec',
    rgb: [244, 240, 236],
  },
  {
    name: 'Islamic Green',
    hex: '#009000',
    rgb: [0, 144, 0],
  },
  {
    name: 'Ivory',
    hex: '#fffff0',
    rgb: [255, 255, 240],
  },
  {
    name: 'Jade',
    hex: '#00a86b',
    rgb: [0, 168, 107],
  },
  {
    name: 'Jasmine',
    hex: '#f8de7e',
    rgb: [248, 222, 126],
  },
  {
    name: 'Jasper',
    hex: '#d73b3e',
    rgb: [215, 59, 62],
  },
  {
    name: 'Jazzberry Jam',
    hex: '#a50b5e',
    rgb: [165, 11, 94],
  },
  {
    name: 'Jet',
    hex: '#343434',
    rgb: [52, 52, 52],
  },
  {
    name: 'Jonquil',
    hex: '#fada5e',
    rgb: [250, 218, 94],
  },
  {
    name: 'June Bud',
    hex: '#bdda57',
    rgb: [189, 218, 87],
  },
  {
    name: 'Jungle Green',
    hex: '#29ab87',
    rgb: [41, 171, 135],
  },
  {
    name: 'Kelly Green',
    hex: '#4cbb17',
    rgb: [76, 187, 23],
  },
  {
    name: 'Kenyan Copper',
    hex: '#7c1c05',
    rgb: [124, 28, 5],
  },
  {
    name: 'Khaki (Html/Css) (Khaki)',
    hex: '#c3b091',
    rgb: [195, 176, 145],
  },
  {
    name: 'Khaki (X11) (Light Khaki)',
    hex: '#f0e68c',
    rgb: [240, 230, 140],
  },
  {
    name: 'Ku Crimson',
    hex: '#e8000d',
    rgb: [232, 0, 13],
  },
  {
    name: 'La Salle Green',
    hex: '#087830',
    rgb: [8, 120, 48],
  },
  {
    name: 'Languid Lavender',
    hex: '#d6cadd',
    rgb: [214, 202, 221],
  },
  {
    name: 'Lapis Lazuli',
    hex: '#26619c',
    rgb: [38, 97, 156],
  },
  {
    name: 'Laser Lemon',
    hex: '#fefe22',
    rgb: [254, 254, 34],
  },
  {
    name: 'Laurel Green',
    hex: '#a9ba9d',
    rgb: [169, 186, 157],
  },
  {
    name: 'Lava',
    hex: '#cf1020',
    rgb: [207, 16, 32],
  },
  {
    name: 'Lavender Blue',
    hex: '#ccf',
    rgb: [204, 204, 255],
  },
  {
    name: 'Lavender Blush',
    hex: '#fff0f5',
    rgb: [255, 240, 245],
  },
  {
    name: 'Lavender (Floral)',
    hex: '#b57edc',
    rgb: [181, 126, 220],
  },
  {
    name: 'Lavender Gray',
    hex: '#c4c3d0',
    rgb: [196, 195, 208],
  },
  {
    name: 'Lavender Indigo',
    hex: '#9457eb',
    rgb: [148, 87, 235],
  },
  {
    name: 'Lavender Magenta',
    hex: '#ee82ee',
    rgb: [238, 130, 238],
  },
  {
    name: 'Lavender Mist',
    hex: '#e6e6fa',
    rgb: [230, 230, 250],
  },
  {
    name: 'Lavender Pink',
    hex: '#fbaed2',
    rgb: [251, 174, 210],
  },
  {
    name: 'Lavender Purple',
    hex: '#967bb6',
    rgb: [150, 123, 182],
  },
  {
    name: 'Lavender Rose',
    hex: '#fba0e3',
    rgb: [251, 160, 227],
  },
  {
    name: 'Lavender (Web)',
    hex: '#e6e6fa',
    rgb: [230, 230, 250],
  },
  {
    name: 'Lawn Green',
    hex: '#7cfc00',
    rgb: [124, 252, 0],
  },
  {
    name: 'Lemon',
    hex: '#fff700',
    rgb: [255, 247, 0],
  },
  {
    name: 'Lemon Chiffon',
    hex: '#fffacd',
    rgb: [255, 250, 205],
  },
  {
    name: 'Lemon Lime',
    hex: '#e3ff00',
    rgb: [227, 255, 0],
  },
  {
    name: 'Licorice',
    hex: '#1a1110',
    rgb: [26, 17, 16],
  },
  {
    name: 'Light Apricot',
    hex: '#fdd5b1',
    rgb: [253, 213, 177],
  },
  {
    name: 'Light Blue',
    hex: '#add8e6',
    rgb: [173, 216, 230],
  },
  {
    name: 'Light Brown',
    hex: '#b5651d',
    rgb: [181, 101, 29],
  },
  {
    name: 'Light Carmine Pink',
    hex: '#e66771',
    rgb: [230, 103, 113],
  },
  {
    name: 'Light Coral',
    hex: '#f08080',
    rgb: [240, 128, 128],
  },
  {
    name: 'Light Cornflower Blue',
    hex: '#93ccea',
    rgb: [147, 204, 234],
  },
  {
    name: 'Light Crimson',
    hex: '#f56991',
    rgb: [245, 105, 145],
  },
  {
    name: 'Light Cyan',
    hex: '#e0ffff',
    rgb: [224, 255, 255],
  },
  {
    name: 'Light Fuchsia Pink',
    hex: '#f984ef',
    rgb: [249, 132, 239],
  },
  {
    name: 'Light Goldenrod Yellow',
    hex: '#fafad2',
    rgb: [250, 250, 210],
  },
  {
    name: 'Light Gray',
    hex: '#d3d3d3',
    rgb: [211, 211, 211],
  },
  {
    name: 'Light Green',
    hex: '#90ee90',
    rgb: [144, 238, 144],
  },
  {
    name: 'Light Khaki',
    hex: '#f0e68c',
    rgb: [240, 230, 140],
  },
  {
    name: 'Light Pastel Purple',
    hex: '#b19cd9',
    rgb: [177, 156, 217],
  },
  {
    name: 'Light Pink',
    hex: '#ffb6c1',
    rgb: [255, 182, 193],
  },
  {
    name: 'Light Red Ochre',
    hex: '#e97451',
    rgb: [233, 116, 81],
  },
  {
    name: 'Light Salmon',
    hex: '#ffa07a',
    rgb: [255, 160, 122],
  },
  {
    name: 'Light Salmon Pink',
    hex: '#f99',
    rgb: [255, 153, 153],
  },
  {
    name: 'Light Sea Green',
    hex: '#20b2aa',
    rgb: [32, 178, 170],
  },
  {
    name: 'Light Sky Blue',
    hex: '#87cefa',
    rgb: [135, 206, 250],
  },
  {
    name: 'Light Slate Gray',
    hex: '#789',
    rgb: [119, 136, 153],
  },
  {
    name: 'Light Taupe',
    hex: '#b38b6d',
    rgb: [179, 139, 109],
  },
  {
    name: 'Light Thulian Pink',
    hex: '#e68fac',
    rgb: [230, 143, 172],
  },
  {
    name: 'Light Yellow',
    hex: '#ffffe0',
    rgb: [255, 255, 224],
  },
  {
    name: 'Lilac',
    hex: '#c8a2c8',
    rgb: [200, 162, 200],
  },
  {
    name: 'Lime (Color Wheel)',
    hex: '#bfff00',
    rgb: [191, 255, 0],
  },
  {
    name: 'Lime Green',
    hex: '#32cd32',
    rgb: [50, 205, 50],
  },
  {
    name: 'Lime (Web) (X11 Green)',
    hex: '#0f0',
    rgb: [0, 255, 0],
  },
  {
    name: 'Limerick',
    hex: '#9dc209',
    rgb: [157, 194, 9],
  },
  {
    name: 'Lincoln Green',
    hex: '#195905',
    rgb: [25, 89, 5],
  },
  {
    name: 'Linen',
    hex: '#faf0e6',
    rgb: [250, 240, 230],
  },
  {
    name: 'Lion',
    hex: '#c19a6b',
    rgb: [193, 154, 107],
  },
  {
    name: 'Little Boy Blue',
    hex: '#6ca0dc',
    rgb: [108, 160, 220],
  },
  {
    name: 'Liver',
    hex: '#534b4f',
    rgb: [83, 75, 79],
  },
  {
    name: 'Lust',
    hex: '#e62020',
    rgb: [230, 32, 32],
  },
  {
    name: 'Magenta',
    hex: '#f0f',
    rgb: [255, 0, 255],
  },
  {
    name: 'Magenta (Dye)',
    hex: '#ca1f7b',
    rgb: [202, 31, 123],
  },
  {
    name: 'Magenta (Process)',
    hex: '#ff0090',
    rgb: [255, 0, 144],
  },
  {
    name: 'Magic Mint',
    hex: '#aaf0d1',
    rgb: [170, 240, 209],
  },
  {
    name: 'Magnolia',
    hex: '#f8f4ff',
    rgb: [248, 244, 255],
  },
  {
    name: 'Mahogany',
    hex: '#c04000',
    rgb: [192, 64, 0],
  },
  {
    name: 'Maize',
    hex: '#fbec5d',
    rgb: [251, 236, 93],
  },
  {
    name: 'Majorelle Blue',
    hex: '#6050dc',
    rgb: [96, 80, 220],
  },
  {
    name: 'Malachite',
    hex: '#0bda51',
    rgb: [11, 218, 81],
  },
  {
    name: 'Manatee',
    hex: '#979aaa',
    rgb: [151, 154, 170],
  },
  {
    name: 'Mango Tango',
    hex: '#ff8243',
    rgb: [255, 130, 67],
  },
  {
    name: 'Mantis',
    hex: '#74c365',
    rgb: [116, 195, 101],
  },
  {
    name: 'Mardi Gras',
    hex: '#880085',
    rgb: [136, 0, 133],
  },
  {
    name: 'Maroon (Crayola)',
    hex: '#c32148',
    rgb: [195, 33, 72],
  },
  {
    name: 'Maroon (Html/Css)',
    hex: '#800000',
    rgb: [128, 0, 0],
  },
  {
    name: 'Maroon (X11)',
    hex: '#b03060',
    rgb: [176, 48, 96],
  },
  {
    name: 'Mauve',
    hex: '#e0b0ff',
    rgb: [224, 176, 255],
  },
  {
    name: 'Mauve Taupe',
    hex: '#915f6d',
    rgb: [145, 95, 109],
  },
  {
    name: 'Mauvelous',
    hex: '#ef98aa',
    rgb: [239, 152, 170],
  },
  {
    name: 'Maya Blue',
    hex: '#73c2fb',
    rgb: [115, 194, 251],
  },
  {
    name: 'Meat Brown',
    hex: '#e5b73b',
    rgb: [229, 183, 59],
  },
  {
    name: 'Medium Aquamarine',
    hex: '#6da',
    rgb: [102, 221, 170],
  },
  {
    name: 'Medium Blue',
    hex: '#0000cd',
    rgb: [0, 0, 205],
  },
  {
    name: 'Medium Candy Apple Red',
    hex: '#e2062c',
    rgb: [226, 6, 44],
  },
  {
    name: 'Medium Carmine',
    hex: '#af4035',
    rgb: [175, 64, 53],
  },
  {
    name: 'Medium Champagne',
    hex: '#f3e5ab',
    rgb: [243, 229, 171],
  },
  {
    name: 'Medium Electric Blue',
    hex: '#035096',
    rgb: [3, 80, 150],
  },
  {
    name: 'Medium Jungle Green',
    hex: '#1c352d',
    rgb: [28, 53, 45],
  },
  {
    name: 'Medium Lavender Magenta',
    hex: '#dda0dd',
    rgb: [221, 160, 221],
  },
  {
    name: 'Medium Orchid',
    hex: '#ba55d3',
    rgb: [186, 85, 211],
  },
  {
    name: 'Medium Persian Blue',
    hex: '#0067a5',
    rgb: [0, 103, 165],
  },
  {
    name: 'Medium Purple',
    hex: '#9370db',
    rgb: [147, 112, 219],
  },
  {
    name: 'Medium Red-Violet',
    hex: '#bb3385',
    rgb: [187, 51, 133],
  },
  {
    name: 'Medium Ruby',
    hex: '#aa4069',
    rgb: [170, 64, 105],
  },
  {
    name: 'Medium Sea Green',
    hex: '#3cb371',
    rgb: [60, 179, 113],
  },
  {
    name: 'Medium Slate Blue',
    hex: '#7b68ee',
    rgb: [123, 104, 238],
  },
  {
    name: 'Medium Spring Bud',
    hex: '#c9dc87',
    rgb: [201, 220, 135],
  },
  {
    name: 'Medium Spring Green',
    hex: '#00fa9a',
    rgb: [0, 250, 154],
  },
  {
    name: 'Medium Taupe',
    hex: '#674c47',
    rgb: [103, 76, 71],
  },
  {
    name: 'Medium Turquoise',
    hex: '#48d1cc',
    rgb: [72, 209, 204],
  },
  {
    name: 'Medium Tuscan Red',
    hex: '#79443b',
    rgb: [121, 68, 59],
  },
  {
    name: 'Medium Vermilion',
    hex: '#d9603b',
    rgb: [217, 96, 59],
  },
  {
    name: 'Medium Violet-Red',
    hex: '#c71585',
    rgb: [199, 21, 133],
  },
  {
    name: 'Mellow Apricot',
    hex: '#f8b878',
    rgb: [248, 184, 120],
  },
  {
    name: 'Mellow Yellow',
    hex: '#f8de7e',
    rgb: [248, 222, 126],
  },
  {
    name: 'Melon',
    hex: '#fdbcb4',
    rgb: [253, 188, 180],
  },
  {
    name: 'Midnight Blue',
    hex: '#191970',
    rgb: [25, 25, 112],
  },
  {
    name: 'Midnight Green (Eagle Green)',
    hex: '#004953',
    rgb: [0, 73, 83],
  },
  {
    name: 'Mikado Yellow',
    hex: '#ffc40c',
    rgb: [255, 196, 12],
  },
  {
    name: 'Mint',
    hex: '#3eb489',
    rgb: [62, 180, 137],
  },
  {
    name: 'Mint Cream',
    hex: '#f5fffa',
    rgb: [245, 255, 250],
  },
  {
    name: 'Mint Green',
    hex: '#98ff98',
    rgb: [152, 255, 152],
  },
  {
    name: 'Misty Rose',
    hex: '#ffe4e1',
    rgb: [255, 228, 225],
  },
  {
    name: 'Moccasin',
    hex: '#faebd7',
    rgb: [250, 235, 215],
  },
  {
    name: 'Mode Beige',
    hex: '#967117',
    rgb: [150, 113, 23],
  },
  {
    name: 'Moonstone Blue',
    hex: '#73a9c2',
    rgb: [115, 169, 194],
  },
  {
    name: 'Mordant Red 19',
    hex: '#ae0c00',
    rgb: [174, 12, 0],
  },
  {
    name: 'Moss Green',
    hex: '#addfad',
    rgb: [173, 223, 173],
  },
  {
    name: 'Mountain Meadow',
    hex: '#30ba8f',
    rgb: [48, 186, 143],
  },
  {
    name: 'Mountbatten Pink',
    hex: '#997a8d',
    rgb: [153, 122, 141],
  },
  {
    name: 'Msu Green',
    hex: '#18453b',
    rgb: [24, 69, 59],
  },
  {
    name: 'Mulberry',
    hex: '#c54b8c',
    rgb: [197, 75, 140],
  },
  {
    name: 'Mustard',
    hex: '#ffdb58',
    rgb: [255, 219, 88],
  },
  {
    name: 'Myrtle',
    hex: '#21421e',
    rgb: [33, 66, 30],
  },
  {
    name: 'Nadeshiko Pink',
    hex: '#f6adc6',
    rgb: [246, 173, 198],
  },
  {
    name: 'Napier Green',
    hex: '#2a8000',
    rgb: [42, 128, 0],
  },
  {
    name: 'Naples Yellow',
    hex: '#fada5e',
    rgb: [250, 218, 94],
  },
  {
    name: 'Navajo White',
    hex: '#ffdead',
    rgb: [255, 222, 173],
  },
  {
    name: 'Navy Blue',
    hex: '#000080',
    rgb: [0, 0, 128],
  },
  {
    name: 'Neon Carrot',
    hex: '#ffa343',
    rgb: [255, 163, 67],
  },
  {
    name: 'Neon Fuchsia',
    hex: '#fe4164',
    rgb: [254, 65, 100],
  },
  {
    name: 'Neon Green',
    hex: '#39ff14',
    rgb: [57, 255, 20],
  },
  {
    name: 'New York Pink',
    hex: '#d7837f',
    rgb: [215, 131, 127],
  },
  {
    name: 'Non-Photo Blue',
    hex: '#a4dded',
    rgb: [164, 221, 237],
  },
  {
    name: 'North Texas Green',
    hex: '#059033',
    rgb: [5, 144, 51],
  },
  {
    name: 'Ocean Boat Blue',
    hex: '#0077be',
    rgb: [0, 119, 190],
  },
  {
    name: 'Ochre',
    hex: '#c72',
    rgb: [204, 119, 34],
  },
  {
    name: 'Office Green',
    hex: '#008000',
    rgb: [0, 128, 0],
  },
  {
    name: 'Old Gold',
    hex: '#cfb53b',
    rgb: [207, 181, 59],
  },
  {
    name: 'Old Lace',
    hex: '#fdf5e6',
    rgb: [253, 245, 230],
  },
  {
    name: 'Old Lavender',
    hex: '#796878',
    rgb: [121, 104, 120],
  },
  {
    name: 'Old Mauve',
    hex: '#673147',
    rgb: [103, 49, 71],
  },
  {
    name: 'Old Rose',
    hex: '#c08081',
    rgb: [192, 128, 129],
  },
  {
    name: 'Olive',
    hex: '#808000',
    rgb: [128, 128, 0],
  },
  {
    name: 'Olive Drab #7',
    hex: '#3c341f',
    rgb: [60, 52, 31],
  },
  {
    name: 'Olive Drab (Web) (Olive Drab #3)',
    hex: '#6b8e23',
    rgb: [107, 142, 35],
  },
  {
    name: 'Olivine',
    hex: '#9ab973',
    rgb: [154, 185, 115],
  },
  {
    name: 'Onyx',
    hex: '#353839',
    rgb: [53, 56, 57],
  },
  {
    name: 'Opera Mauve',
    hex: '#b784a7',
    rgb: [183, 132, 167],
  },
  {
    name: 'Orange (Color Wheel)',
    hex: '#ff7f00',
    rgb: [255, 127, 0],
  },
  {
    name: 'Orange Peel',
    hex: '#ff9f00',
    rgb: [255, 159, 0],
  },
  {
    name: 'Orange-Red',
    hex: '#ff4500',
    rgb: [255, 69, 0],
  },
  {
    name: 'Orange (Ryb)',
    hex: '#fb9902',
    rgb: [251, 153, 2],
  },
  {
    name: 'Orange (Web Color)',
    hex: '#ffa500',
    rgb: [255, 165, 0],
  },
  {
    name: 'Orchid',
    hex: '#da70d6',
    rgb: [218, 112, 214],
  },
  {
    name: 'Otter Brown',
    hex: '#654321',
    rgb: [101, 67, 33],
  },
  {
    name: 'Ou Crimson Red',
    hex: '#900',
    rgb: [153, 0, 0],
  },
  {
    name: 'Outer Space',
    hex: '#414a4c',
    rgb: [65, 74, 76],
  },
  {
    name: 'Outrageous Orange',
    hex: '#ff6e4a',
    rgb: [255, 110, 74],
  },
  {
    name: 'Oxford Blue',
    hex: '#002147',
    rgb: [0, 33, 71],
  },
  {
    name: 'Pakistan Green',
    hex: '#060',
    rgb: [0, 102, 0],
  },
  {
    name: 'Palatinate Blue',
    hex: '#273be2',
    rgb: [39, 59, 226],
  },
  {
    name: 'Palatinate Purple',
    hex: '#682860',
    rgb: [104, 40, 96],
  },
  {
    name: 'Pale Aqua',
    hex: '#bcd4e6',
    rgb: [188, 212, 230],
  },
  {
    name: 'Pale Blue',
    hex: '#afeeee',
    rgb: [175, 238, 238],
  },
  {
    name: 'Pale Brown',
    hex: '#987654',
    rgb: [152, 118, 84],
  },
  {
    name: 'Pale Carmine',
    hex: '#af4035',
    rgb: [175, 64, 53],
  },
  {
    name: 'Pale Cerulean',
    hex: '#9bc4e2',
    rgb: [155, 196, 226],
  },
  {
    name: 'Pale Chestnut',
    hex: '#ddadaf',
    rgb: [221, 173, 175],
  },
  {
    name: 'Pale Copper',
    hex: '#da8a67',
    rgb: [218, 138, 103],
  },
  {
    name: 'Pale Cornflower Blue',
    hex: '#abcdef',
    rgb: [171, 205, 239],
  },
  {
    name: 'Pale Gold',
    hex: '#e6be8a',
    rgb: [230, 190, 138],
  },
  {
    name: 'Pale Goldenrod',
    hex: '#eee8aa',
    rgb: [238, 232, 170],
  },
  {
    name: 'Pale Green',
    hex: '#98fb98',
    rgb: [152, 251, 152],
  },
  {
    name: 'Pale Lavender',
    hex: '#dcd0ff',
    rgb: [220, 208, 255],
  },
  {
    name: 'Pale Magenta',
    hex: '#f984e5',
    rgb: [249, 132, 229],
  },
  {
    name: 'Pale Pink',
    hex: '#fadadd',
    rgb: [250, 218, 221],
  },
  {
    name: 'Pale Plum',
    hex: '#dda0dd',
    rgb: [221, 160, 221],
  },
  {
    name: 'Pale Red-Violet',
    hex: '#db7093',
    rgb: [219, 112, 147],
  },
  {
    name: 'Pale Robin Egg Blue',
    hex: '#96ded1',
    rgb: [150, 222, 209],
  },
  {
    name: 'Pale Silver',
    hex: '#c9c0bb',
    rgb: [201, 192, 187],
  },
  {
    name: 'Pale Spring Bud',
    hex: '#ecebbd',
    rgb: [236, 235, 189],
  },
  {
    name: 'Pale Taupe',
    hex: '#bc987e',
    rgb: [188, 152, 126],
  },
  {
    name: 'Pale Violet-Red',
    hex: '#db7093',
    rgb: [219, 112, 147],
  },
  {
    name: 'Pansy Purple',
    hex: '#78184a',
    rgb: [120, 24, 74],
  },
  {
    name: 'Papaya Whip',
    hex: '#ffefd5',
    rgb: [255, 239, 213],
  },
  {
    name: 'Paris Green',
    hex: '#50c878',
    rgb: [80, 200, 120],
  },
  {
    name: 'Pastel Blue',
    hex: '#aec6cf',
    rgb: [174, 198, 207],
  },
  {
    name: 'Pastel Brown',
    hex: '#836953',
    rgb: [131, 105, 83],
  },
  {
    name: 'Pastel Gray',
    hex: '#cfcfc4',
    rgb: [207, 207, 196],
  },
  {
    name: 'Pastel Green',
    hex: '#7d7',
    rgb: [119, 221, 119],
  },
  {
    name: 'Pastel Magenta',
    hex: '#f49ac2',
    rgb: [244, 154, 194],
  },
  {
    name: 'Pastel Orange',
    hex: '#ffb347',
    rgb: [255, 179, 71],
  },
  {
    name: 'Pastel Pink',
    hex: '#dea5a4',
    rgb: [222, 165, 164],
  },
  {
    name: 'Pastel Purple',
    hex: '#b39eb5',
    rgb: [179, 158, 181],
  },
  {
    name: 'Pastel Red',
    hex: '#ff6961',
    rgb: [255, 105, 97],
  },
  {
    name: 'Pastel Violet',
    hex: '#cb99c9',
    rgb: [203, 153, 201],
  },
  {
    name: 'Pastel Yellow',
    hex: '#fdfd96',
    rgb: [253, 253, 150],
  },
  {
    name: 'Patriarch',
    hex: '#800080',
    rgb: [128, 0, 128],
  },
  {
    name: "Payne'S Grey",
    hex: '#536878',
    rgb: [83, 104, 120],
  },
  {
    name: 'Peach',
    hex: '#ffe5b4',
    rgb: [255, 229, 180],
  },
  {
    name: 'Peach (Crayola)',
    hex: '#ffcba4',
    rgb: [255, 203, 164],
  },
  {
    name: 'Peach-Orange',
    hex: '#fc9',
    rgb: [255, 204, 153],
  },
  {
    name: 'Peach Puff',
    hex: '#ffdab9',
    rgb: [255, 218, 185],
  },
  {
    name: 'Peach-Yellow',
    hex: '#fadfad',
    rgb: [250, 223, 173],
  },
  {
    name: 'Pear',
    hex: '#d1e231',
    rgb: [209, 226, 49],
  },
  {
    name: 'Pearl',
    hex: '#eae0c8',
    rgb: [234, 224, 200],
  },
  {
    name: 'Pearl Aqua',
    hex: '#88d8c0',
    rgb: [136, 216, 192],
  },
  {
    name: 'Pearly Purple',
    hex: '#b768a2',
    rgb: [183, 104, 162],
  },
  {
    name: 'Peridot',
    hex: '#e6e200',
    rgb: [230, 226, 0],
  },
  {
    name: 'Periwinkle',
    hex: '#ccf',
    rgb: [204, 204, 255],
  },
  {
    name: 'Persian Blue',
    hex: '#1c39bb',
    rgb: [28, 57, 187],
  },
  {
    name: 'Persian Green',
    hex: '#00a693',
    rgb: [0, 166, 147],
  },
  {
    name: 'Persian Indigo',
    hex: '#32127a',
    rgb: [50, 18, 122],
  },
  {
    name: 'Persian Orange',
    hex: '#d99058',
    rgb: [217, 144, 88],
  },
  {
    name: 'Persian Pink',
    hex: '#f77fbe',
    rgb: [247, 127, 190],
  },
  {
    name: 'Persian Plum',
    hex: '#701c1c',
    rgb: [112, 28, 28],
  },
  {
    name: 'Persian Red',
    hex: '#c33',
    rgb: [204, 51, 51],
  },
  {
    name: 'Persian Rose',
    hex: '#fe28a2',
    rgb: [254, 40, 162],
  },
  {
    name: 'Persimmon',
    hex: '#ec5800',
    rgb: [236, 88, 0],
  },
  {
    name: 'Peru',
    hex: '#cd853f',
    rgb: [205, 133, 63],
  },
  {
    name: 'Phlox',
    hex: '#df00ff',
    rgb: [223, 0, 255],
  },
  {
    name: 'Phthalo Blue',
    hex: '#000f89',
    rgb: [0, 15, 137],
  },
  {
    name: 'Phthalo Green',
    hex: '#123524',
    rgb: [18, 53, 36],
  },
  {
    name: 'Piggy Pink',
    hex: '#fddde6',
    rgb: [253, 221, 230],
  },
  {
    name: 'Pine Green',
    hex: '#01796f',
    rgb: [1, 121, 111],
  },
  {
    name: 'Pink',
    hex: '#ffc0cb',
    rgb: [255, 192, 203],
  },
  {
    name: 'Pink Lace',
    hex: '#ffddf4',
    rgb: [255, 221, 244],
  },
  {
    name: 'Pink-Orange',
    hex: '#f96',
    rgb: [255, 153, 102],
  },
  {
    name: 'Pink Pearl',
    hex: '#e7accf',
    rgb: [231, 172, 207],
  },
  {
    name: 'Pink Sherbet',
    hex: '#f78fa7',
    rgb: [247, 143, 167],
  },
  {
    name: 'Pistachio',
    hex: '#93c572',
    rgb: [147, 197, 114],
  },
  {
    name: 'Platinum',
    hex: '#e5e4e2',
    rgb: [229, 228, 226],
  },
  {
    name: 'Plum (Traditional)',
    hex: '#8e4585',
    rgb: [142, 69, 133],
  },
  {
    name: 'Plum (Web)',
    hex: '#dda0dd',
    rgb: [221, 160, 221],
  },
  {
    name: 'Portland Orange',
    hex: '#ff5a36',
    rgb: [255, 90, 54],
  },
  {
    name: 'Powder Blue (Web)',
    hex: '#b0e0e6',
    rgb: [176, 224, 230],
  },
  {
    name: 'Princeton Orange',
    hex: '#ff8f00',
    rgb: [255, 143, 0],
  },
  {
    name: 'Prune',
    hex: '#701c1c',
    rgb: [112, 28, 28],
  },
  {
    name: 'Prussian Blue',
    hex: '#003153',
    rgb: [0, 49, 83],
  },
  {
    name: 'Psychedelic Purple',
    hex: '#df00ff',
    rgb: [223, 0, 255],
  },
  {
    name: 'Puce',
    hex: '#c89',
    rgb: [204, 136, 153],
  },
  {
    name: 'Pumpkin',
    hex: '#ff7518',
    rgb: [255, 117, 24],
  },
  {
    name: 'Purple Heart',
    hex: '#69359c',
    rgb: [105, 53, 156],
  },
  {
    name: 'Purple (Html/Css)',
    hex: '#800080',
    rgb: [128, 0, 128],
  },
  {
    name: 'Purple Mountain Majesty',
    hex: '#9678b6',
    rgb: [150, 120, 182],
  },
  {
    name: 'Purple (Munsell)',
    hex: '#9f00c5',
    rgb: [159, 0, 197],
  },
  {
    name: 'Purple Pizzazz',
    hex: '#fe4eda',
    rgb: [254, 78, 218],
  },
  {
    name: 'Purple Taupe',
    hex: '#50404d',
    rgb: [80, 64, 77],
  },
  {
    name: 'Purple (X11)',
    hex: '#a020f0',
    rgb: [160, 32, 240],
  },
  {
    name: 'Quartz',
    hex: '#51484f',
    rgb: [81, 72, 79],
  },
  {
    name: 'Rackley',
    hex: '#5d8aa8',
    rgb: [93, 138, 168],
  },
  {
    name: 'Radical Red',
    hex: '#ff355e',
    rgb: [255, 53, 94],
  },
  {
    name: 'Rajah',
    hex: '#fbab60',
    rgb: [251, 171, 96],
  },
  {
    name: 'Raspberry',
    hex: '#e30b5d',
    rgb: [227, 11, 93],
  },
  {
    name: 'Raspberry Glace',
    hex: '#915f6d',
    rgb: [145, 95, 109],
  },
  {
    name: 'Raspberry Pink',
    hex: '#e25098',
    rgb: [226, 80, 152],
  },
  {
    name: 'Raspberry Rose',
    hex: '#b3446c',
    rgb: [179, 68, 108],
  },
  {
    name: 'Raw Umber',
    hex: '#826644',
    rgb: [130, 102, 68],
  },
  {
    name: 'Razzle Dazzle Rose',
    hex: '#f3c',
    rgb: [255, 51, 204],
  },
  {
    name: 'Razzmatazz',
    hex: '#e3256b',
    rgb: [227, 37, 107],
  },
  {
    name: 'Red',
    hex: '#f00',
    rgb: [255, 0, 0],
  },
  {
    name: 'Red-Brown',
    hex: '#a52a2a',
    rgb: [165, 42, 42],
  },
  {
    name: 'Red Devil',
    hex: '#860111',
    rgb: [134, 1, 17],
  },
  {
    name: 'Red (Munsell)',
    hex: '#f2003c',
    rgb: [242, 0, 60],
  },
  {
    name: 'Red (Ncs)',
    hex: '#c40233',
    rgb: [196, 2, 51],
  },
  {
    name: 'Red-Orange',
    hex: '#ff5349',
    rgb: [255, 83, 73],
  },
  {
    name: 'Red (Pigment)',
    hex: '#ed1c24',
    rgb: [237, 28, 36],
  },
  {
    name: 'Red (Ryb)',
    hex: '#fe2712',
    rgb: [254, 39, 18],
  },
  {
    name: 'Red-Violet',
    hex: '#c71585',
    rgb: [199, 21, 133],
  },
  {
    name: 'Redwood',
    hex: '#ab4e52',
    rgb: [171, 78, 82],
  },
  {
    name: 'Regalia',
    hex: '#522d80',
    rgb: [82, 45, 128],
  },
  {
    name: 'Resolution Blue',
    hex: '#002387',
    rgb: [0, 35, 135],
  },
  {
    name: 'Rich Black',
    hex: '#004040',
    rgb: [0, 64, 64],
  },
  {
    name: 'Rich Brilliant Lavender',
    hex: '#f1a7fe',
    rgb: [241, 167, 254],
  },
  {
    name: 'Rich Carmine',
    hex: '#d70040',
    rgb: [215, 0, 64],
  },
  {
    name: 'Rich Electric Blue',
    hex: '#0892d0',
    rgb: [8, 146, 208],
  },
  {
    name: 'Rich Lavender',
    hex: '#a76bcf',
    rgb: [167, 107, 207],
  },
  {
    name: 'Rich Lilac',
    hex: '#b666d2',
    rgb: [182, 102, 210],
  },
  {
    name: 'Rich Maroon',
    hex: '#b03060',
    rgb: [176, 48, 96],
  },
  {
    name: 'Rifle Green',
    hex: '#414833',
    rgb: [65, 72, 51],
  },
  {
    name: 'Robin Egg Blue',
    hex: '#0cc',
    rgb: [0, 204, 204],
  },
  {
    name: 'Rose',
    hex: '#ff007f',
    rgb: [255, 0, 127],
  },
  {
    name: 'Rose Bonbon',
    hex: '#f9429e',
    rgb: [249, 66, 158],
  },
  {
    name: 'Rose Ebony',
    hex: '#674846',
    rgb: [103, 72, 70],
  },
  {
    name: 'Rose Gold',
    hex: '#b76e79',
    rgb: [183, 110, 121],
  },
  {
    name: 'Rose Madder',
    hex: '#e32636',
    rgb: [227, 38, 54],
  },
  {
    name: 'Rose Pink',
    hex: '#f6c',
    rgb: [255, 102, 204],
  },
  {
    name: 'Rose Quartz',
    hex: '#aa98a9',
    rgb: [170, 152, 169],
  },
  {
    name: 'Rose Taupe',
    hex: '#905d5d',
    rgb: [144, 93, 93],
  },
  {
    name: 'Rose Vale',
    hex: '#ab4e52',
    rgb: [171, 78, 82],
  },
  {
    name: 'Rosewood',
    hex: '#65000b',
    rgb: [101, 0, 11],
  },
  {
    name: 'Rosso Corsa',
    hex: '#d40000',
    rgb: [212, 0, 0],
  },
  {
    name: 'Rosy Brown',
    hex: '#bc8f8f',
    rgb: [188, 143, 143],
  },
  {
    name: 'Royal Azure',
    hex: '#0038a8',
    rgb: [0, 56, 168],
  },
  {
    name: 'Royal Blue (Traditional)',
    hex: '#002366',
    rgb: [0, 35, 102],
  },
  {
    name: 'Royal Blue (Web)',
    hex: '#4169e1',
    rgb: [65, 105, 225],
  },
  {
    name: 'Royal Fuchsia',
    hex: '#ca2c92',
    rgb: [202, 44, 146],
  },
  {
    name: 'Royal Purple',
    hex: '#7851a9',
    rgb: [120, 81, 169],
  },
  {
    name: 'Royal Yellow',
    hex: '#fada5e',
    rgb: [250, 218, 94],
  },
  {
    name: 'Rubine Red',
    hex: '#d10056',
    rgb: [209, 0, 86],
  },
  {
    name: 'Ruby',
    hex: '#e0115f',
    rgb: [224, 17, 95],
  },
  {
    name: 'Ruby Red',
    hex: '#9b111e',
    rgb: [155, 17, 30],
  },
  {
    name: 'Ruddy',
    hex: '#ff0028',
    rgb: [255, 0, 40],
  },
  {
    name: 'Ruddy Brown',
    hex: '#bb6528',
    rgb: [187, 101, 40],
  },
  {
    name: 'Ruddy Pink',
    hex: '#e18e96',
    rgb: [225, 142, 150],
  },
  {
    name: 'Rufous',
    hex: '#a81c07',
    rgb: [168, 28, 7],
  },
  {
    name: 'Russet',
    hex: '#80461b',
    rgb: [128, 70, 27],
  },
  {
    name: 'Rust',
    hex: '#b7410e',
    rgb: [183, 65, 14],
  },
  {
    name: 'Rusty Red',
    hex: '#da2c43',
    rgb: [218, 44, 67],
  },
  {
    name: 'Sacramento State Green',
    hex: '#00563f',
    rgb: [0, 86, 63],
  },
  {
    name: 'Saddle Brown',
    hex: '#8b4513',
    rgb: [139, 69, 19],
  },
  {
    name: 'Safety Orange (Blaze Orange)',
    hex: '#ff6700',
    rgb: [255, 103, 0],
  },
  {
    name: 'Saffron',
    hex: '#f4c430',
    rgb: [244, 196, 48],
  },
  {
    name: 'Salmon',
    hex: '#ff8c69',
    rgb: [255, 140, 105],
  },
  {
    name: 'Salmon Pink',
    hex: '#ff91a4',
    rgb: [255, 145, 164],
  },
  {
    name: 'Sand',
    hex: '#c2b280',
    rgb: [194, 178, 128],
  },
  {
    name: 'Sand Dune',
    hex: '#967117',
    rgb: [150, 113, 23],
  },
  {
    name: 'Sandstorm',
    hex: '#ecd540',
    rgb: [236, 213, 64],
  },
  {
    name: 'Sandy Brown',
    hex: '#f4a460',
    rgb: [244, 164, 96],
  },
  {
    name: 'Sandy Taupe',
    hex: '#967117',
    rgb: [150, 113, 23],
  },
  {
    name: 'Sangria',
    hex: '#92000a',
    rgb: [146, 0, 10],
  },
  {
    name: 'Sap Green',
    hex: '#507d2a',
    rgb: [80, 125, 42],
  },
  {
    name: 'Sapphire',
    hex: '#0f52ba',
    rgb: [15, 82, 186],
  },
  {
    name: 'Sapphire Blue',
    hex: '#0067a5',
    rgb: [0, 103, 165],
  },
  {
    name: 'Satin Sheen Gold',
    hex: '#cba135',
    rgb: [203, 161, 53],
  },
  {
    name: 'Scarlet',
    hex: '#ff2400',
    rgb: [255, 36, 0],
  },
  {
    name: 'Scarlet (Crayola)',
    hex: '#fd0e35',
    rgb: [253, 14, 53],
  },
  {
    name: 'School Bus Yellow',
    hex: '#ffd800',
    rgb: [255, 216, 0],
  },
  {
    name: "Screamin' Green",
    hex: '#76ff7a',
    rgb: [118, 255, 122],
  },
  {
    name: 'Sea Blue',
    hex: '#006994',
    rgb: [0, 105, 148],
  },
  {
    name: 'Sea Green',
    hex: '#2e8b57',
    rgb: [46, 139, 87],
  },
  {
    name: 'Seal Brown',
    hex: '#321414',
    rgb: [50, 20, 20],
  },
  {
    name: 'Seashell',
    hex: '#fff5ee',
    rgb: [255, 245, 238],
  },
  {
    name: 'Selective Yellow',
    hex: '#ffba00',
    rgb: [255, 186, 0],
  },
  {
    name: 'Sepia',
    hex: '#704214',
    rgb: [112, 66, 20],
  },
  {
    name: 'Shadow',
    hex: '#8a795d',
    rgb: [138, 121, 93],
  },
  {
    name: 'Shamrock Green',
    hex: '#009e60',
    rgb: [0, 158, 96],
  },
  {
    name: 'Shocking Pink',
    hex: '#fc0fc0',
    rgb: [252, 15, 192],
  },
  {
    name: 'Shocking Pink (Crayola)',
    hex: '#ff6fff',
    rgb: [255, 111, 255],
  },
  {
    name: 'Sienna',
    hex: '#882d17',
    rgb: [136, 45, 23],
  },
  {
    name: 'Silver',
    hex: '#c0c0c0',
    rgb: [192, 192, 192],
  },
  {
    name: 'Sinopia',
    hex: '#cb410b',
    rgb: [203, 65, 11],
  },
  {
    name: 'Skobeloff',
    hex: '#007474',
    rgb: [0, 116, 116],
  },
  {
    name: 'Sky Blue',
    hex: '#87ceeb',
    rgb: [135, 206, 235],
  },
  {
    name: 'Sky Magenta',
    hex: '#cf71af',
    rgb: [207, 113, 175],
  },
  {
    name: 'Slate Blue',
    hex: '#6a5acd',
    rgb: [106, 90, 205],
  },
  {
    name: 'Slate Gray',
    hex: '#708090',
    rgb: [112, 128, 144],
  },
  {
    name: 'Smalt (Dark Powder Blue)',
    hex: '#039',
    rgb: [0, 51, 153],
  },
  {
    name: 'Smokey Topaz',
    hex: '#933d41',
    rgb: [147, 61, 65],
  },
  {
    name: 'Smoky Black',
    hex: '#100c08',
    rgb: [16, 12, 8],
  },
  {
    name: 'Snow',
    hex: '#fffafa',
    rgb: [255, 250, 250],
  },
  {
    name: 'Spiro Disco Ball',
    hex: '#0fc0fc',
    rgb: [15, 192, 252],
  },
  {
    name: 'Spring Bud',
    hex: '#a7fc00',
    rgb: [167, 252, 0],
  },
  {
    name: 'Spring Green',
    hex: '#00ff7f',
    rgb: [0, 255, 127],
  },
  {
    name: "St. Patrick'S Blue",
    hex: '#23297a',
    rgb: [35, 41, 122],
  },
  {
    name: 'Steel Blue',
    hex: '#4682b4',
    rgb: [70, 130, 180],
  },
  {
    name: 'Stil De Grain Yellow',
    hex: '#fada5e',
    rgb: [250, 218, 94],
  },
  {
    name: 'Stizza',
    hex: '#900',
    rgb: [153, 0, 0],
  },
  {
    name: 'Stormcloud',
    hex: '#4f666a',
    rgb: [79, 102, 106],
  },
  {
    name: 'Straw',
    hex: '#e4d96f',
    rgb: [228, 217, 111],
  },
  {
    name: 'Sunglow',
    hex: '#fc3',
    rgb: [255, 204, 51],
  },
  {
    name: 'Sunset',
    hex: '#fad6a5',
    rgb: [250, 214, 165],
  },
  {
    name: 'Tan',
    hex: '#d2b48c',
    rgb: [210, 180, 140],
  },
  {
    name: 'Tangelo',
    hex: '#f94d00',
    rgb: [249, 77, 0],
  },
  {
    name: 'Tangerine',
    hex: '#f28500',
    rgb: [242, 133, 0],
  },
  {
    name: 'Tangerine Yellow',
    hex: '#fc0',
    rgb: [255, 204, 0],
  },
  {
    name: 'Tango Pink',
    hex: '#e4717a',
    rgb: [228, 113, 122],
  },
  {
    name: 'Taupe',
    hex: '#483c32',
    rgb: [72, 60, 50],
  },
  {
    name: 'Taupe Gray',
    hex: '#8b8589',
    rgb: [139, 133, 137],
  },
  {
    name: 'Tea Green',
    hex: '#d0f0c0',
    rgb: [208, 240, 192],
  },
  {
    name: 'Tea Rose (Orange)',
    hex: '#f88379',
    rgb: [248, 131, 121],
  },
  {
    name: 'Tea Rose (Rose)',
    hex: '#f4c2c2',
    rgb: [244, 194, 194],
  },
  {
    name: 'Teal',
    hex: '#008080',
    rgb: [0, 128, 128],
  },
  {
    name: 'Teal Blue',
    hex: '#367588',
    rgb: [54, 117, 136],
  },
  {
    name: 'Teal Green',
    hex: '#00827f',
    rgb: [0, 130, 127],
  },
  {
    name: 'Telemagenta',
    hex: '#cf3476',
    rgb: [207, 52, 118],
  },
  {
    name: 'Tenné (Tawny)',
    hex: '#cd5700',
    rgb: [205, 87, 0],
  },
  {
    name: 'Terra Cotta',
    hex: '#e2725b',
    rgb: [226, 114, 91],
  },
  {
    name: 'Thistle',
    hex: '#d8bfd8',
    rgb: [216, 191, 216],
  },
  {
    name: 'Thulian Pink',
    hex: '#de6fa1',
    rgb: [222, 111, 161],
  },
  {
    name: 'Tickle Me Pink',
    hex: '#fc89ac',
    rgb: [252, 137, 172],
  },
  {
    name: 'Tiffany Blue',
    hex: '#0abab5',
    rgb: [10, 186, 181],
  },
  {
    name: "Tiger'S Eye",
    hex: '#e08d3c',
    rgb: [224, 141, 60],
  },
  {
    name: 'Timberwolf',
    hex: '#dbd7d2',
    rgb: [219, 215, 210],
  },
  {
    name: 'Titanium Yellow',
    hex: '#eee600',
    rgb: [238, 230, 0],
  },
  {
    name: 'Tomato',
    hex: '#ff6347',
    rgb: [255, 99, 71],
  },
  {
    name: 'Toolbox',
    hex: '#746cc0',
    rgb: [116, 108, 192],
  },
  {
    name: 'Topaz',
    hex: '#ffc87c',
    rgb: [255, 200, 124],
  },
  {
    name: 'Tractor Red',
    hex: '#fd0e35',
    rgb: [253, 14, 53],
  },
  {
    name: 'Trolley Grey',
    hex: '#808080',
    rgb: [128, 128, 128],
  },
  {
    name: 'Tropical Rain Forest',
    hex: '#00755e',
    rgb: [0, 117, 94],
  },
  {
    name: 'True Blue',
    hex: '#0073cf',
    rgb: [0, 115, 207],
  },
  {
    name: 'Tufts Blue',
    hex: '#417dc1',
    rgb: [65, 125, 193],
  },
  {
    name: 'Tumbleweed',
    hex: '#deaa88',
    rgb: [222, 170, 136],
  },
  {
    name: 'Turkish Rose',
    hex: '#b57281',
    rgb: [181, 114, 129],
  },
  {
    name: 'Turquoise',
    hex: '#30d5c8',
    rgb: [48, 213, 200],
  },
  {
    name: 'Turquoise Blue',
    hex: '#00ffef',
    rgb: [0, 255, 239],
  },
  {
    name: 'Turquoise Green',
    hex: '#a0d6b4',
    rgb: [160, 214, 180],
  },
  {
    name: 'Tuscan Red',
    hex: '#7c4848',
    rgb: [124, 72, 72],
  },
  {
    name: 'Twilight Lavender',
    hex: '#8a496b',
    rgb: [138, 73, 107],
  },
  {
    name: 'Tyrian Purple',
    hex: '#66023c',
    rgb: [102, 2, 60],
  },
  {
    name: 'Ua Blue',
    hex: '#03a',
    rgb: [0, 51, 170],
  },
  {
    name: 'Ua Red',
    hex: '#d9004c',
    rgb: [217, 0, 76],
  },
  {
    name: 'Ube',
    hex: '#8878c3',
    rgb: [136, 120, 195],
  },
  {
    name: 'Ucla Blue',
    hex: '#536895',
    rgb: [83, 104, 149],
  },
  {
    name: 'Ucla Gold',
    hex: '#ffb300',
    rgb: [255, 179, 0],
  },
  {
    name: 'Ufo Green',
    hex: '#3cd070',
    rgb: [60, 208, 112],
  },
  {
    name: 'Ultra Pink',
    hex: '#ff6fff',
    rgb: [255, 111, 255],
  },
  {
    name: 'Ultramarine',
    hex: '#120a8f',
    rgb: [18, 10, 143],
  },
  {
    name: 'Ultramarine Blue',
    hex: '#4166f5',
    rgb: [65, 102, 245],
  },
  {
    name: 'Umber',
    hex: '#635147',
    rgb: [99, 81, 71],
  },
  {
    name: 'Unbleached Silk',
    hex: '#ffddca',
    rgb: [255, 221, 202],
  },
  {
    name: 'United Nations Blue',
    hex: '#5b92e5',
    rgb: [91, 146, 229],
  },
  {
    name: 'University Of California Gold',
    hex: '#b78727',
    rgb: [183, 135, 39],
  },
  {
    name: 'Unmellow Yellow',
    hex: '#ff6',
    rgb: [255, 255, 102],
  },
  {
    name: 'Up Forest Green',
    hex: '#014421',
    rgb: [1, 68, 33],
  },
  {
    name: 'Up Maroon',
    hex: '#7b1113',
    rgb: [123, 17, 19],
  },
  {
    name: 'Upsdell Red',
    hex: '#ae2029',
    rgb: [174, 32, 41],
  },
  {
    name: 'Urobilin',
    hex: '#e1ad21',
    rgb: [225, 173, 33],
  },
  {
    name: 'Usafa Blue',
    hex: '#004f98',
    rgb: [0, 79, 152],
  },
  {
    name: 'Usc Cardinal',
    hex: '#900',
    rgb: [153, 0, 0],
  },
  {
    name: 'Usc Gold',
    hex: '#fc0',
    rgb: [255, 204, 0],
  },
  {
    name: 'Utah Crimson',
    hex: '#d3003f',
    rgb: [211, 0, 63],
  },
  {
    name: 'Vanilla',
    hex: '#f3e5ab',
    rgb: [243, 229, 171],
  },
  {
    name: 'Vegas Gold',
    hex: '#c5b358',
    rgb: [197, 179, 88],
  },
  {
    name: 'Venetian Red',
    hex: '#c80815',
    rgb: [200, 8, 21],
  },
  {
    name: 'Verdigris',
    hex: '#43b3ae',
    rgb: [67, 179, 174],
  },
  {
    name: 'Vermilion (Cinnabar)',
    hex: '#e34234',
    rgb: [227, 66, 52],
  },
  {
    name: 'Vermilion (Plochere)',
    hex: '#d9603b',
    rgb: [217, 96, 59],
  },
  {
    name: 'Veronica',
    hex: '#a020f0',
    rgb: [160, 32, 240],
  },
  {
    name: 'Violet',
    hex: '#8f00ff',
    rgb: [143, 0, 255],
  },
  {
    name: 'Violet-Blue',
    hex: '#324ab2',
    rgb: [50, 74, 178],
  },
  {
    name: 'Violet (Color Wheel)',
    hex: '#7f00ff',
    rgb: [127, 0, 255],
  },
  {
    name: 'Violet (Ryb)',
    hex: '#8601af',
    rgb: [134, 1, 175],
  },
  {
    name: 'Violet (Web)',
    hex: '#ee82ee',
    rgb: [238, 130, 238],
  },
  {
    name: 'Viridian',
    hex: '#40826d',
    rgb: [64, 130, 109],
  },
  {
    name: 'Vivid Auburn',
    hex: '#922724',
    rgb: [146, 39, 36],
  },
  {
    name: 'Vivid Burgundy',
    hex: '#9f1d35',
    rgb: [159, 29, 53],
  },
  {
    name: 'Vivid Cerise',
    hex: '#da1d81',
    rgb: [218, 29, 129],
  },
  {
    name: 'Vivid Tangerine',
    hex: '#ffa089',
    rgb: [255, 160, 137],
  },
  {
    name: 'Vivid Violet',
    hex: '#9f00ff',
    rgb: [159, 0, 255],
  },
  {
    name: 'Warm Black',
    hex: '#004242',
    rgb: [0, 66, 66],
  },
  {
    name: 'Waterspout',
    hex: '#a4f4f9',
    rgb: [164, 244, 249],
  },
  {
    name: 'Wenge',
    hex: '#645452',
    rgb: [100, 84, 82],
  },
  {
    name: 'Wheat',
    hex: '#f5deb3',
    rgb: [245, 222, 179],
  },
  {
    name: 'White',
    hex: '#fff',
    rgb: [255, 255, 255],
  },
  {
    name: 'White Smoke',
    hex: '#f5f5f5',
    rgb: [245, 245, 245],
  },
  {
    name: 'Wild Blue Yonder',
    hex: '#a2add0',
    rgb: [162, 173, 208],
  },
  {
    name: 'Wild Strawberry',
    hex: '#ff43a4',
    rgb: [255, 67, 164],
  },
  {
    name: 'Wild Watermelon',
    hex: '#fc6c85',
    rgb: [252, 108, 133],
  },
  {
    name: 'Wine',
    hex: '#722f37',
    rgb: [114, 47, 55],
  },
  {
    name: 'Wine Dregs',
    hex: '#673147',
    rgb: [103, 49, 71],
  },
  {
    name: 'Wisteria',
    hex: '#c9a0dc',
    rgb: [201, 160, 220],
  },
  {
    name: 'Wood Brown',
    hex: '#c19a6b',
    rgb: [193, 154, 107],
  },
  {
    name: 'Xanadu',
    hex: '#738678',
    rgb: [115, 134, 120],
  },
  {
    name: 'Yale Blue',
    hex: '#0f4d92',
    rgb: [15, 77, 146],
  },
  {
    name: 'Yellow',
    hex: '#ff0',
    rgb: [255, 255, 0],
  },
  {
    name: 'Yellow-Green',
    hex: '#9acd32',
    rgb: [154, 205, 50],
  },
  {
    name: 'Yellow (Munsell)',
    hex: '#efcc00',
    rgb: [239, 204, 0],
  },
  {
    name: 'Yellow (Ncs)',
    hex: '#ffd300',
    rgb: [255, 211, 0],
  },
  {
    name: 'Yellow Orange',
    hex: '#ffae42',
    rgb: [255, 174, 66],
  },
  {
    name: 'Yellow (Process)',
    hex: '#ffef00',
    rgb: [255, 239, 0],
  },
  {
    name: 'Yellow (Ryb)',
    hex: '#fefe33',
    rgb: [254, 254, 51],
  },
  {
    name: 'Zaffre',
    hex: '#0014a8',
    rgb: [0, 20, 168],
  },
  {
    name: 'Zinnwaldite Brown',
    hex: '#2c1608',
    rgb: [44, 22, 8],
  },
] as { name: string; hex: string; rgb: number[] }[]

export default colors
