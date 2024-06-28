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
        className={`bg-black z-50 mx-auto rounded-3xl relative overflow-hidden text-blue-900 text-center flex flex-col pt-16 pb-8 items-center gap-6
    transition-all duration-500 transform ${
      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
    }`}
      >
        <button
          onClick={onClose}
          className="absolute top-2 text-3xl right-4 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <img
          src={image}
          alt={title}
          className="max-w-full w-full h-full max-h-screen object-contain"
        />
      </div>
    </div>
  );
};

export default Modal;
