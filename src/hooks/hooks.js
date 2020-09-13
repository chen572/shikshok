import { useState, useRef } from 'react'

export function useVideoPlay() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef()

  const onVideoClick = () => {
    if (playing) {
      videoRef.current.pause()
      setPlaying(false)
    } else {
      videoRef.current.play()
      setPlaying(true)
    }
  }

  return { videoRef, onVideoClick }
}