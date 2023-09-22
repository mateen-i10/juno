import React, {ReactNode} from 'react';
import dynamic from "next/dynamic";
import BlankLayout from "../../@core/layouts/BlankLayout";

const TwoStepsVerification = dynamic(import("../../views/pages/twoStepsVerification/TwoStepsVerification"));

const Index = () => {
  return (
    <TwoStepsVerification />
  );
};

Index.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

Index.guestGuard = true

export default Index;
