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
            marginLeft: "1rem"
          }}
        >
          <a href="https://books.metaphorosis.com/anthology/2019/metaphorosis-best-of-2018/">
            <MetaphorosisBestOfCover />
          </a>
        </div>
        My short story <em>The Bagel Shop Owner's Nephew</em> was published in
        the August 2018 issue of <em>Metaphorosis Magazine</em>. It is available
        for free{" "}
        <a href="https://magazine.metaphorosis.com/story/2018/the-bagel-shop-owners-nephew-j-tynan-burke/">
          on their website
        </a>
        , and as part of the wonderful{" "}
        <a href="https://books.metaphorosis.com/anthology/2019/metaphorosis-best-of-2018/">
          Metaphorosis Best of 2018 anthology
        </a>
        .
        <br />
        <br />
        <blockquote>
          <p>
            Last night, Murray called with another bunch of prophecies, so
            Yonatan Kaplan hasn't slept yet. He stayed up preparing dossiers on
            some doomed socialites instead. Now it's a little after dawn, Friday
            morning, and he's standing in line outside Fox's Bagels with a
            thermos and a tote bag. He's shaky from too much caffeine and too
            little sleep, but he doesn't regret it. The socialites will die this
            weekend, according to Murray, and Murray’s got a good track
            record...
          </p>
        </blockquote>
      </li>
      <li>
        I'm working on the <em>Floodlands Cycle</em>, a fantasy short story
        cycle set in a world with curious hydrology. The first of these stories,{" "}
        <em>A Brief Pause Between Floods</em>, is available in the January 2019
        issue of{" "}
        <em>
          <a href="http://www.swordsandsorcerymagazine.com/index.html">
            Swords and Sorcery Magazine
          </a>
        </em>
        . You can read it for free on their website.
        <br />
        <br />
        <blockquote>
          <p>
            There are monks in the far west who you may have heard of, called
            Harvesters. They teach that every day changes your life forever. Of
            course, some days change it more than others; this is about one of{" "}
            <em>those</em> days. I was sixteen, a good age for it.
          </p>

          <p>
            First give me a moment to tell about my ancestral home: Samyra, the
            Jewel of the South, the City of Palaces. This rain-drenched citadel
            is built on top of a crag that sticks up from the middle of the
            coastal Samyran Basin. During flood season—most of the year—the
            Basin fills to become a tidal estuary...
          </p>
        </blockquote>
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
            marginLeft: "1rem"
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