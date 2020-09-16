import React, { useState } from 'react'
import './VideoFooter.css'
import Avatar from '@material-ui/core/Avatar'
import { Drawer } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { makeStyles } from '@material-ui/core/styles'
import SwipeToBuy from './SwipeToBuy'
import Confirmation from './Confirmation'

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

  const handleSuccess = () => {
    console.log('success!')
    setTimeout(() => {
      setOpen(false)
    }, 750)
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
            <Confirmation />
            <SwipeToBuy handleSuccess={handleSuccess} />
          </Drawer>
        </div>
      </div>
    </div>
  )
}

export default VideoFooter
