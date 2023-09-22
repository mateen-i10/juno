import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// @ts-ignore
import VideoImg from '../../../../../../public/images/videoImg.png'

const videosList = [
  {
    id: 1,
    name: 'Video 1',
    image: VideoImg,
    link: '',
    description: 'Some quick example to Guide.'
  },
  {
    id: 2,
    name: 'Video 2',
    image: VideoImg,
    link: '',
    description: 'Some quick example to Guide.'
  },
  {
    id: 3,
    name: 'Video 3',
    image: VideoImg,
    link: '',
    description: 'Some quick example to Guide.'
  },
  {
    id: 4,
    name: 'Video 4',
    image: VideoImg,
    link: '',
    description: 'Some quick example to Guide.'
  },
  {
    id: 5,
    name: 'Video 5',
    image: VideoImg,
    link: '',
    description: 'Some quick example to Guide.'
  }
]

const LeftCol = () => {


  return (
    <div>
      {videosList && videosList.map(v => {
        return <div key={v.id}>
          <Grid container spacing={6}>
            <Grid item md={12} sx={{ pb: 4 }}>
              <Card style={{marginRight: '20px', marginLeft: '20px'}}>
                {/*<CardMedia sx={{ height: '8.5625rem'}} image={`${v.image}`}/>*/}
                <img width='100%' height='100%' style={{objectFit: 'contain', borderRadius:'10px', filter: 'brightness(55%)'}} alt='Juno Labs' src='/images/videoImg.png' />
                <CardContent>
                  <Typography variant='h4' sx={{ mb: 2 }}>
                    {v.name}
                  </Typography>
                  <Typography variant='body2'>
                    {v.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
        }) }
    </div>
  );
};

export default LeftCol;
