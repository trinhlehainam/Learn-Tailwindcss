import React from 'react'

type Props = {
    classname: string
};

const SvgComponent: React.FC<Props> = ({classname}) => {
    return (
        <svg width="512" height="512" viewBox="0 0 512 512" className={classname}>
            <g transform="translate(0,0)">
                <path d="M240 16 112 272l72.8 53 55-37.1L192 256zm32 0 48 240-144 96-64 48 144 96 144-96-64-48-8.2-5.4-56.5 41.2L288 400l-32 32-32-32 176-128z">
                </path>
            </g>
        </svg>
    );
};

export default SvgComponent;
