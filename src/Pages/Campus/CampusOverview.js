import React from "react";
import Card from "../../components/Card";
import { Link, useLocation } from "react-router-dom";
import { colors } from "../../data/colors";

const CampusOverview = ({ campusData }) => {
  const { pathname } = useLocation();
  return (
    <div>
      <h1 className="text-3xl font-semibold my-8">Find Campus</h1>
      <div className="absolute left-0 right-0 flex overflow-x-auto no-scrollbar pl-10 py-4 flex-nowrap">
        {campusData.map((item, index) => {
          const colorClass = colors[index % colors.length];
          return (
            <Link key={item?.id} to={`${pathname}/${item?.id}`}>
              <Card className={`relative mr-5 ${colorClass}`}>
                <div className="flex justify-center items-center h-full">
                  <h1 className="text-3xl font-medium text-wrap mx-10 text-center leading-relaxed text-shadow">
                    {item?.title}
                  </h1>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CampusOverview;
