import React from "react";
import Card from "../../components/Card";
import { Link, useLocation } from "react-router-dom";

const FacultiesOverview = ({ facultiesData }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <h1 className="text-3xl font-semibold my-8">Faculties</h1>
      <div className="absolute left-0 right-0 flex overflow-x-auto no-scrollbar pl-10 py-4 flex-nowrap ">
        {facultiesData?.map((item) => (
          <Link
            key={item?.title}
            to={{
              pathname: `${pathname}/${item?.title}`,
              state: { major: item?.major, title: item?.title },
            }}
          >
            <Card className={"relative mr-5"}>
              <img
                className="object-cover w-full h-full"
                alt={item?.title}
                src={item?.image}
              />
              <div className="absolute bottom-0 w-full h-full flex items-end bg-gradient-to-t from-black/90 from-5% to-transparent to-50%">
                <div className="p-6 h-2/6 flex items-center w-full">
                  <h1 className="p-2 rounded text-2xl font-semibold">
                    {item?.title}
                  </h1>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FacultiesOverview;
