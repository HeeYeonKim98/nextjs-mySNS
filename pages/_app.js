import React from "react";
import PropTypes from "prop-types";

import Navigation from "../components/Navigation";
import Login from "../components/Login";
import AppHead from "../components/AppHead";

const App = ({ Component }) => {
  return (
    <>
      <AppHead headtitle="React SNS" />
      <Navigation />
      <Login />
      <Component />
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
