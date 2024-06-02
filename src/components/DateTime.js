import React, { useState, useEffect } from "react";

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timerId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const formattedDate = currentTime.toLocaleDateString(undefined, {
    weekday: "long",
    month: "long",
    day: "2-digit",
  });

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="flex gap-6 text-2xl text-shadow">
      <p>{formattedTime}</p>
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateTime;
