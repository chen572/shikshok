import React from 'react';
import './AppFooter.css';
import FacebookLogin from './FacebookLogin';
import ForumIcon from '@material-ui/icons/Forum';
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';

export default function AppFooter(props) {
  const { userInfo } = props;

  return (
    <div id='appFooter'>
      <hr></hr>
      <Link to='messages'>
        <div className='appFooterBtn'>
          <ForumIcon fontSize='large' />
        </div>
      </Link>
      <Link to='products'>
      <div className='appFooterBtn'>
        <HomeIcon fontSize='large' />
      </div>
      </Link>
      <FacebookLogin userInfo={userInfo} />
    </div>
  );
}
