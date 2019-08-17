import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import "../../fontawesome";
import DetailsOptions from "../detailsOptions";
import Details from "../details";
import Navigation from "../navigation";
import api from '../../dataStore/stubAPI';

class IslandPage extends Component {
  state = {
    status: "normal",
    saveChanges: false
  };

  handleClick = (button) => {
    if( button === "middleButton") {
      if (this.state.status === "normal") {
        this.setState({status: "edit"});
      } else {
        this.setState({status: "normal"});
      }
    } else if (button === "bottomButton") {
      if (this.state.status === "normal") {
        this.setState({status: "delete"});
      } else if (this.state.status === "edit") {
        this.setState({saveChanges: true});
        this.setState({status: "normal"});
      } else if (this.state.status === "delete") {
        this.deleteIsland(this.getId);
        //window.location.href = '/';
      }
    }
  };
  incrementUpvote = (id) => {
    api.upvote(id) ;
    this.setState({});
  };

  getId = () => parseInt( this.props.match.params.id, 10);
  deleteIsland = (key) => {
    api.delete(key);
    this.setState({});
  };
  render() {
    let id = this.getId();
    let island = api.find(id);
    console.log(island);
    return (
      <div className="row">
        <div id="left" className="col-md-2">
          <DetailsOptions state={this.state.status} handleClick={this.handleClick} />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-12">
              <Navigation />
            </div>
          </div>
          <Details island={island} state={this.state.status} saveChanges={this.state.saveChanges}  upvoteHandler={this.incrementUpvote} />
        </div>
      </div>
    );
  }
}

export default withRouter(IslandPage);