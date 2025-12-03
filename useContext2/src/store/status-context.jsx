import { useState } from "react";
import { createContext } from "react";

export const StatusContext = createContext({
  callStatus: "top-headlines",
});

export function StatusProvider({ children }) {
  const [callStatus, setCallStatus] = useState("top-headlines");

  function handleChangeCallStatus(newStatus) {
    setCallStatus(newStatus);
  }

  const value = { callStatus, handleChangeCallStatus };

  return (
    <StatusContext.Provider value={value}>{children}</StatusContext.Provider>
  );
}
