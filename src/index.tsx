import ReactDOM from "react-dom/client";
import "./i18n";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { HomeContextProvider } from "pages/HomeContext";
import { ReactRouter6Adapter } from "use-query-params/adapters/react-router-6";
import { QueryParamProvider } from "use-query-params";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <QueryParamProvider adapter={ReactRouter6Adapter}>
      <HomeContextProvider>
        <App />
      </HomeContextProvider>
    </QueryParamProvider>
  </BrowserRouter>
);
