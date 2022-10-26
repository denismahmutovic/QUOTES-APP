import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { TokenContext, TokenProvider } from "./Components/Context/UserContext";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <TokenProvider>
        <App />
      </TokenProvider>
    </BrowserRouter>
  </React.StrictMode>
);
