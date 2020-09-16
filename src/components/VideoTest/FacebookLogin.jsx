import React, { useState } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import Avatar from '@material-ui/core/Avatar';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import './AppFooter.css';
import { ButtonBase } from '@material-ui/core';
import { Link } from 'react-router-dom';

function FacebookLogin(props) {
  const { userInfo, dark } = props;
  const { userImg, userName } = userInfo;
  const [loggedIn, setLoggedIn] = useState(false);

  const handleResponse = (data) => {
    userName.setName(data.profile.name);
    userImg.setImg(data.profile.picture.data.url);
    setLoggedIn(true);
  };

  return (
    <FacebookProvider appId={process.env.REACT_APP_FB_API_KEY}>
      {loggedIn ? (
        <ButtonBase>
          <Link style={{ textDecoration: 'none' }} to='/me'>
            <PersonOutlineOutlinedIcon
              style={{ color: 'white', paddingBottom: 0.1 }}
              fontSize='large'
            />
          </Link>
        </ButtonBase>
      ) : (
        <LoginButton
          className='fbButton'
          scope='email'
          onCompleted={handleResponse}
        >
          <PersonOutlineOutlinedIcon fontSize='large' />
        </LoginButton>
      )}
    </FacebookProvider>
  );
}

export default FacebookLogin;
