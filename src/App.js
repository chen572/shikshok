import React from 'react';
import './App.css';
import VideoCard from './components/VideoCard'
import { useGetProducts } from './hooks/hooks';
import Video from './components/VideoTest/Video';


function App() {
  const { loading, error, data } = useGetProducts()

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
