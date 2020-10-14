import React, { useState } from "react";
import Navbar from "../src/navbar/Navbar";
import "./App.css";
import MediaCard from "./components/MediaCard";
import Profile from "./components/profile/Profile";
import VideoResource from "./components/learningResources/VideoResource";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  const mediaCard = (
    <div className='mediaCard-towerImg-div'>
      <MediaCard showVideo={showVideo} setShowVideo={setShowVideo} />
      <div className='towerImg-div'>{/* <TowerImage /> */}</div>
    </div>
  );

  // const videoResource = (
  //   <div className='video-resource-div'>
  //     <VideoResource />
  //   </div>
  // );

  return (
    <div className='App'>
      <Navbar
        setShowVideo={setShowVideo}
        showVideo={showVideo}
        showProfile={showProfile}
        setShowProfile={setShowProfile}
      />
      {showProfile ? <Profile /> : showVideo ? <VideoResource /> : mediaCard}
      {/* {showVideo ? <VideoResource /> : null} */}
    </div>
  );
}

export default App;
