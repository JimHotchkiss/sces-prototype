import React from "react";
import "./navbar.css";
import StrykerLogo from "./StrykerLogo";
import TitleComponent from "./TitleComponent";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";

function Navbar(props) {
  function handleClick() {
    props.setShowProfile(true);
  }

  const homeIcon = (
    <div
      onClick={() => {
        props.setShowProfile(false);
        if (props.showVideo) {
          props.setShowVideo(false);
        } else if (props.showText) {
          props.setShowText(false);
        }
      }}
      className='home-icon'>
      <HomeIcon fontSize='large' />
      <div className='profile-label'>
        <p>Home Page</p>
      </div>
    </div>
  );

  const profileIcon = (
    <div onClick={handleClick} className='account-circle-icon'>
      <AccountCircleIcon fontSize='large' />
      <div className='profile-label'>
        <p>Account Profile</p>
      </div>
    </div>
  );

  return (
    <div className='navbar'>
      <StrykerLogo />
      <TitleComponent />
      <div
        className={
          props.showProfile ? "home-icon-container" : "icons-container"
        }>
        {props.showProfile
          ? homeIcon
          : props.showVideo
          ? homeIcon
          : props.showText
          ? homeIcon
          : profileIcon}
      </div>
    </div>
  );
}

export default Navbar;
