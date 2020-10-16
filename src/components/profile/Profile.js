import React from "react";
import ProfileTable from "./ProfileTable";
import ProfileAvatar from "./ProfileAvatar";
import "./profile.css";

function Profile() {
  return (
    <div className='profile-container'>
      <div className='account-avatar-div'>
        <ProfileAvatar />
      </div>
      <ProfileTable />
    </div>
  );
}

export default Profile;
