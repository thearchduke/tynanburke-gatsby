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
    <h2>Short fiction</h2>
    <div
      style={{
        maxWidth: "320px",
        width: "20%",
        float: "right",
        marginLeft: "1rem",
      }}
    >
      <a href="https://books.metaphorosis.com/anthology/2019/metaphorosis-best-of-2018/">
        <MetaphorosisBestOfCover />
      </a>
    </div>
    <div
      style={{
        maxWidth: "320px",
        width: "20%",
        float: "right",
        marginLeft: "1rem",
      }}
    >
      <a href="https://www.amazon.com/Reading-5X5-x2-Morris-Allen-ebook/dp/B08C9KN7JS">
        <Cover5x5 />
      </a>
    </div>
    <ul>
      <li>
        <a href="https://magazine.metaphorosis.com/story/2021/the-unlucky-few-who-must-not-cast-j-tynan-burke/">"The Unlucky Few Who Must Not Cast"</a>, August 2021. An arcanist is forced to attend a twelve-step meeting for magic dependence. Available <a href="https://magazine.metaphorosis.com/story/2021/the-unlucky-few-who-must-not-cast-j-tynan-burke/">free online</a>.
      </li>
      <li>
        <a href="https://magazine.metaphorosis.com/story/2018/the-bagel-shop-owners-nephew-j-tynan-burke/">"The Bagel Shop Owner's Nephew"</a>, August 2018. Yonatan Kaplan deals with a troublesome prophet. Available{" "}
        <a href="https://magazine.metaphorosis.com/story/2018/the-bagel-shop-owners-nephew-j-tynan-burke/">
          free online
        </a>
        , and as part of the (excellent){" "}
        <a href="https://books.metaphorosis.com/anthology/2019/metaphorosis-best-of-2018/">
          <em>Metaphorosis Best of 2018 anthology</em>
        </a>
        .
      </li>
      <li>
        "<a href="https://swordsandsorcerymagazine.com/archive/a-brief-pause-between-floods-by-j-tynan-burke">A Brief Pause Between Floods</a>", February 2020. A young woman deals with thieves and a monk during an important test. Available <a href="https://swordsandsorcerymagazine.com/archive/a-brief-pause-between-floods-by-j-tynan-burke">free online</a>.
      </li>
      <li>
        <i><a href="https://www.amazon.com/Reading-5X5-x2-Morris-Allen-ebook/dp/B08C9KN7JS">Reading 5X5 x2: Duets</a></i>, Verdage Press, 2020. I have five stories in this collection, which sat for a
        week at #2 on the Kindle new sci-fi anthologies list:
        <ul>
          <li>"Sudden Oak Death". In a habitat orbiting Enceladus, an arborist's prize trees fall ill.</li>
          <li>"Infernal® Policies and Procedures Have Changed", with Douglas Anstruther. An ancient general makes a surprising discovery while working for Lucifer.</li>
          <li>"Boro Boro", with Evan Marcroft. Central California coastal horror.</li>
          <li>"Project Blackbook", with David Gallay. Excerpt from the congressional report about a disastrous decision made by a Silicon Valley company.</li>
          <li>"The Relic", with L'Erin Ogle. Slowly dying on an alien spaceship, alone but for the voices in your head.</li>
        </ul>
      </li>
    </ul>
    <h2>
    </h2>
    {/* <h2>Nonfiction</h2>
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
      I review books, blog about technology, and post cute
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
    </p> */}
  </div >
);

const WritingPage = () => (
  <Layout>
    <SEO title="Writing" />
    <WritingInner />
  </Layout>
);

export default WritingPage;
export { WritingInner };
