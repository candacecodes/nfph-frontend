import React from "react";
import ReactDOM from "react-dom";
import Login from "./layouts/Login.js"
import indexRoutes from "./routes/index.jsx";
import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'

import "./assets/scss/style.scss";

const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <Switch>
      <Route exact path='/' key='home' component={Login}/>
      {indexRoutes.map((prop, key) => {
        return <Route path={prop.path} key={key} component={prop.component} />;
      })}
    </Switch>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);



