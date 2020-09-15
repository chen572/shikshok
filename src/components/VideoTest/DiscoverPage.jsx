import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { Grid, makeStyles, TextField } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

const useStyles = makeStyles({
  rootGrid: {
    height: '100vh',
    width: '100vw',
  },
})

function DiscoverPage() {
  
  const { goBack } = useHistory()
  const classes = useStyles()

  return (
    <Grid container>
      <Autocomplete
        className={classes.rootGrid}
        freeSolo
        disableClearable
        options={['test']}
        openOnFocus
        renderInput={(params) => (
          <TextField {...params} label='Discover' variant='outlined' />
        )}
      />
    </Grid>
  )
}

export default DiscoverPage
