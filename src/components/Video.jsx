import React from 'react';
import { useVideoPlay } from '../hooks/hooks';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    maxWidth: 350,
  },
});

export default function SimpleCard() {
  const { videoRef, onVideoClick } = useVideoPlay();
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <video
      style={{height: '50vh'}}
      src={
        'https://v77.tiktokcdn.com/dbdb0744fd3b22b54b053154e5cd9027/5f5e3dc6/video/tos/useast2a/tos-useast2a-ve-0068c001/ca880b4fca654bc8a19febe616e5f53b/?a=1233&br=2400&bt=1200&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020091309414701019020801332035C01&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=am1vdGRpbjltdzMzNjczM0ApNmc1ZzRlaTtkNzo3ZDtlaWc0b2wzYTZxci5fLS1iMTZzc2AwLjY2Yl82MzYvMF9gLzE6Yw%3D%3D&vl=&vr='
      }
      loop
      ref={videoRef}
      onClick={onVideoClick}
    ></video>
  );
}
