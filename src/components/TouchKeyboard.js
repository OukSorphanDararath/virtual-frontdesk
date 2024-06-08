import React, { forwardRef } from "react";
import { IoIosBackspace } from "react-icons/io";

const keys = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"],
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["Z", "X", "C", "V", "B", "N", "M"],
  ["Space", "Backspace"],
];

const TouchKeyboard = forwardRef(
  ({ isVisible, toggleVisibility, onInputChange }, ref) => {
    const handleKeyPress = (key) => {
      if (key === "Backspace") {
        onInputChange("\b"); // Signal to delete the last character
      } else if (key === "Space") {
        onInputChange(" ");
      } else {
        onInputChange(key);
      }
    };

    return (
      <div
        ref={ref}
        className={`fixed z-30 bottom-0 left-0 right-0 bg-white shadow-lg transition-transform duration-300 ease-in-out transform ${
          isVisible ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="p-4 space-y-4">
          {keys.map((row, rowIndex) => (
            <div key={rowIndex} className="flex space-x-1 justify-center">
              {row.map((key) => (
                <button
                  key={key}
                  onMouseDown={(e) => e.preventDefault()} // Prevent input blur on button click
                  onClick={() => handleKeyPress(key)}
                  className={`bg-gray-300 text-black px-4 py-2 rounded shadow hover:bg-gray-400 ${
                    key === "Space" ? "flex-initial w-96" : ""
                  }`}
                >
                  {key === "Backspace" ? <IoIosBackspace size={24} /> : key}
                </button>
              ))}
            </div>
          ))}
        </div>
        <button
          onClick={toggleVisibility}
          className="absolute top-2 right-2 bg-red-500 text-white w-10 h-10 rounded-full"
        >
          &times;
        </button>
      </div>
    );
  }
);

export default TouchKeyboard;
