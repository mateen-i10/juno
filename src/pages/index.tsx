import {ReactNode} from "react";
import BlankLayout from "../@core/layouts/BlankLayout";
import Overview from "./pages/overview";

const Home = () => {
  return <>
    <Overview />
  </>
}

Home.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Home.guestGuard = true
export default Home
