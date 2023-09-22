import React from 'react';
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import RightCol from "./RightCol";
import LeftCol from "./LeftCol";

const HelpVideos = () => {
  return (
    <div>
      <Card style={{marginTop: '20px'}}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <h4 style={{paddingLeft: '23px'}}>Help Videos</h4>
          </Grid>
          <Grid item md={4} style={{overflowX: 'scroll', height: '500px'}}>
            <LeftCol />
          </Grid>
          <Grid item md={8}>
            <RightCol />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default HelpVideos;
