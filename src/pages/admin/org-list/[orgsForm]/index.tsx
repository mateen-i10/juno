import React from 'react';
import dynamic from "next/dynamic";

const OrgsForm = dynamic(import("src/views/pages/admin/org-list/components/OrgsForm"));

const Index = () => {
  return (
    <OrgsForm />
  )
}

export default Index
