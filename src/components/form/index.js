import React, { Component } from 'react';
import './form.css';

export default class Form extends Component {
  render() {
    return (
      <form className="form bg-dark text-light">
        <h4>Add new island</h4>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 placeholder="Name"></input>
        </div>
        <div className="form-group">
          <select
            id="category"
            className="form-control">
            <option value="SouthCoast">South Coast</option>
            <option value="EastCoast">East Coast</option>
            <option value="NorthWest">North West</option>
            <option value="MidWest">Mid West</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    );
  }
}