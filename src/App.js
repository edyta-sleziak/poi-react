import React, { Component } from 'react';
import List from './components/list';
import Form from './components/form';
import Navigation from './components/navigation';
import Searchbar from './components/searchbar';
import api from './dataStore/stubAPI';
import _ from 'lodash';

export default class App extends Component {
  state = {search: "", category: "all"};
  incrementUpvote = (id) => {
    api.upvote(id) ;
    this.setState({});
  };
  addNewIsland = (name, category) => {
    api.add(name, category);
    this.setState({});
  };
  handleChange = (type, value) => {
    type === "name"
      ? this.setState({ search: value })
      : this.setState({ category: value });
  };
  render() {
    let islands = _.sortBy(api.getAll(), island => -island.upvotes);
    let filteredIslands = islands.filter(i => {
      const name = `${i.name}`;
      return name.toLowerCase().search(this.state.search.toLowerCase()) !== -1;
    });
    filteredIslands =
      this.state.category === "all"
        ? filteredIslands
        : filteredIslands.filter(i => i.category === this.state.category);
    let sortedIslands = _.sortBy(filteredIslands, i => -i.upvotes);
    return (
      <div className="jumbotron">
        <div className="container-">
          <div className="row">
            <div id="left" className="col-md-2">
              <Form handleAdd={this.addNewIsland} />
            </div>
            <div className="col-md-10">
              <Navigation/>
              <Searchbar onUserInput={this.handleChange}/>
              <List islands={sortedIslands} upvoteHandler = {this.incrementUpvote} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

