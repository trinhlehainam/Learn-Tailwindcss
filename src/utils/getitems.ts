import items from '../data/items'
import {
    ItemType,
    ItemsPage,
    ItemsMainCategoriesType,
    ItemCategoriesType
} from '../data/items.type'

const emptyItem: ItemType = {
    name: '',
    icon: '',
    value: '',
    description: '',
    category: ItemCategoriesType.NONE
};

const getItems = (itemsPerPage = 20): Array<ItemsPage> => {
    const itemGrids :Array<ItemsPage> = [];
    for (const key in items) {
        const category = key as ItemsMainCategoriesType;

        const newPage = items[category].concat(
            new Array(itemsPerPage - items[category].length).fill(emptyItem)
        );

        itemGrids.push({
            items: newPage,
            category: category,
            page: 0
        })
    }

    return itemGrids;
};

export default getItems;
