import React from "react";
import { useHistory } from "react-router-dom";

const Widget = ({ id, title, icon, url }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(url);
  };

  return (
    <div
      key={id}
      onClick={handleClick}
      className="border active:bg-gray-100 rounded-2xl bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_10px_8px] text-blue-900 flex flex-row items-center gap-4 cursor-pointer"
    >
      <div className="basis-2/5 flex justify-center">
        <div className=" w-28 h-28 flex justify-center items-center">
          {icon}
        </div>
      </div>
      <h1 className="basis-3/5 font-semibold text-xl">{title}</h1>
    </div>
  );
};

export default Widget;
