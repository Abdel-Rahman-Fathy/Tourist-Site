import "./App.css";
import Layout from "./pages/layout";
import { Stack, ThemeProvider } from "@mui/material";
import { theme } from "./theme/MUI_Theme";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import axios from "axios";
import isRtl from "methods/isRtl";
import { HomeContextProvider } from "pages/HomeContext";
import Cookies from "js-cookie";
axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

function App() {
  const [t, i18n] = useTranslation();
  const { language } = i18n;

  // Set the selected language in a cookie
  Cookies.set("selectedLanguage", language);

  // Retrieve the selected language from the cookie
  const storedLanguage = Cookies.get("selectedLanguage");

  // Set the language in axios headers
  axios.defaults.headers.common["lang"] = storedLanguage || language;

  // Handle hard refresh and set language again
  if (language !== storedLanguage) {
    i18n.changeLanguage(storedLanguage || language);
  }

  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{ direction: isRtl(storedLanguage || language) ? "rtl" : "ltr" }}
        component={"main"}
        className="App"
      >
        <HomeContextProvider>
          <Layout key={storedLanguage || language} />
        </HomeContextProvider>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
