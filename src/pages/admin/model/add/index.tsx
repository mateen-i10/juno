import React from 'react';
import dynamic from "next/dynamic";

const AddModel = dynamic(import("../../../../views/pages/admin/model/AddModel"));

const Index = () => {
  return <AddModel />
};

export default Index;
