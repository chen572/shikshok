import React, { useState } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'
import SearchIcon from '@material-ui/icons/Search'
import { Grid, makeStyles, TextField } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useGetCategories } from '../../hooks/hooks'

const useStyles = makeStyles({
  rootGrid: {
    height: '90vh',
    width: '100vw',
    marginTop: '1vh',
  },
})

function DiscoverPage() {
  const { loading, data } = useGetCategories()
  const classes = useStyles()
  const [category, setCategory] = useState('all')

  const handleChange = ({ target }) => {
    setCategory(target.innerText)
  }

  return (
    <>
      {loading ? (
        <div>Loading</div>
      ) : (
        <Grid container justify='center'>
          <Link to={`/products/${category}`}>
            <SearchIcon />
          </Link>
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
        </Grid>
      )}
    </>
  )
}

export default DiscoverPage
