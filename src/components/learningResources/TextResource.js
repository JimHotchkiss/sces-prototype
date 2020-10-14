import React from "react";
import PrintIcon from "@material-ui/icons/Print";
import "./textResource.css";
import ProfileAvatar from "../profile/ProfileAvatar";

function TextResource() {
  return (
    <div className='profile-avatar-text-resource-div'>
      <div className='profile-avatar-printer'>
        <div className='text-profile-avatar'>
          <ProfileAvatar />
        </div>
        <div className='printer-icon-div'>
          <PrintIcon fontSize='large' />
        </div>
      </div>
      <div className='text-resource-container'></div>
    </div>
  );
}

export default TextResource;
