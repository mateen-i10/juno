import React from 'react';
import dynamic from "next/dynamic";

const AdminHome = dynamic(import("../../../views/pages/admin/home/Home"));

const Home = () => {
  return (
    <AdminHome />
  )
}

export default Home
