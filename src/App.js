import React, { useState } from "react";
import Navbar from "../src/navbar/Navbar";
import "./App.css";
// import TowerImage from "./components/TowerImage";
import MediaCard from "./components/MediaCard";
import Profile from "./components/profile/Profile";
// import { TramRounded } from "@material-ui/icons";

function App() {
  const [showProfile, setShowProfile] = useState(false);

  const mediaCard = (
    <div className='mediaCard-towerImg-div'>
      <MediaCard />
      <div className='towerImg-div'>{/* <TowerImage /> */}</div>
    </div>
  );

  return (
    <div className='App'>
      {console.log(showProfile)}
      <Navbar showProfile={showProfile} setShowProfile={setShowProfile} />
      {showProfile ? <Profile /> : mediaCard}
      {/* <div className='mediaCard-towerImg-div'>
        <MediaCard />
        <div className='towerImg-div'></div>
      </div> */}
    </div>
  );
}

export default App;
