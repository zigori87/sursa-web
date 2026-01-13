// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Подключаем JSON прямо из src/locales
import deTranslation from "./locales/de/translation.json";
import enTranslation from "./locales/en/translation.json";
import frTranslation from "./locales/fr/translation.json";
import ruTranslation from "./locales/ru/translation.json";

const resources = {
  en: { translation: enTranslation },
  de: { translation: deTranslation },
  fr: { translation: frTranslation },
  ru: { translation: ruTranslation },
};

// Определяем стартовый язык:
// 1) сначала из localStorage (если есть);
// 2) если нет — из URL-префикса /en|de|fr|ru;
// 3) иначе — "en".
let initialLanguage = "en";

try {
  if (typeof window !== "undefined") {
    let resolved = null;

    // 1) Пробуем прочитать из localStorage
    if (window.localStorage) {
      const stored = window.localStorage.getItem("i18nextLng");
      if (stored && typeof stored === "string") {
        resolved = stored.split("-")[0]; // en-US -> en
      }
    }

    // 2) Если в storage ничего нет — смотрим на URL-путь
    if (!resolved) {
      const match = window.location.pathname.match(/^\/(en|de|fr|ru)(\/|$)/);
      if (match && match[1]) {
        resolved = match[1];
      }
    }

    // 3) Фоллбек
    if (resolved) {
      initialLanguage = resolved;
    }
  }
} catch {
  // если localStorage/URL недоступен — остаёмся на "en"
}

i18n
  .use(initReactI18next)
  .init({
    resources,

    // вместо жёсткого "en" — язык, выбранный пользователем или из URL
    lng: initialLanguage,
    fallbackLng: "en",

    supportedLngs: ["en", "de", "fr", "ru"],

    ns: ["translation"],
    defaultNS: "translation",

    interpolation: {
      escapeValue: false,
    },

    debug: false,
  });

export default i18n;