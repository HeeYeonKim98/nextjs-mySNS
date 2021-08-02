import React from "react";
import Head from "next/head";

const AppHead = ({ headtitle }) => (
  <Head>
    <meta name="viewport" />
    <title>{headtitle}</title>
  </Head>
);

export default AppHead;
