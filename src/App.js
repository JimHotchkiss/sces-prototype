import React, { useState } from "react";
import Navbar from "../src/navbar/Navbar";
import "./App.css";
import MediaCard from "./components/MediaCard";
import Profile from "./components/profile/Profile";
import VideoResource from "./components/learningResources/VideoResource";
import TextResource from "./components/learningResources/TextResource";

function App() {
  const [showProfile, setShowProfile] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const [showText, setShowText] = useState(false);

  const mediaCard = (
    <div className='mediaCard-towerImg-div'>
      <MediaCard
        showText={showText}
        setShowText={setShowText}
        showVideo={showVideo}
        setShowVideo={setShowVideo}
      />
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
        showText={showText}
        setShowText={setShowText}
        showVideo={showVideo}
        setShowVideo={setShowVideo}
        showProfile={showProfile}
        setShowProfile={setShowProfile}
      />
      {showProfile ? (
        <Profile />
      ) : showVideo ? (
        <VideoResource />
      ) : showText ? (
        <TextResource />
      ) : (
        mediaCard
      )}
      {/* {showVideo ? <VideoResource /> : null} */}
    </div>
  );
}

export default App;
