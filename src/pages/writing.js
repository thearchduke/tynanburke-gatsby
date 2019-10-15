import React from "react";
import { Link } from "gatsby";

import MetaphorosisBestOfCover from "../components/images/metaphorosis";
import Samwise from "../components/images/samwise";
import Layout from "../components/layout";
import SEO from "../components/seo";

const WritingInner = () => (
  <div>
    <h1>Writing</h1>
    <h2>Short fiction</h2>
    <ul>
      <li>
        <div
          style={{
            maxWidth: "360px",
            width: "20%",
            float: "right",
            marginLeft: "1rem",
          }}
        >
          <Link to="https://books.metaphorosis.com/anthology/2019/metaphorosis-best-of-2018/">
            <MetaphorosisBestOfCover />
          </Link>
        </div>
        My short story <em>The Bagel Shop Owner's Nephew</em> was published in
        the August 2018 issue of <em>Metaphorosis Magazine</em>. It is available
        for free{" "}
        <Link to="https://magazine.metaphorosis.com/story/2018/the-bagel-shop-owners-nephew-j-tynan-burke/">
          on their website
        </Link>
        , and as part of the wonderful{" "}
        <Link to="https://books.metaphorosis.com/anthology/2019/metaphorosis-best-of-2018/">
          Metaphorosis Best of 2018 anthology
        </Link>
        .
        <br />
        <br />
        <blockquote>
          Yonatan Kaplan runs a curious clipping service in the Lower East Side,
          working hard to stave off armageddon. When a troubling new customer
          calls, and one of his prophets comes under scrutiny, he's forced to
          grapple with more than he's used to on a Friday night.
        </blockquote>
      </li>
      <li>
        I'll have five short stories in the <em>Reading 5X5 x2</em> anthology,
        which should come out in time for holiday shopping season. I'll update
        this when it's available (and I'm sure I'll be tweeting about it
        excessively too).
      </li>
    </ul>

    <h2>Nonfiction</h2>
    <ul>
      <li>
        <div
          style={{
            maxWidth: "500px",
            width: "30%",
            float: "right",
            marginLeft: "1rem",
          }}
        >
          <Samwise />
          <small style={{ horizontalAlign: "center" }}>
            <em>Samwise the enormous cat</em>
          </small>
        </div>
        I review books, blog about LGBT rights and online privacy, and post cute
        pictures of my cat Samwise at{" "}
        <Link to="https://www.balloon-juice.com/author/tynan/">
          Balloon-Juice
        </Link>
        .
      </li>
      <li>
        More generally, you can find me at{" "}
        <Link to="https://twitter.com/TynanPants">@tynanpants</Link> on Twitter.
        Follow me for such gems as:
        <br />
        <br />
        <blockquote class="twitter-tweet">
          <p lang="en" dir="ltr">
            Gonna turn on Netflix and watch David Tennant say Brrrroadcherrch
          </p>
          &mdash; Tynan! (@TynanPants){" "}
          <a href="https://twitter.com/TynanPants/status/1166546690138103809?ref_src=twsrc%5Etfw">
            August 28, 2019
          </a>
        </blockquote>
      </li>
    </ul>
  </div>
);

const WritingPage = () => (
  <Layout>
    <SEO title="Writing" />
    <WritingInner />
  </Layout>
);

export default WritingPage;
export { WritingInner };
