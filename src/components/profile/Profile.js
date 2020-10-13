import React from "react";
import ProfileTable from "./ProfileTable";
import ProfileAvatar from "./ProfileAvatar";
import "./profile.css";

function Profile() {
  return (
    <div className='profile-container'>
      <ProfileAvatar />
      <ProfileTable />
    </div>
  );
}

export default Profile;
