import React from 'react';
import './App.css';
import VideoCard from './components/VideoCard'
import AppNavbar from './components/AppNavbar'
import { useGetProducts } from './hooks/hooks';
import Video from './components/VideoTest/Video';


// {
//   "success": true,
let data = [
  {
      "_id": "5f5e35576f8f7f1d0c97a196",
      "likes": 67,
      "reviews": 45,
      "shares": 80,
      "name": "Dog",
      "category": "Style",
      "videoUrl": "https://v77.tiktokcdn.com/81de39c2077edfb746046826c0b9958e/5f5e8167/video/tos/useast2a/tos-useast2a-ve-0068c003/2d5321f6a1274746910f20f350cd8b37/?a=1233&br=3558&bt=1779&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009131430230101890660414906C670&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3NuMzQ2bng1djMzNDczM0ApNzQ8OWc7ZWU4NzMzNTo3Z2dsY2VkXmdic2RfLS1iMTZzczEyYGA2LS9jYC00X15eMS06Yw%3D%3D&vl=&vr=",
      "store": {
          "_id": "5f5e351a6f8f7f1d0c97a195",
          "name": "Bikini",
          "avatar": "https://images.pexels.com/photos/1078958/pexels-photo-1078958.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "__v": 0
      },
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "song": "lala",
      "__v": 0
  },
  {
      "_id": "5f5e35b96f8f7f1d0c97a198",
      "likes": 68,
      "reviews": 68,
      "shares": 80,
      "name": "Bus",
      "category": "Home",
      "videoUrl": "https://v77.tiktokcdn.com/dbdb0744fd3b22b54b053154e5cd9027/5f5e3dc6/video/tos/useast2a/tos-useast2a-ve-0068c001/ca880b4fca654bc8a19febe616e5f53b/?a=1233&br=2400&bt=1200&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=2020091309414701019020801332035C01&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=am1vdGRpbjltdzMzNjczM0ApNmc1ZzRlaTtkNzo3ZDtlaWc0b2wzYTZxci5fLS1iMTZzc2AwLjY2Yl82MzYvMF9gLzE6Yw%3D%3D&vl=&vr=",
      "store": {
          "_id": "5f5e35936f8f7f1d0c97a197",
          "name": "Furniture TLV",
          "avatar": "https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "__v": 0
      },
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "song": "lala",
      "__v": 0
  },
  {
      "_id": "5f5e35e56f8f7f1d0c97a199",
      "likes": 67,
      "reviews": 45,
      "shares": 80,
      "name": "Underware",
      "category": "Home",
      "videoUrl": "https://v77.tiktokcdn.com/fdaabcae64e276ca7b9968e5788a7cbd/5f5e8169/video/tos/useast2a/tos-useast2a-ve-0068c002/ec765f96f7b3444096a71d6b8dc1dbc6/?a=1233&br=2602&bt=1301&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009131430240101890731323406C003&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=amZ0bDRwcHE3dzMzZjczM0ApNThpOGc6Z2VmN2g6OzdlZmcvcnIyLmFoM2BfLS1fMTZzc2E1XjBgNWBgXzI1X2FjLmE6Yw%3D%3D&vl=&vr=",
      "store": {
          "_id": "5f5e35936f8f7f1d0c97a197",
          "name": "Furniture TLV",
          "avatar": "https://images.pexels.com/photos/825949/pexels-photo-825949.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
          "__v": 0
      },
      "description": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "song": "lala",
      "__v": 0
  }
]
//}


function App() {
  const { loading, error } = useGetProducts()

  return (
    // <div>
    //   <AppNavbar />
    //   <VideoCard />
    // </div>
    <div className='app'>
      <div className='app__videos'>
        {loading && <div>Loading...</div>}
        {error && <div>error</div>}
        {data.length && data.map(({ _id, videoUrl, store, description, song, likes, reviews, shares }) => (
          <Video
            key={_id}
            url={videoUrl}
            channel={store.name}
            song={song}
            likes={likes}
            shares={shares}
            messages={reviews}
            description={description}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
