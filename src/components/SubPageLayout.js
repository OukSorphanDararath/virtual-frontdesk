import React from "react";
import Footer from "./Footer";

const SubPageLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex flex-col px-10 py-5 gap-4">
      <div className="flex-1 w-full h-12">{children}</div>
      <Footer />
    </div>
  );
};

export default SubPageLayout;
