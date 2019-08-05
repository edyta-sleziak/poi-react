import React, {Component, Fragment} from 'react';
import './detailsOptions.css';

export default class detailsOptions extends Component {
  // state = {
  //   status: "",
  //   name: this.props.island.name,
  //   description: this.props.island.description,
  //   category: this.props.island.category,
  //   latitude: this.props.island.latitude,
  //   longitude: this.props.island.longitude,
  //   picture: this.props.island.picture,
  //   previousDetails: {
  //     name: this.props.island.name,
  //     description: this.props.island.description,
  //     category: this.props.island.category,
  //     latitude: this.props.island.latitude,
  //     longitude: this.props.island.longitude,
  //     picture: this.props.island.picture,
  //   }
  // };
  render() {
    return (
      <div className="fill bg-dark sticky-top">
        <div id ="brand" className="text-white bg-primary">
          <h2 align="center">Irish Islands</h2>
        </div>
        <div id="buttons">
          <button type="button" className="btn w-100 btn-success">Go back</button><br />
          <button type="button" className="btn w-100 btn-warning">Edit details</button><br />
          <button type="button" className="btn w-100 btn-danger">Delete island</button><br />
        </div>
      </div>
    );
  }
}