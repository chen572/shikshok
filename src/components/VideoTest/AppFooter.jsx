import React from 'react';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import './AppFooter.css'
import FacebookLogin from './FacebookLogin'



export default function AppFooter() {
  

  return (
    <div id='appFooter'>
      <hr></hr>
      <FacebookLogin />
      <div className='appFooterButton'>
        <StorefrontOutlinedIcon fontSize='large' />
      </div>
      <div className='appFooterButton'>
        <PersonOutlineOutlinedIcon fontSize='large' />
      </div>
      
    </div>
  );
}
