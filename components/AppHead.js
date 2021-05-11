import React from "react";
import Head from "next/head";
import PropTypes from "prop-types";

const AppHead = ({ headtitle }) => {
  return (
    <Head>
      <meta name="viewport" />
      <title>{headtitle}</title>
    </Head>
  );
};

AppHead.propTypes = {
  headtitle: PropTypes.string.isRequired,
};

export default AppHead;
