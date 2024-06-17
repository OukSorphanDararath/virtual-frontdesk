import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CampusOverview from "./CampusOverview";
import { campusData } from "../../data/dataSource";

const campusMap = React.lazy(() => import("./Map"));

const CampusPage = () => {
  let { path } = useRouteMatch();

  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <CampusOverview campusData={campusData} />
        </Route>
        <Route path={`${path}/:campus`} component={campusMap} />
      </Switch>
    </div>
  );
};

export default CampusPage;
