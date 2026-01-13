// src/pages/PressCenter.jsx
import React from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import SitePagination from "../components/SitePagination.jsx";

import "../styles/PressCenter.css";

import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export default function PressCenter() {
  const { t, i18n } = useTranslation();

  const lang = (i18n.language || "en").split("-")[0];

  const meta = t("pressCenter.meta", { returnObjects: true }) || {};

  const baseUrl = "https://sursa.ai";
  const canonicalPath = `/${lang}/press-center`;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  const hreflangUrls = {
    en: `${baseUrl}/en/press-center`,
    ru: `${baseUrl}/ru/press-center`,
    de: `${baseUrl}/de/press-center`,
    fr: `${baseUrl}/fr/press-center`,
    "x-default": `${baseUrl}/en/press-center`,
  };

  return (
    <div className="press-page">
      <Helmet>
        <html lang={lang} />

        <title>{meta.title || "SURSA — News & Press Center"}</title>

        <meta
          name="description"
          content={
            meta.description ||
            "Official news, updates and background about SURSA — a private offline AI assistant for your home."
          }
        />

        {meta.keywords && <meta name="keywords" content={meta.keywords} />}

        <link rel="canonical" href={canonicalUrl} />

        {Object.entries(hreflangUrls).map(([hl, href]) => (
          <link key={hl} rel="alternate" hrefLang={hl} href={href} />
        ))}

        <meta
          property="og:title"
          content={meta.ogTitle || meta.title || "SURSA — News & updates"}
        />
        <meta
          property="og:description"
          content={
            meta.ogDescription ||
            meta.description ||
            "Official information, roadmap milestones and ecosystem updates about SURSA."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://sursa.ai/og-youron.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={meta.ogTitle || meta.title || "SURSA — Press Center"}
        />
        <meta
          name="twitter:description"
          content={
            meta.ogDescription ||
            meta.description ||
            "News, product updates and official notes about SURSA."
          }
        />
        <meta
          name="twitter:image"
          content="https://sursa.ai/og-youron.png"
        />
      </Helmet>

      <Nav />

      <main className="press-main">
        <section className="press-hero">
          <p className="press-eyebrow">{t("pressCenter.heroEyebrow")}</p>
          <h1 className="press-title">{t("pressCenter.heroTitle")}</h1>
          <p className="press-subtitle">{t("pressCenter.heroSubtitle")}</p>
        </section>

        <section className="press-section">
          <div className="press-section-inner">
            <h2 className="press-section-title">{t("pressCenter.latestTitle")}</h2>

            <div className="press-grid">
              <article className="press-card">
                <p className="press-card-meta">{t("pressCenter.news1Meta")}</p>
                <h3 className="press-card-title">{t("pressCenter.news1Title")}</h3>
                <p className="press-card-text">{t("pressCenter.news1Text")}</p>
              </article>

              <article className="press-card">
                <p className="press-card-meta">{t("pressCenter.news2Meta")}</p>
                <h3 className="press-card-title">{t("pressCenter.news2Title")}</h3>
                <p className="press-card-text">{t("pressCenter.news2Text")}</p>
              </article>
            </div>
          </div>
        </section>

        <section className="press-section">
          <div className="press-section-inner">
            <h2 className="press-section-title">
              {t("pressCenter.releasesTitle")}
            </h2>

            <ul className="press-list">
              <li className="press-list-item">
                <span className="press-list-date">
                  {t("pressCenter.releasesItem1Date")}
                </span>
                <span className="press-list-text">
                  {t("pressCenter.releasesItem1Text")}
                </span>
              </li>

              <li className="press-list-item">
                <span className="press-list-date">
                  {t("pressCenter.releasesItem2Date")}
                </span>
                <span className="press-list-text">
                  {t("pressCenter.releasesItem2Text")}
                </span>
              </li>
            </ul>
          </div>
        </section>

        <section className="press-section">
          <div className="press-section-inner">
            <h2 className="press-section-title">{t("pressCenter.archiveTitle")}</h2>

            <p className="press-archive-text">{t("pressCenter.archiveText")}</p>

            <div className="press-archive-grid">
              <div className="press-archive-block">
                <h3 className="press-archive-year">
                  {t("pressCenter.archive2025Title")}
                </h3>
                <p className="press-archive-note">
                  {t("pressCenter.archive2025Text")}
                </p>
              </div>

              <div className="press-archive-block">
                <h3 className="press-archive-year">
                  {t("pressCenter.archiveFutureTitle")}
                </h3>
                <p className="press-archive-note">
                  {t("pressCenter.archiveFutureText")}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SitePagination />

      <Footer />
    </div>
  );
}