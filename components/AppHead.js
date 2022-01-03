import Head from "next/head";
import React from "react";

const AppHead = ({ headtitle }) => (
  <Head>
    <meta name="viewport" />
    <title>{headtitle}</title>
  </Head>
);

export default AppHead;
