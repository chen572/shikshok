import React, { useState } from 'react'
import './AppNavbar.css';

export default function ForYou(props) {
    
 

  

    return (
        <div onClick={props.boldBtn} >

            <h3 id='forYou' className={props.forYouBold ? 'appNavbarBtnOn' : 'appNavbarBtnOff'}>For You</h3>
        </div>
    )
}
