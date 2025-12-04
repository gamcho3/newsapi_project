// import { mockNewsData } from "./mock_data";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import { useState } from "react";
import { useRef } from "react";
import { StatusProvider } from "./store/status-context.jsx";
import { NewsProvider } from "./store/news-context.jsx";

function App() {
  const [query, setQuery] = useState("기술");
  const inputRef = useRef();

  function handleSearch(e) {
    e.preventDefault();
    setQuery(inputRef.current.value);
  }

  return (
    <StatusProvider>
      <NewsProvider>
        <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12">
          <Header inputRef={inputRef} onSearch={handleSearch} />
          <Main query={query} />
        </div>
      </NewsProvider>
    </StatusProvider>
  );
}

export default App;
