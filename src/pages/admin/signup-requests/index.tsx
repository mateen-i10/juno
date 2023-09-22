import React from 'react';
import dynamic from "next/dynamic";

const SignUpRequestsTable = dynamic(import("../../../views/pages/admin/signup-requests/SignUpRequestsTable"));

const Index = () => {
  return <SignUpRequestsTable />
};

export default Index;
