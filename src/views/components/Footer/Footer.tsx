import React from 'react';
import { Grid, Typography} from "@mui/material";

import KeenSliderWrapper from "../../../@core/styles/libs/keen-slider";
import {useSettings} from "../../../@core/hooks/useSettings";
import FooterSwiper from "./FooterSwiper";
import {useTheme} from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme()
  const {
    settings: { direction }
  } = useSettings()
  const gStyle = {
    my: 1
  }
  const typoStyle = {
    textAlign: 'start'
  }

  return (
  <Grid container spacing={2} justifyContent='center'>
    <Grid item container xs={2} justifyContent='start' alignItems='center' sx={{mt: 8, mx: 2}}>
      <Grid item xs={12} >
        <Typography sx={{fontSize: '2em', fontWeight: 700, textAlign: 'start'}}>
          Juno Platform
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{...gStyle}}>
        <Typography sx={{...typoStyle}}>
          About Us
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{...gStyle}}>
        <Typography sx={{...typoStyle}}>
          Privacy
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{...gStyle}}>
        <Typography sx={{...typoStyle}}>
          Blog
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{...gStyle}}>
        <Typography sx={{...typoStyle}}>
        Support
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{...gStyle}}>
        <Typography sx={{...typoStyle}}>
          Community
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{...gStyle}}>
        <Typography sx={{...typoStyle}}>
          Help Desk
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{...gStyle}}>
        <Typography sx={{...typoStyle}}>
          Career
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{...gStyle}}>
        <Typography sx={{...typoStyle}}>
          FAQ
        </Typography>
      </Grid>
      <Grid item xs={6} sx={{...gStyle}}>
        <Typography sx={{...typoStyle}}>
          Contact
        </Typography>
      </Grid>
    </Grid>
    <Grid item xs={9} container justifyContent='start' alignItems='center' sx={{mt: 8, mx: 2}} >

        <Grid item xs={12} >
          <Typography sx={{fontSize: '1em', fontWeight: 700, textAlign: 'start'}}>
            Blog
          </Typography>
        </Grid>

          <Grid item xs={12}  sx={{bgcolor: theme.palette.background.default,}} >
            <KeenSliderWrapper>
              <FooterSwiper direction={direction}/>
            </KeenSliderWrapper>
          </Grid>



    </Grid>
  </Grid>
)};

export default Footer;
