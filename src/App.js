import React, { Component } from 'react';
import List from './components/list';
import Form from './components/form';
import Header from './components/header';
import Searchbar from './components/searchbar';
import api from './dataStore/stubAPI';

export default class App extends Component {
  render() {
    let islands = api.getAll();
    return (
      <div className="jumbotron">
        <div className="container-">
          <div className="col-md-14">
            <Header/>
          </div>
          <div className="row">
            <div id="left" className="col-md-3">
              <Form />
            </div>
            <div className="col-md-9">
              <Searchbar/>
              <List islands={islands} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

