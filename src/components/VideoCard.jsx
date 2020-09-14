import React from 'react'
import VideoFooter from './VideoFooter'
import VideoNavbar from './VideoNavbar'
import Video from './Video'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import { useGetProducts } from '../hooks/hooks'

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    maxWidth: 350,
  },
})

export default function SimpleCard() {
  const classes = useStyles()
  const { loading, error, data } = useGetProducts()

  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>Error</div>}
      {data.map((product) => (
        <Card
          style={{ margin: 'auto', marginTop: '2%' }}
          className={classes.root}
          key={product._id}
        >
          <VideoNavbar
            avatar={product.store.avatar}
            productName={product.name}
            storeName={product.store.name}
            productDescription={product.description}
          />
          <Video videoUrl={product.videoUrl} />
          <CardActions>
            <VideoFooter
              productId={product._id}
              likes={product.likes}
              reviews={product.reviews}
              shares={product.shares}
            />
          </CardActions>
        </Card>
      ))}
    </>
  )
}
