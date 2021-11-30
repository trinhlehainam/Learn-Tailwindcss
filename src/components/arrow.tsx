import React from 'react'
import cx from 'classnames'
import { motion } from 'framer-motion';

import SetPage_t from '../type/setpage'

import navigatePage from '../utils/navigatePage';

enum ArrowDirection {
    LEFT =  'left',
    RIGHT = 'right'
};

type Props = {
    currentPage: number,
    direction: ArrowDirection,
    setPage: SetPage_t
    maxPage: number
};

const NavigationArrow: React.FC<Props> = ({currentPage, direction, setPage, maxPage = 3}) => {
    const isLeft = direction ===  ArrowDirection.LEFT;
    const isDisable = (isLeft && currentPage === 0) || (!isLeft && currentPage === maxPage);

    const handleDirection = () => {
        isLeft ? 
        navigatePage(-1, currentPage, setPage) :
        navigatePage(1, currentPage, setPage);
    };

    return (
        <div
        className={cx(
            { "left-0" : isLeft, "right-0": !isLeft},
            "absolute h-full hidden md:flex items-center z-30"
        )}>
            <motion.img
                initial={{rotate: isLeft? -180: 0,}}
                animate={{
                    scale: isDisable ? [1,1,1] : [1, 1.2, 1],
                }}
                transition={{
                    loop: Infinity,
                    ease: "easeIn",
                    duration: 1
                }}
                onClick={handleDirection}
                src="icons/arrow-no-curve.png"
                className={cx({
                    "opacity-50": isDisable,
                    "cursor-pointer": !isDisable,
                }, "h-16")}
            />
        </div>
    );
};

export {ArrowDirection, NavigationArrow};

