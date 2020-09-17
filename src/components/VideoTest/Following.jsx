import React, { useState } from 'react';
import './AppNavbar.css';

export default function Following(props) {
  
 

  

  return (
    <div  onClick={props.boldBtn} >
      <h3 id='following' className={props.followingBold ? 'appNavbarBtnOn' : 'appNavbarBtnOff'}>Following</h3>
    </div>
  );
}
