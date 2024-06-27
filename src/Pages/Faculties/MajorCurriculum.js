import React from "react";
import { useLocation } from "react-router-dom";

const MajorCurriculum = () => {
  const location = useLocation();
  const { pdf } = location.state || {};

  return (
    <div className="h-full w-full border border-white/20 bg-white/20 rounded-xl overflow-hidden">
      <iframe src={pdf} title="classSchedule" className="w-full h-full" />
    </div>
  );
};

export default MajorCurriculum;
