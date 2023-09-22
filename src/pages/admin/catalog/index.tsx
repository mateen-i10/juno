import React from 'react';
import dynamic from "next/dynamic";

const CatalogTable = dynamic(import("src/views/pages/admin/catalog/CatalogTable"));

const Index = () => {
  return (
    <CatalogTable />
  )
}

export default Index
