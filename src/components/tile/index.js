import React, { Component } from "react";
import "./tile.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

class Tile extends Component {
  handleVote = () =>  this.props.upvoteHandler(this.props.island.id);
  render() {
    return (
      <div className="col-md-3">
        <div className="card">
          <Link
            to={`/islands/${this.props.island.id}`}
          >
            <img
              className="card-img-tag center "
              alt={this.props.island.name}
              src={this.props.island.picture}
            />
          </Link>
          <div className="card-body center">
            <h5 className="card-title ">
              {`${this.props.island.name}`}
            </h5>
            <p key="category">
              <FontAwesomeIcon icon={["fas", "globe"]} />
              <span> {this.props.island.category}</span>
              <span onClick={this.handleVote}><FontAwesomeIcon icon={["fas", "thumbs-up"]} />
                {`  ${this.props.island.upvotes}`}</span>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Tile;