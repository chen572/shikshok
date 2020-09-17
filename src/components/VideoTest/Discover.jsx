import React from 'react'
import './AppNavbar.css'
import SearchIcon from '@material-ui/icons/Search';

export default function Discover(props) {
  const { clickHandler } = props

  return (
    <div onClick={clickHandler}>
      <SearchIcon fontSize='large' />
      <p style={{fontSize: 'x-small', margin: '0'}} className='navbarButton'>
        Discover
      </p>
    </div>
  )
}
