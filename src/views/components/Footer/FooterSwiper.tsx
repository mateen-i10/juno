import React from 'react';
import { Box, Card, CardContent, Direction, Grid, Typography} from "@mui/material";
import {useKeenSlider} from "keen-slider/react";
import {styled, useTheme} from "@mui/material/styles";
import {GridProps} from "@mui/material/Grid";

const FooterSwiper = ({direction}:  {direction: Direction }) => {
  const theme = useTheme()
  const [ref] = useKeenSlider<HTMLDivElement>({
    loop: true,
    rtl: direction === 'rtl',
    slides: {
      perView: 3,
      spacing: 16
    }
  })

  const StyledGrid = styled(Grid)<GridProps>(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    [theme.breakpoints.down('md')]: {
      borderBottom: `1px solid ${theme.palette.divider}`
    },
    [theme.breakpoints.up('md')]: {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }))

  const cardStyle = {
    my: 2,
    mx: 2,
    maxHeight: 110,
    boxShadow: '0px 0px 8px 0 rgba(0, 0, 0, 0.1)',
    maxWidth: 420,
  }

  return (
    <Box ref={ref} className='keen-slider'>
        <Grid className='keen-slider__slide' item container xs={12}>
          <Grid item xs={12} >
            <Card  sx={{...cardStyle}}>
              <Grid container spacing={2}>
                <StyledGrid item md={4} xs={12}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img width={105} height={105} style={{objectFit: 'contain'}} alt='Apple iPhone 11 Pro' src='/images/Juno-touch-icon.png' />
                  </CardContent>
                </StyledGrid>
                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{
                    pt: ['0 !important', '0 !important', '1.5rem !important'],
                    pl: ['1.5rem !important', '1.5rem !important', '0 !important']
                  }}
                >
                  <CardContent sx={{pt: 2}}>
                    <Typography variant='body2' sx={{ mb: 1 }}>
                      Webinar: The Future of Digital Transformation in Business
                    </Typography>
                    <Typography color='primary' sx={{ fontWeight: 500, mb: 4 }}>
                      Read More
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card  sx={{...cardStyle}}>
              <Grid container spacing={2}>
                <StyledGrid item md={4} xs={12}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img width={105} height={105} style={{objectFit: 'contain'}} alt='Apple iPhone 11 Pro' src='/images/Juno-touch-icon.png' />
                  </CardContent>
                </StyledGrid>
                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{
                    pt: ['0 !important', '0 !important', '1.5rem !important'],
                    pl: ['1.5rem !important', '1.5rem !important', '0 !important']
                  }}
                >
                  <CardContent sx={{pt: 2}}>
                    <Typography variant='body2' sx={{ mb: 1 }}>
                      Webinar: The Future of Digital Transformation in Business
                    </Typography>
                    <Typography color='primary' sx={{ fontWeight: 500, mb: 4 }}>
                      Read More
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>


      <Grid className='keen-slider__slide' item container xs={12} sx={{bgcolor: theme.palette.background.default,}}>
          <Grid item xs={12}>
            <Card  sx={{...cardStyle}}>
              <Grid container spacing={2}>
                <StyledGrid item md={4} xs={12}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img width={105} height={105} style={{objectFit: 'contain'}} alt='Apple iPhone 11 Pro' src='/images/Juno-touch-icon.png' />
                  </CardContent>
                </StyledGrid>
                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{
                    pt: ['0 !important', '0 !important', '1.5rem !important'],
                    pl: ['1.5rem !important', '1.5rem !important', '0 !important']
                  }}
                >
                  <CardContent sx={{pt: 2}}>
                    <Typography variant='body2' sx={{ mb: 1 }}>
                      Webinar: The Future of Digital Transformation in Business
                    </Typography>
                    <Typography color='primary' sx={{ fontWeight: 500, mb: 4 }}>
                      Read More
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card  sx={{...cardStyle}}>
              <Grid container spacing={2}>
                <StyledGrid item md={4} xs={12}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img width={105} height={105} style={{objectFit: 'contain'}} alt='Apple iPhone 11 Pro' src='/images/Juno-touch-icon.png' />
                  </CardContent>
                </StyledGrid>
                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{
                    pt: ['0 !important', '0 !important', '1.5rem !important'],
                    pl: ['1.5rem !important', '1.5rem !important', '0 !important']
                  }}
                >
                  <CardContent sx={{pt: 2}}>
                    <Typography variant='body2' sx={{ mb: 1 }}>
                      Webinar: The Future of Digital Transformation in Business
                    </Typography>
                    <Typography color='primary' sx={{ fontWeight: 500, mb: 4 }}>
                      Read More
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>

      <Grid className='keen-slider__slide' item container xs={12} sx={{bgcolor: theme.palette.background.default,}}>
          <Grid item xs={12}>
            <Card  sx={{...cardStyle}}>
              <Grid container spacing={2}>
                <StyledGrid item md={4} xs={12}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img width={105} height={105} style={{objectFit: 'contain'}} alt='Apple iPhone 11 Pro' src='/images/Juno-touch-icon.png' />
                  </CardContent>
                </StyledGrid>
                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{
                    pt: ['0 !important', '0 !important', '1.5rem !important'],
                    pl: ['1.5rem !important', '1.5rem !important', '0 !important']
                  }}
                >
                  <CardContent sx={{pt: 2}}>
                    <Typography variant='body2' sx={{ mb: 1 }}>
                      Webinar: The Future of Digital Transformation in Business
                    </Typography>
                    <Typography color='primary' sx={{ fontWeight: 500, mb: 4 }}>
                      Read More
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card  sx={{...cardStyle}}>
              <Grid container spacing={2}>
                <StyledGrid item md={4} xs={12}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img width={105} height={105} style={{objectFit: 'contain'}} alt='Apple iPhone 11 Pro' src='/images/Juno-touch-icon.png' />
                  </CardContent>
                </StyledGrid>
                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{
                    pt: ['0 !important', '0 !important', '1.5rem !important'],
                    pl: ['1.5rem !important', '1.5rem !important', '0 !important']
                  }}
                >
                  <CardContent sx={{pt: 2}}>
                    <Typography variant='body2' sx={{ mb: 1 }}>
                      Webinar: The Future of Digital Transformation in Business
                    </Typography>
                    <Typography color='primary' sx={{ fontWeight: 500, mb: 4 }}>
                      Read More
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>


      <Grid className='keen-slider__slide' item container xs={12} sx={{bgcolor: theme.palette.background.default,}}>
          <Grid item xs={12}>
            <Card  sx={{...cardStyle}}>
              <Grid container spacing={2}>
                <StyledGrid item md={4} xs={12}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img width={105} height={105} style={{objectFit: 'contain'}} alt='Apple iPhone 11 Pro' src='/images/Juno-touch-icon.png' />
                  </CardContent>
                </StyledGrid>
                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{
                    pt: ['0 !important', '0 !important', '1.5rem !important'],
                    pl: ['1.5rem !important', '1.5rem !important', '0 !important']
                  }}
                >
                  <CardContent sx={{pt: 2}}>
                    <Typography variant='body2' sx={{ mb: 1 }}>
                      Webinar: The Future of Digital Transformation in Business
                    </Typography>
                    <Typography color='primary' sx={{ fontWeight: 500, mb: 4 }}>
                      Read More
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card  sx={{...cardStyle}}>
              <Grid container spacing={2}>
                <StyledGrid item md={4} xs={12}>
                  <CardContent sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img width={105} height={105} style={{objectFit: 'contain'}} alt='Apple iPhone 11 Pro' src='/images/Juno-touch-icon.png' />
                  </CardContent>
                </StyledGrid>
                <Grid
                  item
                  xs={12}
                  md={8}
                  sx={{
                    pt: ['0 !important', '0 !important', '1.5rem !important'],
                    pl: ['1.5rem !important', '1.5rem !important', '0 !important']
                  }}
                >
                  <CardContent sx={{pt: 2}}>
                    <Typography variant='body2' sx={{ mb: 1 }}>
                      Webinar: The Future of Digital Transformation in Business
                    </Typography>
                    <Typography color='primary' sx={{ fontWeight: 500, mb: 4 }}>
                      Read More
                    </Typography>
                  </CardContent>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>

    </Box>
  );
};

export default FooterSwiper;
