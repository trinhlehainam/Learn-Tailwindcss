import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./styles/index.css";

function App() {
  return (
    <div className="bg-zelda-darkGreen min-h-screen pt-32">
        <div className="container mx-auto flex flex-col xl:flex-row">
            <div className="w-full xl:w-1/2 grid grid-cols-5 gap-2 bg-zelda-lightGray">
                <div className="text-center border border-white p-4">A</div>
                <div className="text-center border border-white p-4">A</div>
                <div className="text-center border border-white p-4">A</div>
                <div className="text-center border border-white p-4">A</div>
                <div className="text-center border border-white p-4">A</div>
            <div/> 
            </div>
            <div className="w-full xl:w-1/2"></div>
        </div>
    </div>
  );
}

export default App;
