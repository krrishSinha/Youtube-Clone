import React from 'react'
import { Box, Stack, Typography } from '@mui/material'
import logo from './logo.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

  const [search, setSearch] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search/${search}`)
    setSearch('')
  }

  return (
    <Stack direction='row' justifyContent='space-between' alignItems='center'
      sx={{ height: '10vh', width: '100%', backgroundColor: '#000000', color: '#EDEADE', position: 'sticky', top: '0', zIndex: '5' }} >

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }} >

        <img src={logo} alt="" style={{ width: '70px', height: '100%' }} />
        <Typography variant='h6' sx={{ marginLeft: '-15px' }} >
          Youtube
        </Typography>

      </Box>

      <Box px={2} >

        <form onSubmit={handleSubmit} >
          <input type="text" placeholder='Search...'
            onChange={(e) => setSearch(e.target.value)}
            value={search}
            style={{ border: 'none', outline: 'none', borderRadius: '10px', padding: '7px', fontWeight: '500' }} />
        </form>

      </Box>

    </Stack>
  )
}

export default Navbar