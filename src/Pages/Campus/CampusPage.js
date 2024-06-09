import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CampusOverview from "./CampusOverview";

const campusMap = React.lazy(() => import("./Map"));

const CampusPage = () => {
  let { path } = useRouteMatch();

  const campusData = [
    {
      id: "south_campus",
      title: "South Campus",
    },
    {
      id: "west_campus",
      title: "West Campus",
    },
    {
      id: "toul_kork",
      title: "Toul Kork Campus",
    },
    {
      id: "psis_toul_tom_poung",
      title: "PSIS Toul Tom Poung",
    },
    {
      id: "psis_boeung_keng_kang",
      title: "PSIS Boeung Keng Kang",
    },
    {
      id: "takmao_campus",
      title: "Takmao Campus",
    },
  ];

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
