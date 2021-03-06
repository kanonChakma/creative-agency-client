import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { userContext } from '../../App';

const PrivateRoute = ({ children, ...rest }) => {
    const[signInUser,setSignInUser]=useContext(userContext)
    return (
        <Route
      {...rest}
      render={({ location }) =>
      (signInUser.email||sessionStorage.getItem('token')) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};
export default PrivateRoute;