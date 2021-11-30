import { useRef, useState} from 'react'
import cx from 'classnames'
import TriangleBox from './trianglebox';

enum SelectOption {
    SELECT = 'select',
    DROP = 'drop',
    CANCEL = 'cancel'
};

const ModalItem = () => {
    const [selectOption, setOption] = useState(SelectOption.SELECT);
    const ref = useRef<HTMLDivElement>(null);
    const handleSelectOption = (option: SelectOption) => {
        setOption(option); 
    }

    return (
        <div 
        ref={ref}
        className={
            `border border-zelda-darkGray w-32 bg-zelda-bgModal
            absolute top-0 left-0 z-50 mx-6 my-6 outline-none text-white`}
        >
            <div
            className={cx({
                "shadow-yellow border-zelda-softYellow border-2":
                selectOption === SelectOption.SELECT,
            }, "flex justify-center px-6 py-2 relative border border-zelda-darkGray mb-4"
            )}
            onMouseEnter={() => handleSelectOption(SelectOption.SELECT)}
            >
                {selectOption === SelectOption.SELECT && <TriangleBox />}
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
            </div>
        </div>
    )
};

export default ModalItem;
