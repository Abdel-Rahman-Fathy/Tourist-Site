import "./App.css";
import Layout from "./pages/layout";
import { Stack, ThemeProvider } from "@mui/material";
import { theme } from "./theme/MUI_Theme";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

import axios from "axios";
import isRtl from "methods/isRtl";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

function App() {
  const [t, i18n] = useTranslation();
  const { language } = i18n;
  axios.defaults.headers.common["lang"] = language;

  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{ direction: isRtl(language) ? "rtl" : "ltr" }}
        component={"main"}
        className="App"
      >
        <Layout key={language} />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
