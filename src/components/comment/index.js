import React, { Component, Fragment } from "react";
import "../../fontawesome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './comment.css'

export default class Comment extends Component {
  handleVote = () => {
    this.props.upvoteHandler(this.props.comment.id);
  };
  render() {
    return (
      <Fragment>
        <span className=" ptr" onClick={this.handleVote}>
          <FontAwesomeIcon icon={["fas", "thumbs-up"]} size="2x" />
          {`${this.props.comment.upvotes}`}
        </span>
        <span className="commentitem"> <b>[USER] wrote:</b> <br />
          {`${this.props.comment.comment}`}
        </span>
        <p></p>
      </Fragment>
    );
  }
}