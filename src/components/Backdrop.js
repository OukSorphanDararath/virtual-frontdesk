import React from "react";

const Backdrop = ({ onClick }) => {
  return (
    <div
      className="fixed inset-0 bg-black opacity-50 transition-opacity duration-1000 ease-out z-20"
      onClick={onClick}
    ></div>
  );
};

export default Backdrop;
