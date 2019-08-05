import React, {Component} from 'react';

export default class CommentForm extends Component {
  render() {
    return (
        <form className="form bg-light">
          <div className="form-row align-items-center">
            <div className="col">
              <input type="text"
                     className="form-control"
                     placeholder="Add your comment"
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary">Send</button>
            </div>
          </div>
        </form>
    );
  }
}