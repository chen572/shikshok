import React, { useState } from 'react'
import Paypal from './Paypal'
import './VideoSidebar.css'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MessageIcon from '@material-ui/icons/Message'
import ShareIcon from '@material-ui/icons/Share'
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined'
import RemoveShoppingCartOutlinedIcon from '@material-ui/icons/RemoveShoppingCartOutlined'
import { useUpdateVals } from '../../hooks/hooks'
import { IconButton, makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
  button: {
    color: 'white',
  },
})

function VideoSidebar(props) {
  const [liked, setLiked] = useState(false)
  const [paypalPopUp, setPaypalPopUp] = useState(false)
  const { updateVals, values } = useUpdateVals(props)
  const { likes, shares, reviews } = values
  const classes = useStyles()

  return (
    <div>
      {paypalPopUp ? (
        <div id='paypalPopUp'>
          <Paypal />
        </div>
      ) : (
        ''
      )}
      <div className='videoSidebar'>
        <div className='videoSidebar__button'>
          {!paypalPopUp ? (
            <IconButton
              className={classes.button}
              onClick={() =>
                !paypalPopUp ? setPaypalPopUp(true) : setPaypalPopUp(false)
              }
            >
              <ShoppingCartOutlinedIcon fontSize='large' />
            </IconButton>
          ) : (
            <IconButton
              className={classes.button}
              onClick={() =>
                !paypalPopUp ? setPaypalPopUp(true) : setPaypalPopUp(false)
              }
            >
              <RemoveShoppingCartOutlinedIcon fontSize='large' />
            </IconButton>
          )}
        </div>
        <div className='videoSidebar__button'>
          {liked ? (
            <IconButton
              className={classes.button}
              onClick={() => {
                setLiked(false)
                updateVals('likes', likes - 1)
              }}
            >
              <FavoriteIcon fontSize='large' />
            </IconButton>
          ) : (
            <IconButton
              className={classes.button}
              onClick={(e) => {
                setLiked(true)
                updateVals('likes', likes + 1)
              }}
            >
              <FavoriteBorderIcon fontSize='large' />
            </IconButton>
          )}
          <p className='number'>{likes}</p>
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
        <div className='videoSidebar__button'>
          <IconButton
            className={classes.button}
            onClick={() => updateVals('shares', shares + 1)}
          >
            <ShareIcon fontSize='large' />
          </IconButton>
          <p className='number'>{shares}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoSidebar
