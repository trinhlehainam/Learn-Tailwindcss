import { RefObject, useEffect } from "react";

function useClickOutside<T extends HTMLElement>(ref: RefObject<T>, callback: Function | undefined) {
    const handleClick = (e: MouseEvent) => {
        if(ref.current && !ref.current.contains(e.target as Node))
            callback && callback();
    };

    useEffect(() => {
        document.addEventListener('click', handleClick);
        return () => document.removeEventListener('click', handleClick);
    });
}

export default useClickOutside;