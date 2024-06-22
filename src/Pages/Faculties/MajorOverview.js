import React from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "../../components/Card";
import { colors } from "../../data/colors";

const MajorOverview = () => {
  const location = useLocation();
  const { pathname } = location;
  const { major, title } = location.state || {};

  return (
    <div>
      <h1 className="text-3xl font-semibold my-8">{title}</h1>
      <div className="absolute left-0 right-0 flex overflow-x-auto no-scrollbar pl-10 py-4 flex-nowrap gap-5">
        {major?.map((item, index) => {
          const colorClass = colors[index % colors.length];
          return (
            <Link
              key={item.name}
              to={{
                pathname: `${pathname}/${item.name}`,
                state: { pdf: item.pdf },
              }}
            >
              <Card className={colorClass}>
                <div className="flex justify-center items-center h-full">
                  <h1 className="text-3xl font-medium text-wrap mx-10 text-center leading-relaxed text-shadow">
                    {item?.name}
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

export default MajorOverview;
