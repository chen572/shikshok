import React from 'react'
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));

export default function VideoNavbar() {
    const classes = useStyles();
    return (
        <div style={{marginLeft: '2vh', marginTop: '2vh'}}>
          <Avatar style={{display: 'inline-block'}} alt="furniture" src="https://cdn.pixabay.com/photo/2016/04/18/13/53/room-1336497__340.jpg"/>
          <span style={{marginLeft: '5%'}}>Furniture TLV</span>
          <Button style={{marginLeft: '5%'}} variant="outlined" color="secondary">Follow</Button>
           <p style={{marginBottom: '0', marginTop: '0'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>
        </div>
    )
}
