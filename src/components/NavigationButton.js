import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BiHomeAlt2 } from "react-icons/bi";
import { useHistory } from "react-router-dom";

const NavigationButton = () => {
  const history = useHistory();

  const handleBackToHome = () => {
    history.push("/");
  };

  return (
    <div className="inline-flex justify-between items-center rounded-full border border-white/15 pl-4 pr-6 gap-8 bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100">
      <button
        onClick={() => window.history.back()}
        style={{
          transform: "scale(1)",
          transition: "transform 0.1s ease-in-out",
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <IoIosArrowBack size={45} />
      </button>
      <button
        onClick={handleBackToHome}
        style={{
          transform: "scale(1)",
          transition: "transform 0.1s ease-in-out",
        }}
        onMouseDown={(e) => (e.currentTarget.style.transform = "scale(0.95)")}
        onMouseUp={(e) => (e.currentTarget.style.transform = "scale(1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <BiHomeAlt2 size={36} />
      </button>
    </div>
  );
};

export default NavigationButton;
