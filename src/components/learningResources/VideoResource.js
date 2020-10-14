import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Button from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import nurse2 from "./img/nurse2.png";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 560,
    margin: "auto",
    marginTop: "10%",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className='video-card-button-div'>
      <Card className={classes.root}>
        <CardHeader
          style={{ backgroundColor: " #ffb600" }}
          avatar={
            <Avatar
              aria-label='recipe'
              className={classes.avatar}
              src={nurse2}></Avatar>
          }
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title="You're leaning about the HUB function"
          subheader='September 14, 2016'
        />
        <iframe
          title='unique'
          width='560'
          height='315'
          src='https://www.youtube.com/embed/5EGrj2Qjp9w'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen></iframe>
        <CardContent syle={{ backgroundColor: "#ffb600" }}>
          <Typography variant='body2' color='textSecondary' component='p'>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature
          </Typography>
        </CardContent>
        <CardActions style={{ backgroundColor: " #ffb600" }} disableSpacing>
          <IconButton aria-label='add to favorites'>
            {/* <FavoriteIcon /> */}
            <Button variant='contained' color='disabled'>
              Test Your Understanding
            </Button>
          </IconButton>
          {/* <IconButton aria-label='share'>
            <ShareIcon />
          </IconButton> */}
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label='show more'>
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout='auto' unmountOnExit>
          <CardContent>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard
            </Typography>
            <Typography paragraph>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Typography>
            <Typography paragraph>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et
              Malorum" (The Extremes of Good and Evil) by Cicero, written in 45
              BC. This book is a treatise on the theory of ethics, very popular
              during the Renaissance. The first line of Lorem Ipsum, "Lorem
              ipsum dolor sit amet..", comes from a line in section 1.10.32.
            </Typography>
            <Typography>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature
            </Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}

// import React from "react";
// import "./videoResource.css";
// import ProfileAvatar from "../profile/ProfileAvatar";

// function VideoResource() {
//   return (
//     <div className='avatar-ifram-container'>
//       <div className='profile-avatar-vr-div'>
//         <ProfileAvatar />
//       </div>

//       <div className='iframe-div'>
//         <iframe
//           title='unique'
//           width='560'
//           height='315'
//           src='https://www.youtube.com/embed/5EGrj2Qjp9w'
//           frameBorder='0'
//           allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
//           allowFullScreen></iframe>
//       </div>
//     </div>
//   );
// }

// export default VideoResource;
