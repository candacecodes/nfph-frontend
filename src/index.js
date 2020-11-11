import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './App.js'
import Login from "./layouts/Login.js"
import indexRoutes from "./routes/index.jsx";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer'

import "./assets/scss/style.scss";

const store = createStore(rootReducer, applyMiddleware(thunk))

window.addEventListener('onunload', function (e) { 
  e.preventDefault(); 
  localStorage.clear()
}); 

ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App/>
  </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);


// ReactDOM.render(

//   <Provider store={store} >
//     <BrowserRouter>
//       <Switch>
//         <Route exact path='/' key='home' component={Login} />
//         {indexRoutes.map((prop, key) => {
//           return <Route path={prop.path} key={key} component={prop.component} />;
//         })}
//       </Switch>
//     </BrowserRouter>
//   </Provider>,
//   document.getElementById("root")
// );