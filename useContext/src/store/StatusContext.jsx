import { useState } from "react";
import { createContext } from "react";

export const StatusContext = createContext({
  callStatus: "top-headlines",
  setCallStatus: () => {},
});

export function StatusProvider({ children }) {
  const [callStatus, setCallStatus] = useState("top-headlines");

  const value = { callStatus, setCallStatus };
  return (
    <StatusContext.Provider value={value}>{children}</StatusContext.Provider>
  );
}
