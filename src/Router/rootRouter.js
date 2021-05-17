import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PublicRoute } from "./routes";
import AppRouter from "./appRouter";
import GoogleLogin from "../pages/googleLogin/GoogleLogin";

class rootRouter extends React.PureComponent {
  render() {
    return (
      <Router>
        <Switch>
          <PublicRoute component={GoogleLogin} path="/logIn" exact />
          <AppRouter />
        </Switch>
      </Router>
    );
  }
}
export default rootRouter;
