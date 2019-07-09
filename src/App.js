import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import GameView from "./views/game/Game";
import ResultView from "./views/results/ResultView";
import WelcomeView from "./views/welcome/Welcome";

export default class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={WelcomeView} />
        <Route exact path="/play" component={GameView} />
        <Route exact path="/results" component={ResultView} />
      </Switch>
    );
  }
}
