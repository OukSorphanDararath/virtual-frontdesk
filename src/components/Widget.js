import React from "react";

const Widget = ({ id, title, icon }) => {
  return (
    <div className="border rounded-2xl bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_10px_8px] text-blue-900 flex flex-row items-center gap-4">
      <div className="basis-2/5 flex justify-center">
        <div className="bg-blue-200/45 w-28 h-28 flex justify-center items-center rounded-full">{icon}</div>
      </div>
      <h1 className="basis-3/5 font-semibold text-xl">{title}</h1>
    </div>
  );
};

export default Widget;
