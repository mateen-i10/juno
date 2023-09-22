import React, {useEffect, useState} from 'react';
import { Box, Button, Grid, Typography} from "@mui/material";
import {useTheme} from "@mui/material/styles";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";



const NavBar = () => {
  const theme = useTheme()
  const router = useRouter()

  const initialStyle = {
    background: theme.palette.background.paper,
    navTypoFontS:  '1.2em',
    navTypofontW: 700,
    navTypoColor: theme.palette.text.primary,
    hoverBorderColor: theme.palette.primary.main,
    signUpBtnStyle: {
      fontSize: '1.2em',
      fontWeight: 700,
      background: 'rgb(0,73,143)',
      color: theme.palette.background.paper,
      '&:hover': {
        fontSize: '1.2em',
        fontWeight: 700,
        background: 'rgb(0,73,143)',
        color: theme.palette.background.paper,
      }
    },
    signInBtnStyle: {
      fontSize: '1.2em',
      fontWeight: 700,
      background: theme.palette.background.paper,
      color: theme.palette.primary.main,
      '&:hover': {
        fontSize: '1.2em',
        fontWeight: 700,
        background: theme.palette.background.default,
        color: theme.palette.primary.main,
      }
    }
  }

  const [scrollY, setScrollY] = useState(0);

  const [navStyle, setNavStyle] = useState({...initialStyle});

  const navbarTypo = {
    fontWeight: navStyle.navTypofontW ,
    fontSize: navStyle.navTypoFontS,
    color: navStyle.navTypoColor
  }
  const itemHovered = {
    borderBottom:  3,
    borderColor: 'transparent',
    '&:hover': {
      borderBottom:  3,
      borderColor: navStyle.hoverBorderColor,
      cursor: 'pointer'
    }
  }
  useEffect(() => {
    if((router.pathname === '/'|| router?.query?.page === 'overview') && scrollY <= 730) {
      const navBg = {
        background: 'linear-gradient(to right, #1a68b3 0%,#0f5ba4 40%, #08529a 60%, #024b91 80%, #00498f 100%)',
        navTypoColor: theme.palette.background.paper,
        hoverBorderColor: theme.palette.background.paper,
        signInBtnStyle: {
          fontSize: '1.2em',
          fontWeight: 700,
          background: theme.palette.background.paper,
          color: theme.palette.text.primary,
          '&:hover': {
            fontSize: '1.2em',
            fontWeight: 700,
            background: theme.palette.background.paper,
            color: theme.palette.text.primary,
          }
        },
        signUpBtnStyle: {
          fontSize: '1.2em',
          fontWeight: 700,
          background: 'rgb(2,62,121)',
          color: theme.palette.background.paper,
          '&:hover': {
            fontSize: '1.2em',
            fontWeight: 700,
            background: 'rgb(2,62,121)',
            color: theme.palette.background.paper,
          }
        },
      }
      setNavStyle({...navStyle, ...navBg})
    }
  }, [router.query?.page, scrollY]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    if(router.pathname === '/'|| router?.query?.page === 'overview') {
      window.addEventListener('scroll', handleScroll);
    }


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {

    if(scrollY > 732) {
      setNavStyle({...initialStyle})
    }
  }, [scrollY]);

  // console.log("scrolled", scrollY)


  return (
      <Grid container spacing={2} sx={{
        height: "80px",
        background: navStyle.background
      }}
            top ={0}
            zIndex={100}
            position="fixed"
            alignItems='center'

            // onScroll={handleScroll}
      >

        <Grid  item xs={3} sx={{cursor: "pointer"}}>
          <Link
            href={{
              pathname: '/',
              query: { page: 'overview' },
            }}
            style={{textDecoration: "none"}}
          >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image  src={'/images/Juno-touch-icon.png'} alt='Juno' width={50} height={50} style={{padding: 8}}/>
            {/*<Avatar src={connection.avatar} sx={{ mr: 3, width: 38, height: 38 }} />*/}
            <div>
              <Typography sx={{ ...navbarTypo }}>JUNO</Typography>
              <Typography variant='body1' sx={{ color: navStyle.navTypoColor }}>
                Innovate Lab
              </Typography>
            </div>
          </Box>
          </Link>
        </Grid>

        <Grid item xs={7}  sx={{display: 'flex',
          flexDirection: 'row',
          justifyContent: 'end',
          gap: 10,
        }} >
          <Link
            href={{
              pathname: '/',
              query: { page: 'overview' },
            }}
            style={{textDecoration: "none"}}
          >
            {router?.query?.page ? <Box
              sx={{
                ...itemHovered,
                borderColor: (router?.query?.page === 'overview' || router?.pathname === '/') ? navStyle.hoverBorderColor : 'transparent'
              }}>
              <Typography sx={{...navbarTypo}}>Overview</Typography>
            </Box> : <Box
              sx={{
                ...itemHovered,
                borderColor: (router?.query?.page === 'overview' || router?.pathname === '/') ? navStyle.hoverBorderColor : 'transparent'
              }}>
              <Typography sx={{...navbarTypo}}>Overview</Typography>
            </Box>}
          </Link>
          <Link
            href={{
              pathname: '/pages/our-approach',
              query: { page: 'ourApproach' },
            }}
            style={{textDecoration: "none"}}
          >
          <Box sx={{...itemHovered, borderColor: router?.query?.page === 'ourApproach' ? navStyle.hoverBorderColor : 'transparent'}}>
            <Typography sx={{...navbarTypo}}>Our Approach</Typography>
          </Box>
          </Link>
          <Link
            href={{
              pathname: '/pages/innovate-lab',
              query: { page: 'innovateLab' },
            }}
            style={{textDecoration: "none"}}
          >
          <Box sx={{...itemHovered, borderColor: router?.query?.page === 'innovateLab' ? navStyle.hoverBorderColor : 'transparent'}}>
            <Typography sx={{...navbarTypo}}>Innovate Lab</Typography>
          </Box>
          </Link>
          <Link
            href={{
              pathname: '/pages/solutions',
              query: { page: 'solutions' },
            }}
            style={{textDecoration: "none"}}
          >
          <Box sx={{...itemHovered, borderColor: router?.query?.page === 'solutions' ? navStyle.hoverBorderColor : 'transparent'}}>
            <Typography sx={{...navbarTypo}}>Solutions</Typography>
          </Box>
          </Link>
          <Link
            href={{
              pathname: '/pages/careers',
              query: { page: 'careers' },
            }}
            style={{textDecoration: "none"}}
          >
          <Box sx={{...itemHovered, borderColor: router?.query?.page === 'careers' ? navStyle.hoverBorderColor : 'transparent'}}>
            <Typography sx={{...navbarTypo}}>Careers</Typography>
          </Box>
          </Link>
          <Link
            href={{
              pathname: '/pages/contact-us',
              query: { page: 'contactUs' },
            }}
            style={{textDecoration: "none"}}
          >
          <Box sx={{...itemHovered, borderColor: router?.query?.page === 'contactUs' ? navStyle.hoverBorderColor : 'transparent'}}>
            <Typography sx={{...navbarTypo}}>Contact Us</Typography>
          </Box>
          </Link>
        </Grid>
        <Grid item xs={2}
              sx={{display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
                alignItems: 'center',
          gap: 4,
        }}>
          <Link
            href={{
              pathname: '/login',
            }}
            style={{textDecoration: "none"}}
          >
          <Box >
            <Button sx={{...navStyle.signInBtnStyle}}>Login</Button>
          </Box>
          </Link>
          <Link
            href={{
              pathname: '/login'
            }}
            style={{textDecoration: "none"}}
          >
          <Box >
          <Button variant='contained'  sx={{...navStyle.signUpBtnStyle}}>Sign Up</Button>
        </Box>
          </Link>
        </Grid>
      </Grid>
  );
};

export default NavBar;
