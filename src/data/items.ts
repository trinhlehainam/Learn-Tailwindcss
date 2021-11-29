import { ItemCategoriesType, ItemsMainCategoriesType } from "./items.type";

export default {
    [ItemsMainCategoriesType.WEAPONS]: [
    {
      name: "Staff 2",
      category: ItemCategoriesType.WEAPON,
      icon: process.env.PUBLIC_URL + "items/weapons/2.png",
      value: "30",
      description:
        "The Legendary sword that seals the darkness. Its blade gleams with a sacred luster that can oppose the Calamity. Only a hero chosen by the sword itself may wield it.",
    },
    {
      name: "Staff 4",
      category: ItemCategoriesType.WEAPON,
      icon: process.env.PUBLIC_URL + "items/weapons/4.png",
      value: "30",
      description:
        "The Legendary sword that seals the darkness. Its blade gleams with a sacred luster that can oppose the Calamity. Only a hero chosen by the sword itself may wield it.",
    },
    {
      name: "Staff 6",
      category: ItemCategoriesType.WEAPON,
      icon: process.env.PUBLIC_URL + "items/weapons/6.png",
      value: "30",
      description:
        "The Legendary sword that seals the darkness. Its blade gleams with a sacred luster that can oppose the Calamity. Only a hero chosen by the sword itself may wield it.",
    },
    {
      name: "Staff 8",
      category: ItemCategoriesType.WEAPON,
      icon: process.env.PUBLIC_URL + "items/weapons/8.png",
      value: "30",
      description:
        "The Legendary sword that seals the darkness. Its blade gleams with a sacred luster that can oppose the Calamity. Only a hero chosen by the sword itself may wield it.",
    },
    {
      name: "Staff 10",
      category: ItemCategoriesType.WEAPON,
      icon: process.env.PUBLIC_URL + "items/weapons/10.png",
      value: "30",
      description:
        "The Legendary sword that seals the darkness. Its blade gleams with a sacred luster that can oppose the Calamity. Only a hero chosen by the sword itself may wield it.",
    },
  ],
  [ItemsMainCategoriesType.SHIELDS]: [
    {
      name: "Wooden Shield",
      category: ItemCategoriesType.SHIELD,
      icon:
        process.env.PUBLIC_URL + "items/shields/BotW_Wooden_Shield_Icon.png",
      value: "2",
      description:
        "This lightweight, simple shield is ideal for less-experienced fighters. It can withstand light attacks, but blocking stronger blows is not recommended.",
    },
    {
      name: "BotW Traveler's Shield",
      category: ItemCategoriesType.SHIELD,
      icon:
        process.env.PUBLIC_URL +
        "items/shields/BotW_Traveler's_Shield_Icon.png",
      value: "4",
      description:
        "A sturdy shield loved by many an adventurer. It is made of animal hide and sturdy wood and is best suited to defending against weak monsters or animals.",
    },
    {
      name: "BotW Gerudo Shield",
      category: ItemCategoriesType.SHIELD,
      isNew: true,
      icon:
        process.env.PUBLIC_URL + "items/shields/BotW_Gerudo_Shield_Icon.png",
      value: "20",
      description:
        "The design of this metal shield has changed over time to match the Gerudo's sword-and-shield fighting style. It's favored by soldiers and travelers alike.",
    },
    {
      name: "BotW Ancient Shield",
      category: ItemCategoriesType.SHIELD,
      icon:
        process.env.PUBLIC_URL + "items/shields/BotW_Ancient_Shield_Icon.png",
      value: "70",
      description:
        "This shield was made using ancient Sheikah technology. Its surface glows blue when raised in defense. Enhanced functionality allows it to deflect Guardian beams.",
    },
  ],
  [ItemsMainCategoriesType.ARMORS]: [
    {
      name: "Red Armor",
      category: ItemCategoriesType.HELM,
      icon: process.env.PUBLIC_URL + "items/armors/1.png",
      value: "3",
      bonus: "swimming",
      description:
        "Zora headgear made from dragon scales. Increases swimming speed and allows you to use Spin Attack.",
    },
    {
      name: "Green Armor",
      category: ItemCategoriesType.HELM,
      icon: process.env.PUBLIC_URL + "items/armors/3.png",
      value: "3",
      bonus: "swimming",
      description:
        "Zora headgear made from dragon scales. Increases swimming speed and allows you to use Spin Attack.",
    },
    {
      name: "Black Armor",
      category: ItemCategoriesType.HELM,
      icon: process.env.PUBLIC_URL + "items/armors/5.png",
      value: "3",
      bonus: "swimming",
      description:
        "Zora headgear made from dragon scales. Increases swimming speed and allows you to use Spin Attack.",
    },
    {
      name: "Brown Armor",
      category: ItemCategoriesType.HELM,
      icon: process.env.PUBLIC_URL + "items/armors/7.png",
      value: "3",
      bonus: "swimming",
      description:
        "Zora headgear made from dragon scales. Increases swimming speed and allows you to use Spin Attack.",
    },
    {
      name: "God Armor",
      category: ItemCategoriesType.HELM,
      icon: process.env.PUBLIC_URL + "items/armors/9.png",
      value: "3",
      bonus: "swimming",
      description:
        "Zora headgear made from dragon scales. Increases swimming speed and allows you to use Spin Attack.",
    },
  ],
  [ItemsMainCategoriesType.SKILLS]: [
    {
      name: "Slash",
      category: ItemCategoriesType.GREAVE,
      isNew: true,
      icon:
        process.env.PUBLIC_URL + "items/skills/skill_icon_00.png",
      value: "3",
      bonus: "normal",
      description:
        "Traditional dress trousers of Hyrule. The plush fabric makes these trousers quite comfortable, and their high durability makes them ideal for travelers.",
    },
    {
      name: "Shield Up",
      category: ItemCategoriesType.GREAVE,
      isNew: true,
      icon:
        process.env.PUBLIC_URL + "items/skills/skill_icon_01.png",
      value: "3",
      bonus: "normal",
      description:
        "Traditional dress trousers of Hyrule. The plush fabric makes these trousers quite comfortable, and their high durability makes them ideal for travelers.",
    },
    {
      name: "Streng up",
      category: ItemCategoriesType.GREAVE,
      isNew: true,
      icon:
        process.env.PUBLIC_URL + "items/skills/skill_icon_02.png",
      value: "3",
      bonus: "normal",
      description:
        "Traditional dress trousers of Hyrule. The plush fabric makes these trousers quite comfortable, and their high durability makes them ideal for travelers.",
    },
    {
      name: "Fire",
      category: ItemCategoriesType.GREAVE,
      isNew: true,
      icon:
        process.env.PUBLIC_URL + "items/skills/skill_icon_06.png",
      value: "3",
      bonus: "normal",
      description:
        "Traditional dress trousers of Hyrule. The plush fabric makes these trousers quite comfortable, and their high durability makes them ideal for travelers.",
    },
    {
      name: "Ice",
      category: ItemCategoriesType.GREAVE,
      isNew: true,
      icon:
        process.env.PUBLIC_URL + "items/skills/skill_icon_11.png",
      value: "3",
      bonus: "normal",
      description:
        "Traditional dress trousers of Hyrule. The plush fabric makes these trousers quite comfortable, and their high durability makes them ideal for travelers.",
    },
    {
      name: "Toxic",
      category: ItemCategoriesType.GREAVE,
      isNew: true,
      icon:
        process.env.PUBLIC_URL + "items/skills/skill_icon_16.png",
      value: "3",
      bonus: "normal",
      description:
        "Traditional dress trousers of Hyrule. The plush fabric makes these trousers quite comfortable, and their high durability makes them ideal for travelers.",
    },
  ]
};
