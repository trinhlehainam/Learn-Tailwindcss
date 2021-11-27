import React from 'react'
import Item from './item'
import {ItemType} from '../data/items.type'

type Props = {
    items: ItemType[];
};

const ItemGrid: React.FC<Props> = ({items}) => {
    return (
        <div className="grid grid-col-3 md:grid-cols-5 gap-6">
            {items.map((item, index) => (
                <Item
                    key={`${item.name}-${index}`}
                    icon={item.icon}
                    name={item.name}
                    value={item.value}
                />
            ))};
        </div>
    );
};

export default ItemGrid;
