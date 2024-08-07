import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import { IoCloseCircle } from "react-icons/io5"; // Import the close icon
import TouchKeyboard from "./TouchKeyboard";
import PropTypes from "prop-types"; // Import PropTypes to validate props

const SearchBox = ({ floorAndRoomData, onRoomSelect }) => {
  const [isKeyboardVisible, setKeyboardVisibility] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [filteredRooms, setFilteredRooms] = useState([]);
  const [showFilterList, setShowFilterList] = useState(true);
  const inputRef = useRef(null);
  const keyboardRef = useRef(null);

  const toggleKeyboard = () => {
    setKeyboardVisibility(!isKeyboardVisible);
  };

  const handleFocus = () => {
    setKeyboardVisibility(true);
    setShowFilterList(true);
  };

  const handleInputChange = (key) => {
    if (key === "\b") {
      // Handle backspace
      setInputValue((prev) => prev.slice(0, -1));
    } else {
      // Handle normal key input
      setInputValue((prev) => prev + key);
    }
  };

  // Filter rooms based on input value
  useEffect(() => {
    const trimmedInput = inputValue.replace(/\s/g, "").toLowerCase();
    if (trimmedInput) {
      const results = [];
      floorAndRoomData.forEach((floor) => {
        floor.rooms.forEach((room) => {
          if (
            room.name.replace(/\s/g, "").toLowerCase().includes(trimmedInput)
          ) {
            results.push({ floor, room });
          }
        });
      });
      setFilteredRooms(results);
    } else {
      setFilteredRooms([]);
    }
  }, [inputValue, floorAndRoomData]);

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

  // Handle room selection
  const handleRoomSelect = (floor, room) => {
    setInputValue(room.name);
    setFilteredRooms([]);
    setShowFilterList(false);
    onRoomSelect({ floor, room });
  };

  // Clear the input value
  const clearInput = () => {
    setInputValue("");
    setFilteredRooms([]);
    setShowFilterList(false);
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
      {inputValue && (
        <button
          type="button"
          className="absolute inset-y-0 right-0 z-10 flex items-center pr-6 focus:outline-none"
          onClick={clearInput}
        >
          <IoCloseCircle className="w-6 h-6 text-white" />
        </button>
      )}
      {filteredRooms.length > 0 && showFilterList && (
        <ul className="absolute z-20 mt-2 w-96 text-blue-950 font-semibold bg-white shadow-lg rounded-xl max-h-60 overflow-auto">
          {filteredRooms.map(({ floor, room }) => (
            <li
              key={room.id}
              className="p-4 cursor-pointer hover:bg-gray-200"
              onClick={() => handleRoomSelect(floor, room)}
            >
              {room.name} ({floor.name})
            </li>
          ))}
        </ul>
      )}
      <TouchKeyboard
        ref={keyboardRef}
        isVisible={isKeyboardVisible}
        toggleVisibility={toggleKeyboard}
        onInputChange={handleInputChange}
      />
    </div>
  );
};

SearchBox.propTypes = {
  floorAndRoomData: PropTypes.array.isRequired,
  onRoomSelect: PropTypes.func.isRequired,
};

export default SearchBox;
