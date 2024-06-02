import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { BiHomeAlt2 } from "react-icons/bi";

const NavigationButton = () => {
  return (
    <div className="inline-flex justify-between items-center rounded-full border border-white/15 pl-4 pr-6 gap-8 cursor-pointer bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100">
      <button>
        <IoIosArrowBack size={45} />
      </button>
      <button>
        <BiHomeAlt2 size={36} />
      </button>
    </div>
  );
};

export default NavigationButton;
