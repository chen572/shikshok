import React from 'react';
import './AppFooter.css';
import FacebookLogin from './FacebookLogin';
import ForumIcon from '@material-ui/icons/Forum';


export default function AppFooter() {
  return (
    <div id='appFooter'>
      <hr></hr>
      <div id='messagesBtn'>
            <ForumIcon fontSize="large" />
        </div>
      <FacebookLogin />
    </div>
  );
}
