import React, { useState } from 'react';
import './VideoFooter.css';
import Avatar from '@material-ui/core/Avatar';
import { Drawer } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import SwipeToBuy from './SwipeToBuy';
import Confirmation from './Confirmation';
import DirectMessage from './DirectMessage';

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
  const [open, setOpen] = useState({
    confirmForm: false,
    directMessageFrom: false,
  });
  const classes = useStyles();

  const handleClick = ({ target }) => {
    setOpen({ ...open, [target.id]: true });
  };

  const handleClose = ({ target }) => {
    setOpen({
      confirmForm: false,
      directMessageForm: false,
    });
  };

  const handleSuccess = () => {
    console.log('success!');
    setTimeout(() => {
      setOpen({ ...open, confirmForm: false });
    }, 750);
  };

  return (
    <div className='videoFooter'>
      <div onClick={handleClick} className='buyBtn'>
        <h3>5.99$ SHOP NOW</h3>
      </div>
      <div className='videoFooter__text'>
        <h3>@{channel}</h3>
        {/* <SendIcon id='directMessageForm' onClick={handleClick} /> */}
        <p>{description}</p>
        <Drawer onClose={handleClose} anchor='bottom' open={open.confirmForm}>
          <Confirmation />
          <SwipeToBuy handleSuccess={handleSuccess} />
        </Drawer>
        <Drawer
          onClose={handleClose}
          anchor='bottom'
          open={open.directMessageForm}
        >
          <DirectMessage setOpen={setOpen} open={open} storeName={channel} />
        </Drawer>
      </div>
    </div>
  );
}

export default VideoFooter;
