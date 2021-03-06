import React from 'react'

type Props = {
    classname: string
};

const SvgComponent: React.FC<Props> = ({classname}) => {
    return (
        <svg width="44" height="46" viewBox="0 0 44 46" fill="none" className={classname}>
            <path d="M16.5 35L6 45.5L0 39.5L10 29.5L2 21.5L6 17.5L26.5 38L23 41.5L16.5 35Z"/>
            <path d="M33.5 2L13.5 22L17.5 25L26.5 16L29 18.5L19.5 28L22 31.5L43.5 10V0L33.5 2Z"/>
        </svg>
    );
};

export default SvgComponent;