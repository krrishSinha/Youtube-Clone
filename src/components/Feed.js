import { Box, Typography } from '@mui/material'
import { Stack } from '@mui/system'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import SideBar from './SideBar'
import VideoCard from './VideoCard'
import fetchData from '../utils/fetchData'
import categories from '../utils/utils'
import ChannelCard from './ChannelCard'
import Videos from './Videos'

const Feed = () => {

  const [videos, setVideos] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('New');

  useEffect(() => {

    fetchData(`search?q=${selectedCategory}&part=snippet%2Cid`).then((data) => {
      setVideos(data.items)
    });

  }, [selectedCategory]);


  if (videos.length == 0) return (
    <Box sx={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
      <Typography variant='h6' >
      loading...
    </Typography>
    </Box>
  )


  return (
    <Stack gap={1} justifyContent='space-between'  direction={{ sm: 'column', md: 'row' }}>
      <Box sx={{width: {md: '15%', xs: '100%', borderRight: '1px solid #f2f2f2' }}} >
        <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}  />
      </Box>

      <Box sx={{width: '90%'}}>
        <Typography variant='h4' px={4} my={2} sx={{textAlign: {md: 'left', xs: 'center' }}} >
         <span style={{color: 'red'}} > {selectedCategory} </span> Videos
        </Typography>

        <Box px={2} my={1} sx={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: { md: 'space-evenly', xs: 'center' } }} >
          <Videos videos={videos}/>
        </Box>
      </Box>
    </Stack>
  )
}

export default Feed