import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import components from "./styles";
import WelcomePage from "../WelcomePage";
import LoginPage from "../LoginPage";
import Map from "../Map";

const App = () => {
  const { App, MapBackground, ColorLayer } = components;

  return (
    <App>
      <MapBackground>
        <ColorLayer>
          <Router>
            <Switch>
              <Route exact path="/">
                <WelcomePage />
              </Route>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/game">
                <Map />
              </Route>
            </Switch>
          </Router>
        </ColorLayer>
      </MapBackground>
    </App>
  );
};

export default App;
