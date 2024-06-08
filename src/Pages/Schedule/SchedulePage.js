import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const ShiftPage = React.lazy(() => import("./ShiftPage"));
const ScheduleOverview = React.lazy(() => import("./ScheduleOverview"));

const SchedulePage = () => {
  let { path } = useRouteMatch();

  const scheduleData = [
    { id: 0, title: "Morning", url: `morning` },
    { id: 1, title: "Afternoon", url: `afternoon` },
    { id: 2, title: "Evening", url: `evening` },
    { id: 3, title: "Graduate Program", url: `graduate-program` },
  ];

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
