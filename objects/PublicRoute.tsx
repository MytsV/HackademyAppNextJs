import React from "react";
import isAuthenticated from "../tools/Authentication";
import Landing from "../pages";

const PublicRoute = (Component: any) => {
    const Auth = () => {
  
      if (isAuthenticated()) {
        return (
          <Landing />
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
  
  export default PublicRoute;