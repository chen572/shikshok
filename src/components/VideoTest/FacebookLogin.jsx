import React, { useState } from 'react';
import { FacebookProvider, LoginButton } from 'react-facebook';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import Avatar from '@material-ui/core/Avatar';
import './FacebookLogin.css';

function FacebookLogin() {
  const [userImg, setUserImg] = useState(
    <PersonOutlineOutlinedIcon fontSize='large' />
  );

  const handleResponse = (data) => {
    console.log(data);
    setUserImg(<Avatar alt='user' src={data.profile.picture.data.url} />);
  };

  const handleError = (error) => {
    //setState({ error });
  };

  return (
    <div>
      <FacebookProvider appId={process.env.REACT_APP_FB_API_KEY}>
        <LoginButton
          className='fbButton'
          scope='email'
          onCompleted={handleResponse}
          onError={handleError}
        >
          {userImg}
        </LoginButton>
      </FacebookProvider>
    </div>
  );
}

export default FacebookLogin;
