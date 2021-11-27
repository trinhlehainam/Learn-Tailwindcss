import {createContext} from 'react'

type Props = {
    setItemSelected: React.Dispatch<React.SetStateAction<number>>,
    itemSelected: number
};

const ItemsConext = createContext<Partial<Props>>({});

export default ItemsConext;
