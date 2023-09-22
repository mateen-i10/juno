import React from 'react';
import dynamic from "next/dynamic";

const ModelTable = dynamic(import("src/views/pages/admin/model/ModelTable"));

const Index = () => {
  return (
    <ModelTable/>
  )
}

export default Index
