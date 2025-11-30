import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { StatusProvider } from "./store/StatusContext.jsx";

createRoot(document.getElementById("root")).render(
  <StatusProvider>
    <App />
  </StatusProvider>
);
