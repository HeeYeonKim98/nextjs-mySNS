import AppHead from "../components/AppHead";
import AppLayout from "../components/AppLayout";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import React from "react";
import wrapper from "../store/configureStore";

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
