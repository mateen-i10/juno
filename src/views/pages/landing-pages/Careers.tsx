import React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const Careers = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Careers Page</Typography>
            <Typography>
              Landing home page
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Careers;
