import React from 'react';
import dynamic from "next/dynamic";

const PaidUsersDashboard = dynamic(import("../../../views/pages/paid-user/dashboard/Dashboard"));

const Index = () => {
  return <PaidUsersDashboard />
};

export default Index;
