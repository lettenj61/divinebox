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
      "narrative": "Deep one",
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
      "domain": "Poison",
      "domainJa": "毒",
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

AppData.names = {
  supernatural: [
    {
      "name": "Asradorn",
      "nameJa": "アスラドーン"
    },
    {
      "name": "Bearrid",
      "nameJa": "ビアリッド"
    },
    {
      "name": "Caragonn",
      "nameJa": "カラゴン"
    },
    {
      "name": "Cythe",
      "nameJa": "キューズ"
    },
    {
      "name": "Drelgan",
      "nameJa": "ドレルガン"
    },
    {
      "name": "Dwemworth",
      "nameJa": "ドウェムワース"
    },
    {
      "name": "Ea",
      "nameJa": "エア"
    },
    {
      "name": "Eugilith",
      "nameJa": "ユーギリス"
    },
    {
      "name": "Frandiana",
      "nameJa": "フランディアナ"
    },
    {
      "name": "Ghorbelle",
      "nameJa": "ゴーベル"
    },
    {
      "name": "Halmacarse",
      "nameJa": "ハルマカース"
    },
    {
      "name": "Hithelion",
      "nameJa": "ハイテリオン"
    },
    {
      "name": "Idovald",
      "nameJa": "イドヴァルド"
    },
    {
      "name": "Izroth",
      "nameJa": "イズロス"
    },
    {
      "name": "Jurrath",
      "nameJa": "ジュラス"
    },
    {
      "name": "Krossoth",
      "nameJa": "クロッソス"
    },
    {
      "name": "Laphish",
      "nameJa": "ラフィシュ"
    },
    {
      "name": "Madhdar",
      "nameJa": "マズダー"
    },
    {
      "name": "Mortgha",
      "nameJa": "モルトガ"
    },
    {
      "name": "Neanberda",
      "nameJa": "ネアンベルダ"
    },
    {
      "name": "Nicheus",
      "nameJa": "ニケウス"
    },
    {
      "name": "Orias",
      "nameJa": "オリアス"
    },
    {
      "name": "Orvandal",
      "nameJa": "オルヴァンダル"
    },
    {
      "name": "Proculius",
      "nameJa": "プロクリウス"
    },
    {
      "name": "Quazzam",
      "nameJa": "クアザム"
    },
    {
      "name": "Rhosaria",
      "nameJa": "ローサリア"
    },
    {
      "name": "Sunridder",
      "nameJa": "サンリダー"
    },
    {
      "name": "Thearo",
      "nameJa": "テアロ"
    },
    {
      "name": "Ulgarth",
      "nameJa": "ウルガース"
    },
    {
      "name": "Undaven",
      "nameJa": "アンダヴェン"
    },
    {
      "name": "Veerdite",
      "nameJa": "ヴェーアダイト"
    },
    {
      "name": "Voandark",
      "nameJa": "ヴォーンダーク"
    },
    {
      "name": "Weghonia",
      "nameJa": "ウェゴニア"
    },
    {
      "name": "Xennahya",
      "nameJa": "ゼンナーヤ"
    },
    {
      "name": "Xorkkus",
      "nameJa": "ゾークス"
    },
    {
      "name": "Zeph",
      "nameJa": "ゼフ"
    },
    {
      "name": "Aggshim",
      "nameJa": "アグシム"
    },
    {
      "name": "Evun Furreth",
      "nameJa": "イヴン・フューレス"
    },
    {
      "name": "Geardrado",
      "nameJa": "ギアドラド"
    },
    {
      "name": "Sahbera",
      "nameJa": "サーベラ"
    },
    {
      "name": "Shivrekk",
      "nameJa": "シヴレック"
    },
    {
      "name": "Dan Fadarghn ",
      "nameJa": "ダン・ファダルーン"
    },
    {
      "name": "Chulbeth",
      "nameJa": "チュルベス"
    },
    {
      "name": "Diorn",
      "nameJa": "ディオーン"
    },
    {
      "name": "Temperrel",
      "nameJa": "テンペレル"
    },
    {
      "name": "Draishan",
      "nameJa": "ドレイシャン"
    },
    {
      "name": "Nogor Haramon",
      "nameJa": "ノゴル・ハラモン"
    },
    {
      "name": "Harrexus",
      "nameJa": "ハレクサス"
    },
    {
      "name": "Fulvaading",
      "nameJa": "フルヴァディング"
    },
    {
      "name": "Mudo Wallmar",
      "nameJa": "ムド・ウォルマル"
    },
    {
      "name": "Lephei",
      "nameJa": "レフェイ"
    },
    {
      "name": "Roggran",
      "nameJa": "ログラン"
    },
    {
      "name": "Atrasinha",
      "nameJa": "アトラシンナ"
    },
    {
      "name": "Vikana",
      "nameJa": "ヴィカーナ"
    },
    {
      "name": "Khuvara",
      "nameJa": "クヴァラ"
    },
    {
      "name": "Grrelni",
      "nameJa": "グレルニ"
    },
    {
      "name": "Sallyvat",
      "nameJa": "サリーヴァット"
    },
    {
      "name": "Schunnaji",
      "nameJa": "シューナジ"
    },
    {
      "name": "Mahadra",
      "nameJa": "マハドラ"
    },
    {
      "name": "Melladaya",
      "nameJa": "メラダーヤ"
    }
  ]
};
