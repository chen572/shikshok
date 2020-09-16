import React from 'react'
import ReactSwipeButton from 'react-swipe-button'

function SwipeToBuy(props) {
  const { handleSuccess } = props

  return (
    <ReactSwipeButton
      text='SWIPE TO CONFIRM'
      text_unlocked='CONFIRMED'
      color='#f00'
      onSuccess={handleSuccess}
    />
  )
}

export default SwipeToBuy
