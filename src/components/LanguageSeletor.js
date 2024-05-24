import React, { useState } from "react";

const LanguageSeletor = () => {
  const [openLanguages, setOpenLanguages] = useState(false);

  const toggleLanguages = () => {
    setOpenLanguages(!openLanguages);
  };

  return (
    <>
      {/* {openLanguages && <Backdrop onClose={toggleLanguages} />} */}
      <div className="relative inline-block ">
        <span
          className="inline-flex items-center rounded-full shadow-inner px-4 py-2 gap-2 cursor-pointer bg-white/10 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-100"
          onClick={toggleLanguages}
        >
          <span>ENGLISH</span>
        </span>
        {openLanguages && (
          <div className="absolute mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
            <ul className="py-1">
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Khmer
              </li>
              <li className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Chinese
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default LanguageSeletor;
