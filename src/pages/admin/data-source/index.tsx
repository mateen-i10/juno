import React from 'react';
import dynamic from "next/dynamic";

const DataSourceTable = dynamic(import("../../../views/pages/admin/data-source/DataSourceTable"));

const Index = () => {
  return <DataSourceTable />
};

export default Index;
