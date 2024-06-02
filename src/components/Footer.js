import React from "react";
import NavigationButton from "./NavigationButton";
import DateTime from "./DateTime";

const Footer = () => {
  return (
    <div className="absolute bottom-0 left-0 px-10 py-5 w-full flex justify-between items-center">
      <NavigationButton />
      <DateTime />
    </div>
  );
};

export default Footer;
