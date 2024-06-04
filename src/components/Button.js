import React from "react";

const Button = ({ onClick, text, className }) => {
  return (
    <button
      onClick={onClick}
      className={`${className} bg-blue-900 text-white text-center w-56 font-medium text-lg shadow-lg py-2 rounded-3xl`}
    >
      {text}
    </button>
  );
};

export default Button;
