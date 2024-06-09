import React, { useState, useEffect } from "react";
import Button from "./Button";
import Backdrop from "./Backdrop";

const Popup = ({
  title,
  description,
  imgSrc,
  isDescriptionOnTop = false,
  onButtonClick,
  disableBackDrop = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the visibility state after the component mounts to start the transition
    setIsVisible(true);
  }, []);

  return (
    <div
      className={
        disableBackDrop
          ? "pt-10"
          : `fixed inset-0 flex items-center justify-center z-30`
      }
    >
      {/* Backdrop */}
      {!disableBackDrop && <Backdrop />}

      {/* Popup Container */}
      <div
        className={`bg-white w-[550px] h-[550px] z-50 mx-auto rounded-3xl overflow-hidden text-blue-900 text-center flex flex-col pt-16 pb-8 items-center gap-6
        transition-all duration-500 transform ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <h1 className="font-bold text-2xl px-24">{title}</h1>
        {isDescriptionOnTop && <p className="px-20">{description}</p>}
        <img
          src={imgSrc}
          alt="QR Code"
          className="w-52 h-52 p-3 border border-blue-600 rounded-xl"
        />
        {!isDescriptionOnTop && <p className="px-20">{description}</p>}
        <Button className={"mt-auto"} text={"Done"} onClick={onButtonClick} />
      </div>
    </div>
  );
};

export default Popup;
