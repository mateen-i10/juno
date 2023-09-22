import React from 'react';
import dynamic from "next/dynamic";

const AddCatalog = dynamic(import("../../../../views/pages/admin/catalog/AddCatalog"));

const Index = () => {
  return <AddCatalog />
};

export default Index;
