import { useEffect, useContext } from "react";
import NewsCard from "./NewsCard.jsx";
import { StatusContext } from "../store/status-context.jsx";
import { NewsContext } from "../store/news-context.jsx";

function Main({ query }) {
  const { callStatus } = useContext(StatusContext);
  const { newsState, fetchNews } = useContext(NewsContext);

  useEffect(() => {
    fetchNews(callStatus, query);
  }, [callStatus, query]);

  return (
    <main className="mt-12 flex-1">
      <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {newsState.isLoading && <div>Loading...</div>}
        {newsState.error && <div>Error: {newsState.error}</div>}
        {newsState.news.map((article) => (
          <NewsCard key={article.url} {...article} />
        ))}
      </section>
    </main>
  );
}

export default Main;
