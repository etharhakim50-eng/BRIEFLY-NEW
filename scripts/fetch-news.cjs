const fs = require("fs");

const API_KEY = process.env.VITE_NEWS_API_KEY;

const url =
  `https://newsapi.org/v2/top-headlines` +
  `?country=us` +
  `&category=general` +
  `&pageSize=12` +
  `&apiKey=${API_KEY}`;

async function fetchNews() {
  const response = await fetch(url);
  const data = await response.json();

  if (data.status !== "ok") {
    throw new Error(
      data.message || "Failed to fetch news"
    );
  }

  fs.mkdirSync("public", { recursive: true });

  fs.writeFileSync(
    "public/news.json",
    JSON.stringify(data.articles)
  );

  console.log("News fetched successfully!");
}

fetchNews();