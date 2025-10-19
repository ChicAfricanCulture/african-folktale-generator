// Holiday list
const holidays = [
  "Christmas", 
  "New Year's", 
  "Independence Day", 
  "Eid al-Fitr", 
  "Africa Day",
  "Day of the African Child",
  "Halloween"
];

// Culture & content pools
const cultures = {
  "yoruba-lagos": {
    name: "Yoruba (Lagos, Nigeria)",
    mythFigures: ["Oshun", "Shango", "Babalawo Ajala"],
    characters: ["Adewale", "Bimpe", "Sade", "Obafemi"],
    settings: [
      "the bustling Marina market",
      "under the Oba’s palace verandah",
      "along the Third Mainland Bridge at dusk"
    ],
    objects: ["a beaded calabash", "Adire cloth", "a brass gong"]
  },
  "akan-kumasi": {
    name: "Akan (Kumasi, Ghana)",
    mythFigures: ["Anansi the Spider", "Nyame the Sky God", "Bastiat the wise tortoise"],
    characters: ["Kofi", "Esi", "Yaw", "Ama"],
    settings: [
      "the golden clan-palace courtyard",
      "beneath the sacred mango tree",
      "in Kumasi market at dawn"
    ],
    objects: ["a carved stool", "woven kente cloth", "a horn of plenty"]
  }
};

// Themes and story elements
const themes = {
  kindness: {
    proverbs: [
      "A kind heart gathers friends like a drum gathers dancers.",
      "Give freely, and the river of fortune will never dry."
    ],
    conflicts: [
      "a lost gift",
      "a starving neighbor",
      "a broken promise"
    ]
  },
  community: {
    proverbs: [
      "If you want to go fast, go alone. If you want to go far, go together.",
      "It takes a village to raise a child."
    ],
    conflicts: [
      "a village feast delayed",
      "a communal drum stolen",
      "a drought that tests everyone"
    ]
  },
  wisdom: {
    proverbs: [
      "Only a fool tests the depth of a river with no feet.",
      "Wisdom is the shield of the weak."
    ],
    conflicts: [
      "a warrior without foresight",
      "a youth ignoring the elders",
      "a trickster outwitting the strong"
    ]
  }
};

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateStory(holiday, cultureKey, themeKey) {
  const culture = cultures[cultureKey];
  const theme = themes[themeKey];

  const setting = getRandom(culture.settings);
  const character = getRandom(culture.characters);
  const myth = getRandom(culture.mythFigures);
  const object = getRandom(culture.objects);
  const conflict = getRandom(theme.conflicts);
  const proverb = getRandom(theme.proverbs);

  return `
    <p>During <strong>${holiday}</strong> in ${culture.name}, in ${setting}, 
    a person named <strong>${character}</strong> held ${object} tightly.</p>
    
    <p>They were trying to resolve ${conflict}, when the spirit <strong>${myth}</strong> appeared and tested their heart.</p>
    
    <p>Through wisdom, courage, and compassion, <strong>${character}</strong> prevailed.</p>
    
    <p><strong>Moral:</strong> "${proverb}"</p>
  `;
}
