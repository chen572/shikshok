import React from 'react';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import './AppFooter.css'
import FacebookLogin from './FacebookLogin'



export default function AppFooter() {
  

  return (
    <div id='appFooter'>
      <hr></hr>
      <div className='appFooterButton'>
        <StorefrontOutlinedIcon fontSize='large' />
      </div>
      <div className='appFooterButton'>
      <FacebookLogin />
        
      </div>
      
    </div>
  );
}
