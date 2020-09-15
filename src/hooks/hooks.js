import React, { useState, useRef, useEffect, useCallback } from 'react'
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined'
import axios from 'axios'

export function useVideoPlay() {
  const [playing, setPlaying] = useState(false)

  const onVideoClick = ({ target }) => {
    if (playing) {
      target.pause()
      setPlaying(false)
    } else {
      target.play()
      setPlaying(true)
    }
  }

  return { onVideoClick }
}

export function useGetProducts() {
  const [res, setRes] = useState({ data: [], error: false })
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(false)
  const [loading, setLoading] = useState(true)

  const observer = useRef()
  const lastProductElementRef = useCallback((node) => {
    if (loading) { return }
    if (observer.current) { observer.current.disconnect() }
    observer.current = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting && hasMore) {
        setPage(page + 1)
      }
    })
    if (node) observer.current.observe(node)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, hasMore])


  useEffect(() => {
    try {
      setLoading(true)
      async function getProducts() {
        return (await axios({
          url: 'http://localhost:3001/api/v1/products/all?page=' + page,
          method: 'GET'
        })).data
      }
      getProducts()
        .then(response => {
          setRes({ data: [...res.data, ...response.data], error: false })
          setHasMore(response.data.length > 0)
          setLoading(false)
        })
    } catch (e) {
      setRes({ data: [], loading: false, error: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page])

  return { res, lastProductElementRef }
}

export function useUpdateVals(props) {
  const { productId, likes, reviews, shares } = props
  const [values, setValues] = useState({ likes, reviews, shares })

  return {
    values,
    updateVals: async (key, value) => {
      setValues({
        ...values,
        [key]: (await axios({
          url: 'http://localhost:3001/api/v1/products/update',
          method: 'put',
          data: {
            id: productId,
            key,
            value
          }
        })).data.data[key]
      })
    }
  }
}

export function useUserInfo() {
  const [userImg, setUserImg] = useState(<PersonOutlineOutlinedIcon fontSize='large' />)
  const [userName, setUserName] = useState('')

  const setImg = async (userId) => {
    console.log((await axios({
      url: `https://graph.facebook.com/v8.0/${userId}/picture`,
    })).data
    )
  }

  return {
    userImg: {
      img: userImg,
      setImg: setUserImg
    },
    userName: {
      name: userName,
      setName: setUserName
    }
  }
}