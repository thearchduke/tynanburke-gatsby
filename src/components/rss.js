import React from "react";

const betterGetter = (url, params) => {
  return fetch(url + "?" + new URLSearchParams(params));
};

export default class RssDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.url = props.url;
    this.state = { posts: [] };
    this.nPosts = props.nPosts || 3;
    this.title = props.title;
  }

  componentDidMount() {
    betterGetter("/.netlify/functions/fetchRss", {
      url: this.url,
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({ posts: data });
      })
      .catch((err) => {});
  }

  render() {
    return (
      <>
        <h4 className="rss-title">{this.title}</h4>
        <ol style={{ marginBottom: "1rem" }}>
          {this.state.posts.slice(0, this.nPosts).map((post, i) => {
            return (
              <li key={i}>
                <a href={post.link}>{post.title}</a>
              </li>
            );
          })}
        </ol>
      </>
    );
  }
}
