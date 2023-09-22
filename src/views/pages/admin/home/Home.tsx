import React from 'react';
import Grid from "@mui/material/Grid";
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'
import EcommerceStatistics from "./components/EcommerceStatistics";
import SignUpStatistics from "./components/SignUpStatistics";
import CardStatisticsSquare from "./components/CardStatisticsSquare";
import ErrorLogs from "./components/ErrorLogs";
import ErrorResolveRequests from "./components/ErrorResolveRequests";

const statsSquare = [
  {
    stats: '105',
    title: 'Errors',
    avatarColor: 'error',
    icon: 'bx:error'
  },
  {
    stats: '400',
    title: 'Running Labs',
    avatarColor: 'success',
    icon: 'tabler:briefcase'
  },
  {
    stats: '520',
    title: 'Total Labs',
    avatarColor: 'info',
    icon: 'tabler:briefcase'
  }
]

const Home = () => {
  return (
    <>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12} style={{marginLeft: '5px'}}>
          <h2 style={{color: 'rgb(122 121 127)'}} title={''}>Home</h2>
        </Grid>
      </Grid>

      <ApexChartWrapper>
        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <EcommerceStatistics />
          </Grid>
          <Grid item xs={12} md={6}>
            <SignUpStatistics />
          </Grid>
          <Grid item xs={12} md={12}>
            <CardStatisticsSquare data={statsSquare}/>
          </Grid>
          <Grid item xs={12} md={6}>
            <ErrorLogs />
          </Grid>
          <Grid item xs={12} md={6}>
            <ErrorResolveRequests />
          </Grid>
        </Grid>
      </ApexChartWrapper>
      </>
  );
};

export default Home;
