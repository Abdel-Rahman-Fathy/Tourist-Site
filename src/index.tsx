import React from "react";
import ReactDOM from "react-dom/client";
import "./i18n";
import App from "./App";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/MUI_Theme";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
