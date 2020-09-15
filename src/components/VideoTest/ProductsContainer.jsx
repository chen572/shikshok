import React from 'react'
import { useGetProducts } from '../../hooks/hooks'
import Category from './Category'
import Video from './Video'

function ProductsContainer() {
  const { res, lastProductElementRef } = useGetProducts()
  const { loading, error, data } = res

  return (
    <div className='app'>
      <Category />
      <div className='app__videos'>
        {loading && <div>Loading...</div>}
        {error && <div>error</div>}
        {data.length &&
          data.map(
            (
              {
                _id,
                videoUrl,
                store,
                description,
                song,
                likes,
                reviews,
                shares,
              },
              i
            ) =>
              i + 1 === data.length ? (
                <Video
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
              ) : (
                <Video
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
              )
          )}
      </div>
    </div>
  )
}

export default ProductsContainer
