import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";
import {Button} from "@mui/material";
import {Box} from "@mui/system";

const OverviewHero = () => {
  const theme = useTheme()

  return (
    <>
      <Grid container spacing={4} sx={{background: 'linear-gradient(to right, #1a68b3 0%,#0f5ba4 40%, #08529a 60%, #024b91 80%, #00498f 100%)', minHeight: '75vh'}} justifyContent='center' alignItems='center'>
        <Grid item xs={5} >
            <Grid item container xs={12} >
              <Grid item xs={12}>
                <Typography sx={{fontSize: '3.5em', color: theme.palette.background.paper}} fontWeight={700}>Juno Labs</Typography>
                <Typography sx={{mx: 1, lineHeight: 1.5, fontSize: '1.22em', color: theme.palette.background.paper}}>
                  At Juno Labs, we are pioneers in harnessing the power of artificial intelligence to shape the world of tomorrow. Our
                  dedicated team of experts is committed to pushing the boundaries of innovation and creating solutions that transform
                  industries and improve lives.
                </Typography>
                <Box sx={{my: 3}}>
                <Button
                  variant='contained'
                  sx={{
                    mx: 1,
                    bgcolor: 'rgb(0,73,143)',
                    '&:hover': {
                      bgcolor: 'rgb(0,73,143)',
                    }
                }}
                >Start Your Free Trial Now</Button>
                <Button
                  variant='outlined'
                  sx={{
                    mx: 1,
                    color: theme.palette.background.paper,
                    borderColor: theme.palette.background.paper,
                    '&:hover': {
                      borderColor: theme.palette.background.paper,
                    }
                }}>Request a Demo</Button>
                </Box>
              </Grid>
            </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid item container xs={12} justifyContent='center' alignItems='center'>
            <Grid item xs={12}>
              <img width='100%' height='100%'
                   style={{
                     objectFit: 'contain',
                     borderRadius:'10px',
                     transform: 'matrix(0.7, 0.1, 0, 0.8 , 55, -18)'
                   }} alt='Juno Labs' src='/images/HomeHero.png' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <img width='100%' height='150px' style={{objectFit: 'fill'}} alt='Juno Labs' src='/images/homebg.png' />

      {/*<Grid container >*/}
      {/*  <Box xs={12} sx={{backgroundImage:`${"url('/images/homebg.png')"}`, height: 160, width: '100%', objectFit: 'fill'}}></Box>*/}
      {/*</Grid>*/}

      <Grid container spacing={10} sx={{bgcolor: theme.palette.background.paper, minHeight: '75vh', py: 4}} justifyContent='center' alignItems='center'>

        <Grid item xs={6} >
          <Grid item container xs={12} >
            <Grid item xs={12}>
              <Typography sx={{fontSize: '2.7em', my: 5}} fontWeight={700}>Juno Innovate</Typography>
              <Typography sx={{fontSize: '1.32em'}} fontWeight={700}>
                Using JUNO Innovate, businesses can realize a number of benefits, including:
              </Typography>
              <ul style={{fontSize: '1.22em'}}>
                <li><span style={{fontSize: '1.01em', fontWeight: 700, textTransform: 'uppercase'}}>Increased efficiency:</span> AI can be used to automate tasks, which can free up employees to focus on more strategic work.
                </li>
                <li><span style={{fontSize: '1.01em', fontWeight: 700, textTransform: 'uppercase'}}>Reduced costs:</span> AI can be used to improve efficiency and reduce errors, which can lead to lower costs.
                </li>
                <li><span style={{fontSize: '1.01em', fontWeight: 700, textTransform: 'uppercase'}}>Improved decision-making:</span> AI can be used to analyze data and identify trends, which can help businesses make better decisions.
                </li>
                <li><span style={{fontSize: '1.01em', fontWeight: 700, textTransform: 'uppercase'}}>Increased innovation:</span> AI can be used to develop new products and services, which can help businesses stay ahead of the competition.
                </li>
                <li><span style={{fontSize: '1.01em', fontWeight: 700, textTransform: 'uppercase'}}>Faster time to market:</span> AI can be used to accelerate the development and deployment of new products and services.</li>
              </ul>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} >
          <Grid item container xs={12} >
            <Grid item xs={12}>
              <img width='100%' height='100%' style={{objectFit: 'contain', borderRadius:'10px'}} alt='Juno Labs' src='/images/approach.jpeg' />
            </Grid>
          </Grid>
        </Grid>

      </Grid>

      <Grid container spacing={12} sx={{bgcolor: theme.palette.background.paper, minHeight: '50vh', py: 4}} justifyContent='center' alignItems='center'>
        <Grid item xs={5} >
          <Grid item container xs={12} >
            <Grid item xs={12}>
              <img width='100%' height='100%' style={{objectFit: 'contain', borderRadius:'10px'}} alt='Juno Labs' src='/images/innovate.jpg' />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5} >
          <Grid item container xs={12}  >
            <Grid item xs={12}>
              <Typography sx={{fontSize: '2.7em', my: 5}} fontWeight={700}>Our Approach
              </Typography>
              <Typography sx={{fontSize: '1.22em', lineHeight: 1.5}} >
                At RTS, our approach to implementing artificial intelligence (AI)

                is rooted in a commitment to innovation, problem-solving, and

                delivering tangible value to our clients. We understand that AI

                is not a one-size-fits-all solution but a transformative technology

                that, when applied strategically, can drive significant

                improvements in various domains.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        </Grid>

    </>
  );
};

export default OverviewHero;
