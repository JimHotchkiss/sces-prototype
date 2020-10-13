import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./profileAvatar.css";
import Avatar from "@material-ui/core/Avatar";
import nurse2 from "./img/nurse2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginLeft: "130px",

    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function ProfileAvatar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.large} alt='Remy Sharp' src={nurse2} />
      {/* <Avatar alt='Travis Howard' src='/static/images/avatar/2.jpg' />
      <Avatar alt='Cindy Baker' src='/static/images/avatar/3.jpg' /> */}
      <div className='profile-avatar-text'>Good Afternoon, Jane Doe</div>
    </div>
  );
}

export default ProfileAvatar;
