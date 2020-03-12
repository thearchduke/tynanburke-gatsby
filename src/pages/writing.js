import React from "react";

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
          <a href="https://books.metaphorosis.com/anthology/2019/metaphorosis-best-of-2018/">
            <MetaphorosisBestOfCover />
          </a>
        </div>
        My urban fantasy short story <em>The Bagel Shop Owner's Nephew</em> was
        published in the August 2018 issue of <em>Metaphorosis Magazine</em>. It
        is available{" "}
        <a href="https://magazine.metaphorosis.com/story/2018/the-bagel-shop-owners-nephew-j-tynan-burke/">
          on their website
        </a>
        , and as part of the wonderful{" "}
        <a href="https://books.metaphorosis.com/anthology/2019/metaphorosis-best-of-2018/">
          Metaphorosis Best of 2018 anthology
        </a>
        .
      </li>
      <li>
        I'm working on the <em>Floodlands Cycle</em>, a fantasy short story
        cycle set in a world with curious hydrology. The first of these stories,{" "}
        <em>A Brief Pause Between Floods</em>, is available in the February 2020
        issue of{" "}
        <em>
          <a href="https://swordsandsorcerymagazine.com/archive/a-brief-pause-between-floods-by-j-tynan-burke">
            Swords and Sorcery Magazine
          </a>
        </em>
        .
      </li>
      <li>
        I'll have five short stories in the <em>Reading 5X5 x2</em> anthology,
        which should come out this summer. Check back for updates!
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
        <a href="https://www.balloon-juice.com/author/tynan/">Balloon-Juice</a>.
      </li>
      <li>
        More generally, you can find me at{" "}
        <a href="https://twitter.com/TynanPants">@tynanpants</a> on Twitter.
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
