import NewsCard from "./NewsCard";

function NewsGrid({ articles }) {

  return (
    <section className="news-grid">

      {articles.map(function (article, index) {

        return (
          <NewsCard
            key={article.url || index}
            article={article}
          />
        );

      })}

    </section>
  );
}

export default NewsGrid;