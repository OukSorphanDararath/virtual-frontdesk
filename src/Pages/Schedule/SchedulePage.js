import React, { useEffect, useState } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

const ShiftPage = React.lazy(() => import("./ShiftPage"));
const ScheduleOverview = React.lazy(() => import("./ScheduleOverview"));

const SchedulePage = () => {
  let { path } = useRouteMatch();

  return (
    <div className="h-full">
      <Switch>
        <Route exact path={path}>
          <ScheduleOverview />
        </Route>
        <Route path={`${path}/:shift`} component={ShiftPage} />
      </Switch>
    </div>
  );
};

export default SchedulePage;
