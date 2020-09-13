import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

export default function VideoNavbar(props) {
  const { avatar, productName, storeName, productDescription } = props;
  return (
    <div style={{ marginLeft: '2vh', marginTop: '2vh' }}>
      <Avatar
        style={{ display: 'inline-block' }}
        alt='furniture'
        src={avatar}
      />
      <span style={{ marginLeft: '5%', fontSize: '2.5vh' }}>{productName}</span>
      <Button
        style={{ marginLeft: '10vh' }}
        variant='outlined'
        color='secondary'
      >
        Follow
      </Button>
      <p>{storeName}</p>
      <p style={{ marginBottom: '0', marginTop: '0' }}>{productDescription}</p>
    </div>
  );
}
