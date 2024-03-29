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
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
