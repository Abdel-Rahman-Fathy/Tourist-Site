import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import i18n from "i18next";
import Backend from "i18next-http-backend";
import Cookies from "js-cookie";
import EnTranslation from "translate/EnTranslation";
import ArTranslation from "translate/ArTranslation";
import FrTranslation from "translate/FrTranslation";
import GeTranslation from "translate/GeTranslation";
import HuTranslation from "translate/HuTranslation";
import PoTranslation from "translate/PoTranslation";
import RuTranslation from "translate/RuTranslation";
import TuTranslation from "translate/TuTranslation";

const lang = Cookies.get("i18next");
const translationsEn = EnTranslation;
const translationsAr = ArTranslation;
const translationsFr = FrTranslation;
const translationsGe = GeTranslation;
const translationsHu = HuTranslation;
const translationsPo = PoTranslation;
const translationsRu = RuTranslation;
const translationsTu = TuTranslation;
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: translationsEn },
      ar: { translation: translationsAr },
      fr: { translation: translationsFr },
      ge: { translation: translationsGe },
      hu: { translation: translationsHu },
      po: { translation: translationsPo },
      ru: { translation: translationsRu },
      tu: { translation: translationsTu },
    },
    lng: lang || "en",
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
