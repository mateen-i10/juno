import React from 'react';
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import {useTheme} from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import {Box} from "@mui/material";
import Button from "@mui/material/Button";
import CustomTextField from "../../../@core/components/mui/text-field";
import MenuItem from "@mui/material/MenuItem";


const ContactUs = () => {
  const theme = useTheme()


return (
    <>
      <Grid container spacing={12} sx={{bgcolor: theme.palette.background.paper, minHeight: '85vh'}} justifyContent='center' alignItems='center'>
        <Grid item xs={5} >
          <Grid item container xs={12} >
            <Grid item xs={12}>
              <Typography sx={{mx: 1, lineHeight: 1.3, fontSize: '1.8em', fontWeight: 500}}>
                Contact Us
              </Typography>
              <Typography sx={{mx: 1, lineHeight: 1.3, fontSize: '2.8em', fontWeight: 600}}>
                Get in Touch with
              </Typography>
              <Typography sx={{mx: 1, lineHeight: 1.3, fontSize: '3.8em', fontWeight: 700}}>
                 JUNO
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={5}>
          <Grid item container xs={12} >
            <Grid item xs={12}>
              <img width='500' height='500' style={{objectFit: 'contain', borderRadius:'10px'}} alt='Juno Labs' src='/images/contact.png' />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{bgcolor: theme.palette.background.paper, minHeight: '140%'}} justifyContent='center' alignItems='center'>
        <Grid item xs={9} md={6} sx={{my: 15}} style={{ textAlign: 'center'}}>
          <Typography sx={{mx: 1, lineHeight: 1.3, fontSize: '1.8em', fontWeight: 500}}>
            Contact Us Now
          </Typography>
          <Typography sx={{mx: 1, lineHeight: 1.3, fontSize: '2.8em', fontWeight: 600}} style={{ color: '#00498F'}}>
            How can we help you?
          </Typography>
          <Typography sx={{mx: 1, lineHeight: 1.3, fontSize: '3.2em', fontWeight: 700}}>
            We would love to hear from you
          </Typography>
          <Typography sx={{mx: 1, lineHeight: 1.3, fontSize: '1.5em', fontWeight: 600}}>
            Provide us with your information and we will be in touch with you soon.
            Use the contact form below to leave your details.
          </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{bgcolor: theme.palette.background.paper, minHeight: '140%'}} justifyContent='center' alignItems='center'>
        <Grid item xs={9} md={6} sx={{my: 15}} style={{ textAlign: 'center'}}>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Card>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <CardContent>
              <form onSubmit={e => e.preventDefault()}>
                <Grid container spacing={5}>
                  <Grid item xs={6}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <CustomTextField fullWidth label='Name' type='text' placeholder='Leonard Carter' />
                  </Grid>
                  <Grid item xs={6}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <CustomTextField fullWidth label='Email' type='email' placeholder='email@email.com' />
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField select defaultValue='' label='What we can help you with?' id='custom-select' fullWidth>
                      {/* eslint-disable-next-line react/jsx-no-undef */}
                      <MenuItem value=''>
                        <em>None</em>
                      </MenuItem>
                      <MenuItem value={10}>Ten</MenuItem>
                      <MenuItem value={20}>Twenty</MenuItem>
                      <MenuItem value={30}>Thirty</MenuItem>
                    </CustomTextField>
                  </Grid>
                  <Grid item xs={12}>
                    <CustomTextField
                      rows={4}
                      fullWidth
                      multiline
                      label='Subject'
                      defaultValue='Subject'
                      id='textarea-outlined-static'
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        gap: 5,
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                      }}
                    >
                      <Button type='submit' variant='contained'>
                        Submit
                      </Button>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          '& a': { color: 'primary.main', textDecoration: 'none' }
                        }}
                      >
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{bgcolor: theme.palette.background.paper, minHeight: '140%'}} justifyContent='center' alignItems='center'>
        <Grid item xs={9} md={6} sx={{my: 15}} style={{ textAlign: 'center'}}>
          <img width='400' height='400' style={{objectFit: 'contain', borderRadius:'10px'}} alt='Juno Labs' src='/images/RTS-LOGO.png' />
          {/*<Typography sx={{lineHeight: 1.0, fontSize: '1.8em', fontWeight: 600}}>*/}
          {/*  Resolvetech Solutions*/}
          {/*</Typography>*/}
        </Grid>
      </Grid>
      <Grid container spacing={2} sx={{bgcolor: theme.palette.background.paper}} justifyContent='start'>
        <Grid item xs={4} md={4} style={{ textAlign: 'center'}}>
          <Typography sx={{mx: 1, lineHeight: 1.3, fontSize: '1.8em', fontWeight: 700}}>
            Business
          </Typography>
          <Typography sx={{mx: 1, lineHeight: 1.3, fontSize: '1.5em', fontWeight: 500, color: '#2C7CCA'}}>
            info@resolvetech.com
          </Typography>
        </Grid>
        <Grid item xs={4} md={4} style={{ textAlign: 'center'}}>
          <Typography sx={{mx: 1, lineHeight: 1.3, fontSize: '1.8em', fontWeight: 700}}>
            Marketing & Communications
          </Typography>
          <Typography sx={{mx: 1, lineHeight: 1.3, fontSize: '1.5em', fontWeight: 500, color: '#2C7CCA'}}>
            communications@resolvetech.com
          </Typography>
        </Grid>
        <Grid item xs={4} md={4} style={{ textAlign: 'center'}}>
          <Typography sx={{mx: 1, lineHeight: 1.3, fontSize: '1.8em', fontWeight: 700}}>
            Job & Careers
          </Typography>
          <Typography sx={{mx: 1, lineHeight: 1.3, fontSize: '1.5em', fontWeight: 500, color: '#2C7CCA'}}>
            careers@resolvetech.com
          </Typography>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactUs;

