import { useContext, useEffect, useRef, useState} from 'react'
import cx from 'classnames'
import TriangleBox from './trianglebox';
import ItemsConext from '../context/itemcontext';
import useClickOutside from '../utils/hooks/useClickOutside';

enum SelectOption {
    EQUIP = 'select',
    DROP = 'drop',
    CANCEL = 'cancel'
};

const ItemModal = () => {
    const [selectOption, setOption] = useState(SelectOption.EQUIP);
    const {closeModal} = useContext(ItemsConext);
    const ref = useRef<HTMLDivElement>(null);

    const handleSelectOption = (option: SelectOption) => {
        setOption(option); 
    }

    useClickOutside(ref, closeModal);

    useEffect(() => {if(ref.current) ref.current.focus()}, []);

    return (
        <div 
        ref={ref}
        onClick={(e) => {e.stopPropagation()}}
        className="border border-zelda-darkGray w-32 bg-zelda-bgModal absolute top-0 left-0 z-50 mx-6 my-6 outline-none text-white"   
        >
        <div
            className="flex flex-col p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
        >
            <div
            className={cx({
                "shadow-yellow border-zelda-softYellow border-2":
                selectOption === SelectOption.EQUIP,
            }, "flex justify-center px-6 py-2 relative border border-zelda-darkGray mb-4"
            )}
            onMouseEnter={() => handleSelectOption(SelectOption.EQUIP)}
            >
                {selectOption === SelectOption.EQUIP && <TriangleBox />}
                EQUIP
            </div>
            <div
            className={cx({
                "shadow-yellow border-zelda-softYellow border-2":
                selectOption === SelectOption.DROP,
            }, "flex justify-center px-6 py-2 relative border border-zelda-darkGray mb-4"
            )}
            onMouseEnter={() => handleSelectOption(SelectOption.DROP)}
            >
                {selectOption === SelectOption.DROP && <TriangleBox />}
                DROP
            </div>
            <div
            className={cx({
                "shadow-yellow border-zelda-softYellow border-2":
                selectOption === SelectOption.CANCEL,
            }, "flex justify-center px-6 py-2 relative border border-zelda-darkGray mb-4"
            )}
            onMouseEnter={() => handleSelectOption(SelectOption.CANCEL)}
            >
                {selectOption === SelectOption.CANCEL && <TriangleBox />}
                CANCEL
            </div>
        </div>
        </div>
    )
};

export default ItemModal;
