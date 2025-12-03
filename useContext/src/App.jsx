// import { mockNewsData } from "./mock_data";
import Main from "./components/Main.jsx";
import Header from "./components/Header.jsx";
import { useState } from "react";
import { useEffect } from "react";
import { StatusContext, StatusProvider } from "./store/StatusContext.jsx";
import { useRef } from "react";
import NewsLayout from "./layout/NewsLayout.jsx";
import { useContext } from "react";

function App() {
  const [news, setNews] = useState([]);

  const [query, setQuery] = useState("기술");
  const inputRef = useRef();
  const { callStatus } = useContext(StatusContext);

  useEffect(() => {
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

      const response = await fetch(api_url);
      const data = await response.json();
      setNews(data.articles || []);
    }
    fetchNews();
  }, [callStatus, query]);

  function handleSearch(e) {
    e.preventDefault();
    setQuery(inputRef.current.value);
  }

  return (
    <StatusProvider>
      <NewsLayout>
        <Header inputRef={inputRef} onSearch={handleSearch} />
        <Main news={news} />
      </NewsLayout>
    </StatusProvider>
  );
}

export default App;
