import React from 'react'
import ReactSwipeButton from 'react-swipe-button'
import './SwipeToBuy.css'

function SwipeToBuy(props) {
  const { handleSuccess } = props

  return (
    <div className='swiper'>
      <ReactSwipeButton
        text='SWIPE TO CONFIRM'
        text_unlocked='CONFIRMED'
        color='#008000'
        onSuccess={handleSuccess}
      />
    </div>
  )
}

export default SwipeToBuy
