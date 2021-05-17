import React from "react";
import { Switch, Redirect } from "react-router-dom";
import { PrivateRoute } from "./routes";
import { Dashboard } from "../modules/dashboard";


class appRouter extends React.PureComponent {
  render() {
    return (
      <>
        <Switch>
          <Redirect exact from="/" to="/dashboard" />
          <PrivateRoute component={Dashboard} path="/dashboard" exact />
        </Switch>
      </>
    );
  }
}
export default appRouter;

