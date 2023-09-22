import React from 'react';
import dynamic from "next/dynamic";

const EditDataSource = dynamic(import("../../../../../views/pages/admin/data-source/EditDataSource"));

const Index = () => {
  return (
    <div>
      <EditDataSource />
    </div>
  );
};

export default Index;

