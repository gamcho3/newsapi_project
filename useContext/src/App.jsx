// import { mockNewsData } from "./mock_data";
import NewsCard from "./components/NewsCard.jsx";

import Header from "./components/Header.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { StatusContext } from "./store/StatusContext.jsx";
import { useRef } from "react";
import NewsLayout from "./layout/NewsLayout.jsx";
import { useContext } from "react";

function App() {
  const [news, setNews] = useState([]);

  const [query, setQuery] = useState("기술");
  const inputRef = useRef();
  const { callStatus } = useContext(StatusContext);

  async function fetchNews() {
    console.log("callStatus:", callStatus);

    let api_url = `https://newsapi.org/v2/${callStatus}`;
    const key = import.meta.env.VITE_NEWS_API_KEY;

    if (callStatus === "top-headlines") {
      const country = "us";
      api_url += `?country=${country}&apiKey=${key}`;
    } else if (callStatus === "everything") {
      // const query = "기술";
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

  useEffect(() => {
    fetchNews();
  }, [callStatus, query]);

  function handleSearch(e) {
    e.preventDefault();
    setQuery(inputRef.current.value);
  }

  return (
    <>
      <NewsLayout>
        <Header inputRef={inputRef} onSearch={handleSearch} />
        <main className="mt-12 flex-1">
          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {news.map((article) => (
              <NewsCard key={article.url} {...article} />
            ))}
          </section>
        </main>
      </NewsLayout>
    </>
  );
}

export default App;
