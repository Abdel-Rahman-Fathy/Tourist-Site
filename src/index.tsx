import ReactDOM from "react-dom/client";
import "./i18n";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HomeContextProvider } from "pages/HomeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <HomeContextProvider>
      <App />
    </HomeContextProvider>
  </BrowserRouter>
);
