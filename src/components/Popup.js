import React from "react";
import Button from "./Button";

const Popup = ({
  title,
  description,
  imgSrc,
  isDescriptionOnTop = false,
  onButtonClick,
}) => {
  return (
    <div className="bg-white w-[550px] h-[550px] mx-auto mt-14 rounded-3xl overflow-hidden text-blue-900 text-center flex flex-col pt-16 pb-8 items-center gap-6">
      <h1 className="font-bold text-2xl px-24">{title}</h1>
      {isDescriptionOnTop && <p className="px-20">{description}</p>}
      <img
        src={imgSrc}
        alt="QR Code"
        className="w-52 h-52 p-3 border border-blue-600 rounded-xl"
      />
      {!isDescriptionOnTop && <p className="px-20">{description}</p>}
      <Button className={"mt-auto"} text={"Done"} onClick={onButtonClick}/>
    </div>
  );
};

export default Popup;
