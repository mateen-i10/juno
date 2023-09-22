import React from 'react';
import dynamic from "next/dynamic";

const IndustryTable = dynamic(import("src/views/pages/admin/industry-list/IndustryTable"));

const Index = () => {
  return (
    <IndustryTable />
  )
}

export default Index
