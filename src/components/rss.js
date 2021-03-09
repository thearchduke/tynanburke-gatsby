export class RssParser {
  CORS_PROXY = "https://cors-anywhere.herokuapp.com/";

  constructor(url) {
    this.url = this.CORS_PROXY + url;
    this.parser = new Parser();
    this.posts = [];
  }

  addPost(post) {
    this.posts.unshift({ title: post.title, link: post.link });
  }

  hasPost(post) {
    return this.posts.filter((p) => p.title === post.title).length > 0;
  }

  async fetch() {
    let feed = await this.parser.parseURL(this.url);
    feed.items.forEach((post) => {
      if (!this.hasPost(post)) {
        this.addPost(post);
      }
    });
  }
}

export class RssDisplay {
  constructor(props) {
    this.parser = new RssParser(props.url); // https://www.balloon-juice.com/category/books/recommended-reading/feed
    this.state = { posts: [] };
  }

  componentDidMount() {
    this.parser.fetch().then(() => {
      this.setState({ posts: this.parser.posts });
    });
  }

  render() {
    return (
      <ol>
        {this.state.posts.map((post, i) => {
          return (
            <li key={i}>
              <a href={post.link}>{post.title}</a>
            </li>
          );
        })}
      </ol>
    );
  }
}
