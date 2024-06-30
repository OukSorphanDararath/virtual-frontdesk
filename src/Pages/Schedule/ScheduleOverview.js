import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Card from "../../components/Card";
import { colors } from "../../data/colors";
import Loading from "../../components/Loading";
import axios from "axios";
const apiBaseUrl = process.env.REACT_APP_API_KEY;

const ScheduleOverview = () => {
  const [scheduleData, setScheduleData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${apiBaseUrl}/schedules`)
      .then((response) => {
        setScheduleData(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
    setIsLoading(false);
  }, []);

  return (
    <div>
      {isLoading && <Loading />} 
      <h1 className="text-3xl font-semibold my-8">Schedule</h1>
      <div className="absolute left-0 right-0 flex overflow-x-auto no-scrollbar pl-10 py-4 flex-nowrap gap-5">
        {/* Render links for each shift */}
        {scheduleData?.map((item, index) => {
          const colorClass = colors[index % colors.length];
          return (
            <Link key={item.title} to={`${pathname}/${item._id}`}>
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

export default ScheduleOverview;
