// src/seo/SeoHome.jsx
import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const LOCALE_MAP = {
  en: "en_US",
  ru: "ru_RU",
  de: "de_DE",
  fr: "fr_FR",
};

// Базовый домен продакшена
const BASE_URL = "https://sursa.ai";

// URL главной страницы для каждого языка
const LANG_HOME_URLS = {
  en: `${BASE_URL}/en/`,
  ru: `${BASE_URL}/ru/`,
  de: `${BASE_URL}/de/`,
  fr: `${BASE_URL}/fr/`,
};

export default function SeoHome() {
  const { t, i18n } = useTranslation();

  const rawLang = i18n.language || "en";
  const lang = rawLang.split("-")[0]; // en-US → en
  const locale = LOCALE_MAP[lang] || "en_US";

  // Строки из i18n
  const title = t("meta.title");
  const description = t("meta.description");
  const ogTitle = t("meta.ogTitle");
  const ogDescription = t("meta.ogDescription");

  // Канонический URL главной для текущего языка
  const canonicalUrl = LANG_HOME_URLS[lang] || LANG_HOME_URLS.en;

  return (
    <Helmet>
      {/* HTML lang */}
      <html lang={lang} />

      {/* Базовое SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Canonical */}
      <link rel="canonical" href={canonicalUrl} />

      {/* hreflang для всех языков */}
      {Object.entries(LANG_HOME_URLS).map(([lng, href]) => (
        <link
          key={lng}
          rel="alternate"
          hrefLang={lng}
          href={href}
        />
      ))}
      {/* x-default — корень без префикса, который редиректит на /en */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={BASE_URL + "/"}
      />

      {/* Open Graph */}
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:locale" content={locale} />
      <meta
        property="og:image"
        content="https://sursa.ai/og-youron.png"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDescription} />
      <meta
        name="twitter:image"
        content="https://sursa.ai/og-youron.png"
      />
    </Helmet>
  );
}