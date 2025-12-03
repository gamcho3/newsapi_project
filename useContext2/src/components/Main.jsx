import { useState, useEffect } from "react";
import NewsCard from "./NewsCard.jsx";
import { useContext } from "react";
import { StatusContext } from "../store/status-context.jsx";

function Main({ query }) {
  const [news, setNews] = useState([]);
  const { callStatus } = useContext(StatusContext);

  useEffect(() => {
    async function fetchNews() {
      let api_url = `https://newsapi.org/v2/${callStatus}`;
      const key = import.meta.env.VITE_NEWS_API_KEY;

      if (callStatus === "top-headlines") {
        const country = "us";
        api_url += `?country=${country}&apiKey=${key}`;
      } else if (callStatus === "everything") {
        const newQuery = query;
        api_url += `?q=${newQuery}&sortBy=publishedAt&pageSize=10&apiKey=${key}`;
      }

      try {
        const response = await fetch(api_url);
        const data = await response.json();
        setNews(data.articles || []);
      } finally {
        // setIsLoading(false);
      }
    }
    fetchNews();
  }, [callStatus, query]);

  return (
    <main className="mt-12 flex-1">
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {news.map((article) => (
          <NewsCard key={article.url} {...article} />
        ))}
      </section>
    </main>
  );
}

export default Main;
