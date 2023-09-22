import React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomChip from "../../../../@core/components/mui/chip";
import Button from "@mui/material/Button";

import CustomAvatar from "../../../../@core/components/mui/avatar";
import Icon from "../../../../@core/components/icon";
import ShortDemo from "./components/ShortDemo";

// @ts-ignore
import VideoImg from "../../../../../public/images/videoImg.png";

const Model = {
  modelName: "Model 1",
  status: "Active",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  catalog: [
    // eslint-disable-next-line react/jsx-key
    <CustomChip label='Catalog 1' skin='light' color='info' style={{marginRight: '3px'}}/>,
    // eslint-disable-next-line react/jsx-key
    <CustomChip label='Catalog 2' skin='light' color='info' style={{marginRight: '3px'}}/>,
    // eslint-disable-next-line react/jsx-key
    <CustomChip label='Catalog 3' skin='light' color='info' />
  ],
  id: 1
}


const videosList = [
  {
    id: 1,
    name: 'Video 1',
    image: VideoImg,
    link: '',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'

  },
  {
    id: 2,
    name: 'Video 2',
    image: VideoImg,
    link: '',
    description: 'Lorem Ipsum is simply dummy text.'
  },
  {
    id: 3,
    name: 'Video 3',
    image: VideoImg,
    link: '',
    description: 'Lorem Ipsum is simply dummy text.'
  },
  {
    id: 4,
    name: 'Video 4',
    image: VideoImg,
    link: '',
    description: 'Lorem Ipsum is simply dummy text.'
  },
  {
    id: 5,
    name: 'Video 5',
    image: VideoImg,
    link: '',
    description: 'Lorem Ipsum is simply dummy text.'
  }
]

