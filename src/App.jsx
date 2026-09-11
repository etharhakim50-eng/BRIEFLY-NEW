import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Categories from "./components/Categories";
import SearchBar from "./components/SearchBar";
import NewsGrid from "./components/NewsGrid";
import Loader from "./components/Loader";
import ErrorMessage from "./components/ErrorMessage";

import "./App.css";


const API_KEY = import.meta.env.VITE_NEWS_API_KEY;


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

      let url;


      if (search.trim() !== "") {

        url =
          `https://newsapi.org/v2/everything` +
          `?q=${encodeURIComponent(search)}` +
          `&language=en` +
          `&sortBy=publishedAt` +
          `&pageSize=12` +
          `&apiKey=${API_KEY}`;

      } else {

        url =
          `https://newsapi.org/v2/top-headlines` +
          `?country=us` +
          `&category=${selectedCategory}` +
          `&pageSize=12` +
          `&apiKey=${API_KEY}`;

      }


      const response = await fetch(url);

      const data = await response.json();


      if (data.status !== "ok") {

        throw new Error(
          data.message || "Failed to fetch news"
        );

      }


      setArticles(data.articles);


    } catch (error) {

      setError(error.message);

      setArticles([]);

    } finally {

      setLoading(false);

    }
  }


  function handleSearch() {

    if (search.trim() === "") {
      return;
    }

    getNews();
  }


  useEffect(function () {

    if (search.trim() === "") {
      getNews();
    }

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