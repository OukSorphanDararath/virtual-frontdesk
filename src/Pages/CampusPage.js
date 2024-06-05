import React from "react";
import Card from "../components/Card";

const CampusPage = () => {
  const campusData = [
    {
      title: "South Campus",
      bgColor: "bg-gradient-to-t from-cyan-700 to-cyan-400",
    },
    {
      title: "West Campus",
      bgColor: "bg-gradient-to-t from-purple-700 to-purple-400",
    },
    {
      title: "Toul Kork Campus",
      bgColor: "bg-gradient-to-t from-red-700 to-red-400",
    },
    {
      title: "PSIS Toul Tom Poung",
      bgColor: "bg-gradient-to-t from-orange-700 to-orange-400",
    },
    {
      title: "PSIS Boeung Keng Kang",
      bgColor: "bg-gradient-to-t from-green-700 to-green-400",
    },
    {
      title: "Takmao Campus",
      bgColor: "bg-gradient-to-t from-blue-700 to-blue-400",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold my-8">Find Campus</h1>
      <div className="absolute left-0 right-0 flex overflow-x-auto no-scrollbar pl-10 py-4 flex-nowrap">
        {campusData.map((item) => (
          <Card className={item?.bgColor + " relative mr-5"}>
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

export default CampusPage;
