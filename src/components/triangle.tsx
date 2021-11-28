import React from 'react'
import {motion} from 'framer-motion'

type Props = {
    animateParams: {
            rotate: number,
            x: [number, number, number],
            y: [number, number, number],
    },
    className: string
};

const Triangle: React.FC<Props> = ({animateParams, className}) => (
    <motion.div
        initial={{x: 0, y: 0, rotate: animateParams.rotate}}
        animate={{
            ...animateParams
        }}
        transition={{
            loop: Infinity,
            ease: "easeIn",
            duration: 1
        }}
        className={className}
    />
);

export default Triangle;
