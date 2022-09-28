import { Box } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import fetchData from '../utils/fetchData'
import ChannelCard from './ChannelCard'
import Videos from './Videos'
import { Typography } from '@mui/material'


const ChannelPage = () => {

  const [channelDetail, setChannelDetail] = useState(null)
  const [channelVideos, setChannelVideos] = useState(null)
  const { id } = useParams()

  useEffect(() => {

    fetchData(`channels?part=snippet%2Cstatistics&id=${id}`)
      .then((data) => setChannelDetail(data.items[0]))

    fetchData(`search?part=snippet%2Cid&channelId=${id}`)
      .then((data) => setChannelVideos(data.items))
  }, [])

  if (channelVideos == null) return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
      <Typography variant='h6' >
        loading...
      </Typography>
    </Box>
  )


  return (
    <>
      <div style={{ margin: '8px 0', height: '200px', width: '100%', background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,42,143,1) 48%, rgba(9,9,121,1) 100%, rgba(0,212,255,1) 100%)' }}>
      </div>

      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '-100px' }} >
        <ChannelCard video={channelDetail} />
      </Box>

      <Box px={2} sx={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '40px', justifyContent: 'space-evenly' }} >
        <Videos videos={channelVideos} />
      </Box>
    </>
  )
}

export default ChannelPage