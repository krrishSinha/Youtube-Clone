import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';


const ChannelCard = ({ video }) => {


    if (video == null) return (
        <Box sx={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
            <Typography variant='h6' >
                loading...
            </Typography>
        </Box>
    )

    const { id: { channelId }, snippet: { channelTitle, title, thumbnails: { high: { url } } } } = video;

    return (
        <>

            <Link to={`/channel/${channelId}`} style={{ textDecoration: 'none' }} >

                <Box sx={{ maxWidth: 200, minHeight: 240 }} >
                    <CardContent>
                        <CardMedia
                            image={url}
                            alt={'ejudvb'}
                            sx={{ borderRadius: '50%', height: '180px', width: '180px', border: '1px solid #e3e3e3' }}
                        />
                    </CardContent>

                    <Typography variant="h6" color="#BBC4C2" sx={{ textAlign: 'center', marginTop: '8px' }} >
                        {title}
                    </Typography>

                    {/* {subs && <Typography variant='body2' color='#BBC4C2' sx={{ textAlign: 'center', marginTop: '10px' }} >
                        {parseInt(subscriberCount).toLocaleString()} Subscribers
                    </Typography>} */}
                </Box>

            </Link>

        </>
    )

}

export default ChannelCard