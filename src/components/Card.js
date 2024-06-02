import React from "react";

const Card = ({ className, children }) => {
  return (
    <div
      className={`${className} bg-white/20 flex-none w-[350px] h-[500px] rounded-xl`}
    >
      {children}
    </div>
  );
};

export default Card;
