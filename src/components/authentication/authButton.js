import Authentication from "../../util/authentication";
import React, { Fragment } from "react";
import { withRouter } from "react-router-dom";

const AuthButton = props => {
  const { history } = props;
  return Authentication.isAuthenticated ? (
    <Fragment>
      <div id="wrapper" className="row">
        <div className="col-md-6 bg-dark text-primary">
        {`${Authentication.username} `}
        </div>
        <div className="col-md-6 bg-dark text-white"
          onClick={() => {
            Authentication.signout(() => history.push("/"));
          }}
        >
          Sign out
        </div>
      </div>
    </Fragment>
  ) : (
    <div className="col-md-12 bg-dark text-white"
      onClick={() => {
        history.push("/login");
      }}
    >
      Login
    </div>
  );
};

export default withRouter(AuthButton);