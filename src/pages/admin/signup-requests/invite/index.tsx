import React from 'react';
import dynamic from "next/dynamic";

const InviteSignUpRequest = dynamic(import("../../../../views/pages/admin/signup-requests/InviteSignUpRequest"));

const Index = () => {
  return <InviteSignUpRequest />
};

export default Index;
