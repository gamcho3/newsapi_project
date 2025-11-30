// import { useState } from "react";
import { useContext } from "react";
import { StatusContext } from "../store/StatusContext.jsx";
function FilterButtons({ callStatus }) {
  // const [activeFilter, setActiveFilter] = useState("latest");
  const { setCallStatus } = useContext(StatusContext);
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
      <button
        onClick={() => setCallStatus("top-headlines")}
        className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
          callStatus === "top-headlines"
            ? "border-2 border-slate-800 bg-slate-800 text-white"
            : "border border-slate-300 text-slate-600 hover:border-slate-500 hover:text-slate-900"
        }`}
      >
        최신뉴스
      </button>
      <button
        onClick={() => setCallStatus("everything")}
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
