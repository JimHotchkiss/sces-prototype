import React from "react";
import "./navbar.css";
import StrykerLogo from "./StrykerLogo";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

function Navbar() {
  return (
    <div className='navbar'>
      <StrykerLogo />
      <div className='account-circle-icon'>
        <AccountCircleIcon fontSize='large' />
      </div>
    </div>
  );
}

export default Navbar;
