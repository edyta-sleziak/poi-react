import "../node_modules/bootstrap/dist/css/bootstrap.css";
import React from "react";
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";
import './index.css';
import App from './App';
import IslandPage from "./components/islandPage";
import LoginForm from "./components/authentication/loginForm";
import PrivateRoute from "./components/authentication/privateRoute";

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
            <PrivateRoute path="/islands/:id" component={IslandPage} />
            <Route path="/login" component={LoginForm} />
            <Route exact path="/" component={App} />
            <Redirect from="*" to="/" />
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<Router />, document.getElementById("root"));
