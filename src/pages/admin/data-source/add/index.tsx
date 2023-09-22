import React from 'react';
import dynamic from "next/dynamic";

const AddDataSource = dynamic(import("../../../../views/pages/admin/data-source/AddDataSource"));

const Index = () => {
  return <AddDataSource />
};

export default Index;
