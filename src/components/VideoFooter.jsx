import React from 'react'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import SmsOutlinedIcon from '@material-ui/icons/SmsOutlined'
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined'
import { IconButton } from '@material-ui/core'
import { useUpdateVals } from '../hooks/hooks'

export default function VideoFooter(props) {
  const { likes, reviews, shares } = props
  const update = useUpdateVals(props)

  const handleClick = async ({ target }) => {
    console.log(target.id)
    props[target.id] = await update(target.id, props[target.id] + 1)
  }

  return (
    <div>
      <IconButton onClick={handleClick} style={{ marginLeft: '2vh' }}>
        <FavoriteBorderIcon id='likes' />
      </IconButton>
      <span style={{ fontSize: '3vh' }}>{likes}</span>
      <IconButton onClick={handleClick} style={{ marginLeft: '2vh' }}>
        <SmsOutlinedIcon id='reviews' />
      </IconButton>
      <span style={{ fontSize: '3vh' }}>{reviews}</span>
      <IconButton onClick={handleClick}>
        <ShareOutlinedIcon id='shares' />
      </IconButton>
      <span style={{ fontSize: '3vh' }}>{shares}</span>
    </div>
  )
}
