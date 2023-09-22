import React from 'react';
import dynamic from "next/dynamic";

const OrgTable = dynamic(import("src/views/pages/admin/org-list/OrgTable"));

const Index = () => {
  return (
    <OrgTable/>
  )
}

export default Index
