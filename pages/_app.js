import React from "react";

import wrapper from "../store/store";
import Navigation from "../components/Navigation";
import AppLayout from "../components/AppLayout";
import AppHead from "../components/AppHead";

const App = ({ Component }) => {
  return (
    <>
      <AppHead headtitle="my SNS" />
      <Navigation />
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  );
};

export default wrapper.withRedux(App);
