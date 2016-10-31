'use strict';

var AppData = {};

AppData.divinity = {
  primalFactors: [
    {
      titleJa: '嵐',
      provides: [0],
      alignment: 0
    },
    {
      titleJa: '狂気',
      provides: [6, 7],
      alignment: 0
    },
    {
      titleJa: '裁き',
      provides: [2, 4],
      alignment: 0
    },
    {
      titleJa: '死',
      provides: [1],
      alignment: 0
    },
    {
      titleJa: '自然',
      provides: [0, 5, 8],
      alignment: 0
    },
    {
      titleJa: '専制',
      provides: [3],
      alignment: -1
    },
    {
      titleJa: '戦争',
      provides: [0, 3],
      alignment: 0
    },
    {
      titleJa: '太陽',
      provides: [4],
      alignment: 1
    },
    {
      titleJa: '地',
      provides: [5],
      alignment: 0
    },
    {
      titleJa: '力',
      provides: [0, 2, 4],
      alignment: 0
    },
    {
      titleJa: '知識',
      provides: [6, 8],
      alignment: 0
    },
    {
      titleJa: '月',
      provides: [7, 8],
      alignment: 0
    },
    {
      titleJa: '破壊',
      provides: [1, 3],
      alignment: -1
    },
    {
      titleJa: '秘術',
      provides: [6, 8],
      alignment: 0
    },
    {
      titleJa: '文明',
      provides: [2, 6],
      alignment: 0
    },
    {
      titleJa: '闇',
      provides: [1, 7],
      alignment: 0
    }
  ],
  narrativeFactors: [
    {
      titleJa: 'フェイ',
      alignment: 0,
      expels: [],
      unmatch: [0, 1, 5, 15]
    },
    {
      titleJa: 'ドワーフ',
      alignment: 0,
      expels: [],
      unmatch: [1, 4, 13]
    },
    {
      titleJa: 'ドラゴン',
      alignment: 0,
      expels: [],
      unmatch: [3, 14]
    },
    {
      titleJa: 'ジャイアント',
      alignment: 0,
      expels: [],
      unmatch: [4, 10, 14]
    },
    {
      titleJa: '地獄',
      alignment: -1,
      expels: [2, 7, 9, 14],
      unmatch: [0, 1, 4, 11]
    },
    {
      titleJa: 'アビス',
      alignment: -1,
      expels: [2, 5, 7, 9, 14],
      unmatch: [4, 10, 11]
    },
    {
      titleJa: '水',
      alignment: 0,
      expels: [8],
      unmatch: [5, 7]
    },
    {
      titleJa: '風',
      alignment: 0,
      expels: [8],
      unmatch: [5, 7]
    },
    {
      titleJa: '火',
      alignment: 0,
      expels: [8],
      unmatch: [5, 7]
    },
  ],
  powerElements: [
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
  ]
};
