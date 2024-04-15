import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import Backend from "i18next-http-backend";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    lng: "en",
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
    detection: {
      order: [
        "htmlTag",
        "cookie",
        "localStorage",
        "navigator",
        "path",
        "subdomain",
      ],
      caches: ["cookie"],
    },
  });
export default i18n;
