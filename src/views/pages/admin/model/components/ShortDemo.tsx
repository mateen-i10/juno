import React from 'react';
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import LeftCol from "./LeftCol";
import RightCol from "./RightCol";

const ShortDemo = () => {
  return (
    <div>
      <Card style={{marginTop: '20px'}}>
        <Grid container spacing={6}>
          <Grid item md={8}>
            <RightCol />
          </Grid>
          <Grid item md={4} style={{ height: '500px'}}>
            <LeftCol />
          </Grid>
        </Grid>
      </Card>
    </div>
  );
};

export default ShortDemo;
