import React from 'react';
import dynamic from "next/dynamic";

const IndustryDetail = dynamic(import("src/views/pages/admin/industry-list/component/IndustryDetail"));

const Index = () => {
  return (
    <IndustryDetail />
  )
}

export default Index
