import React from 'react';
import {useRouter} from "next/router";
import Grid from "@mui/material/Grid";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CustomChip from "../../../../@core/components/mui/chip";
import TextField from "@mui/material/TextField";
import {FormControl} from "@mui/material";
import Button from "@mui/material/Button";

const ErrorDetails = () => {

  const router = useRouter()
  const {errorsId} = router.query

  console.log(errorsId, "errorsId")

  const CustomerData = {
    avatarUrl: "/avatar/5d8d7e77aac414be944af8a788189766",
    reported: "2 hours",
    type: 'Resolved',
    reportedBy: "Customer 2",
    errorTitle: "Error 1",
    userName: "John Wick",
    email: "John@gmail.com",
    status: "Pending",
    modelName: "Model 1",
    useCase: "Anomly Detection",
    dataSource: "Data Source Name",
    id: 1
  }

  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12} style={{marginLeft: '10px'}}>
          <h2 style={{color: 'rgb(122 121 127)'}} title={'Error Detail'}>Error Detail</h2>
        </Grid>
      </Grid>

      <Grid container spacing={6}>

        <Grid item md={12}>
          <Card sx={{ position: 'relative'}}>
            <h4 style={{fontSize: '30px', paddingLeft: '20px', fontWeight: '600'}}>{CustomerData.errorTitle}</h4>
            <hr/>

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

                  <Grid item md={6}>
                    <Typography variant='h5' sx={{color: 'rgb(102 97 120 / 78%)', marginBottom: '20px'}}>Detail:</Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6' >User Name:</Typography>
                      <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 3}}>
                        {CustomerData.userName}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6' >Email:</Typography>
                      <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 3}}>
                        {CustomerData.email}
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6' >Status:</Typography>
                      <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 3}}>
                        <CustomChip rounded label={CustomerData.status} skin='light' color='error' />
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6'>Model Name:</Typography>
                      <Typography sx={{fontSize:"0.9rem", marginLeft: 2}}>
                        <CustomChip rounded label={CustomerData.modelName} skin='light' color='info' />
                      </Typography>
                    </Box>

                    <Box sx={{ display: 'flex', flexDirection: 'row', mb: 6 }}>
                      <Typography variant='h6'>Use Case:</Typography>
                      <Typography sx={{fontSize:"0.9rem", marginLeft: 2}}>
                        <CustomChip rounded label={CustomerData.useCase} skin='light' color='success' />
                      </Typography>
                    </Box>

                    <Box sx={{display: 'flex', flexDirection: 'row' }}>
                      <Typography variant='h6'>Data Source:</Typography>
                      <Typography variant='caption' sx={{fontSize:"0.9rem", marginLeft: 2}}>
                        {CustomerData.dataSource}
                      </Typography>
                    </Box>

                  </Grid>

                  <Grid item md={6}>
                    <Typography variant='h5' sx={{color: 'rgb(102 97 120 / 78%)', marginBottom: '20px'}}>Add Suggestions:</Typography>

                      <Typography variant='h6' >Suggestions:</Typography>
                      <br />
                      <FormControl fullWidth>
                        <TextField
                          rows={5}
                          multiline
                          fullWidth
                          size='small'
                          type='text'
                          label='Suggestions'
                          placeholder='Enter Suggestions'
                        />
                      </FormControl>

                    <Button variant='contained' sx={{mt: 5}}>Send Suggestions</Button>

                  </Grid>

                </Grid>

              </Box>
            </CardContent>
          </Card>
        </Grid>

      </Grid>
    </div>
  );
};

export default ErrorDetails;
