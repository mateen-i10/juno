import React from 'react';
import dynamic from "next/dynamic";

const ErrorsTable = dynamic(import("../../../views/pages/admin/errors/ErrorsTable"));

const Index = () => {
  return <ErrorsTable />
};

export default Index;
