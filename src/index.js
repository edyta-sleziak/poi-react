import "../node_modules/bootstrap/dist/css/bootstrap.css";
import React, { Component } from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch, Link } from "react-router-dom";
import request from "superagent";
import api from "./dataStore/stubAPI";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Details from "./components/details";

const Router = (props) => {
  // componentDidMount() {
  //   request.get("http://localhost:4000/api/poi").end((error, res) => {
  //     if (res) {
  //       let { results: islands } = JSON.parse(res.text);
  //       api.initialize(islands);
  //       this.setState({});
  //     } else {
  //       console.log(error);
  //     }
  //   });
  // }

  return (
    <BrowserRouter>
      <div className="jumbotron">
        <div className="container-fluid ">
          <Switch>
            <Route path="/islands/:id" component={Details} />
            <Route exact path="/" component={App} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<Router />, document.getElementById("root"));
