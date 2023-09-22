import React from 'react';
import dynamic from "next/dynamic";

const EditModel = dynamic(import("../../../../../views/pages/admin/model/EditModel"));

const Index = () => {
  return (
    <div>
      <EditModel />
    </div>
  );
};

export default Index;

