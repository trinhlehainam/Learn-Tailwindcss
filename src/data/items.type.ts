export enum ItemsMainCategoriesType {
  WEAPONS = "weapons",
  SHIELDS = "shields",
  ARMORS = "armors",
  SKILLS = "skills"
}

export enum ItemCategoriesType {
  WEAPON = "weapon",
  SHIELD = "shield",
  ARMOR = "armor",
  GREAVE = "greave",
  HELM = "helm",
  NONE = "none"
}

export type ItemType = {
  name: string;
  category: ItemCategoriesType;
  icon: string;
  value: string;
  description: string;
  bonus?: string;
  isNew?: boolean;
};

export type ItemsPage = {
  items: ItemType[];
  category: ItemsMainCategoriesType,
  page: number
};
