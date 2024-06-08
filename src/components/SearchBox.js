import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import TouchKeyboard from "./TouchKeyboard";

const SearchBox = () => {
  const [isKeyboardVisible, setKeyboardVisibility] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);
  const keyboardRef = useRef(null);

  const toggleKeyboard = () => {
    setKeyboardVisibility(!isKeyboardVisible);
  };

  const handleFocus = () => {
    setKeyboardVisibility(true);
  };

  // Handle clicks outside the input and keyboard to hide the keyboard
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target) &&
        keyboardRef.current &&
        !keyboardRef.current.contains(event.target)
      ) {
        setKeyboardVisibility(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleInputChange = (key) => {
    if (key === "\b") {
      // Handle backspace
      setInputValue((prev) => prev.slice(0, -1));
    } else {
      // Handle normal key input
      setInputValue((prev) => prev + key);
    }
  };

  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 z-10 flex items-center pl-6 pointer-events-none">
        <FiSearch className="w-6 h-6 text-gray-200" />
      </div>
      <input
        ref={inputRef}
        type="search"
        id="default-search"
        className="block w-96 focus:outline-none py-3 pl-16 pr-6 text-lg shadow-inner rounded-full bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20"
        placeholder="Search"
        onFocus={handleFocus}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <TouchKeyboard
        ref={keyboardRef}
        isVisible={isKeyboardVisible}
        toggleVisibility={toggleKeyboard}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

export default SearchBox;
