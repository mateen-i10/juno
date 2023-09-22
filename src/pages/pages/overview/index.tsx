import React from 'react'
import {Box} from "@mui/material";
import dynamic from "next/dynamic";

const Overview = dynamic(import("src/views/pages/landing-pages/Overview"))
const NavBar = dynamic(import("src/views/components/NavBar"))
const Footer = dynamic(import("src/views/components/Footer/Footer"))

const Index = () => {
  return (
    <>
      <Box sx={{mb: 18, width: '100%'}}>
        <NavBar/>
      </Box>
      <Overview />
      <Box sx={{mb: 18, width: '100%'}}>
        <Footer/>
      </Box>
    </>
  )
}

export default Index
