import {createContext, Dispatch, SetStateAction} from 'react'

type Props = {
    setItemSelected: React.Dispatch<React.SetStateAction<number>>,
    itemSelected: number,
    toggleModal: Dispatch<SetStateAction<boolean>>,
    isModelOpened: boolean,
    closeModal: Function
};

const ItemsConext = createContext<Partial<Props>>({});

export default ItemsConext;
