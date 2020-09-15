import React from 'react'
import './AppNavbar.css'
import { Link } from 'react-router-dom'

export default function Discover() {
  return (
    <div>
      <Link to='/discover' style={{ textDecoration: 'none' }}>
        <h3 className='navbarButton'>Discover</h3>
      </Link>
    </div>
  )
}
