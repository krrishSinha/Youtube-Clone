import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import categories from '../utils/utils'

const SideBar = ({setSelectedCategory, selectedCategory}) => {
  return (
    <Box  px={1} my={2}
     sx={{display: {md: 'block', xs: 'flex'}, overflowX: { md: 'hidden', xs: 'scroll' }, gap:{md: '0px', xs: '10px' }}} >

        {categories.map((category)=> {
            return (
                <Box my={1} p={1.5}  
                sx={{backgroundColor:  category.name == selectedCategory ? 'red' : '#000'   , borderRadius: '18px', cursor: 'pointer',
                '&:hover': {
                  background: "red",
                  }
                }}
                onClick={()=>{
                  setSelectedCategory(category.name)
                }}
                >
                    <Typography variant='body1' color='#f1f1f1'
                     sx={{opacity: category.name == selectedCategory ? '1' : '0.8' }}>
                        {category.name}
                    </Typography>
                </Box>
            )
        } )}

    </Box>
  )
}

export default SideBar