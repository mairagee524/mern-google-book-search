
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/NavBar";

const App = () => (
  <Router>
    <div>
      <Nav />
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path="/api/books">
            <Saved />
          </Route>
          <Route>
            <NoMatch />
          </Route>
        </Switch>
    </div>
  </Router>
);

export default App;