import React, { useState } from 'react';
import './VideoSidebar.css';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import AddIcon from '@material-ui/icons/Add';
import { useUpdateVals } from '../../hooks/hooks';
import { IconButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  button: {
    color: 'white',
  },
});

function VideoSidebar(props) {
  const [liked, setLiked] = useState(false);
  const { updateVals, values } = useUpdateVals(props);
  const { likes, shares, reviews } = values;
  const classes = useStyles();

  return (
    <div>
      <div className='videoSidebar'>
        <div className='videoSidebar__button'>
          <AddIcon fontSize='large' />
        </div>
        <div className='videoSidebar__button'>
          {liked ? (
            <IconButton
              className={classes.button}
              onClick={() => {
                setLiked(false);
                updateVals('likes', likes + 1);
              }}
            >
              <ThumbDownIcon fontSize='large' />
            </IconButton>
          ) : (
            <IconButton
              className={classes.button}
              onClick={(e) => {
                setLiked(true);
                updateVals('likes', likes - 1);
              }}
            >
              <ThumbUpIcon fontSize='large' />
            </IconButton>
          )}
          <p className='number'>{likes}</p>
        </div>
        <div className='videoSidebar__button'>
          <IconButton
            className={classes.button}
            onClick={() => updateVals('shares', shares + 1)}
          >
            <ShareIcon fontSize='large' />
          </IconButton>
          <p className='number'>{shares}</p>
        </div>
        <div className='videoSidebar__button'>
          <IconButton
            className={classes.button}
            onClick={() => updateVals('reviews', reviews + 1)}
          >
            <MessageIcon fontSize='large' />
          </IconButton>
          <p className='number'>{reviews}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoSidebar;
