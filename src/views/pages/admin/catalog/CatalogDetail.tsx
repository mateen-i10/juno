import React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomChip from "../../../../@core/components/mui/chip";
import Button from "@mui/material/Button";
import CatalogModels from "./CatalogModels";

const Catalog = {
  catalogName: "Data Source 1",
  status: "Active",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  industry: [
    // eslint-disable-next-line react/jsx-key
    <CustomChip label='Industry 1' skin='light' color='info' style={{marginRight: '3px'}}/>,
    // eslint-disable-next-line react/jsx-key
    <CustomChip label='Industry 2' skin='light' color='info' style={{marginRight: '3px'}}/>,
    // eslint-disable-next-line react/jsx-key
    <CustomChip label='Industry 3' skin='light' color='info' />
  ],
  id: 1
}


const CatalogDetail = () => {

  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12} style={{marginLeft: '10px'}}>
          <h2 style={{color: 'rgb(122 121 127)'}} title={'Error Detail'}>Catalog Detail</h2>
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
                        {Catalog.catalogName}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6' >Status:</Typography>
                      <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 3}}>
                        <CustomChip rounded label={Catalog.status} skin='light' color='info' />
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6' >Status:</Typography>
                      <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 3}}>
                        {Catalog.industry}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6'>Description:</Typography>
                      <Typography sx={{fontSize:"0.9rem", marginLeft: 2}}>
                        {Catalog.description}
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
              <Grid container spacing={2}>
                <Grid item md={12}>
                  <CatalogModels />
                </Grid>

              </Grid>

            </CardContent>

          </Card>
        </Grid>

      </Grid>

    </div>
  );
};

export default CatalogDetail;

