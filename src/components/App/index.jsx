import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import components from "./styles";
import WelcomePage from "../WelcomePage";
import LoginPage from "../LoginPage";

const App = () => {
  const { App } = components;

  return (
    <App>
      <Router>
        <Switch>
          <Route exact path="/">
            <WelcomePage />
          </Route>
          <Route path="/login">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </App>
  );
};

export default App;
