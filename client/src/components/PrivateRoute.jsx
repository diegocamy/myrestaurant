import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ Component, ...rest }) => {
  const loggedUser = useSelector((state) => state.user.user);

  if (!loggedUser) return <Redirect to="/login" />;

  if (!loggedUser.perfilCompleto) {
    return <Redirect to="/complete_profile" />;
  }

  return <Route component={Component} {...rest} />;
};

export default PrivateRoute;
