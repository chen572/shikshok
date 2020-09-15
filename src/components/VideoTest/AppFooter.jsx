import React from 'react';
import './AppFooter.css';
import FacebookLogin from './FacebookLogin';
import Messages from './Messages'

export default function AppFooter(props) {
  const { userInfo } = props

  return (
    <div id='appFooter'>
      <hr></hr>
      <Messages />
      <FacebookLogin userInfo={userInfo} />
    </div>
  )
}
