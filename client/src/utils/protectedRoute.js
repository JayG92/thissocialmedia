import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withContext } from "../context/"


function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={props =>
          rest.user.token ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    );
  }
  
  export default withContext(PrivateRoute);