import React from 'react';
import dynamic from "next/dynamic";

const SignUpRequestDetail = dynamic(import("../../../../../views/pages/admin/signup-requests/SignUpRequestDetail"));

const Index = () => {
  return (
    <div>
      <SignUpRequestDetail />
    </div>
  );
};

export default Index;
