import React, { useEffect, useState } from 'react'
import './AppFooter.css'
import FacebookLogin from './FacebookLogin'
import ForumIcon from '@material-ui/icons/Forum'
import HomeIcon from '@material-ui/icons/Home'
import { Link, useLocation } from 'react-router-dom'

export default function AppFooter(props) {
  const { pathname } = useLocation()
  const { userInfo } = props
  const [dark, setDark] = useState(false)

  useEffect(() => {
    if (pathname !== '/products') {
      setDark(true)
    } else {
      setDark(false)
    }
  }, [pathname])

  return (
    <div id='appFooter'>
      <hr></hr>
      <div className='icon-container'>
        <Link to='/messages'>
          <div className='appFooterBtn'>
            <ForumIcon id={dark ? 'dark' : ''} fontSize='large' />
          </div>
        </Link>
        <Link to='/products'>
          <div
            style={{ marginLeft: 20 }}
            id={dark ? 'dark' : ''}
            className='appFooterBtn'
          >
            <HomeIcon fontSize='large' />
          </div>
        </Link>
        <FacebookLogin dark={dark} userInfo={userInfo} />
      </div>
    </div>
  )
}
