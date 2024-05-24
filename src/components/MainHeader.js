import React from "react";
import pucLogo from "../assets/puc-logo.png";
import DateTime from "./DateTime";
import LanguageSeletor from "./LanguageSeletor";

const MainHeader = () => {
  return (
    <div className="flex justify-between items-center mx-10 text-white">
      {/* Logo */}
      <div className="flex items-center">
        <img
          src={pucLogo}
          alt="PUC LOGO"
          style={{ width: "80px", height: "80px" }}
        />
        <span>Pannasastra University of Cambodia</span>
      </div>
      {/* Time and Date */}
      <DateTime />
      {/* Language Switch */}
      <LanguageSeletor />
    </div>
  );
};

export default MainHeader;
