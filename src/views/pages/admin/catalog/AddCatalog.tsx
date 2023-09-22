import React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import {FormControl, InputLabel, Select} from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import {appRoutes} from "../../../../routes/client-app-routes";
import MenuItem from "@mui/material/MenuItem";

const AddCatalog = () => {

  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12} style={{marginLeft: '10px'}}>
          <h2 style={{color: 'rgb(122 121 127)'}} title={'Error Detail'}>Create Catalog</h2>
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
                  <Grid item md={12} sx={{mt: 4}}>
                    <Typography variant='h5' >Catalog Info:</Typography>
                  </Grid>

                  <Grid item md={6} sx={{mt: 4}}>

                    <Typography variant='h6' sx={{marginBottom: '10px'}}>Catalog Name:</Typography>
                    <FormControl fullWidth>
                      <TextField
                        multiline
                        fullWidth
                        size='small'
                        type='text'
                        label='Name'
                        placeholder='Enter Name'
                      />
                    </FormControl>

                  </Grid>

                  <Grid item md={6}>
                    <h5 style={{textTransform: 'uppercase', marginBottom: '11px', marginTop: '17px'}}>Select Industry</h5>
                    <FormControl fullWidth size='small'>
                      <InputLabel id='form-layouts-tabs-select-label'>Select Industry</InputLabel>
                      <Select
                        label='Select Industry'
                        defaultValue=''
                        id='form-layouts-tabs-select'
                        labelId='form-layouts-tabs-select-label'
                      >
                        <MenuItem value='industry1'>Industry 1</MenuItem>
                        <MenuItem value='industry2'>Industry 2</MenuItem>
                        <MenuItem value='industry3'>Industry 3</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item md={6} sx={{mt: 4}}>
                    <Typography variant='h6' sx={{marginBottom: '10px'}}>Release Data:</Typography>
                    <FormControl fullWidth>
                      <TextField
                        multiline
                        fullWidth
                        size='small'
                        type='number'
                        label='Release Data'
                        placeholder='Enter Date'
                      />
                    </FormControl>

                  </Grid>

                  <Grid item md={6} sx={{mt: 4}}></Grid>

                  <Grid item md={6} sx={{mt: 4}}>
                    <Typography variant='h6' sx={{marginBottom: '10px'}}>Short Description:</Typography>
                    <FormControl fullWidth>
                      <TextField
                        rows={5}
                        multiline
                        fullWidth
                        size='small'
                        type='text'
                        label='Description'
                        placeholder='Enter Description'
                      />
                    </FormControl>

                  </Grid>

                  <Grid item md={6} sx={{mt: 4}}>
                    <Typography variant='h6' sx={{marginBottom: '10px'}}>Long Description:</Typography>
                    <FormControl fullWidth>
                      <TextField
                        rows={5}
                        multiline
                        fullWidth
                        size='small'
                        type='text'
                        label='Description'
                        placeholder='Enter Description'
                      />
                    </FormControl>

                  </Grid>

                  <Grid item md={12} sx={{mt: 6, textAlign: 'right'}}>
                    <Button type='btn btn-secondary' href={`${appRoutes.catalogList}`} variant='outlined' color='secondary' style={{textDecoration: "none", marginRight: '10px'}}>
                      Cancel
                    </Button>
                    <Button variant='contained'>Save</Button>
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

export default AddCatalog;
