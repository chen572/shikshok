import React from 'react';
import './VideoFooter.css';
import Avatar from '@material-ui/core/Avatar';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'red',
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function VideoFooter({ channel, description, song }) {
  const classes = useStyles();

  return (
    <div className='videoFooter'>
      <div className='videoFooter__text'>
        <h3>@{channel}</h3>
        <SendIcon id='directMessage' />
        <p>{description}</p>
        <div className='priceDiv'>
          <div className={classes.root}>
            <Avatar
              alt='nike'
              src='https://images.pexels.com/photos/1124465/pexels-photo-1124465.jpeg'
            />
            <h4>20% off</h4>
          </div>
          <div className='buyBtn'>99$ buy now</div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
