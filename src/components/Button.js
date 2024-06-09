import React from "react";

const Button = ({ onClick, text, className, customClass }) => {
  return (
    <button
      onClick={onClick}
      className={
        customClass
          ? `${customClass} text-lg shadow-lg py-2 rounded-3xl transition-all duration-200`
          : `bg-blue-800 hover:bg-blue-900 active:bg-blue-950 text-white text-center w-56 font-medium text-lg shadow-lg py-2 rounded-3xl transition-all duration-200 ${className}`
      }
      style={{
        transform: "scale(1)",
        transition: "transform 0.1s ease-in-out",
      }}
      onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
      onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      {text}
    </button>
  );
};

export default Button;
