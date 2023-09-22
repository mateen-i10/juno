import React from 'react';
import dynamic from "next/dynamic";

const DataSourceDetail = dynamic(import("../../../../../views/pages/admin/data-source/DataSourceDetail"));

const Index = () => {
  return (
    <div>
      <DataSourceDetail />
    </div>
  );
};

export default Index;
