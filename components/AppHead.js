import React from "react";
import Head from "next/head";

const AppHead = ({ headtitle }) => {
  return (
    <Head>
      <meta name="viewport" />
      <title>{headtitle}</title>
    </Head>
  );
};

export default AppHead;
