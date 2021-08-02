import React from "react";

import wrapper from "../store/configureStore";
import Navigation from "../components/Navigation";
import AppLayout from "../components/AppLayout";
import AppHead from "../components/AppHead";
import Footer from "../components/Footer";

const App = ({ Component }) => (
  <>
    <AppHead headtitle="my SNS" />
    <Navigation />
    <AppLayout>
      <Component />
    </AppLayout>
    <Footer />
  </>
);

export default wrapper.withRedux(App);
