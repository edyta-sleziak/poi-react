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
        this.setState({status: "normal"});
      } else if (this.state.status === "delete") {
        //handledelete
        window.location.href = '/';
      }
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
          <DetailsOptions state={this.state.status} handleClick={this.handleClick} />
        </div>
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-12">
              <Navigation />
            </div>
          </div>
          <Details island={island} state={this.state.status}  />
        </div>
      </div>
    );
  }
}

export default withRouter(IslandPage);