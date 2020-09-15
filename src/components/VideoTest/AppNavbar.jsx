import React from 'react'
import ForYou from './ForYou'
import Following from './Following'
import Discover from './Discover'

export default function AppNavbar() {
  return (
    <div id='navbarButtonDiv'>
      <Following />
      <ForYou />
      <Discover />
    </div>
  )
}
