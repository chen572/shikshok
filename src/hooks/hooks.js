import { useState, useRef, useEffect, useCallback } from 'react'
import axios from 'axios'

export function useVideoPlay() {
  const [playing, setPlaying] = useState(false)
  const videoRef = useRef()
  // const videoPlayOnShow = useCallback((node) => {
  //   if (videoRef.current) { videoRef.current.disconnect() }
  //   videoRef.current = new IntersectionObserver(([entry]) => {
  //     if (entry.isIntersecting) {
  //       node.play()
  //     } else {
  //       node.pause()
  //     }
  //   })
  //   if (node) videoRef.current.observe(node)
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [])


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPlaying(true)
          videoRef.current.play()
        } else {
          setPlaying(false)
          videoRef.current.pause()
        }
      }
    )
    if (videoRef.current) {
      observer.observe(videoRef.current)
    }
  }, [])

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

export function useGetProducts() {
  const [res, setRes] = useState({ data: [], loading: true, error: false })

  useEffect(() => {
    try {
      async function getProducts() {
        return (await axios({
          url: 'http://localhost:3001/api/v1/products/all',
          method: 'GET'
        })).data
      }
      getProducts()
        .then(response => {
          setRes({ data: response.data, loading: false, error: false })
        })
    } catch (e) {
      setRes({ data: [], loading: false, error: true })
    }
  }, [])

  return res
}

export function useUpdateVals(props) {
  const { productId, likes, reviews, shares } = props
  const [values, setValues] = useState({ likes, reviews, shares })

  return async (key, value) => {
    setValues({
      ...values,
      [key]: (await axios({
        url: 'http://localhost:3001/products/update',
        method: 'PUT',
        data: {
          id: productId,
          key,
          value
        }
      })).data.data
    })
  }
}