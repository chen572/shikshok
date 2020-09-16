import React, { useState } from 'react'
import ForYou from './ForYou'
import Following from './Following'
import Discover from './Discover'
import { Drawer } from '@material-ui/core'
import DiscoverPage from './DiscoverPage'

export default function AppNavbar() {
  const [open, setOpen] = useState(false)

  const clickHandler = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div id='navbarButtonDiv'>
      <Drawer anchor='top' onClose={handleClose} open={open}>
        <DiscoverPage setOpen={setOpen} />
      </Drawer>
      <Following />
      <ForYou />
      <Discover clickHandler={clickHandler} />
    </div>
  )
}
