import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

const Loading = () => {

  return (
    <div className="w-full h-full flex justify-center items-center">
      <PuffLoader
        color="#ffffff"
        size={100}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
};

export default Loading;
