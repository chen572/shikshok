import React from 'react'
import './AppFooter.css'
import FacebookLogin from './FacebookLogin'

export default function AppFooter(props) {
  const { userInfo } = props

  return (
    <div id='appFooter'>
      <hr></hr>
      <FacebookLogin userInfo={userInfo} />
    </div>
  )
}
