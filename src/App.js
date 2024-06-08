import "./App.css";
import "../node_modules/flag-icons/css/flag-icons.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React, { Suspense } from "react";
import Loading from "./components/Loading";
import SubPageLayout from "./components/SubPageLayout";

// Lazy loaded pages
const HomePage = React.lazy(() => import("./Pages/HomePage"));
const SchedulePage = React.lazy(() => import("./Pages/Schedule/SchedulePage"));
const ContactPage = React.lazy(() => import("./Pages/ContactPage"));
const FacultiesPage = React.lazy(() => import("./Pages/FacultiesPage"));
const CampusPage = React.lazy(() => import("./Pages/CampusPage"));
const NotFoundPage = React.lazy(() => import("./Pages/NotFoundPage"));
const WifiConnectionPage = React.lazy(() =>
  import("./Pages/WifiConnectionPage")
);

function App() {
  return (
    <div className="relative bg-gradient-to-t from-blue-700 to-blue-950 w-screen h-screen poppins-regular overflow-hidden text-white">
      <Router>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route
              path="/schedules"
              render={(props) => (
                <SubPageLayout>
                  <SchedulePage {...props} />
                </SubPageLayout>
              )}
            />
            <Route
              path="/contacts"
              render={(props) => (
                <SubPageLayout>
                  <ContactPage {...props} />
                </SubPageLayout>
              )}
            />
            <Route
              path="/faculties"
              render={(props) => (
                <SubPageLayout>
                  <FacultiesPage {...props} />
                </SubPageLayout>
              )}
            />
            <Route
              path="/wificonnection"
              render={(props) => (
                <SubPageLayout>
                  <WifiConnectionPage {...props} />
                </SubPageLayout>
              )}
            />
            <Route
              path="/campus"
              render={(props) => (
                <SubPageLayout>
                  <CampusPage {...props} />
                </SubPageLayout>
              )}
            />
            {/* Catch-all route for 404 Not Found */}
            <Route component={NotFoundPage} />
          </Switch>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
