import React from "react";
import "./navbar.css";
import StrykerLogo from "./StrykerLogo";
import TitleComponent from "./TitleComponent";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentTwoToneIcon from "@material-ui/icons/AssignmentTwoTone";

function Navbar(props) {
  const homeIcon = (
    <div onClick={() => props.setShowProfile(false)} className='home-icon'>
      <HomeIcon fontSize='large' />
      <div className='profile-label'>
        <p>Home Page</p>
      </div>
    </div>
  );

  const profileIcon = (
    <div
      onClick={() => props.setShowProfile(true)}
      className='account-circle-icon'>
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
        {props.showProfile ? null : profileIcon}
        {props.showProfile ? homeIcon : null}
      </div>
    </div>
  );
}

export default Navbar;
