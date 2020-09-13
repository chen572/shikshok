import React from 'react';
import VideoFooter from './VideoFooter';
import VideoNavbar from './VideoNavbar';
import Video from './Video';
import { useVideoPlay } from '../hooks/hooks';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    maxWidth: 350,
  },
  
});

export default function SimpleCard() {
  
  const classes = useStyles();

  return (
    <Card style={{ margin: 'auto', marginTop:'2%' }} className={classes.root}>
      <VideoNavbar />
      <CardContent>
        <Video />
      </CardContent>
      <CardActions>
        <VideoFooter />
      </CardActions>
    </Card>
  );
}
