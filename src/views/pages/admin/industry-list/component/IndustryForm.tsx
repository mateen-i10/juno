import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {Box, Card, CardContent, FormControl} from "@mui/material";
import TextField from "@mui/material/TextField";
import {useRouter} from "next/router";
import Button from "@mui/material/Button";

const IndustryForm = () => {
  const router = useRouter()
  console.log("router", router)

  return (
    <div>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12} style={{marginLeft: '10px', marginBottom: 10}}>
          <Typography fontSize={23} fontWeight={600} color='secondary'>{router?.query?.IndustryForm?.toString().toLowerCase() === 'new' ? "Create Industry" : "Edit Industry"}</Typography>
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item md={12}>
          <Card sx={{ position: 'relative'}}>
            <CardContent>
              <Box>
                <Grid item xs={12} sm={12} sx={{ mb: 5}}>
                  <Typography style={{fontSize: '20px', fontWeight: '600'}}>Industry Info</Typography>
                </Grid>
                <Grid container spacing={6}>
                  <Grid item xs={6} sm={6}>
                    <FormControl fullWidth>
                      <TextField
                        fullWidth
                        size='small'
                        type='text'
                        label='Industry Name'
                        placeholder='Industry Name'
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <FormControl fullWidth>
                      <TextField
                        rows={4}
                        multiline
                        fullWidth
                        size='small'
                        type='text'
                        label='Description'
                        placeholder='Description'
                      />
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={12}>
                    <div  style={{display: "flex", flexDirection: 'row', justifyContent: "end", gap: 10}}>
                      <Button variant="outlined" color='primary' size='medium'>
                        Cancel
                      </Button>
                      <Button variant="contained" color='primary' size='medium'>
                        Create Industry
                      </Button>
                    </div>

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

export default IndustryForm;
