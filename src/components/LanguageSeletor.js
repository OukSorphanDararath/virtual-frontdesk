import React, { useState, useRef, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Backdrop from "./Backdrop";

const LanguageSelector = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const languages = [
    { name: "ខ្មែរ", icon: "https://img.icons8.com/color/96/cambodia.png" },
    { name: "中国人", icon: "https://img.icons8.com/color/96/china.png" },
  ];

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="relative z-30 inline-flex items-center rounded-full shadow-inner px-5 py-1 gap-4 cursor-pointer bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100"
      >
        <img
          width="36"
          height="36"
          src="https://img.icons8.com/color/48/usa.png"
          alt="usa"
        />
        {/* Icon for dropdown arrow */}
        <span className="p-1 bg-white text-blue-900 rounded-full">
          <IoIosArrowDown />
        </span>
      </button>

      {/* Dropdown List */}
      <div
        className={`origin-top-right z-30 overflow-hidden absolute right-0 mt-2 w-40 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 transform transition-all duration-200 ease-out ${
          isOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="py-1">
          {languages.map((language) => (
            <button
              key={language}
              className="flex items-center gap-3 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
              onClick={() => {
                alert(`Selected: ${language.name}`);
                setIsOpen(false);
              }}
            >
              <img
                width="36"
                height="36"
                src={language.icon}
                alt={language.name}
              />
              {language?.name}
            </button>
          ))}
        </div>
      </div>

      {/* Backdrop */}
      {isOpen && <Backdrop onClick={() => setIsOpen(false)} />}
    </div>
  );
};

export default LanguageSelector;
