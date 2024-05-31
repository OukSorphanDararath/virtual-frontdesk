import React from "react";
import pucLogo from "../assets/puc-logo.png";
import DateTime from "./DateTime";
import LanguageSeletor from "./LanguageSeletor";

const MainHeader = () => {
  return (
    <div className="flex justify-between items-center h-26 text-white mb-3">
      <div className="flex flex-row items-center flex-1 gap-x-8">
        {/* Logo */}
        <div className="flex flex-row items-center gap-4 max-w-[35%]">
          <img
            src={pucLogo}
            alt="PUC LOGO"
            style={{ width: "90px", height: "90px" }}
          />
          <span className="font-medium text-2xl text-wrap">
            Paññāsāstra University of Cambodia
          </span>
        </div>
        {/* Time and Date */}
        <span className="border h-14 mr-10"></span>
        <DateTime />
      </div>
      {/* Language Switch */}
      <LanguageSeletor />
    </div>
  );
};

export default MainHeader;
