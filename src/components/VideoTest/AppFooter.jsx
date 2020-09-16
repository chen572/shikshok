import React, { useEffect, useState } from 'react'
import './AppFooter.css'
import FacebookLogin from './FacebookLogin'
import ForumIcon from '@material-ui/icons/Forum'
import HomeIcon from '@material-ui/icons/Home'
import { Link, useLocation } from 'react-router-dom'

export default function AppFooter(props) {
  const { pathname } = useLocation()
  const { userInfo } = props

  return (
    <div id='appFooter'>
      <div className='icon-container'>
        <Link to='/messages'>
          <div className='appFooterBtn'>
            <ForumIcon  fontSize='large' />
          </div>
        </Link>
        <Link to='/products'>
          <div
            style={{ marginLeft: 20 }}
            
            className='appFooterBtn'
          >
            <HomeIcon fontSize='large' />
          </div>
        </Link>
        <FacebookLogin  userInfo={userInfo} />
      </div>
    </div>
  )
}
