import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Haptik from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import {List} from "./store/reducer";
import { Logger } from "./helper/logger"; //Middleware for logging the Redux Actions on console

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(
  List,
  composeEnhancers(applyMiddleware(thunk,Logger))
);


const Appication = (
  <Provider store={store}>
    <BrowserRouter>
      <Haptik />
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(Appication, document.getElementById("root"));

serviceWorker.register();

