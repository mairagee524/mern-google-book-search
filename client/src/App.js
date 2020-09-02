
import React, { Component }from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/NavBar";

import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";

import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Jumbotron />
          <Switch>
            <Route exact path={["/", "/search"]} component={Search}>
            </Route>
            <Route exact path={["/saved", "/api/books"]} component={Saved}>
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;