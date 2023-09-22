import React, {ReactNode} from 'react';
import Box from "@mui/material/Box";
import dynamic from "next/dynamic";
import BlankLayout from "../../../@core/layouts/BlankLayout";

const OurApproach = dynamic(import("src/views/pages/landing-pages/OurApproach"))
const NavBar = dynamic(import("src/views/components/NavBar"))
const Footer = dynamic(import("src/views/components/Footer/Footer"))

const Index = () => {
  return (<>
      <Box sx={{mb: 18, width: '100%'}}>
        <NavBar/>
      </Box>
    <OurApproach />
      <Box sx={{mb: 18, width: '100%'}}>
        <Footer/>
      </Box>
    </ >
  )
}
Index.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Index.guestGuard = true



export default Index
