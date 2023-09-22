import React, {ReactNode} from 'react';
import dynamic from "next/dynamic";
import BlankLayout from "../../@core/layouts/BlankLayout";

const VerifyEmail = dynamic(import("../../views/pages/verifyEmail/VerifyEmail"));

const Index = () => {
  return (
    <VerifyEmail />
  );
};

Index.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Index.guestGuard = true

export default Index;
