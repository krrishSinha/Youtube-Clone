import { Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import fetchData from '../utils/fetchData'
import Videos from './Videos'

const SearchPage = () => {

  const { searchTerm } = useParams();
  const [videos, setVideos] = useState(null);

  useEffect(() => {
    fetchData(`search?q=${searchTerm}&part=snippet%2Cid`)
      .then((data) => setVideos(data.items))

  }, [searchTerm])

  if (videos == null) return (
    <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
      <Typography variant='h6' >
        loading...
      </Typography>
    </Box>
  )


  return (
    <Stack mt={2} >
      <Typography mx={2} variant='h6' sx={{ textAlign: { md: 'left', xs: 'center' } }}  >
        Search Results for:  <span style={{ color: 'red' }}> {searchTerm} </span>
      </Typography>

      <Box px={1} py={3} sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: { md: 'start', xs: 'space-evenly' }, gap: '10px' }} >
        <Videos videos={videos} />
      </Box>
    </Stack>
  )
}

export default SearchPage