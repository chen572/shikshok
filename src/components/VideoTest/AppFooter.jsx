import React from 'react';
import './AppFooter.css';
import FacebookLogin from './FacebookLogin';


export default function AppFooter() {
  return (
    <div id='appFooter'>
      <hr></hr>
      <FacebookLogin />
    </div>
  );
}
