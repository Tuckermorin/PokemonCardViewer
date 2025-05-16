const cards = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass",
    hp: 45,
    image: "https://img.pokemondb.net/artwork/bulbasaur.jpg"
  },
  {
    id: 2,
    name: "Ivysaur",
    type: "Grass",
    hp: 60,
    image: "https://img.pokemondb.net/artwork/ivysaur.jpg"
  },
  {
    id: 3,
    name: "Venusaur",
    type: "Grass",
    hp: 80,
    image: "https://img.pokemondb.net/artwork/venusaur.jpg"
  },
  {
    id: 4,
    name: "Charmander",
    type: "Fire",
    hp: 39,
    image: "https://img.pokemondb.net/artwork/charmander.jpg"
  },
  {
    id: 5,
    name: "Charmeleon",
    type: "Fire",
    hp: 58,
    image: "https://img.pokemondb.net/artwork/charmeleon.jpg"
  },
  {
    id: 6,
    name: "Charizard",
    type: "Fire",
    hp: 78,
    image: "https://img.pokemondb.net/artwork/charizard.jpg"
  },
  {
    id: 7,
    name: "Squirtle",
    type: "Water",
    hp: 44,
    image: "https://img.pokemondb.net/artwork/squirtle.jpg"
  },
  {
    id: 8,
    name: "Wartortle",
    type: "Water",
    hp: 59,
    image: "https://img.pokemondb.net/artwork/wartortle.jpg"
  },
  {
    id: 9,
    name: "Blastoise",
    type: "Water",
    hp: 79,
    image: "https://img.pokemondb.net/artwork/blastoise.jpg"
  },
  {
    id: 10,
    name: "Caterpie",
    type: "Bug",
    hp: 45,
    image: "https://img.pokemondb.net/artwork/caterpie.jpg"
  },
  {
    id: 106,
    name: "Hitmonlee",
    type: "Unknown",
    hp: 86,
    image: "https://img.pokemondb.net/artwork/hitmonlee.jpg"
  },
  {
    id: 107,
    name: "Hitmonchan",
    type: "Unknown",
    hp: 87,
    image: "https://img.pokemondb.net/artwork/hitmonchan.jpg"
  },
  {
    id: 108,
    name: "Lickitung",
    type: "Unknown",
    hp: 88,
    image: "https://img.pokemondb.net/artwork/lickitung.jpg"
  },
  {
    id: 109,
    name: "Koffing",
    type: "Unknown",
    hp: 89,
    image: "https://img.pokemondb.net/artwork/koffing.jpg"
  },
  {
    id: 110,
    name: "Weezing",
    type: "Unknown",
    hp: 90,
    image: "https://img.pokemondb.net/artwork/weezing.jpg"
  },
  {
    id: 111,
    name: "Rhyhorn",
    type: "Unknown",
    hp: 91,
    image: "https://img.pokemondb.net/artwork/rhyhorn.jpg"
  },
  {
    id: 112,
    name: "Rhydon",
    type: "Unknown",
    hp: 92,
    image: "https://img.pokemondb.net/artwork/rhydon.jpg"
  },
  {
    id: 113,
    name: "Chansey",
    type: "Unknown",
    hp: 93,
    image: "https://img.pokemondb.net/artwork/chansey.jpg"
  },
  {
    id: 114,
    name: "Tangela",
    type: "Unknown",
    hp: 94,
    image: "https://img.pokemondb.net/artwork/tangela.jpg"
  },
  {
    id: 115,
    name: "Kangaskhan",
    type: "Unknown",
    hp: 95,
    image: "https://img.pokemondb.net/artwork/kangaskhan.jpg"
  },
  {
    id: 116,
    name: "Horsea",
    type: "Unknown",
    hp: 96,
    image: "https://img.pokemondb.net/artwork/horsea.jpg"
  },
  {
    id: 117,
    name: "Seadra",
    type: "Unknown",
    hp: 97,
    image: "https://img.pokemondb.net/artwork/seadra.jpg"
  },
  {
    id: 118,
    name: "Goldeen",
    type: "Unknown",
    hp: 98,
    image: "https://img.pokemondb.net/artwork/goldeen.jpg"
  },
  {
    id: 119,
    name: "Seaking",
    type: "Unknown",
    hp: 99,
    image: "https://img.pokemondb.net/artwork/seaking.jpg"
  },
  {
    id: 120,
    name: "Staryu",
    type: "Unknown",
    hp: 40,
    image: "https://img.pokemondb.net/artwork/staryu.jpg"
  },
  {
    id: 121,
    name: "Starmie",
    type: "Unknown",
    hp: 41,
    image: "https://img.pokemondb.net/artwork/starmie.jpg"
  },
  {
    id: 122,
    name: "Mr. Mime",
    type: "Unknown",
    hp: 42,
    image: "https://img.pokemondb.net/artwork/mr-mime.jpg"
  },
  {
    id: 123,
    name: "Scyther",
    type: "Unknown",
    hp: 43,
    image: "https://img.pokemondb.net/artwork/scyther.jpg"
  },
  {
    id: 124,
    name: "Jynx",
    type: "Unknown",
    hp: 44,
    image: "https://img.pokemondb.net/artwork/jynx.jpg"
  },
  {
    id: 125,
    name: "Electabuzz",
    type: "Unknown",
    hp: 45,
    image: "https://img.pokemondb.net/artwork/electabuzz.jpg"
  },
  {
    id: 126,
    name: "Magmar",
    type: "Unknown",
    hp: 46,
    image: "https://img.pokemondb.net/artwork/magmar.jpg"
  },
  {
    id: 127,
    name: "Pinsir",
    type: "Unknown",
    hp: 47,
    image: "https://img.pokemondb.net/artwork/pinsir.jpg"
  },
  {
    id: 128,
    name: "Tauros",
    type: "Unknown",
    hp: 48,
    image: "https://img.pokemondb.net/artwork/tauros.jpg"
  },
  {
    id: 129,
    name: "Magikarp",
    type: "Unknown",
    hp: 49,
    image: "https://img.pokemondb.net/artwork/magikarp.jpg"
  },
  {
    id: 130,
    name: "Gyarados",
    type: "Unknown",
    hp: 50,
    image: "https://img.pokemondb.net/artwork/gyarados.jpg"
  },
  {
    id: 131,
    name: "Lapras",
    type: "Unknown",
    hp: 51,
    image: "https://img.pokemondb.net/artwork/lapras.jpg"
  },
  {
    id: 132,
    name: "Ditto",
    type: "Unknown",
    hp: 52,
    image: "https://img.pokemondb.net/artwork/ditto.jpg"
  },
  {
    id: 133,
    name: "Eevee",
    type: "Unknown",
    hp: 53,
    image: "https://img.pokemondb.net/artwork/eevee.jpg"
  },
  {
    id: 134,
    name: "Vaporeon",
    type: "Unknown",
    hp: 54,
    image: "https://img.pokemondb.net/artwork/vaporeon.jpg"
  },
  {
    id: 135,
    name: "Jolteon",
    type: "Unknown",
    hp: 55,
    image: "https://img.pokemondb.net/artwork/jolteon.jpg"
  },
  {
    id: 136,
    name: "Flareon",
    type: "Unknown",
    hp: 56,
    image: "https://img.pokemondb.net/artwork/flareon.jpg"
  },
  {
    id: 137,
    name: "Porygon",
    type: "Unknown",
    hp: 57,
    image: "https://img.pokemondb.net/artwork/porygon.jpg"
  },
  {
    id: 138,
    name: "Omanyte",
    type: "Unknown",
    hp: 58,
    image: "https://img.pokemondb.net/artwork/omanyte.jpg"
  },
  {
    id: 139,
    name: "Omastar",
    type: "Unknown",
    hp: 59,
    image: "https://img.pokemondb.net/artwork/omastar.jpg"
  },
  {
    id: 140,
    name: "Kabuto",
    type: "Unknown",
    hp: 60,
    image: "https://img.pokemondb.net/artwork/kabuto.jpg"
  },
  {
    id: 141,
    name: "Kabutops",
    type: "Unknown",
    hp: 61,
    image: "https://img.pokemondb.net/artwork/kabutops.jpg"
  },
  {
    id: 142,
    name: "Aerodactyl",
    type: "Unknown",
    hp: 62,
    image: "https://img.pokemondb.net/artwork/aerodactyl.jpg"
  },
  {
    id: 143,
    name: "Snorlax",
    type: "Unknown",
    hp: 63,
    image: "https://img.pokemondb.net/artwork/snorlax.jpg"
  },
  {
    id: 144,
    name: "Articuno",
    type: "Unknown",
    hp: 64,
    image: "https://img.pokemondb.net/artwork/articuno.jpg"
  },
  {
    id: 145,
    name: "Zapdos",
    type: "Unknown",
    hp: 65,
    image: "https://img.pokemondb.net/artwork/zapdos.jpg"
  },
  {
    id: 146,
    name: "Moltres",
    type: "Unknown",
    hp: 66,
    image: "https://img.pokemondb.net/artwork/moltres.jpg"
  },
  {
    id: 147,
    name: "Dratini",
    type: "Unknown",
    hp: 67,
    image: "https://img.pokemondb.net/artwork/dratini.jpg"
  },
  {
    id: 148,
    name: "Dragonair",
    type: "Unknown",
    hp: 68,
    image: "https://img.pokemondb.net/artwork/dragonair.jpg"
  },
  {
    id: 149,
    name: "Dragonite",
    type: "Unknown",
    hp: 69,
    image: "https://img.pokemondb.net/artwork/dragonite.jpg"
  },
  {
    id: 150,
    name: "Mewtwo",
    type: "Unknown",
    hp: 70,
    image: "https://img.pokemondb.net/artwork/mewtwo.jpg"
  },
  {
    id: 151,
    name: "Mew",
    type: "Unknown",
    hp: 71,
    image: "https://img.pokemondb.net/artwork/mew.jpg"
  }
];

export default cards;
