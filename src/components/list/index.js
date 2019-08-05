import React, { Component } from "react";
import Tile from "../tile/";
import './list.css';

export default class List extends Component {
  render() {
    const SingleTile = this.props.islands.map((island, index) => (
      <Tile key={index} island={island} upvoteHandler={this.props.upvoteHandler} deleteHandler={this.props.deleteHandler} />
    ));
    return (
      <div className="container-fluid contacts bg-light">
        <div className="row">{SingleTile}</div>
      </div>
    );
  }
}