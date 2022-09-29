import React from 'react'
import ChannelCard from './ChannelCard'
import VideoCard from './VideoCard'
import { Box, Typography } from '@mui/material'


const Videos = ({ videos, width2 }) => {

    if(videos==null) return (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Typography variant='h6' >
                loading...
            </Typography>
        </Box>
    )

    return (
        <>
            {
                videos.map((video) => {
                    return (
                        <>
                            {video.id.videoId && <VideoCard video={video} width2={width2} />}
                            {video.id.channelId && <ChannelCard video={video} />}
                        </>
                    )
                })
            }
        </>
    )
}

export default Videos