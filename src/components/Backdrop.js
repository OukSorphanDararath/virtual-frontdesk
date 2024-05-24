import React from "react";

const Backdrop = ({ onClose }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black/30 z-0"
      onClick={onClose}
    ></div>
  );
};

export default Backdrop;
