import React from 'react'
import ItemsConext from '../context/itemcontext'
import cx from 'classnames'
import TriangleBox from './trianglebox'

type Props = {
    name: string,
    icon: string,
    value: string,
    index: number
};

const Item: React.FC<Props> = ({name, icon, value, index}) => {
    const { itemSelected, setItemSelected } = React.useContext(ItemsConext);

    const handleClick = () => {
        setItemSelected && setItemSelected(index);
    }

    const isSelected = itemSelected === index;

    return (
    <div
        onClick={handleClick}
        className={cx(
            {
                "shadow-yellow border-zelda-softYellow border-2": isSelected,
            },
            "relative w-20 h-20 bg-black border divide-zelda-darkGray cursor-pointer"
        )}
    >
        {isSelected && <TriangleBox />}
        {value && (
        <div className="z-0 bg-black -mx-1 -my-1 text-sm text-white absolute bottom-0 right-0 border border-zelda-darkGray px-2">
        {value}
        </div>)}
    </div>
    );
};

export default Item;
