import React from 'react';
import dynamic from "next/dynamic";

const ModelDetail = dynamic(import("../../../../../views/pages/admin/model/ModelDetail"));

const Index = () => {
  return (
    <div>
      <ModelDetail />
    </div>
  );
};

export default Index;
