import React from 'react';
import dynamic from "next/dynamic";

const LeadGenerator = dynamic(import("src/views/pages/rts-user/lead-generator/LeadGeneratorTable"));

const Index = () => {
  return <LeadGenerator />
};

export default Index;
