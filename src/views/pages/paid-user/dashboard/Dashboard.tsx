import React from 'react';
import UserProfileHeader from "./components/UserProfileHeader";
import Grid from "@mui/material/Grid";
import HelpVideos from "./components/HelpVideos";

const Dashboard = () => {
  return (
    <div>
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <UserProfileHeader />
          <HelpVideos />
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
