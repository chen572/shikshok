import React, { useState } from 'react';
import './App.css';
import VideoCard from './components/VideoCard'
import { useGetProducts } from './hooks/hooks';
import Video from './components/VideoTest/Video';



function App() {
  const [page, setPage] = useState(1)
  const { res, lastProductElementRef } = useGetProducts(page, setPage)
  const { loading, error, data } = res

  return (
    <div className='app'>
      <div className='app__videos'>
        {loading && <div>Loading...</div>}
        {error && <div>error</div>}
        {data.length && data.map(({ _id, videoUrl, store, description, song, likes, reviews, shares }, i) => (
          i + 1 === data.length
            ? <Video
              key={_id}
              productId={_id}
              url={videoUrl}
              channel={store.name}
              song={song}
              likes={likes}
              shares={shares}
              reviews={reviews}
              description={description}
            />
            : <Video
              key={_id}
              productId={_id}
              url={videoUrl}
              channel={store.name}
              song={song}
              likes={likes}
              shares={shares}
              reviews={reviews}
              description={description}
              lastElementRef={lastProductElementRef}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
