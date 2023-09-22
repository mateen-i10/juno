import React from 'react';
import {useTheme} from "@mui/material/styles";
import OverviewHero from "./components/OverviewHero";
import Testimonials from "./components/Testimonials";
import {useSettings} from "../../../@core/hooks/useSettings";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import KeenSliderWrapper from 'src/@core/styles/libs/keen-slider'

const Overview = () => {
  const theme = useTheme()
  const {
    settings: { direction }
  } = useSettings()


  return (
    <>
      <OverviewHero />

      <Grid container spacing={2} sx={{bgcolor: theme.palette.background.paper}} justifyContent='center'>
        <Grid item xs={10} sx={{mt: 8}}>
          <Grid container justifyContent='center' spacing={5}>
            <Grid item xs={12} >
              <Typography sx={{fontSize: '2.7em', textAlign: 'center', my: 6}} fontWeight={700}>Testimonials</Typography>
            </Grid>

          </Grid>
        </Grid>
      </Grid>

      <Grid container  sx={{bgcolor: theme.palette.background.paper}} justifyContent='center'>
        <Grid item  xs={10} sx={{bgcolor: theme.palette.background.paper, minHeight: '60vh'}} alignContent='center'>
          <KeenSliderWrapper>
            <Testimonials direction={direction}/>
          </KeenSliderWrapper>
        </Grid>
      </Grid>

    </>
  );
};

export default Overview;
