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
import Cookies from "js-cookie";
import { useContext, useEffect, useState } from "react";
import { homeContext } from "pages/HomeContext";
import { Data } from "types/Root";
import Spinner from "pages/SpinnerPage/Spinner";
import { useQueryParam, StringParam } from "use-query-params";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

function App() {
  const [t, i18n] = useTranslation();
  const { language } = i18n;
  const { homeData } = useContext(homeContext);
  const [statusError, setStatusError] = useState<Data | undefined>(undefined);
  const [langParam, setLangParam] = useQueryParam("lang", StringParam);
  // Set the selected language in a cookie
  Cookies.set("selectedLanguage", language);

  // Retrieve the selected language from the cookie
  const storedLanguage = Cookies.get("selectedLanguage");

  useEffect(() => {
    console.log("first", language);

    if (!langParam) {
      setLangParam(language);
    }
  }, [langParam]);

  // Set the language in axios headers
  axios.defaults.headers.common["lang"] =
    langParam || storedLanguage || language;

  // Handle hard refresh and set language again
  useEffect(() => {
    const storedLanguage = Cookies.get("selectedLanguage");
    if (storedLanguage && storedLanguage !== language) {
      i18n.changeLanguage(storedLanguage);
    }
    setLangParam(language);
    axios.defaults.headers.common["lang"] = storedLanguage || language;
  }, [language, i18n]);

  useEffect(() => {
    axios
      .get(`https://abdelrahman-eldesoky.online/api/control`)
      .then((res) => {
        setStatusError(res.data);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <ThemeProvider
      theme={theme(
        homeData?.SiteColor.mainColor,
        homeData?.SiteColor.secondaryColor,
        language
      )}
    >
      {statusError?.status ? (
        <Stack
          sx={{ direction: isRtl(storedLanguage || language) ? "rtl" : "ltr" }}
          component={"main"}
          className="App"
        >
          <Layout key={storedLanguage || language} />
        </Stack>
      ) : (
        <Spinner />
      )}
    </ThemeProvider>
  );
}

export default App;
