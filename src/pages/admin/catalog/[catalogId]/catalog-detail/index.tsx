import React from 'react';
import dynamic from "next/dynamic";

const CatalogDetail = dynamic(import("../../../../../views/pages/admin/catalog/CatalogDetail"));

const Index = () => {
  return (
    <div>
      <CatalogDetail />
    </div>
  );
};

export default Index;
