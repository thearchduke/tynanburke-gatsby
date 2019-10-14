import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <h1>Hi there!</h1>
    <p>Welcome to Tynan's little corner of the web.</p>

    <h2>Who?</h2>
    <p>
      I'm a <Link to="/work/">software engineer</Link> and{" "}
      <Link to="/writing/">writer</Link> living in New York City.
    </p>
  </Layout>
);

export default IndexPage;
