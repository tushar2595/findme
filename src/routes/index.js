import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Landing from '../Pages/Landing.js';
import HomePage from '../Pages/HomePage.js';


class AppRoutes extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/landing" component={Landing} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default AppRoutes;