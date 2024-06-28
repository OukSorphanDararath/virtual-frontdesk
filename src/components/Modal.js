import React, { useEffect, useState } from "react";
import Backdrop from "./Backdrop";

const Modal = ({ onClose, image, title }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-30`}>
      <Backdrop onClick={onClose} />

      {/* Popup Container */}
      <div
        className={`bg-gray-700 z-50 mx-auto rounded-3xl relative overflow-hidden text-blue-900 
    transition-all duration-500 transform ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 text-3xl right-2 text-gray-700 hover:text-gray-950 px-2 py-0 flex items-center border  border-gray-500 bg-white/30 rounded-full"
        >
          &times;
        </button>
        <img
          src={image}
          alt={title}
          className="max-w-full w-[50rem] h-[30rem] max-h-screen object-contain"
        />
      </div>
    </div>
  );
};

export default Modal;
