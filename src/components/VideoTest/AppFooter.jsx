import React from 'react'
import './AppFooter.css'
import FacebookLogin from './FacebookLogin'
import { useLocation } from 'react-router-dom'

export default function AppFooter(props) {
  const location = useLocation()
  const { userInfo } = props

  return (
    <div id='appFooter'>
      <hr></hr>
      <FacebookLogin userInfo={userInfo} />
    </div>
  )
}
