import React from 'react'
import { Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import { Link } from 'react-router-dom';

const VideoCard = ({ video, width2 }) => {
    
    const {id: {videoId}, snippet: {title, channelTitle, thumbnails: {high: {url} } } } = video;


    return (
        <>
            <Link to={`/video/${videoId}`} style={{ textDecoration: 'none' }} >
                <Card sx={{ width: 240 , minHeight: 270, backgroundColor: '#191919', color: '#fff' }} >
                    <CardMedia
                        component="img"
                        image={url}
                        height='100'
                        alt={channelTitle}
                    />

                    <CardContent p={0} >
                        <Typography gutterBottom variant="subtitle1" >
                            {title.slice(0, 55)}
                        </Typography>
                        <Typography variant="body2" color="#BBC4C2" fontWeight='500' >
                            {channelTitle}
                        </Typography>
                    </CardContent>
                </Card>

            </Link>

        </>
    )
}

export default VideoCard