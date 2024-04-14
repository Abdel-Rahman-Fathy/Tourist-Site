import EnTranslation from "./translate/EnTranslation";
import ArTranslation from "./translate/ArTranslation";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18next from "i18next";
const translationsEn = EnTranslation;
const translationsAr = ArTranslation;
const resources = {
  en: {
    translation: translationsEn,
  },
  ar: {
    translation: translationsAr,
  },
};

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
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

export default i18next;
