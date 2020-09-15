import React, { useState } from 'react'
import { FacebookProvider, LoginButton } from 'react-facebook'
import Avatar from '@material-ui/core/Avatar'
import './AppFooter.css'
import { ButtonBase } from '@material-ui/core'
import { Link } from 'react-router-dom'

function FacebookLogin(props) {
  const { userImg, userName } = props.userInfo
  const [loggedIn, setLoggedIn] = useState(false)

  const handleResponse = (data) => {
    userName.setName(data.profile.name)
    userImg.setImg(data.profile.picture.data.url)
    setLoggedIn(true)
  }

  return (
    <FacebookProvider appId={process.env.REACT_APP_FB_API_KEY}>
      {loggedIn ? (
        <ButtonBase>
          <Link to='/me'>
            <Avatar
              alt='user'
              src={userImg.img}
            />
          </Link>
        </ButtonBase>
      ) : (
        <LoginButton
          className='fbButton'
          scope='email'
          onCompleted={handleResponse}
        >
          {userImg.img}
        </LoginButton>
      )}
    </FacebookProvider>
  )
}

export default FacebookLogin
