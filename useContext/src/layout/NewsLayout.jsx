export default function NewsLayout({ children }) {
  return (
    <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12">
      {children}
    </div>
  );
}
