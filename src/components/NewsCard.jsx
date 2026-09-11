function NewsCard({ article }) {

  const image =
    article.urlToImage ||
    "https://placehold.co/600x400?text=BRIEFLY";

  const date = new Date(
    article.publishedAt
  ).toLocaleDateString();

  return (
    <article className="news-card">

      <div className="card-image">

        <img
          src={image}
          alt={article.title}
        />

        <span className="card-tag">
          NEWS
        </span>

      </div>

      <div className="card-content">

        <div className="card-meta">
          <span>
            {article.source?.name || "Unknown"}
          </span>

          <span>
            {date}
          </span>
        </div>

        <h2>
          {article.title}
        </h2>

        <p>
          {article.description ||
            "No description available."}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read story <span>↗</span>
        </a>

      </div>

    </article>
  );
}

export default NewsCard;