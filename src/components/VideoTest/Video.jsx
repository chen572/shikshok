import React from 'react'
import VideoFooter from './VideoFooter'
import VideoSidebar from './VideoSidebar'
import AppFooter from './AppFooter'
import './Video.css'
import { useVideoPlay } from '../../hooks/hooks'

function Video({
  url,
  channel,
  description,
  song,
  likes,
  messages,
  shares,
  lastElementRef,
}) {
  const { onVideoClick } = useVideoPlay()

  return (
    <div className='video'>
      <video
        className='video__player'
        loop
        autoPlay
        onClick={onVideoClick}
        ref={lastElementRef}
        src={url}
      ></video>
      <VideoFooter channel={channel} description={description} song={song} />
      <VideoSidebar likes={likes} messages={messages} shares={shares} />
      <AppFooter />
    </div>
  )
}

export default Video
