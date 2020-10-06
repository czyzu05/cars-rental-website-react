import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" component={Navbar} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
