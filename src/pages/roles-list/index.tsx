import React from 'react';
import dynamic from "next/dynamic";

const RoleListTable = dynamic(import("src/views/pages/roles-list/RoleListTable"));

const Index = () => {
  return <RoleListTable />
};

export default Index;
