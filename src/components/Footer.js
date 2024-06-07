import React from "react";
import NavigationButton from "./NavigationButton";
import DateTime from "./DateTime";

const Footer = () => {
  return (
    <div className="mt-auto w-full flex justify-between items-center">
      <NavigationButton />
      <DateTime />
    </div>
  );
};

export default Footer;
