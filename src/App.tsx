import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./index.css";

function App() {
  return (
    <>
      <div className="flex justify-center bg-gray-300">
        <div className="mx-4 self-center text-center">
          <h1 className="text-6xl font-bold text-blue-700 hover:text-gray-700">
            Welcome to Checker
          </h1>
          <h2 className="text-3xl font-semibold text-blue-300">
            A premium in the art of nude
          </h2>
          <h3 className="text-lg font-medium italic">Header</h3>
          <button className="my-4 px-4 py-2 border-2 border-black text-white bg-blue-900 rounded-full">
            Go premium
          </button>
        </div>
      </div>
      <div className="mt-10 mb-10">
        <button className="p-10 border border-black">One</button>
        <button className="m-10 border border-black">Two</button>
        <button className="m-2 p-2 border border-black">One</button>
      </div>
      <div>
          <button className="m-4 p-4 border border-black rounded-md">One</button>
          <button className="m-4 p-4 border border-black rounded-2xl">One</button>
          <button className="m-4 p-4 border-4 border-black rounded-full">One</button>
      </div>
      <div>
          <button className="m-4 p-4 rounded-full ring-2">One</button>
          <button className="m-4 p-4 rounded-full ring-4 ring-offset-4 ring-inset ring-offset-red-600">One</button>
          <button className="m-4 p-4 rounded-full ring-2">One</button>
      </div>
      <div className="bg-gray-50 mt-5 p-10">
          <button className="p-4 mx-2 shadow-md bg-white">One</button>
          <button className="p-4 mx-2 shadow-xl bg-white">One</button>
          <button className="p-4 mx-2 shadow-inner bg-white">One</button>
      </div>
    </>
  );
}

export default App;
