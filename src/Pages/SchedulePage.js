import React from "react";
import Card from "../components/Card";

const SchedulePage = () => {
  const scheduleData = [
    { title: "Morning" },
    {
      title: "Afternoon",
    },
    { title: "Evening" },
    {
      title: "Graduate Program",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold my-8">Schedule</h1>
      <div className="absolute left-0 right-0 flex overflow-x-auto no-scrollbar pl-10 py-4 flex-nowrap gap-5">
        {scheduleData.map((item) => (
          <Card isRandomColor={true}>
            <div className="flex justify-center items-center h-full">
              <h1 className="text-3xl font-medium text-wrap mx-10 text-center leading-relaxed text-shadow">
                {item?.title}
              </h1>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default SchedulePage;
