import React, { Component } from "react";
import "./searchbar.css"

export default class Searchbar extends Component {
  handleChange = (e, type, value) => {
    e.preventDefault();
    this.props.onUserInput(type, value);
  };
  handleTextChange = e => {
    this.handleChange(e, "name", e.target.value);
  };
  handleCategoryChange = e => {
    this.handleChange(e, "category", e.target.value);
  };
  render() {
    return (
      <div className="container-fluid pull-right">
        <div className="row bg-light text-dark">
          <div id="search" className="input-group">
            <h4>Search</h4>
            <div className="input-group input-group-default mb-2">
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Name</span>
              </div>
              <input
                type="text"
                className="form-control"
                onChange={this.handleTextChange}
              />
              <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">Category</span>
                <div className="input-group-append">
                  <select
                    id="category"
                    className="form-control"
                    onChange={this.handleCategoryChange}
                  >
                    <option value="all">All</option>
                    <option value="South Coast">South Coast</option>
                    <option value="East Coast">East Coast</option>
                    <option value="West Coast">West Coast</option>
                    <option value="North East">North East</option>
                    <option value="North West">North West</option>
                    <option value="Mid West">Mid West</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
