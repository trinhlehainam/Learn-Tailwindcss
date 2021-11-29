import React from 'react'

type Props = {
    classname: string
};

const SvgComponent: React.FC<Props> = ({classname}) => {
    return (
        <svg width="36" height="34" viewBox="0 0 36 34" fill="none" className={classname}>
            <path 
            fill-rule="evenodd" 
            clip-rule="evenodd" 
            d="M0.5 9.5L6 15L9.5 11.5L6 34H30L26.5 11.5L30 15L35.5 9.5L26.5 0.5C26.5 0.5 22.6421 7.77614 18.5 7.5C14.6426 7.24284 11.5 0.5 11.5 0.5L0.5 9.5ZM19 13C19 13.5523 18.5523 14 18 14C17.4477 14 17 13.5523 17 13C17 12.4477 17.4477 12 18 12C18.5523 12 19 12.4477 19 13ZM19 18C19 18.5523 18.5523 19 18 19C17.4477 19 17 18.5523 17 18C17 17.4477 17.4477 17 18 17C18.5523 17 19 17.4477 19 18Z"/>
        </svg>
    );
};

export default SvgComponent;
