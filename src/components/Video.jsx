import React from 'react';
import { useVideoPlay } from '../hooks/hooks';




export default function SimpleCard(props) {
  const { videoRef, onVideoClick } = useVideoPlay();
  const { videoUrl } = props

  return (
    <video
      style={{height: '50vh', marginTop: '1vh', marginLeft: '2vh'}}
      src={videoUrl}
      loop
      ref={videoRef}
      onClick={onVideoClick}
    ></video>
  );
}
