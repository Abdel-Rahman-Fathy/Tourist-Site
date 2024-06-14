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
import { useNavigate, useParams } from "react-router-dom";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";

function App() {
  const [t, i18n] = useTranslation();
  const { language, changeLanguage } = i18n;
  const { homeData } = useContext(homeContext);
  const [statusError, setStatusError] = useState<Data | undefined>(undefined);
  const { local } = useParams();
  axios.defaults.headers.common["lang"] = language;
  const navigate = useNavigate();
  useEffect(() => {
    if (!local) {
      changeLanguage("en");
    } else {
      changeLanguage(local || "en");
    }
    navigate("/en");
  }, [local]);

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
      {statusError?.egyptos ? (
        <Stack
          sx={{ direction: isRtl(language) ? "rtl" : "ltr" }}
          component={"main"}
          className="App"
        >
          <Layout key={language} />
        </Stack>
      ) : (
        <Spinner />
      )}
    </ThemeProvider>
  );
}

export default App;
