import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <h1>Software engineering</h1>
    <p>
      I work up and down the stack, mostly from the web server on back. These
      days I'm mostly working with TypeScript and Ruby applications. During
      downtime I enjoy producing better tooling, improving CI setups, and
      keeping up with emerging tech.
    </p>
  </Layout>
);

export default WorkPage;
