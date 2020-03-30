import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import components from "./styles";
import WelcomePage from "../WelcomePage";
import LoginPage from "../LoginPage";
import Map from "../Map";

import cardsState from "../Map/reducers";

const App = () => {
  const reducers = combineReducers({
    cardsState
  });

  const store = createStore(reducers);

  const { App, MapBackground, ColorLayer } = components;

  return (
    <Provider store={store}>
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
    </Provider>
  );
};

export default App;
