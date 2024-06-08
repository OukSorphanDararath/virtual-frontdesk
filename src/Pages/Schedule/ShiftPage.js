import React from "react";
import evening from "../../assets/evening-shift.pdf";

const ShiftPage = () => {
  return (
    <div className="h-full w-full">
      <iframe src={evening} title="classSchedule" className="w-full h-full" />
    </div>
  );
};

export default ShiftPage;
