import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';

export default function VideoFooter(props) {
  const { likes, reviews, shares } = props;

  const addLikes = () => {
    console.log('likes');
  };

  const addComment = () => {
    console.log('comment');
  };

  const addShare = () => {
    console.log('share');
  };
  return (
    <div>
      <FavoriteBorderIcon onClick={addLikes} style={{ marginLeft: '2vh' }} />
      <span style={{ fontSize: '3vh' }}>{likes}K</span>
      <SmsOutlinedIcon onClick={addComment} style={{ marginLeft: '4vh' }} />
      <span style={{ fontSize: '3vh' }}>{reviews}</span>
      <ShareOutlinedIcon onClick={addShare} style={{ marginLeft: '4vh' }} />
      <span style={{ fontSize: '3vh' }}>{shares}K</span>
    </div>
  );
}
