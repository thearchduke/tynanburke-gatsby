import Parser from "rss-parser";

export async function handler(event, context) {
  let url = event.queryStringParameters.url;
  let res = await new Parser().parseURL(url);
  return {
    statusCode: 200,
    body: JSON.stringify(res.items),
  };
}
