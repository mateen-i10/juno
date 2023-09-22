import React from 'react';
import dynamic from "next/dynamic";

const ErrorsDetail = dynamic(import("../../../../../views/pages/admin/errors/ErrorDetails"));

const Index = () => {
  return <ErrorsDetail />
};

export default Index;
