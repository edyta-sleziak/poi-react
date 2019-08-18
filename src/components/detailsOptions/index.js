import React, {Component} from 'react';
import './detailsOptions.css';
import buttons from "../../config/buttonsConfig";

export default class detailsOptions extends Component {
  handleClick = (clickedButton) => {
    this.props.handleClick(clickedButton);
  };
  handleMiddleButton = () => {
    this.handleClick("middleButton");
  };
  handleBottomButton = () => {
    this.handleClick("bottomButton");
  };
  render() {
    let activeButtons = buttons.normal;
    if (this.props.state === "edit" ) {
      activeButtons = buttons.edit;
    } else if (this.props.state === "delete" ) {
      activeButtons = buttons.delete;
    }
    return (
      <div className="fill bg-dark sticky-top">
        <div id ="brand" className="text-white bg-primary">
          <h2 align="center">Irish Coast</h2>
        </div>
        <div id="buttons">"
          <a href="/"><button type="button" className="btn w-100 btn-success" >{activeButtons.topButtonVal}</button></a><br />
          <button type="button" className="btn w-100 btn-warning" onClick={this.handleMiddleButton}>{activeButtons.middleButtonVal}</button><br />
          <button type="button" className="btn w-100 btn-danger" onClick={this.handleBottomButton}>{activeButtons.bottomButtonVal}</button><br />
        </div>
      </div>
    );
  }
}