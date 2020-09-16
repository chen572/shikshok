import React, { useState } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import SearchIcon from '@material-ui/icons/Search'
import { ButtonBase, Grid, makeStyles, TextField } from '@material-ui/core'
import { useGetCategories } from '../../hooks/hooks'

const useStyles = makeStyles({
  rootGrid: {
    height: '10vh',
    width: '100vw',
    marginTop: '1vh',
  },
})

function DiscoverPage(props) {
  const { loading, data } = useGetCategories()
  const classes = useStyles()
  const [category, setCategory] = useState('all')
  const { setOpen } = props

  const handleChange = ({ target }) => {
    setCategory(target.innerText)
  }

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <Grid container justify='center'>
          <Autocomplete
            className={classes.rootGrid}
            freeSolo
            onChange={handleChange}
            disableClearable
            options={data}
            openOnFocus
            renderInput={(params) => (
              <TextField {...params} label='Discover' variant='outlined' />
            )}
          />
          <ButtonBase onClick={() => setOpen(false)}>
            <SearchIcon />
          </ButtonBase>
        </Grid>
      )}
    </>
  )
}

export default DiscoverPage