const ModelDetail = (props: any) => {

  const { sx, iconSize = 24, avatarSize = 42, } = props

  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12} style={{marginLeft: '10px'}}>
          <h2 style={{color: 'rgb(122 121 127)'}} title={'Error Detail'}>Model Detail</h2>
        </Grid>
      </Grid>

      <Grid container spacing={6}>

        <Grid item md={12}>
          <Card sx={{ position: 'relative'}}>

            <CardContent>
              <Box
                sx={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  marginTop: -4,
                  justifyContent: 'space-between'
                }}
              >
                <Grid container spacing={2}>
                  <Typography variant='h5' sx={{color: '#4f4b4b', marginTop: '20px', marginBottom: '20px'}}>Data Source Info:</Typography>
                  <Grid item md={12}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6' >Data Source Name:</Typography>
                      <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 3}}>
                        {Model.modelName}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6' >Status:</Typography>
                      <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 3}}>
                        <CustomChip rounded label={Model.status} skin='light' color='info' />
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6' >Status:</Typography>
                      <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 3}}>
                        {Model.catalog}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6'>Description:</Typography>
                      <Typography sx={{fontSize:"0.9rem", marginLeft: 2}}>
                        {Model.description}
                      </Typography>
                    </Box>

                  </Grid>

                </Grid>

              </Box>
            </CardContent>

            <Grid  md={12} sx={{ textAlign: 'left', padding: '20px'}}>
              <Button variant='outlined' color='error' sx={{marginRight: '10px'}}>Deactivate</Button>

              <Button variant='contained' sx={{marginRight: '10px'}}>Edit</Button>

              <Button variant='outlined' color='error' sx={{marginRight: '10px'}}>Delete</Button>
            </Grid>

          </Card>
        </Grid>

        <Grid container spacing={6}>
          <Grid item xs={12}>
            <ShortDemo />
          </Grid>
        </Grid>

        <Grid item md={12}>
          <Card sx={{ position: 'relative'}}>
            <CardContent>
              <Grid container spacing={2} sx={{overflowX: 'scroll'}}>
                <Grid item md={12}>
                  <Typography variant='h5' sx={{color: '#4f4b4b', marginTop: '20px', marginBottom: '20px'}}>Videos</Typography>
                </Grid>

                <div className="card-container">

                  {videosList && videosList.map(v => {
                    return <div key={v.id}>

                          <Card className='cardScrollVideo' style={{marginRight: '20px', marginLeft: '20px'}}>
                            <img width='100%' height='100%' style={{objectFit: 'contain', filter: 'brightness(55%)'}} alt='Juno Labs' src='/images/videoImg.png' />
                            <CardContent>
                              <Typography variant='h4' sx={{ mb: 2 }}>
                                {v.name}
                              </Typography>
                              <Typography variant='body2'>
                                {v.description}
                              </Typography>
                            </CardContent>
                          </Card>
                    </div>
                  }) }
                </div>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item md={12}>
          <Card sx={{ position: 'relative'}}>
            <CardContent>
              <Grid container spacing={2} sx={{overflowX: 'scroll'}}>
                <Grid item md={12}>
                  <Typography variant='h5' sx={{color: '#4f4b4b', marginTop: '20px', marginBottom: '20px'}}>Attachment Files</Typography>

                </Grid>
                  <div className="card-container">
                    <Card className='cardScroll' sx={{ ...sx}}>
                      <CardContent className='cardCon' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <CustomAvatar skin='light'  sx={{ mb: 2, width: avatarSize, height: avatarSize }}>
                          <Icon icon='tabler:file' fontSize={iconSize} />
                        </CustomAvatar>
                        <Typography variant='h5' sx={{ mb: 2 }}>
                          File 1
                        </Typography>
                        <Typography variant='body2'>version: 0.1</Typography>
                      </CardContent>
                    </Card>


                    <Card className='cardScroll' sx={{ ...sx}}>
                      <CardContent className='cardCon' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <CustomAvatar skin='light' sx={{ mb: 2, width: avatarSize, height: avatarSize }}>
                          <Icon icon='tabler:file' fontSize={iconSize} />
                        </CustomAvatar>
                        <Typography variant='h5' sx={{ mb: 2 }}>
                          File 2
                        </Typography>
                        <Typography variant='body2'>version: 0.1</Typography>
                      </CardContent>
                    </Card>


                    <Card className='cardScroll' sx={{ ...sx}}>
                      <CardContent className='cardCon' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <CustomAvatar skin='light' sx={{ mb: 2, width: avatarSize, height: avatarSize }}>
                          <Icon icon='tabler:file' fontSize={iconSize} />
                        </CustomAvatar>
                        <Typography variant='h5' sx={{ mb: 2 }}>
                          File 3
                        </Typography>
                        <Typography variant='body2'>version: 0.1</Typography>
                      </CardContent>
                    </Card>


                    <Card className='cardScroll' sx={{ ...sx }}>
                      <CardContent className='cardCon' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <CustomAvatar skin='light' sx={{ mb: 2, width: avatarSize, height: avatarSize }}>
                          <Icon icon='tabler:file' fontSize={iconSize} />
                        </CustomAvatar>
                        <Typography variant='h5' sx={{ mb: 2 }}>
                          File 4
                        </Typography>
                        <Typography variant='body2'>version: 0.1</Typography>
                      </CardContent>
                    </Card>


                    <Card className='cardScroll' sx={{ ...sx }}>
                      <CardContent className='cardCon' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <CustomAvatar skin='light' sx={{ mb: 2, width: avatarSize, height: avatarSize }}>
                          <Icon icon='tabler:file' fontSize={iconSize} />
                        </CustomAvatar>
                        <Typography variant='h5' sx={{ mb: 2 }}>
                          File 5
                        </Typography>
                        <Typography variant='body2'>version: 0.1</Typography>
                      </CardContent>
                    </Card>


                    <Card className='cardScroll' sx={{ ...sx }}>
                      <CardContent className='cardCon' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <CustomAvatar skin='light' sx={{ mb: 2, width: avatarSize, height: avatarSize }}>
                          <Icon icon='tabler:file' fontSize={iconSize} />
                        </CustomAvatar>
                        <Typography variant='h5' sx={{ mb: 2 }}>
                          File 6
                        </Typography>
                        <Typography variant='body2'>version: 0.1</Typography>
                      </CardContent>
                    </Card>



                    <Card className='cardScroll' sx={{ ...sx }}>
                      <CardContent className='cardCon' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <CustomAvatar skin='light'  sx={{ mb: 2, width: avatarSize, height: avatarSize }}>
                          <Icon icon='tabler:file' fontSize={iconSize} />
                        </CustomAvatar>
                        <Typography variant='h5' sx={{ mb: 2 }}>
                          File 7
                        </Typography>
                        <Typography variant='body2'>version: 0.1</Typography>
                      </CardContent>
                    </Card>


                    <Card className='cardScroll' sx={{ ...sx }}>
                      <CardContent className='cardCon' sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                        <CustomAvatar skin='light'  sx={{ mb: 2, width: avatarSize, height: avatarSize }}>
                          <Icon icon='tabler:file' fontSize={iconSize} />
                        </CustomAvatar>
                        <Typography variant='h5' sx={{ mb: 2 }}>
                          File 7
                        </Typography>
                        <Typography variant='body2'>version: 0.1</Typography>
                      </CardContent>
                    </Card>

                  </div>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

    </div>
  );
};

export default ModelDetail;
