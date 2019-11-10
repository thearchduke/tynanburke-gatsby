import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { WritingInner } from "./writing";
import { WorkInner } from "./work";

const IndexPage = () => (
  <Layout>
    <SEO title="Welcome" />
    <h1>Hi there!</h1>
    <p>
      Welcome to my spartan corner of the web. I'm a{" "}
      <Link to="/work/">software engineer</Link> and{" "}
      <Link to="/writing/">writer</Link> living in New York City. You can reach
      me at tynanburke -at- gmail.
    </p>

    <p>
      Would you like to join my Minecraft server? Shoot me an email!
    </p>

    <WritingInner />
    <WorkInner />
  </Layout>
);

export default IndexPage;
