import React from "react";
import Card from "../components/Card";

const CampusPage = () => {
  const campusData = [
    {
      title: "South Campus",
    },
    {
      title: "West Campus",
    },
    {
      title: "Toul Kork Campus",
    },
    {
      title: "PSIS Toul Tom Poung",
    },
    {
      title: "PSIS Boeung Keng Kang",
    },
    {
      title: "Takmao Campus",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-semibold my-8">Find Campus</h1>
      <div className="absolute left-0 right-0 flex overflow-x-auto no-scrollbar pl-10 py-4 flex-nowrap">
        {campusData.map((item) => (
          <Card className={"relative mr-5"} isRandomColor={true}>
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
