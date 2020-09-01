
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import NoMatch from "./pages/NoMatch";
import Hero from "./components/Hero";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Hero />
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