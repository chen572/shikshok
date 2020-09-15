import React from 'react'
import './AppFooter.css'
import FacebookLogin from './FacebookLogin'
import ForumIcon from '@material-ui/icons/Forum'

export default function AppFooter(props) {
  const { userInfo } = props

  return (
    <div id='appFooter'>
      <hr></hr>
      <div className='icon-container'>
        <div id='messagesBtn'>
          <ForumIcon fontSize='large' />
        </div>
        <FacebookLogin userInfo={userInfo} />
      </div>
    </div>
  )
}
