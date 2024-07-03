import React, { useState, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import TouchKeyboard from "./TouchKeyboard";
// import PropTypes from "prop-types"; // Import PropTypes to validate props

const SearchBoxSchedule = ({ floorAndRoomData, onRoomSelect }) => {
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
    if (inputValue) {
      const results = [];
      floorAndRoomData.forEach((floor) => {
        floor.rooms.forEach((room) => {
          if (room.name.toLowerCase().includes(inputValue.toLowerCase())) {
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
    // onRoomSelect({ floor, room });
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

// SearchBoxSchedule.propTypes = {
//   floorAndRoomData: PropTypes.array.isRequired,
//   onRoomSelect: PropTypes.func.isRequired,
// };

export default SearchBoxSchedule;
