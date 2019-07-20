import React, { Component } from "react";
import "./tile.css";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Tile extends Component {
  render() {
    return (
      <div className="col-sm-4">
        <div className="card">
          <img
            className="card-img-tag center "
            alt={this.props.island.name}
            src={this.props.island.picture}
          />
          <div className="card-body">
            <h5 className="card-title ">
              {`${this.props.island.name}`}
            </h5>
            <p key="category">
              <FontAwesomeIcon icon={["fas", "globe"]} />
              <span> {this.props.island.category}</span>
              <br />
              <FontAwesomeIcon icon={["fas", "thumbs-up"]} />
              {`  ${this.props.island.upvotes}`}
            </p>
          </div>
          <div className="card-footer">
            <div
              className="btn-group d-flex btn-group-justified"
              role="group"
              aria-label="..."
            >
              <button type="button" className={"btn btn-success w-100"}>
                {<FontAwesomeIcon icon={["fas", "info"]} />}
              </button>
              <button type="button" className={"btn btn-warning w-100"}>
                {<FontAwesomeIcon icon={["fas", "edit"]} />}
              </button>
              <button type="button" className={"btn btn-danger w-100"}>
                {<FontAwesomeIcon icon={["fas", "trash"]} />}
              </button>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Tile;