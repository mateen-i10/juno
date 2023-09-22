import React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const InnovateLabPage = () => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12}>
        <Card>
          <CardHeader></CardHeader>
          <CardContent>
            <Typography sx={{ mb: 2 }}>Innovate Lab Page</Typography>
            <Typography>
              Landing home page
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default InnovateLabPage;
