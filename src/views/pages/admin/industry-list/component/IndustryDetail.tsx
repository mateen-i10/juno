import React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomChip from "../../../../../@core/components/mui/chip";
import Button from "@mui/material/Button";
import {appRoutes} from "../../../../../routes/client-app-routes";
import IndustryCatalogTable from "./IndustryCatalogTable";


const DataSource = {
  dataSourceName: "Organization 1",
  status: "Active",
  description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  dataSource: "Data Source Name",
  id: 1
}
const IndustryDetail = () => {

  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12} style={{marginLeft: '10px',  marginBottom: 10}}>
          <Typography fontSize={23} fontWeight={600} color='secondary'>Industry Detail</Typography>
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
                  <Typography variant='h5' sx={{color: '#4f4b4b', marginTop: '20px', marginBottom: '20px'}}>Industry Info:</Typography>
                  <Grid item md={12}>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6' >Industry Name:</Typography>
                      <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 3}}>
                        {DataSource.dataSourceName}
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6' >Status:</Typography>
                      <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 3}}>
                        <CustomChip rounded label={DataSource.status} skin='light' color='success' />
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

            <Grid item md={12} sx={{ textAlign: 'left', padding: '20px'}}>
              <Button type='btn btn-secondary' variant='outlined' color='error' style={{textDecoration: "none",marginRight: '10px'}}>
                Deactivate
              </Button>

              <Button variant='contained' sx={{marginRight: '10px'}} href={`${appRoutes.industryList}/${DataSource.id}`}>Edit</Button>

              <Button type='btn btn-secondary'  variant='outlined' color='error' style={{textDecoration: "none",marginRight: '10px'}}>
                Delete
              </Button>
            </Grid>

          </Card>
        </Grid>
      </Grid>
      <Grid container >
        <Grid item xs={12}>
          <IndustryCatalogTable />
        </Grid>
      </Grid>


    </div>
  );
};

export default IndustryDetail;
