import React from "react";
import "./navbar.css";
import StrykerLogo from "./StrykerLogo";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AssignmentTwoToneIcon from "@material-ui/icons/AssignmentTwoTone";

function Navbar() {
  return (
    <div className='navbar'>
      <StrykerLogo />
      <div className='icons-container'>
        <div className='assignment-two-tone-icon'>
          <AssignmentTwoToneIcon fontSize='large' />
        </div>
        <div className='account-circle-icon'>
          <AccountCircleIcon fontSize='large' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
