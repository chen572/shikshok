import React from 'react'
import { Grid, makeStyles, TextField } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles({
  input: {
    width: '90%',
  },
  icon: {
    width: '10%',
  },
})

function DirectMessage(props) {
  const { storeName } = props
  const classes = useStyles()

  return (
    <Grid container justify='center' alignItems='center'>
      <Grid item className={classes.input}>
        <TextField
          variant='outlined'
          fullWidth
          helperText={`Send a direct message to ${storeName}`}
        />
      </Grid>
      <Grid item className={classes.icon}>
        <SendIcon />
      </Grid>
    </Grid>
  )
}

export default DirectMessage
