import React from "react";
import Navbar from "../src/navbar/Navbar";
import "./App.css";
import TowerImage from "./components/TowerImage";

function App() {
  return (
    <div className='App'>
      <Navbar />
      {/* <CardsContainer /> */}
      <TowerImage />
    </div>
  );
}

export default App;
