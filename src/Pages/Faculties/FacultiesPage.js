import React from "react";
import Card from "../../components/Card";
import { facultiesData } from "../../data/dataSource";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import axios from "axios";

const FacultiesOverview = React.lazy(() => import("./FacultiesOverview"));
const MajorOverview = React.lazy(() => import("./MajorOverview"));
const MajorCurriculum = React.lazy(() => import("./MajorCurriculum"));

const FacultiesPage = () => {
  let { path } = useRouteMatch();

  return (
    <div className="h-full">
      <Switch>
        <Route
          path={`${path}/:major/:curriculum`}
          component={MajorCurriculum}
        />
        <Route path={`${path}/:major`} component={MajorOverview} />
        <Route exact path={path}>
          <FacultiesOverview facultiesData={facultiesData} />
        </Route>
      </Switch>
    </div>
  );
};

export default FacultiesPage;
