import React, { Component } from 'react';
import _ from 'lodash'
import api from '../../dataStore/stubAPI';
import CommentList from '../commentList'
import Form from '../commentForm'

export default class CommentSection extends Component {
  addComment = (comment) => {
    let id =  this.props.island.id;
    api.addComment(id,comment);
    this.setState({});
  };

  incrementUpvote = (commentId) => {
    let id = this.props.island.id;
    api.upvoteComment(id,commentId) ;
    this.setState({});
  };


  render() {
    let comments = _.sortBy(this.props.island.comments,
      (comment) => - comment.upvotes
    );
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <Form addCommentHandler={this.addComment} />
            <CommentList comments={comments} upvoteHandler={this.incrementUpvote } />
          </div>
        </div>
      </div>
    )
  }
}
