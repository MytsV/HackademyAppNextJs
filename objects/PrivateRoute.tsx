import React from "react";
import isAuthenticated from "../tools/Authentication";
import SignIn from '../pages/login/index';

const PrivateRoute = (Component: any) => {
    const Auth = () => {
  
      if (!isAuthenticated()) {
        return (
          <SignIn />
        );
      }
  
      return (
        <Component />
      );
    };
  
    if (Component.getInitialProps) {
      Auth.getInitialProps = Component.getInitialProps;
    }
  
    return Auth;
  };
  
  export default PrivateRoute;