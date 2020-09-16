import React, { useState } from 'react'
import './VideoFooter.css'
import Avatar from '@material-ui/core/Avatar'
import { Drawer, ClickAwayListener } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    color: 'red',
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}))

function VideoFooter({ channel, description, song }) {
  const [open, setOpen] = useState(false)
  const classes = useStyles()

  const handleClick = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

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
            <div onClick={handleClick} className='buyBtn'>
              99$ buy now
            </div>
            <Drawer onClose={handleClose} anchor='bottom' open={open}>
              <div style={{ height: 50 }}>TEST</div>
            </Drawer>
          </div>
        </div>
      </div>
  )
}

export default VideoFooter
