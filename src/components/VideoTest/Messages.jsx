import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import './Messages.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

let MessagesArr = [
  {
    avatar:
      'https://images.pexels.com/photos/634538/pexels-photo-634538.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: '@Bags TLV',
    lastMessage: 'Hello Dan, how are you?',
  },
  {
    avatar:
      'https://images.pexels.com/photos/267202/pexels-photo-267202.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: '@The Shoes',
    lastMessage: 'Thanks for your order',
  },
  {
    avatar:
      'https://images.pexels.com/photos/236915/pexels-photo-236915.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: '@Watches',
    lastMessage: 'Your order cancelled',
  },
  {
    avatar:
      'https://images.pexels.com/photos/325876/pexels-photo-325876.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
    name: '@The suit shop',
    lastMessage: 'Happy new year',
  },
];

export default function Messages() {
  const classes = useStyles();

  return (
    <div>
      <h1>Messages</h1>
      <hr></hr>
      {MessagesArr.map((message) => (
        <Card >
          <div className={classes.root}>
            <Avatar
              style={{ display: 'flex' }}
              alt={message.name}
              src={message.avatar}
            />
            <h3>{message.name}</h3>
          </div>
          <p>{message.lastMessage}</p>
        </Card>
      ))}
    </div>
  );
}
