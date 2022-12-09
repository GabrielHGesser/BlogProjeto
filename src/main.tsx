import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./routes/App";
import { GlobalStyles } from "./styles/global";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />

    <GlobalStyles />
  </React.StrictMode>
);
