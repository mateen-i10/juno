import React from 'react';
import dynamic from "next/dynamic";

const UsersDetail = dynamic(import("../../../../../views/pages/admin/users/UserDetail"));

const Index = () => {
  return <UsersDetail />
};

export default Index;
