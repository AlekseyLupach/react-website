import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages";
import SinginPage from "./pages/singin";
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SinginPage} exact />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
