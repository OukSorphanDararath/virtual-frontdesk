import React from "react";
import { FiSearch } from "react-icons/fi";

const SearchBox = () => {
  return (
    <div class="relative">
      <div class="absolute inset-y-0 start-0 z-10 flex items-center ps-6 pointer-events-none">
        <FiSearch className="w-6 h-6 text-gray-200" />
      </div>
      <input
        type="search"
        id="default-search"
        className={`block w-96 focus:outline-none py-3 ps-16 text-lg shadow-inner rounded-full bg-white bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-20`}
        placeholder="Search"
      />
    </div>
  );
};

export default SearchBox;
