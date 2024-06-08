import React from "react";
import evening from "../../assets/evening-shift.pdf";

const ShiftPage = () => {
  return (
    <div className="h-full w-full border border-white/20 bg-white/20 rounded-xl overflow-hidden">
      <iframe
        src={evening}
        title="classSchedule"
        className="w-full h-full"
      />
    </div>
  );
};

export default ShiftPage;
