import "./App.css";
import Layout from "./pages/layout";
import { Stack, ThemeProvider } from "@mui/material";
import { theme } from "./theme/MUI_Theme";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

function App() {
  const [t, i18n] = useTranslation();
  const currantLang = i18n.language;
  const [isArabic, setIsArabic] = useState(false);
  useEffect(() => {
    console.log(currantLang);
    currantLang === "ar" ? setIsArabic(true) : setIsArabic(false);
  }, [currantLang]);

  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{ direction: isArabic ? "rtl" : "ltr" }}
        component={"main"}
        className="App"
      >
        <Layout />
      </Stack>
    </ThemeProvider>
  );
}

export default App;
