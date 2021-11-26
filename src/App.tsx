import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
        <div className="flex flex-row flex-wrap">
            <div className="text-center w-full">Header</div>
            <div className="text-center w-1/5">Left Sidebar</div>
            <div className="text-center w-3/5">Content</div>
            <div className="text-center w-1/5">Right Sidebar</div>
            <div className="text-center w-full">Footer</div>
        </div>
    </>
  );
}

export default App;
