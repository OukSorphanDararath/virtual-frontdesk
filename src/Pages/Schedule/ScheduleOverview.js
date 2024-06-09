import React from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "../../components/Card";

const ScheduleOverview = ({ scheduleData }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <h1 className="text-3xl font-semibold my-8">Schedule</h1>
      <div className="absolute left-0 right-0 flex overflow-x-auto no-scrollbar pl-10 py-4 flex-nowrap gap-5">
        {/* Render links for each shift */}
        {scheduleData.map((item) => (
          <Link key={item.title} to={`${pathname}/${item.url}`}>
            <Card isRandomColor={true}>
              <div className="flex justify-center items-center h-full">
                <h1 className="text-3xl font-medium text-wrap mx-10 text-center leading-relaxed text-shadow">
                  {item.title}
                </h1>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ScheduleOverview;
