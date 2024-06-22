import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import axios from "axios";
const apiBaseUrl = process.env.REACT_APP_API_KEY;

const ShiftPage = React.lazy(() => import("./ShiftPage"));
const ScheduleOverview = React.lazy(() => import("./ScheduleOverview"));

const SchedulePage = () => {
  const [scheduleData, setScheduleData] = useState();

  let { path } = useRouteMatch();

  useEffect(() => {
    axios
      .get(`${apiBaseUrl}/schedules`)
      .then((response) => {
        setScheduleData(response.data.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  return (
    <div className="h-full">
      <Switch>
        <Route exact path={path}>
          <ScheduleOverview scheduleData={scheduleData} />
        </Route>
        <Route path={`${path}/:shift`} component={ShiftPage} />
      </Switch>
    </div>
  );
};

export default SchedulePage;
