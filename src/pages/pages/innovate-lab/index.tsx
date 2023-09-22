import React, {ReactNode} from 'react';
import BlankLayout from "../../../@core/layouts/BlankLayout";
import InnovateLabPage from "../../../views/pages/landing-pages/InnovateLabPage";
import Box from "@mui/material/Box";
import NavBar from "../../../views/components/NavBar";
import Footer from "../../../views/components/Footer/Footer";

const Index = () => {
  return (
    <>
      <Box sx={{mb: 18, width: '100%'}}>
        <NavBar/>
      </Box>
      <InnovateLabPage />
      <Box sx={{mb: 18, width: '100%'}}>
        <Footer/>
      </Box>
    </>

  )
}
Index.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Index.guestGuard = true



export default Index
