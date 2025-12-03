// import { mockNewsData } from "./mock_data";
import NewsCard from "./components/NewsCard.jsx";
import FilterButtons from "./components/FilterButtons.jsx";
import { useState } from "react";
import { useEffect } from "react";
import SearchForm from "./components/SearchForm.jsx";
import { useRef } from "react";

function App() {
  const [news, setNews] = useState([]);
  const [callStatus, setCallStatus] = useState("top-headlines");
  const [query, setQuery] = useState("기술");
  const inputRef = useRef();

  async function fetchNews() {
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

  // fetchNews();

  function handleChangeCallStatus(newStatus) {
    setCallStatus(newStatus);
  }

  function handleSearch(e) {
    e.preventDefault();
    setQuery(inputRef.current.value);
  }

  return (
    <div>
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12">
        <header className="flex flex-col gap-6 text-center sm:text-left">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
              글로벌 뉴스
            </h1>
            <p className="mx-auto max-w-3xl text-slate-600 sm:mx-0">
              전세계 다양한 소식을 보여줍니다
            </p>
          </div>
          <FilterButtons
            onChangeCallStatus={handleChangeCallStatus}
            callStatus={callStatus}
          />
          {callStatus === "everything" && (
            <SearchForm inputRef={inputRef} onSearch={handleSearch} />
          )}
        </header>

        <main className="mt-12 flex-1">
          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {news.map((article) => (
              <NewsCard key={article.url} {...article} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
