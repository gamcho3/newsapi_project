import { StatusContext } from "../store/status-context.jsx";
import FilterButton from "./FilterButton.jsx";
import { useContext } from "react";

function FilterButtons() {
  const { callStatus, handleChangeCallStatus } = useContext(StatusContext);
  console.log(callStatus);
  return (
    <div className="flex flex-wrap items-center justify-center gap-3 sm:justify-start">
      <FilterButton
        active={callStatus === "top-headlines"}
        onClick={() => handleChangeCallStatus("top-headlines")}
      >
        최신뉴스
      </FilterButton>
      <FilterButton
        active={callStatus === "everything"}
        onClick={() => handleChangeCallStatus("everything")}
      >
        뉴스검색
      </FilterButton>
    </div>
  );
}

export default FilterButtons;
