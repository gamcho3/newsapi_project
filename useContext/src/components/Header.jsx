import FilterButtons from "./FilterButtons.jsx";
import SearchForm from "./SearchForm.jsx";
import { useContext } from "react";
import { StatusContext } from "../store/StatusContext.jsx";
function Header({ inputRef, onSearch }) {
  const { callStatus } = useContext(StatusContext);

  return (
    <header className="flex flex-col gap-6 text-center sm:text-left">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold text-slate-900 sm:text-5xl">
          글로벌 뉴스
        </h1>
        <p className="mx-auto max-w-3xl text-slate-600 sm:mx-0">
          전세계 다양한 소식을 보여줍니다
        </p>
      </div>
      <FilterButtons callStatus={callStatus} />
      {callStatus === "everything" && (
        <SearchForm inputRef={inputRef} onSearch={onSearch} />
      )}
    </header>
  );
}

export default Header;
