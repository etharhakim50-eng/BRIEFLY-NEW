const fs = require("fs");

const API_KEY = process.env.VITE_NEWS_API_KEY;

const categories = [
  "general",
  "business",
  "entertainment",
  "health",
  "science",
  "sports",
  "technology"
];

async function fetchNews() {

  fs.mkdirSync("public/news", { recursive: true });

  for (const category of categories) {

    const url =
      `https://newsapi.org/v2/top-headlines` +
      `?country=us` +
      `&category=${category}` +
      `&pageSize=12` +
      `&apiKey=${API_KEY}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.status !== "ok") {
      throw new Error(
        data.message || `Failed to fetch ${category} news`
      );
    }

    fs.writeFileSync(
      `public/news/${category}.json`,
      JSON.stringify(data.articles)
    );

    console.log(`${category} news fetched successfully!`);
  }
}

fetchNews();