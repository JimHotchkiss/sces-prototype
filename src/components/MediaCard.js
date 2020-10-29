import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import DescriptionIcon from "@material-ui/icons/Description";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import ProfileAvatar from "./profile/ProfileAvatar";

import "./mediaCard.css";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 16,
  },
  media: {
    height: 140,
  },
});

function MediaCard(props) {
  const classes = useStyles();

  const handleVideoButton = (e) => {
    e.preventDefault();
    props.setShowVideo(true);
  };

  const handleTextButton = (e) => {
    e.preventDefault();
    props.setShowText(true);
  };

  return (
    <div className='cards-avatar-container'>
      <div className='card-profile-avatar'>
        <ProfileAvatar />
      </div>
      <div className='cards-container'>
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              style={{ height: 0, paddingTop: "56%" }}
              className={classes.media}
              image={require("./img/sces-img.png")}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Competency Topic 1
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button onClick={handleVideoButton} size='small' color='primary'>
              <VideoLibraryIcon
                fontSize='large'
                style={{ color: "black", marginRight: "4px" }}
              />
              <p className='video-text'>Video Material</p>
            </Button>
            <Button onClick={handleTextButton} size='small' color='primary'>
              <DescriptionIcon
                fontSize='large'
                style={{ color: "black", marginRight: "4px" }}
              />
              <p className='video-text'>Text Material</p>
            </Button>
          </CardActions>
        </Card>
        {/* Card Two  */}
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              style={{ height: 0, paddingTop: "56%" }}
              className={classes.media}
              image={require("./img/sces-img2.png")}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Competency Topic 2
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              <VideoLibraryIcon
                fontSize='large'
                style={{ color: "black", marginRight: "4px" }}
              />
              <p className='video-text'>Video Material</p>
            </Button>
            <Button size='small' color='primary'>
              <DescriptionIcon
                fontSize='large'
                style={{ color: "black", marginRight: "4px" }}
              />
              <p className='video-text'>Text Material</p>
            </Button>
          </CardActions>
        </Card>
        {/* Card Three  */}
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              style={{ height: 0, paddingTop: "56%" }}
              className={classes.media}
              image={require("./img/sces-img3.png")}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Competency Topic 3
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              <VideoLibraryIcon
                fontSize='large'
                style={{ color: "black", marginRight: "4px" }}
              />
              <p className='video-text'>Video Material</p>
            </Button>
            <Button size='small' color='primary'>
              <DescriptionIcon
                fontSize='large'
                style={{ color: "black", marginRight: "4px" }}
              />
              <p className='video-text'>Text Material</p>
            </Button>
          </CardActions>
        </Card>
        {/* Card Four  */}
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              style={{ height: 0, paddingTop: "56%" }}
              className={classes.media}
              image={require("./img/sces-img4.png")}
              title='Contemplative Reptile'
            />
            <CardContent>
              <Typography gutterBottom variant='h5' component='h2'>
                Competency Topic 4
              </Typography>
              <Typography variant='body2' color='textSecondary' component='p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size='small' color='primary'>
              <VideoLibraryIcon
                fontSize='large'
                style={{ color: "black", marginRight: "4px" }}
              />
              <p className='video-text'>Video Material</p>
            </Button>
            <Button size='small' color='primary'>
              <DescriptionIcon
                fontSize='large'
                style={{ color: "black", marginRight: "4px" }}
              />
              <p className='video-text'>Text Material</p>
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

export default MediaCard;
