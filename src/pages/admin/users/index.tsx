import React from 'react';
import dynamic from "next/dynamic";

const UsersTable = dynamic(import("../../../views/pages/admin/users/UsersTable"));

const Index = () => {
  return <UsersTable />
};

export default Index;
