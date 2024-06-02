import React from "react";
import Card from "../components/Card";

const SchedulePage = () => {
  const scheduleData = [
    { title: "Morning", bgColor: "bg-gradient-to-t from-cyan-700 to-cyan-400" },
    {
      title: "Afternoon",
      bgColor: "bg-gradient-to-t from-purple-700 to-purple-400",
    },
    { title: "Evening", bgColor: "bg-gradient-to-t from-red-700 to-red-400" },
    {
      title: "Graduate Program",
      bgColor: "bg-gradient-to-t from-orange-700 to-orange-400",
    },
  ];

  return (
    <div className="relative">
      <h1 className="text-3xl font-semibold my-8">Schedule</h1>
      <div className="absolute left-0 -right-10 flex overflow-x-auto no-scrollbar flex-nowrap gap-5">
        {scheduleData.map((item) => (
          <Card className={item?.bgColor}>
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
