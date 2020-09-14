import React, { useState } from 'react';
import Paypal from '../Paypal';
import './VideoSidebar.css';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import RemoveShoppingCartOutlinedIcon from '@material-ui/icons/RemoveShoppingCartOutlined';

function VideoSidebar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false);
  const [paypalPopUp, setPaypalPopUp] = useState(false);

  return (
    <div>
      {paypalPopUp ? <div id='paypalPopUp'><Paypal /></div> : ''}
      <div className='videoSidebar'>
        <div className='videoSidebar__button'>
          {!paypalPopUp ? <ShoppingCartOutlinedIcon fontSize='large' onClick={() => !paypalPopUp ? setPaypalPopUp(true) : setPaypalPopUp(false)}/> :
          <RemoveShoppingCartOutlinedIcon fontSize='large' onClick={() => !paypalPopUp ? setPaypalPopUp(true) : setPaypalPopUp(false)}/>}
        </div>
        <div className='videoSidebar__button'>
          {liked ? (
            <FavoriteIcon fontSize='large' onClick={(e) => setLiked(false)} />
          ) : (
            <FavoriteBorderIcon
              fontSize='large'
              onClick={(e) => setLiked(true)}
            />
          )}
          <p>{liked ? likes + 1 : likes}</p>
        </div>
        <div className='videoSidebar__button'>
          <MessageIcon fontSize='large' />
          <p>{messages}</p>
        </div>
        <div className='videoSidebar__button'>
          <ShareIcon fontSize='large' />
          <p>{shares}</p>
        </div>
      </div>
    </div>
  );
}

export default VideoSidebar;
