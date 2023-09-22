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

const DataSource = {
  dataSourceName: "Data Source 1",
  status: "Active",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  dataSource: "Data Source Name",
  id: 1
}


const DataSourceDetail = (props: any) => {

  const { sx, iconSize = 24, avatarSize = 42, } = props

  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12} style={{marginLeft: '10px'}}>
          <h2 style={{color: 'rgb(122 121 127)'}} title={'Error Detail'}>Data Source Detail</h2>
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
                        {DataSource.dataSourceName}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6' >Status:</Typography>
                      <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 3}}>
                        <CustomChip rounded label={DataSource.status} skin='light' color='info' />
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6'>Description:</Typography>
                      <Typography sx={{fontSize:"0.9rem", marginLeft: 2}}>
                        {DataSource.description}
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

        <Grid item md={12}>
          <Card sx={{ position: 'relative'}}>

            <CardContent>
                <Grid container spacing={2} sx={{overflowX: 'scroll'}}>

                  <Grid item md={12}>
                    <Typography variant='h5' sx={{color: '#4f4b4b', marginTop: '20px', marginBottom: '20px'}}>Data Source Files:</Typography>

                  </Grid>

                  <Grid>

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
                </Grid>

            </CardContent>

          </Card>
        </Grid>

      </Grid>

    </div>
  );
};

export default DataSourceDetail;
