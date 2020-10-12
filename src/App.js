import React from "react";
import Navbar from "../src/navbar/Navbar";
import "./App.css";
import TowerImage from "./components/TowerImage";
import MediaCard from "./components/MediaCard";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className='mediaCard-towerImg-div'>
        <MediaCard />
        <div className='towerImg-div'>{/* <TowerImage /> */}</div>
      </div>
    </div>
  );
}

export default App;
