import React from 'react';
import dynamic from "next/dynamic";

const InnovateLabs = dynamic(import("../../views/pages/innovate-labs/InnovateLabs"));

const Index = () => {
  return <InnovateLabs/>
};

export default Index;
