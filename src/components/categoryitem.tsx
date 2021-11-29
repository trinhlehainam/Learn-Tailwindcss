import React from 'react'
import cx from 'classnames'

import SetPage_t from '../type/setpage'

type Props = {
    page: number,
    setPage: SetPage_t,
    isSelected: boolean
};

const CategoryItem: React.FC<Props> = ({
    page, setPage, isSelected, children
}) => (
    <div
        onClick = {() => {setPage([page, 0])}}
        className={cx(
            {
                "text-white border-white": isSelected,
                "text-zelda-lightGray border-zelda-lightGray": !isSelected
            },
            "border-b cursor-pointer"
        )}
    >
        {children}
    </div>
);

export default CategoryItem;
