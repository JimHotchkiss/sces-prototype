import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./profileAvatar.css";
import Avatar from "@material-ui/core/Avatar";
import nurse2 from "./img/nurse2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",

    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function ProfileAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className='profile-avatar-text-container'>
        <Avatar className={classes.large} alt='Remy Sharp' src={nurse2} />
        <div className='profile-avatar-text'>Good Afternoon, Nurse Betty</div>
      </div>
    </div>
  );
}

export default ProfileAvatar;
