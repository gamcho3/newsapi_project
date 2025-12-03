import NewsCard from "./NewsCard.jsx";

function Main({ news }) {
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
