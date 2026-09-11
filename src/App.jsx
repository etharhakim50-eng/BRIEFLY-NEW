import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";
import NewsGrid from "./components/NewsGrid";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

import "./App.css";


function App() {

  const [articles, setArticles] = useState([]);

  const [selectedCategory, setSelectedCategory] =
    useState("general");

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");


  async function getNews() {

    setLoading(true);
    setError("");

    try {

      const response = await fetch(
        `${import.meta.env.BASE_URL}news/${selectedCategory}.json`
      );

      const data = await response.json();

      setArticles(data);

    } catch (error) {

      setError(error.message);

      setArticles([]);

    } finally {

      setLoading(false);

    }
  }


  function handleSearch() {

    if (search.trim() === "") {
      getNews();
      return;
    }

    const filteredArticles = articles.filter(function (article) {

      const title =
        article.title?.toLowerCase() || "";

      const description =
        article.description?.toLowerCase() || "";

      const searchText =
        search.toLowerCase();

      return (
        title.includes(searchText) ||
        description.includes(searchText)
      );

    });

    setArticles(filteredArticles);
  }


  useEffect(function () {

    getNews();

  }, [selectedCategory]);


  return (
    <>

      <Navbar />

      <Hero />


      <main id="news">

        <section className="news-header">

          <div>

            <span className="section-label">
              EXPLORE
            </span>

            <h2>
              Latest Stories
            </h2>

          </div>


          <SearchBar
            search={search}
            setSearch={setSearch}
            handleSearch={handleSearch}
          />

        </section>


        <Categories
          selectedCategory={selectedCategory}
          setSelectedCategory={
            setSelectedCategory
          }
        />


        {loading && <Loader />}


        {error && (
          <ErrorMessage
            message={error}
          />
        )}


        {!loading &&
          !error &&
          articles.length > 0 && (

            <NewsGrid
              articles={articles}
            />

          )}


        {!loading &&
          !error &&
          articles.length === 0 && (

            <div className="no-results">
              No stories found.
            </div>

          )}

      </main>


      <footer id="about">

        <div className="footer-logo">
          BRIEFLY<span>.</span>
        </div>

        <p>
          The world, one story at a time.
        </p>

      </footer>

    </>
  );
}


export default App;