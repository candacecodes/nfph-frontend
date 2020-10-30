import React from "react";
import ReactDOM from "react-dom";
import Login from "./layouts/Login.js"
import indexRoutes from "./routes/index.jsx";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

import "./assets/scss/style.scss";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path='/' key='home' component={Login} />
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
