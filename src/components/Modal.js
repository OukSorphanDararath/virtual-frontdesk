import React from "react";
import Backdrop from "./Backdrop";

const Modal = ({ onClose }) => {
  return (
    <div className={`fixed inset-0 flex items-center justify-center z-30`}>
      <Backdrop onClick={onClose} />

      {/* Popup Container */}
      <div
        className={`bg-white w-[550px] h-[550px] z-50 mx-auto rounded-3xl overflow-hidden text-blue-900 text-center flex flex-col pt-16 pb-8 items-center gap-6
    transition-all duration-500 transform ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
      ></div>
    </div>
  );
};

export default Modal;
