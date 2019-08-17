import React, {Component, Fragment} from "react";
import { withRouter } from "react-router-dom";
import "./details.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CommentSection from "../commentSection";
import api from '../..//dataStore/stubAPI';

class Details extends Component {
  state = {
    name: this.props.island.name,
    description: this.props.island.description,
    picture: this.props.island.picture,
    category: this.props.island.category,
    latitude: this.props.island.latitude,
    longitude: this.props.island.longitude,
    previousDetails: {
      name: this.props.island.name,
      description: this.props.island.description,
      picture: this.props.island.picture,
      category: this.props.island.category,
      latitude: this.props.island.latitude,
      longitude: this.props.island.longitude,
    }
  };
  handleNameChange =(e) => {this.setState({name: e.target.value}) };
  handleDescriptionChange =(e) => {this.setState({description: e.target.value}) };
  handleCategoryChange =(e) => {this.setState({category: e.target.value}) };
  handleLongitudeChange =(e) => {this.setState({longitude: e.target.value}) };
  handleLatitudeChange =(e) => {this.setState({latitude: e.target.value}) };

  updateIsland = (id) =>{
    api.update(
      id,
      this.props.island.name,
      this.props.island.category,
      this.props.island.description,
      this.props.island.latitude,
      this.props.island.longitude
    );
  };
  handleVote = () =>  this.props.upvoteHandler(this.props.island.id);
  render() {
    if (this.props.saveChanges === true) {
      console.log(this.state);
      this.updateIsland(this.props.island.id)
    }
    return (
      <div className="card">
        {this.props.state === "edit" ? (
          <Fragment>
            <div className="row">
              <div className="col-md-10 bg-secondary text-white">
                <h2 className="content"> <input type="text" className="form-control" defaultValue={this.props.island.name} onChange={this.handleNameChange} /></h2>
              </div>
              <div className="col-md-2 bg-primary">
                <span onClick={this.handleVote}><FontAwesomeIcon icon={["fas", "thumbs-up"]} />  {`${this.props.island.upvotes}`} </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <h3 className="content">Description</h3>
                <p className="content"><input type="textArea" className="form-control" defaultValue={this.props.island.description} onChange={this.handleDescriptionChange} /></p>
              </div>
              <div className="col-md-5">
                <img
                  className="card-img-tag center "
                  alt={this.props.island.name}
                  src={this.props.island.picture}
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-4">
                <h3 className="content">Details</h3>
                <span className="content"> Category:
                  <select id="category" className="form-control" defaultValue={this.props.island.category} onChange={this.handleCategoryChange}>
                    <option value="SouthCoast">South Coast</option>
                    <option value="EastCoast">East Coast</option>
                    <option value="NorthWest">North West</option>
                    <option value="MidWest">Mid West</option>
                  </select><br/>
                </span>
                <span className="content"> Latitude: <input type="text" className="form-control" defaultValue={this.props.island.latitude} onChange={this.handleLatitudeChange}/> <br/></span>
                <span className="content"> Longitude: <input type="text" className="form-control" defaultValue={this.props.island.longitude} onChange={this.handleLongitudeChange} /> <br/></span>
              </div>
            </div>
          </Fragment>
        ):(
          <Fragment>
            <div className="row">
              <div className="col-md-10 bg-secondary text-white">
                <h2 className="content"> {this.props.island.name}</h2>
              </div>
              <div className="col-md-2 bg-primary">
                <span onClick={this.handleVote}><FontAwesomeIcon icon={["fas", "thumbs-up"]} />  {`${this.props.island.upvotes}`} </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <h3 className="content">Description</h3>
                <p className="content">{this.props.island.description}</p>
              </div>
              <div className="col-md-5">
                <img
                  className="card-img-tag center "
                  alt={this.props.island.name}
                  src={this.props.island.picture}
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-4">
                <h3 className="content">Details</h3>
                <span className="content"> Category: {this.props.island.category} <br/></span>
                <span className="content"> Latitude: {this.props.island.latitude} <br/></span>
                <span className="content"> Longitude: {this.props.island.longitude} <br/></span>
              </div>
              <div className="col-md-7">
                Map placeholder
              </div>
            </div>
            <hr />
            <div className="content">
              <h3>Comments</h3>
              <CommentSection island={this.props.island} />
            </div>
          </Fragment>
        )}
      </div>
    );
  }
}

export default withRouter(Details);