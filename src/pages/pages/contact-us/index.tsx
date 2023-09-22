import React, {ReactNode} from 'react';
import BlankLayout from "../../../@core/layouts/BlankLayout";
import ContactUs from "../../../views/pages/landing-pages/ContactUs";
import NavBar from "../../../views/components/NavBar";
import {Box} from "@mui/material";
import Footer from "../../../views/components/Footer/Footer";

const Index = () => {
  return (<>
    <Box sx={{mb: 18, width: '100%'}}>
      <NavBar/>
    </Box>
      <ContactUs />
      <Box sx={{mb: 18, width: '100%'}}>
        <Footer/>
      </Box>
  </>

  )
}
Index.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Index.guestGuard = true



export default Index
