import React from 'react';
import dynamic from "next/dynamic";

const IndustryForm = dynamic(import("src/views/pages/admin/industry-list/component/IndustryForm"));

const Index = () => {
  return (
    <IndustryForm />
  )
}

export default Index
