import React from "react";

const Card = ({ className, children }) => {
  return (
    <div
      className={`${className} flex-none w-[350px] h-[500px] rounded-xl overflow-hidden shadow-md`}
    >
      {children}
    </div>
  );
};

export default Card;
