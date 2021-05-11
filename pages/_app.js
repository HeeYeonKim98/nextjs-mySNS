import React from "react";
import PropTypes from "prop-types";

import Navigation from "../components/Navigation";
import AppLayout from "../components/AppLayout";
import AppHead from "../components/AppHead";

const App = ({ Component }) => {
  return (
    <>
      <AppHead headtitle="React SNS" />
      <Navigation />
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default App;
