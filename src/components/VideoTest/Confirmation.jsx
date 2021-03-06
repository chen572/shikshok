import React, { useState } from 'react';
import './Confirmation.css';
import Avatar from '@material-ui/core/Avatar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import RemoveTwoToneIcon from '@material-ui/icons/RemoveTwoTone';
import AddTwoToneIcon from '@material-ui/icons/AddTwoTone';
import Slider from '@material-ui/core/Slider';

const marks = [
  {
    value: 0,
    label: (
      <Avatar
        alt='post'
        src='data:image/jpeg;base64,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'
      />
    ),
  },
  {
    value: 50,
    label: (
      <Avatar
        alt='ups'
        src='data:image/png;base64,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'
      />
    ),
  },
  {
    value: 100,
    label: (
      <Avatar
        alt='dhl'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQn_SsKPsdpu6ytwrz9nE13-kRd-ClonlB2EA&usqp=CAU'
      />
    ),
  },
];

function valuetext(value) {
  return `+${value}$`;
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '90%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  container: {
    marginBottom: 25,
  },
}));

export default function Confirmation() {
  const [quantity, setQuantity] = useState(1);
  const classes = useStyles();

  const changeQuantity = (e) => {
    if (e.target.id === 'plus') {
      setQuantity(quantity + 1);
    } else if (e.target.id === 'minus' && quantity > 0) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <Container className={classes.container} component='main' maxWidth='xs'>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component='h1' variant='h5'>
          Checkout
        </Typography>
        <br></br>
        <form className={classes.form} noValidate>
          <Typography id='discrete-slider-custom' gutterBottom>
            Quantity
          </Typography>

          <div className='quantity'>
            <RemoveTwoToneIcon
              id='minus'
              onClick={changeQuantity}
              color='primary'
              fontSize='large'
            />
            <span>{quantity}</span>
            <AddTwoToneIcon
              id='plus'
              onClick={changeQuantity}
              color='primary'
              fontSize='large'
            />
          </div>
          <br></br>
          <Typography id='discrete-slider-custom' gutterBottom>
            Delivery option
          </Typography>
          <Slider
            track={false}
            defaultValue={50}
            getAriaValueText={valuetext}
            aria-labelledby='discrete-slider-custom'
            step={50}
            valueLabelDisplay='auto'
            marks={marks}
          />
        </form>
      </div>
    </Container>
  );
}
