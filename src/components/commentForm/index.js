import React, {Component} from 'react';

export default class CommentForm extends Component {
  state =
    { comment: ""
    };

  handleCommentChange = e => {
    this.setState({ comment: e.target.value });
  };
  onSubmit = e => {
    e.preventDefault();
    let comment = this.state.comment.trim();
    if (!comment) {
      return;
    }
    this.props.addCommentHandler(comment);
    this.setState({ comment: ""});
  };
  render() {
    return (
        <form className="form bg-light">
          <div className="form-row align-items-center">
            <div className="col">
              <input type="text"
                     className="form-control"
                     placeholder="Add your comment"
                     value={this.state.comment}
                     onChange={this.handleCommentChange}
              />
            </div>
            <div className="col-auto">
              <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Send</button>
            </div>
          </div>
        </form>
    );
  }
}