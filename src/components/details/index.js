import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "./details.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DetailsOptions from "../detailsOptions";
import Navigation from "../navigation";
import CommentForm from "../commentForm";
import api from '../../dataStore/stubAPI';
import _ from 'lodash'

class Details extends Component {
  state = {
    status: "",
    name: this.props.match.name,
    description: this.props.match.description,
    category: this.props.match.category,
    latitude: this.props.match.latitude,
    longitude: this.props.match.longitude,
    picture: this.props.match.picture,
    previousDetails: {
      name: this.props.match.name,
      description: this.props.match.description,
      category: this.props.match.category,
      latitude: this.props.match.latitude,
      longitude: this.props.match.longitude,
      picture: this.props.match.picture,
    }
  };
  getId = () => parseInt( this.props.match.params.id, 10);
  render() {
    let id = this.getId();
    let island = api.find(id);
    console.log(island);
    return (
      <div className="row">
        <div id="left" className="col-md-2">
          <DetailsOptions />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-12">
              <Navigation />
            </div>
          </div>
          <div className="card">
            <div className="row">
              <div className="col-md-10 bg-secondary text-white">
              <h2 className="content"> {island.name}</h2>
              </div>
              <div className="col-md-2 bg-primary">
                <span><FontAwesomeIcon icon={["fas", "thumbs-up"]} />  {island.upvotes} </span>
              </div>
            </div>
            <div className="row">
              <div className="col-md-7">
                <h3 className="content">Description</h3>
                <p className="content">{island.description}</p>
              </div>
              <div className="col-md-5">
                <img
                  className="card-img-tag center "
                  alt={island.name}
                  src={island.picture}
                />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-4">
                <h3 className="content">Details</h3>
                  <span className="content"> Category: {island.category} <br/></span>
                  <span className="content"> Latitude: {island.latitude} <br/></span>
                  <span className="content"> Longitude: {island.longitude} <br/></span>
              </div>
              <div className="col-md-7">
                Map placeholder
              </div>
            </div>
            <hr />
            <div className="content">
              <h3>Comments</h3>
              <CommentForm />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Details);