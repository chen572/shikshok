import React from 'react'
import './AppNavbar.css'

export default function Discover(props) {
  const { clickHandler } = props

  return (
    <div>
      <h3 onClick={clickHandler} className='navbarButton'>
        Discover
      </h3>
    </div>
  )
}
