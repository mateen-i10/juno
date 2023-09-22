import React from 'react';
import dynamic from "next/dynamic";

const RTSUsersDashboard = dynamic(import("src/views/pages/rts-user/dashboard/Dashboard"));

const Index = () => {
  return <RTSUsersDashboard />
};

export default Index;
