import React from "react";

import MetaphorosisBestOfCover from "../components/images/metaphorosis";
import Samwise from "../components/images/samwise";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Cover5x5 from "../components/images/5x5";
import RssDisplay from "../components/rss";

const WritingInner = () => (
  <div>
    <h1>Writing</h1>
    <h2>
      <i>Reading 5X5 x2: Duets</i>
    </h2>
    <div>
      <div
        style={{
          maxWidth: "460px",
          width: "25%",
          float: "right",
          marginLeft: "1rem",
        }}
      >
        <a href="https://www.amazon.com/Reading-5X5-x2-Morris-Allen-ebook/dp/B08C9KN7JS">
          <Cover5x5 />
        </a>
      </div>
      <p>
        <a href="https://www.amazon.com/Reading-5X5-x2-Morris-Allen-ebook/dp/B08C9KN7JS">
          Out now from Verdage Press!
        </a>
        &nbsp;I have five stories in this wonderful collection, which sat for a
        week at #2 on the Kindle new sci-fi anthologies list. To the blurb:
      </p>
      <blockquote style={{ marginLeft: "0rem" }}>
        <p>How do authors' voices change when they collaborate?</p>
        <p>
          A round-robin of great science fiction and fantasy stories: five
          authors each collaborating with each of the others and writing solo.
          Epic duels both human and divine, alien spaceships, a train full of
          sacrifices barreling straight toward a god’s seat of power, and much,
          much more.
        </p>
      </blockquote>
      <p>
        This one was a lot of fun, and includes my favorite story to date,{" "}
        <i>Sudden Oak Death</i>.
      </p>
    </div>
    <h2>Other short fiction</h2>
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
        My fantasy short story, <em>A Brief Pause Between Floods</em>, was
        published in the February 2020 issue of{" "}
        <em>
          <a href="https://swordsandsorcerymagazine.com/archive/a-brief-pause-between-floods-by-j-tynan-burke">
            Swords and Sorcery Magazine
          </a>
        </em>
        . Free to read online. I hope to revisit the world soon.
      </li>
    </ul>
    <h2>Nonfiction</h2>
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
    <p>
      I review books, blog about the Internet and LGBT rights, and post cute
      pictures of my cat Samwise at{" "}
      <a href="https://www.balloon-juice.com/author/tynan/">Balloon-Juice</a>.
      <div className="wrapper">
        <div className="one-one with-border">
          <RssDisplay
            url="https://www.balloon-juice.com/category/books/recommended-reading/feed?author_name=tynan"
            title="Recent Book Reviews"
            nPosts={3}
          />
        </div>
        <div className="one-two with-border">
          <RssDisplay
            url="https://www.balloon-juice.com/category/tech-news-and-issues/feed?author_name=tynan"
            title="Recent Tech News"
            nPosts={3}
          />
        </div>
      </div>{" "}
    </p>
    <p>
      More generally, you can find me at{" "}
      <a href="https://twitter.com/TynanPants">@tynanpants</a> on Twitter and{" "}
      <a rel="me" href="https://writing.exchange/@tynanpants">
        Mastodon
      </a>
      . Follow me for such gems as:
      <br />
      <br />
      <blockquote className="twitter-tweet">
        <p lang="en" dir="ltr">
          Gonna turn on Netflix and watch David Tennant say Brrrroadcherrch
        </p>
        &mdash; Tynan! (@TynanPants){" "}
        <a href="https://twitter.com/TynanPants/status/1166546690138103809?ref_src=twsrc%5Etfw">
          August 28, 2019
        </a>
      </blockquote>
    </p>
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
