import React from 'react';
import dynamic from "next/dynamic";

const EditCatalog = dynamic(import("../../../../../views/pages/admin/catalog/EditCatalog"));

const Index = () => {
  return (
    <div>
      <EditCatalog />
    </div>
  );
};

export default Index;

