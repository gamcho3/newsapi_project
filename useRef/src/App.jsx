// import { mockNewsData } from "./mock_data";
import NewsCard from "./components/NewsCard.jsx";
import FilterButtons from "./components/FilterButtons.jsx";
import { useState } from "react";
import { useEffect } from "react";
import SearchForm from "./components/SearchForm.jsx";
import { useRef } from "react";
// import { useCallback } from "react";

function App() {
  // const [isLoading, setIsLoading] = useState(false);
  const [news, setNews] = useState([]);
  const [callStatus, setCallStatus] = useState("top-headlines");
  const [query, setQuery] = useState("기술");
  const inputRef = useRef();

  // const fetchNews = useCallback(async () => { }, [callStatus, query]);

  async function fetchNews() {
    // setIsLoading(true);
    // setNews([]);
    console.log("callStatus:", callStatus);
    // let api_url = "https://newsapi.org/v2/top-headlines";
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

  /**
   * useEffect
   * 컴포넌트가 렌더링 될때마다 특정 작업을 수행
   * 모든 컴포넌트가 렌더링 된 이후에 특정 작업을 수행하고 싶을 때 사용
   * 의존성배열 : 빈배열 -> 컴포넌트가 처음 렌더링 될 때만 실행
   * 의존성배열 : 특정 상태나 props -> 해당 값이 변경될 때마다 실행
   */
  // 문제 유발: fetchNews 함수에 의존하도록 변경
  // fetchNews가 렌더마다 새로 생성되면 이 effect도 매 렌더 재실행됨
  useEffect(() => {
    fetchNews();
  }, [callStatus, query]);

  // fetchNews();

  function handleChangeCallStatus(newStatus) {
    setCallStatus(newStatus);
  }

  function handleSearch(e) {
    e.preventDefault();
    /**
     * ## UseRef
렌더링이 필요하지않은 값을 참조할때 사용한다.
매개변수로 초기값을 받는다.
Useref는 current 프로퍼티를 반환한다.

## state와 Ref의 차이

### state
1. 값이 변경될때 마다 컴포넌트를 리빌드한다.
2. 값을 UI에 바로 반영해야할때 사용해야 한다.

### Ref
1. 값이 변경되어도 컴포넌트를 리빌드 하지 않는다.
2. DOM Element에 접근하기위해 사용되어진다.
     */
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
