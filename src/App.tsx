import React from "react";
import "./App.css";
import "./styles/index.css";

import ItemConext from './context/itemcontext'
import ItemGrid from './components/itemgrid'
import CategoryMenu from './components/categorymenu'

import getItems from './utils/getitems'

function App() {
    const [itemSelected, setItemSelected] = React.useState(0);
    const [[page, dir], setPage] = React.useState([0,0]);
    const contextState = {
        setItemSelected,
        itemSelected
    };
    const itemPages = getItems();

    return (
        <div className="bg-zelda-darkGreen min-h-screen pt-32">
            <div className="container mx-auto flex flex-col xl:flex-row">
                <div className="relative flex flex-col justify-center w-full max-w-2xl mx-auto xl:w-1/2 xl:px-12">
                    <CategoryMenu
                        categorySelected = {itemPages[page].category}
                        setPage = {setPage}
                    />
                    <ItemConext.Provider value={contextState}>
                        <div className="flex">
                            <ItemGrid items={itemPages[page].items} />
                        </div>
                    </ItemConext.Provider>
                </div>
            </div>
            <div className="w-full xl:w-1/2"></div>
        </div>
    );
}

export default App;
