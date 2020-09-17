import React, { useState } from 'react';
import './AppFooter.css';
import FacebookLogin from './FacebookLogin';
import ForumIcon from '@material-ui/icons/Forum';
import HomeIcon from '@material-ui/icons/Home';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import Discover from './Discover'
import { Drawer } from '@material-ui/core'
import DiscoverPage from './DiscoverPage'

export default function AppFooter(props) {
  const { userInfo } = props;
  const [open, setOpen] = useState(false)

  const clickHandler = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div id='appFooter'>
      <Drawer anchor='top' onClose={handleClose} open={open}>
        <DiscoverPage setOpen={setOpen} />
      </Drawer>
      <div className='appFooterBtn'>
        <Link className='linkBtn' to='/products'>
          <HomeIcon fontSize='large' />
          <p>Home</p>
        </Link>
      </div>

      <div className='appFooterBtn'>
        <Discover clickHandler={clickHandler} />
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
