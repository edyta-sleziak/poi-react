import React, {Component} from 'react';
import './form.css';

export default class Form extends Component {
  state ={ name: "", category: ""};
  handleNameChange = (e) =>  this.setState({name: e.target.value});
  handleCategoryChange = (e) =>  this.setState({category: e.target.value});
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAdd( this.state.name, this.state.category);
    this.setState({ name: '', category:''})
  };
  render() {
    return (
      <div className="fill bg-dark sticky-top">
        <div id ="brand" className="text-white bg-primary">
          <h2 align="center">Irish Islands</h2>
        </div>
        <form className="form bg-dark text-light">
          <h4>Add new island</h4>
          <div className="form-group">
            <input type="text"
                   className="form-control"
                   placeholder="Name"
                   value={this.state.name}
                   onChange={ this.handleNameChange }
            />
          </div>
          <div className="form-group">
            <select
              id="category"
              className="form-control"
              value={this.state.category}
              onChange={ this.handleCategoryChange }>
              <option value="SouthCoast">South Coast</option>
              <option value="EastCoast">East Coast</option>
              <option value="NorthWest">North West</option>
              <option value="MidWest">Mid West</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary"
                  onClick={this.handleSubmit}>Add</button>
        </form>
      </div>
    );
  }
}