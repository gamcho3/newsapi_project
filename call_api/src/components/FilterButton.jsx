function FilterButton({ active = false, onClick, children }) {
  const baseClass =
    "rounded-full px-4 py-2 text-sm font-semibold transition cursor-pointer";
  const activeClass = "bg-slate-800 text-white shadow-md";
  const inactiveClass =
    "bg-white text-slate-600 shadow-sm hover:bg-slate-50 hover:shadow-md border border-slate-300 hover:border-slate-500";

  return (
    <button
      onClick={onClick}
      className={`${baseClass} ${active ? activeClass : inactiveClass}`}
    >
      {children}
    </button>
  );
}

export default FilterButton;
