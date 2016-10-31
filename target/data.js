'use strict';

var AppData = {};

AppData.divinity = {
  divinePowerDomains: [
    {
      "titleJa": "愛",
      "title": "Love",
      "weight": 0,
      "alignment": 1
    },
    {
      "titleJa": "欺き",
      "title": "Trickery",
      "weight": 0,
      "alignment": 0
    },
    {
      "titleJa": "嵐",
      "title": "Storm",
      "weight": 1,
      "alignment": 0
    },
    {
      "titleJa": "アンデッド",
      "title": "Undeath",
      "weight": 0,
      "alignment": -1
    },
    {
      "titleJa": "海",
      "title": "Sea",
      "weight": 0,
      "alignment": 0
    },
    {
      "titleJa": "希望",
      "title": "Hope",
      "weight": 0,
      "alignment": 1
    },
    {
      "titleJa": "狂気",
      "title": "Madness",
      "weight": 1,
      "alignment": -1
    },
    {
      "titleJa": "苦痛",
      "title": "Torment",
      "weight": 0,
      "alignment": -1
    },
    {
      "titleJa": "幸運",
      "title": "Luck",
      "weight": 0,
      "alignment": 0
    },
    {
      "titleJa": "裁き",
      "title": "Justice",
      "weight": 1,
      "alignment": 1
    },
    {
      "titleJa": "死",
      "title": "Death",
      "weight": 1,
      "alignment": 0
    },
    {
      "titleJa": "自然",
      "title": "Wilderness",
      "weight": 1,
      "alignment": 0
    },
    {
      "titleJa": "自由",
      "title": "Freedom",
      "weight": 0,
      "alignment": 0
    },
    {
      "titleJa": "宿命",
      "title": "Fate",
      "weight": 0,
      "alignment": 0
    },
    {
      "titleJa": "生命",
      "title": "Life",
      "weight": 0,
      "alignment": 1
    },
    {
      "titleJa": "専制",
      "title": "Tyranny",
      "weight": 1,
      "alignment": -1
    },
    {
      "titleJa": "戦争",
      "title": "War",
      "weight": 1,
      "alignment": 0
    },
    {
      "titleJa": "創造",
      "title": "Creation",
      "weight": 0,
      "alignment": 0
    },
    {
      "titleJa": "太陽",
      "title": "Sun",
      "weight": 1,
      "alignment": 1
    },
    {
      "titleJa": "地",
      "title": "Earth",
      "weight": 1,
      "alignment": 0
    },
    {
      "titleJa": "力",
      "title": "Strength",
      "weight": 1,
      "alignment": 0
    },
    {
      "titleJa": "知識",
      "title": "Knowledge",
      "weight": 1,
      "alignment": 0
    },
    {
      "titleJa": "月",
      "title": "Moon",
      "weight": 1,
      "alignment": 0
    },
    {
      "titleJa": "毒",
      "title": "Poison",
      "weight": 0,
      "alignment": -1
    },
    {
      "titleJa": "破壊",
      "title": "Destruction",
      "weight": 1,
      "alignment": -1
    },
    {
      "titleJa": "秘術",
      "title": "Arcana",
      "weight": 1,
      "alignment": 0
    },
    {
      "titleJa": "復讐",
      "title": "Vengeance",
      "weight": 0,
      "alignment": 0
    },
    {
      "titleJa": "冬",
      "title": "Winter",
      "weight": 0,
      "alignment": 0
    },
    {
      "titleJa": "不和",
      "title": "Strife",
      "weight": 0,
      "alignment": -1
    },
    {
      "titleJa": "文明",
      "title": "Civilization",
      "weight": 1,
      "alignment": 1
    },
    {
      "titleJa": "変化",
      "title": "Change",
      "weight": 0,
      "alignment": 0
    },
    {
      "titleJa": "防御",
      "title": "Protection",
      "weight": 0,
      "alignment": 1
    },
    {
      "titleJa": "闇",
      "title": "Darkness",
      "weight": 1,
      "alignment": 0
    },
    {
      "titleJa": "技",
      "title": "Skill",
      "weight": 0,
      "alignment": 0
    }
  ],
  acceptableNarrativeDomains: [
    {
      "narrative": "Abyss",
      "narrativeJa": "アビス",
      "domain": "Destruction",
      "domainJa": "破壊",
      "weight": 1,
      "alignment": -1
    },
    {
      "narrative": "Air",
      "narrativeJa": "風",
      "domain": "Freedom",
      "domainJa": "自由",
      "weight": 1,
      "alignment": 0
    },
    {
      "narrative": "Depp one",
      "narrativeJa": "深きもの",
      "domain": "",
      "domainJa": "",
      "weight": 0,
      "alignment": -1
    },
    {
      "narrative": "Dragon",
      "narrativeJa": "ドラゴン",
      "domain": "Strength",
      "domainJa": "力",
      "weight": 1,
      "alignment": 0
    },
    {
      "narrative": "Dwarf",
      "narrativeJa": "ドワーフ",
      "domain": "Earth",
      "domainJa": "地",
      "weight": 1,
      "alignment": 1
    },
    {
      "narrative": "Fey",
      "narrativeJa": "フェイ",
      "domain": "Arcana",
      "domainJa": "秘術",
      "weight": 1,
      "alignment": 1
    },
    {
      "narrative": "Fire",
      "narrativeJa": "火",
      "domain": "Creation",
      "domainJa": "創造",
      "weight": 1,
      "alignment": 0
    },
    {
      "narrative": "Giant",
      "narrativeJa": "ジャイアント",
      "domain": "War",
      "domainJa": "戦争",
      "weight": 1,
      "alignment": 0
    },
    {
      "narrative": "Gnoll",
      "narrativeJa": "ノール",
      "domain": "",
      "domainJa": "",
      "weight": 0,
      "alignment": -1
    },
    {
      "narrative": "Goblin",
      "narrativeJa": "ゴブリン",
      "domain": "",
      "domainJa": "",
      "weight": 0,
      "alignment": -1
    },
    {
      "narrative": "Hell",
      "narrativeJa": "地獄",
      "domain": "Tyranny",
      "domainJa": "専制",
      "weight": 1,
      "alignment": 0
    },
    {
      "narrative": "Kobold",
      "narrativeJa": "コボルド",
      "domain": "",
      "domainJa": "",
      "weight": 0,
      "alignment": -1
    },
    {
      "narrative": "Minotaur",
      "narrativeJa": "ミノタウロス",
      "domain": "",
      "domainJa": "",
      "weight": 0,
      "alignment": -1
    },
    {
      "narrative": "Snake",
      "narrativeJa": "蛇",
      "domain": "",
      "domainJa": "",
      "weight": 0,
      "alignment": 0
    },
    {
      "narrative": "Water",
      "narrativeJa": "水",
      "domain": "Sea",
      "domainJa": "海",
      "weight": 1,
      "alignment": 0
    }
  ]
};
