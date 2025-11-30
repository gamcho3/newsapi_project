import { mockNewsData } from "./mock_data";
import NewsCard from "./components/NewsCard.jsx";
import FilterButtons from "./components/FilterButtons.jsx";
function App() {
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
          <FilterButtons />
        </header>

        <main className="mt-12 flex-1">
          <section className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {mockNewsData.map((article) => (
              <NewsCard key={article.url} {...article} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
