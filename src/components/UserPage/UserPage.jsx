import React from 'react'
import {
  Grid,
  Avatar,
  Typography,
  Divider,
  makeStyles,
} from '@material-ui/core'

const useStyles = makeStyles({
  rootGrid: {
    height: '90vh',
    width: '100vw',
  },
  infoGrid: {
    width: '100vw',
  },
  bottomGrid: {
    height: '50%',
    width: '100%',
  },
  divider: {
    backgroundColor: 'black',
    height: 50,
    width: 3,
  },
  avatar: {
    height: 100,
    width: 100,
    marginLeft: 30,
  },
})

function UserPage(props) {
  const { userName, userImg } = props.userInfo
  const { name } = userName
  const { img } = userImg
  const classes = useStyles()

  return (
    <Grid
      container
      className={classes.rootGrid}
      direction='column'
      alignContent='center'
      justify='space-evenly'
    >
      <Grid container direction='column' alignContent='center' justify='center'>
        <Avatar className={classes.avatar} alt={name} src={img} />
        <Typography variant='h4'>{name}</Typography>
      </Grid>
      <Grid item>
        <Grid container className={classes.infoGrid} justify='space-evenly'>
          <Grid item>
            <Typography variant='h6'>0</Typography>
            <Typography variant='caption'>Following</Typography>
          </Grid>
          <Divider
            className={classes.divider}
            flexItem
            orientation='verticle'
          />
          <Grid item>
            <Typography variant='h6'>0</Typography>
            <Typography variant='caption'>Transactions</Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        className={classes.bottomGrid}
        container
        direction='column'
        alignContent='center'
      >
        <Typography variant='h4'>Transactions:</Typography>
      </Grid>
    </Grid>
  )
}

export default UserPage
