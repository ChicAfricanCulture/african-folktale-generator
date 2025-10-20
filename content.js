// Holiday list
const holidays = [
  "Eid al-Fitr",
  "Eid al-Adha",
  "Human Rights Day",
  "Rosh Hashanah",
  "Diwali",
  "Meskel",
  "Christmas",
  "New Year's",
  "Easter",
  "New Yam Festival",
  "Boxing Day"
];

// Region settings with poetic imagery
const regions = {
  "west": {
    label: "West Africa",
    settings: ["the golden‑sanded shores of Ghana", "the Niger River delta under twilight"],
    characters: ["Ayo", "Kweku", "Nneka", "Tunde"],
    mythFigures: ["Anansi", "Mami Wata", "Eji", "Yemoja"],
    objects: ["a calabash of gold dust", "a faded kente cloth", "a talking drum"]
  },
  "east": {
    label: "East Africa",
    settings: ["the vast Serengeti plains", "the great lakes region misted with dawn"],
    characters: ["Asha", "Juma", "Nuru", "Makena"],
    mythFigures: ["The Hare", "Kalulu", "Zamani spirits"],
    objects: ["a carved wooden lion", "a sun‑warmed stone", "a beaded necklace"]
  },
  "north": {
    label: "North Africa",
    settings: ["the endless Sahara dunes", "the ancient Mediterranean coast"],
    characters: ["Zahra", "Khalid", "Samira", "Omar"],
    mythFigures: ["Djinn of the Desert", "The Old Magi"],
    objects: ["a silver scimitar", "a desert rose", "a scroll sealed with wax"]
  },
  "south": {
    label: "South Africa",
    settings: ["the dramatic Drakensberg mountains", "the vibrant Highveld at dusk"],
    characters: ["Thabo", "Lerato", "Zanele", "Sipho"],
    mythFigures: ["Modjadji the Rain Queen", "Tokoloshe", "Sangoma Elder"],
    objects: ["a rainmaker’s staff", "a beadwork sash", "a clay pot steaming with dreams"]
  },
  "central": {
    label: "Central Africa",
    settings: ["the dense Congo rainforest", "the mighty Congo River basin"],
    characters: ["Mbali", "Kazi", "Etienne", "Nia"],
    mythFigures: ["The Forest Spirit", "Leopard Woman", "Ancient Elder"],
    objects: ["a sacred vine", "a mask of fireflies", "a storyteller’s flute"]
  },
  "madagascar": {
    label: "Madagascar (Islands)",
    settings: ["the baobab forests shimmering in moonlight", "the rugged highlands kissed by morning mist"],
    characters: ["Rivo", "Soa", "Tahina", "Nomena"],
    mythFigures: ["The Lamba Weaver", "The Sea Serpent", "The Island Whisperer"],
    objects: ["a talisman of seashells", "a ceremonial lamba", "a map inked on bark"]
  }
};

const themes = {
  kindness: {
    proverbs: [
      "A kind heart gathers friends like a drum gathers dancers.",
      "Give freely, and the river of fortune will never dry."
    ],
    conflicts: [
      "a starving stranger at the gates",
      "a sacred object lost in the dark",
      "a rival in need during the feast"
    ]
  },
  wisdom: {
    proverbs: [
      "Wisdom is the shield of the weak.",
      "Only the listening ear hears the ancestors."
    ],
    conflicts: [
      "a test of truth in the market square",
      "a mysterious riddle from a spirit",
      "a dispute over who holds the ancient memory"
    ]
  },
  belonging: {
    proverbs: [
      "Even the lone tree leans toward the forest.",
      "Where your story is told, your soul is home."
    ],
    conflicts: [
      "a child seeking a name",
      "a return to the forgotten village",
      "a traveler who has forgotten their language"
    ]
  }
};

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function generateStory(holiday, regionKey, themeKey) {
  const region = regions[regionKey];
  const theme = themes[themeKey];

  const setting = getRandom(region.settings);
  const character = getRandom(region.characters);
  const myth = getRandom(region.mythFigures);
  const object = getRandom(region.objects);
  const conflict = getRandom(theme.conflicts);
  const proverb = getRandom(theme.proverbs);

  return `
    <p><strong>During ${holiday}</strong> in <em>${region.label}</em>, among ${setting}, lived ${character}, 
    who carried with them ${object}—a gift passed down like a whisper.</p>

    <p>But this was no ordinary celebration. ${character} faced ${conflict}, and the winds of the ancestors grew still. 
    Then appeared <strong>${myth}</strong>, not with anger, but with a question: “What will you give when giving costs everything?”</p>

    <p>The night echoed with the clatter of decisions. ${character} chose heart over fear.</p>

    <p><strong>Moral:</strong> "${proverb}"</p>
  `;
}
