import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const WorkInner = () => (
  <div>
    <h1>Software engineering</h1>
    <p>
      I work up and down the stack, generally from the web server on back. These
      days I'm mostly working with TypeScript and Ruby applications, served via
      Google Cloud Platform. During downtime I enjoy producing better tooling,
      improving CI setups, and keeping up with emerging tech.
    </p>

    <p>
      I'm on GitHub as <a href="http://github.com/thearchduke/">thearchduke</a>,
      and here's my{" "}
      <a href="https://www.linkedin.com/in/tynan-burke-27537122/">LinkedIn</a>{" "}
      profile.
    </p>
  </div>
);

const WorkPage = () => (
  <Layout>
    <SEO title="Work" />
    <WorkInner />
  </Layout>
);

export default WorkPage;
export { WorkInner };
