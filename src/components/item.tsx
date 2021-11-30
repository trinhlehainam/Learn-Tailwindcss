import React from 'react'
import cx from 'classnames'

import ItemsConext from '../context/itemcontext'
import TriangleBox from './trianglebox'
import ModalItem from './modalitem';

type Props = {
    name: string,
    icon: string,
    value: string,
    index: number
};

const Item: React.FC<Props> = ({name, icon, value, index}) => {
    const { 
        itemSelected, 
        setItemSelected,
        toggleModal,
        isModelOpened,
    } = React.useContext(ItemsConext);

    const handleClick = () => {
        setItemSelected && setItemSelected(index);
        toggleModal && toggleModal(!isModelOpened);
    }

    const isSelected = itemSelected === index;

    return (
    <div
        onClick={handleClick}
        className={cx(
            {
                "shadow-yellow border-zelda-softYellow border-2": isSelected,
            },
            "relative w-20 h-20 bg-black border border-zelda-darkGray cursor-pointer"
        )}
    >
        {isSelected && <TriangleBox />}
        {icon && <img alt={name} src={icon} width="96" height="96"/>}
        {value && (
            <div className="z-0 bg-black -mx-1 -my-1 text-sm text-white absolute bottom-0 right-0 border border-zelda-darkGray px-2">
            {value}
            </div>)
        }
        {isModelOpened && isSelected && <ModalItem />}
    </div>
    );
};

export default Item;
