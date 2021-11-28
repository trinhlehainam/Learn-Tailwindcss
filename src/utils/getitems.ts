import items from '../data/items'
import {
    ItemType,
    ItemsMainCategoriesType,
    ItemCategoriesType
} from '../data/items.type'

const emptyItem: ItemType = {
    name: '',
    icon: '',
    value: '',
    description: '',
    category: ItemCategoriesType.WEAPON
};

const getItems = (
    category = ItemsMainCategoriesType.WEAPONS,
    itemsPerPage = 30
): ItemType[] => {
    const itemGrids = items[category].concat(
        new Array(itemsPerPage - items[category].length).fill(emptyItem)
    );

    return itemGrids;
};

export default getItems;
