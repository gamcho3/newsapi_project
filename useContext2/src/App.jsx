// import { mockNewsData } from "./mock_data";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import { useState } from "react";
import { useRef } from "react";
import { StatusContext, StatusProvider } from "./store/status-context.jsx";
function App() {
  // const [callStatus, setCallStatus] = useState("top-headlines");
  const [query, setQuery] = useState("기술");
  const inputRef = useRef();

  // function handleChangeCallStatus(newStatus) {
  //   setCallStatus(newStatus);
  // }

  function handleSearch(e) {
    e.preventDefault();
    setQuery(inputRef.current.value);
  }

  return (
    <StatusProvider>
      {/* // <StatusContext.Provider value={{ callStatus }}> */}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12">
        <Header
          // callStatus={callStatus}
          // onChangeCallStatus={handleChangeCallStatus}
          inputRef={inputRef}
          onSearch={handleSearch}
        />
        <Main query={query} />
      </div>
      {/* // </StatusContext.Provider> */}
    </StatusProvider>
  );
}

export default App;
