import React from 'react';
import './AppFooter.css';
import FacebookLogin from './FacebookLogin';
import ForumIcon from '@material-ui/icons/Forum';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';

export default function AppFooter(props) {
  const { userInfo } = props;

  return (
    <div id='appFooter'>
      <div className='appFooterBtn'>
        <Link className='linkBtn' to='/products'>
          <HomeIcon fontSize='large' />
          <p>Home</p>
        </Link>
      </div>

      <div className='appFooterBtn'>
        <SearchIcon fontSize='large' />
        <p>Discover</p>
      </div>

      <div className='appFooterBtn'>
        <AddIcon fontSize='large' />
        <p>Publish</p>
      </div>

      <div className='appFooterBtn'>
        <Link className='linkBtn' to='/messages'>
          <ForumIcon fontSize='large' />
          <p>Inbox</p>
        </Link>
      </div>

      <div className='appFooterBtn'>
        <FacebookLogin userInfo={userInfo} />
        <p>Me</p>
      </div>
    </div>
  );
}
