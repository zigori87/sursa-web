// src/pages/ForJournalists.jsx
import React from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import SitePagination from "../components/SitePagination.jsx";

import "../styles/ForJournalists.css";

// i18n
import { useTranslation } from "react-i18next";
// SEO
import { Helmet } from "react-helmet-async";

export default function ForJournalists() {
  const { t, i18n } = useTranslation();

  // Текущий язык (для <html lang="...">) — режем en-US → en
  const lang = (i18n.language || "en").split("-")[0];

  // Базовый URL и канонический путь с учётом языка
  const baseUrl = "https://sursa.ai";
  const canonicalPath = `/${lang}/for-journalists`;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  // hreflang для всех языков + x-default
  const hreflangUrls = {
  en: `${baseUrl}/en/for-journalists`,
  ru: `${baseUrl}/ru/for-journalists`,
  de: `${baseUrl}/de/for-journalists`,
  fr: `${baseUrl}/fr/for-journalists`,
  "x-default": `${baseUrl}/en/for-journalists`, // ← вот так
};

  // Мета-данные из i18n (страховка, если ключей пока нет)
  const rawTitle = t("forJournalists.meta.title", {
    defaultValue: "SURSA for journalists — background, facts and story",
  });
  const rawDescription = t("forJournalists.meta.description", {
    defaultValue:
      "Key facts, short description and background about SURSA — a private offline AI assistant for home and personal life, prepared for journalists and media.",
  });
  const rawOgTitle = t("forJournalists.meta.ogTitle", {
    defaultValue: rawTitle,
  });
  const rawOgDescription = t("forJournalists.meta.ogDescription", {
    defaultValue: rawDescription,
  });

  const metaTitle =
    rawTitle && rawTitle !== "forJournalists.meta.title"
      ? rawTitle
      : "SURSA for journalists — background, facts and story";

  const metaDescription =
    rawDescription && rawDescription !== "forJournalists.meta.description"
      ? rawDescription
      : "Key facts, short description and background about SURSA — a private offline AI assistant for home and personal life, prepared for journalists and media.";

  const ogTitle =
    rawOgTitle && rawOgTitle !== "forJournalists.meta.ogTitle"
      ? rawOgTitle
      : metaTitle;

  const ogDescription =
    rawOgDescription &&
    rawOgDescription !== "forJournalists.meta.ogDescription"
      ? rawOgDescription
      : metaDescription;

  return (
    <>
      {/* SEO-блок для страницы "For Journalists" */}
      <Helmet>
        <html lang={lang} />

        {/* Базовое SEO */}
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />

        {/* Canonical с учётом языка */}
        <link rel="canonical" href={canonicalUrl} />

        {/* hreflang для всех языков + x-default */}
        {Object.entries(hreflangUrls).map(([hl, href]) => (
          <link key={hl} rel="alternate" hrefLang={hl} href={href} />
        ))}

        {/* Open Graph */}
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDescription} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
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

      <Nav />

      <main className="fj-page">
        <div className="container fj-container">
          <p className="fj-eyebrow">
            {t("forJournalists.heroEyebrow")}
          </p>
          <h1 className="fj-title">
            {t("forJournalists.heroTitle")}
          </h1>
          <p className="fj-intro">
            {t("forJournalists.heroIntro")}
          </p>

          {/* SHORT DESCRIPTION BLOCKS */}
          <section className="fj-section">
            <h2 className="fj-section-title">
              {t("forJournalists.howTitle")}
            </h2>

            <h3 className="fj-subtitle">
              {t("forJournalists.howSentenceTitle")}
            </h3>
            <p className="fj-text">
              {t("forJournalists.howSentenceText")}
            </p>

            <h3 className="fj-subtitle">
              {t("forJournalists.howShortTitle")}
            </h3>
            <p className="fj-text">
              {t("forJournalists.howShortText")}
            </p>
          </section>

          {/* KEY FACTS */}
          <section className="fj-section">
            <h2 className="fj-section-title">
              {t("forJournalists.factsTitle")}
            </h2>
            <ul className="fj-list">
              <li>{t("forJournalists.factsItem1")}</li>
              <li>{t("forJournalists.factsItem2")}</li>
              <li>{t("forJournalists.factsItem3")}</li>
              <li>{t("forJournalists.factsItem4")}</li>
              <li>{t("forJournalists.factsItem5")}</li>
            </ul>
          </section>

          {/* QUICK Q&A */}
          <section className="fj-section">
            <h2 className="fj-section-title">
              {t("forJournalists.qaTitle")}
            </h2>

            <div className="fj-qa-item">
              <h3 className="fj-question">
                {t("forJournalists.qa1Question")}
              </h3>
              <p className="fj-answer">
                {t("forJournalists.qa1Answer")}
              </p>
            </div>

            <div className="fj-qa-item">
              <h3 className="fj-question">
                {t("forJournalists.qa2Question")}
              </h3>
              <p className="fj-answer">
                {t("forJournalists.qa2Answer")}
              </p>
            </div>

            <div className="fj-qa-item">
              <h3 className="fj-question">
                {t("forJournalists.qa3Question")}
              </h3>
              <p className="fj-answer">
                {t("forJournalists.qa3Answer")}
              </p>
            </div>
          </section>

          {/* MEDIA CONTACT */}
          <section className="fj-section fj-section--last">
            <h2 className="fj-section-title">
              {t("forJournalists.contactTitle")}
            </h2>
            <p className="fj-text">
              {t("forJournalists.contactText")}
            </p>
          </section>
        </div>
      </main>

      {/* Цифры 1–5 для всего сайта */}
      <SitePagination />

      <Footer />
    </>
  );
}