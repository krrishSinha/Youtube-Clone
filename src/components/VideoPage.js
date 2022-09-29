import { Box, Stack } from '@mui/system'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import ReactPlayer from 'react-player/youtube'
import { Typography } from '@mui/material'
import fetchData from '../utils/fetchData'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import Videos from './Videos'

const VideoPage = () => {

  const { id } = useParams()
  const [videoDetail, setVideoDetail] = useState(null)
  const [videos, setVideos] = useState(null)

  useEffect(() => {

    fetchData(`videos?part=contentDetails%2Csnippet%2Cstatistics&id=${id}`)
      .then((data) => setVideoDetail(data.items[0]))

    fetchData(`search?relatedToVideoId=${id}&part=id%2Csnippet&type=video`)
      .then((data) => setVideos(data.items))

  }, [videoDetail])


  if (videoDetail === null) return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
      <Typography variant='h6' >
        loading...
      </Typography>
    </Box>
  )

  const { snippet: { title, channelTitle, channelId }, statistics: { viewCount, likeCount } } = videoDetail;

  return (
    <Stack direction={{ md: 'row', sm: 'column' }}  >

      <Box sx={{ width: { md: '70%', sm: '100%' } }}>
        <Box px={2} sx={{ position: { md: 'fixed', sm: 'inherit' }, width: { md: '70%', sm: '90%' } }} >
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls width="100%" />

          <Typography mt={2} variant='h6' > {title} </Typography>

          <Stack direction='row' justifyContent='space-between' mt={1} >

            <Link to={`/channel/${channelId}`} style={{ textDecoration: 'none' }} >
              <Typography variant='body1' color='gray' >  {channelTitle} </Typography>
            </Link>

            <Stack direction='row' gap={2} >
              <Typography variant='body2' color='gray' > {parseInt(viewCount).toLocaleString()} Views </Typography>
              <Typography variant='body2' color='gray' > {parseInt(likeCount).toLocaleString()} Likes </Typography>
            </Stack>

          </Stack>
        </Box>
      </Box>

      <Box sx={{ width: { md: '30%', xs: '100%' }, marginTop: { md: '0', xs: '50px' } }} >
        <Typography variant='h6' sx={{ textAlign: 'center' }} > <span style={{ color: 'red' }} > Recommended </span> Videos </Typography>

        <Box sx={{
          display: 'flex', flexWrap: 'wrap', flexDirection: { md: 'column', xs: 'row' }, gap: '10px',
          alignItems: 'center', justifyContent: 'space-evenly', marginTop: '20px'
        }} >

          <Videos videos={videos} width2='100%' />
        </Box>
      </Box>

    </Stack>
  )
}

export default VideoPage