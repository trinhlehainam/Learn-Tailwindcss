import React, { useEffect, useRef } from "react";
import "./App.css";
import "./styles/index.css";

import ItemConext from './context/itemcontext'
import ItemGrid from './components/itemgrid'
import CategoryMenu from './components/categorymenu'
import { ArrowDirection, NavigationArrow } from "./components/arrow";

import getItems from './utils/getitems'

function App() {
    const PAGES = getItems();
    const MAX_PAGE = PAGES.length - 1;
    const [itemSelected, setItemSelected] = React.useState(0);
    const [isModelOpened, toggleModal] = React.useState(false);
    const [[page, dir], setPage] = React.useState([0,0]);
    const inventoryRef = useRef<HTMLDivElement>(null);

    const closeModal = () => {
        toggleModal(false);
        if (inventoryRef.current)
            inventoryRef.current.focus();
    };

    const contextState = {
        setItemSelected,
        itemSelected,
        toggleModal,
        isModelOpened,
        closeModal,
    };

    useEffect(() => {if (inventoryRef.current) inventoryRef.current.focus()});

    return (
        <div className="bg-zelda-darkGreen min-h-screen pt-32">
            <div className="container mx-auto flex flex-col xl:flex-row">
                <div ref={inventoryRef} className="relative flex flex-col justify-center w-full max-w-2xl mx-auto xl:w-1/2 xl:px-12">
                    <CategoryMenu
                        categorySelected = {PAGES[page].category}
                        setPage = {setPage}
                    />
                    <NavigationArrow
                        currentPage = {page}
                        direction = {ArrowDirection.LEFT}
                        setPage = {setPage}
                        maxPage = {MAX_PAGE}
                    />
                    <NavigationArrow
                        currentPage = {page}
                        direction = {ArrowDirection.RIGHT}
                        setPage = {setPage}
                        maxPage = {MAX_PAGE}
                    />
                    <ItemConext.Provider value={contextState}>
                        <div className="flex">
                            <ItemGrid items={PAGES[page].items} />
                        </div>
                    </ItemConext.Provider>
                </div>
            </div>
            <div className="w-full xl:w-1/2"></div>
        </div>
    );
}

export default App;
