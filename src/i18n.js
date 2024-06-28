import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en/translation.json";
import translationKH from "./locales/kh/translation.json";
import translationCH from "./locales/ch/translation.json";

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  kh: {
    translation: translationKH,
  },
  ch: {
    translation: translationCH,
  },
};

i18n
  .use(initReactI18next) // pass the i18n instance to react-i18next.
  .init({
    resources,
    lng: "en", // default language
    fallbackLng: "en", // fallback language if user language not available
    debug: true,

    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
