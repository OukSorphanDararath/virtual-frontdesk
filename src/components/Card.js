import React from "react";

const Card = ({ className, children, isRandomColor = false }) => {
  const generateRandomColorClass = () => {
    const colors = [
      "bg-gradient-to-t from-cyan-700 to-cyan-400",
      "bg-gradient-to-t from-purple-700 to-purple-400",
      "bg-gradient-to-t from-red-700 to-red-400",
      "bg-gradient-to-t from-orange-700 to-orange-400",
      "bg-gradient-to-t from-green-700 to-green-400",
      "bg-gradient-to-t from-blue-700 to-blue-400",
    ];

    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  return (
    <div
      className={`${className} ${
        isRandomColor && generateRandomColorClass()
      } flex-none w-[350px] h-[500px] rounded-xl overflow-hidden shadow-md`}
    >
      {children}
    </div>
  );
};

export default Card;
