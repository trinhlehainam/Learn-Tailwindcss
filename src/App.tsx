import React from "react";
import "./App.css";
import "./styles/index.css";
import ItemConext from './context/itemcontext'
import ItemGrid from './components/itemgrid'
import getItems from './utils/getitems'

function App() {
    const [itemSelected, setItemSelected] = React.useState(0);
    const contextState = {
        setItemSelected,
        itemSelected
    };

    return (
        <div className="bg-zelda-darkGreen min-h-screen pt-32">
            <div className="container mx-auto flex flex-col xl:flex-row">
                <div className="relative flex flex-col justify-center w-full max-w-2xl mx-auto xl:w-1/2 xl:px-12">
                    <ItemConext.Provider value={contextState}>
                        <div className="flex">
                            <ItemGrid items={getItems()} />
                        </div>
                    </ItemConext.Provider>
                </div>
            </div>
            <div className="w-full xl:w-1/2"></div>
        </div>
    );
}

export default App;
