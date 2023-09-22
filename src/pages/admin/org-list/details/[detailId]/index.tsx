import React from 'react';
import dynamic from "next/dynamic";

const OrgsDetails = dynamic(import("src/views/pages/admin/org-list/components/OrgsDetails"));

const Index = () => {
  return (
    <OrgsDetails />
  )
}

export default Index
