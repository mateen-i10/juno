import React from 'react';
import dynamic from "next/dynamic";

const RolesDetail = dynamic(import("src/views/pages/roles-list/roles-detail/RolesDetail"));

const Index = () => {
  return <RolesDetail />
};

export default Index;
