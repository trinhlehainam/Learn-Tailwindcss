import React from 'react'

import {ItemsMainCategoriesType} from '../data/items.type'
import SetPage_t from '../type/setpage'

import CategoryItem from './categoryitem'
import Weapon from '../icons/weapon'
import Shield from '../icons/shield'
import Armor from '../icons/armor'
import Skill from '../icons/skill'

type Props = {
    categorySelected: ItemsMainCategoriesType,
    setPage: SetPage_t
};

const CategoryMenu: React.FC<Props> = ({categorySelected, setPage}) => (
    <div className="flex mx-auto mb-6 z-20">
        <CategoryItem
            page={0}
            setPage={setPage}
            isSelected={categorySelected === ItemsMainCategoriesType.WEAPONS}
        >
            <Weapon classname="fill-current h-10 w-16 pb-3 px-4"/>
        </CategoryItem>
        <CategoryItem
            page={1}
            setPage={setPage}
            isSelected={categorySelected === ItemsMainCategoriesType.SHIELDS}
        >
            <Shield classname="fill-current h-10 w-16 pb-3 px-4"/>
        </CategoryItem>
        <CategoryItem
            page={2}
            setPage={setPage}
            isSelected={categorySelected === ItemsMainCategoriesType.ARMORS}
        >
            <Armor classname="fill-current h-10 w-16 pb-3 px-4"/>
        </CategoryItem>
        <CategoryItem
            page={3}
            setPage={setPage}
            isSelected={categorySelected === ItemsMainCategoriesType.SKILLS}
        >
            <Skill classname="fill-current h-10 w-16 pb-3 px-4"/>
        </CategoryItem>
    </div>
);

export default CategoryMenu;
