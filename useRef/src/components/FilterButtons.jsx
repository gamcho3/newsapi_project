// import { useState } from "react";

function FilterButtons({ onChangeCallStatus, callStatus }) {
  // const [activeFilter, setActiveFilter] = useState("latest");

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
      <button
        onClick={() => onChangeCallStatus("top-headlines")}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
          callStatus === "top-headlines"
            ? "bg-slate-800 text-white shadow-md"
            : "bg-white text-slate-600 shadow-sm hover:bg-slate-50 hover:shadow-md"
        }`}
      >
        최신뉴스
      </button>
      <button
        onClick={() => onChangeCallStatus("everything")}
        className={`rounded-full px-4 py-2 text-sm transition ${
          callStatus === "everything"
            ? "border-2 border-slate-800 bg-slate-800 text-white"
            : "border border-slate-300 text-slate-600 hover:border-slate-500 hover:text-slate-900"
        }`}
      >
        뉴스검색
      </button>
    </div>
  );
}

export default FilterButtons;
