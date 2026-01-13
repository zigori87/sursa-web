// src/pages/WhoIsYourOn.jsx
import React from "react";
import Nav from "../components/Nav.jsx";
import Footer from "../components/Footer.jsx";
import SitePagination from "../components/SitePagination.jsx";

import "../styles/WhoIsYourOn.css";

import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";

export default function WhoIsYourOn() {
  const { t, i18n } = useTranslation();

  const lang = (i18n.language || "en").split("-")[0];

  const meta = t("whoIsYourOn.meta", { returnObjects: true }) || {};

  const baseUrl = "https://sursa.ai";
  const canonicalPath = `/${lang}/who-is-sursa`;
  const canonicalUrl = `${baseUrl}${canonicalPath}`;

  const hreflangUrls = {
    en: `${baseUrl}/en/who-is-sursa`,
    ru: `${baseUrl}/ru/who-is-sursa`,
    de: `${baseUrl}/de/who-is-sursa`,
    fr: `${baseUrl}/fr/who-is-sursa`,
    "x-default": `${baseUrl}/en/who-is-sursa`,
  };

  return (
    <>
      <Helmet>
        <html lang={lang} />

        <title>
          {meta.title || "Who is SURSA? — Private offline AI for your home"}
        </title>

        <meta
          name="description"
          content={
            meta.description ||
            "Overview of SURSA: a private, offline-first AI assistant that lives inside your home, on hardware you control."
          }
        />

        {meta.keywords && <meta name="keywords" content={meta.keywords} />}

        <link rel="canonical" href={canonicalUrl} />

        {Object.entries(hreflangUrls).map(([hl, href]) => (
          <link key={hl} rel="alternate" hrefLang={hl} href={href} />
        ))}

        <meta
          property="og:title"
          content={
            meta.ogTitle ||
            meta.title ||
            "Who is SURSA? — private offline AI overview"
          }
        />
        <meta
          property="og:description"
          content={
            meta.ogDescription ||
            meta.description ||
            "Learn what SURSA is, how it works and who it is built for."
          }
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content="https://sursa.ai/og-youron.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={
            meta.ogTitle ||
            meta.title ||
            "Who is SURSA? — Private Offline AI"
          }
        />
        <meta
          name="twitter:description"
          content={
            meta.ogDescription ||
            meta.description ||
            "Overview, principles and architecture of SURSA — a private, offline-first AI assistant."
          }
        />
        <meta
          name="twitter:image"
          content="https://sursa.ai/og-youron.png"
        />
      </Helmet>

      <Nav />

      <main className="who-page">
        <section className="who-hero">
          <div className="who-container">
            <p className="who-eyebrow">{t("whoIsYourOn.heroEyebrow")}</p>
            <h1 className="who-title">{t("whoIsYourOn.heroTitle")}</h1>
            <p className="who-subtitle">{t("whoIsYourOn.heroSubtitle")}</p>
          </div>
        </section>

        <section className="who-section">
          <div className="who-container">
            <h2 className="who-section-title">{t("whoIsYourOn.shortTitle")}</h2>
            <p className="who-text">
              {t("whoIsYourOn.shortTextPrefix")}{" "}
              <strong>{t("whoIsYourOn.shortTextStrong")}</strong>
              {t("whoIsYourOn.shortTextSuffix")}
            </p>
          </div>
        </section>

        <section className="who-section">
          <div className="who-container">
            <h2 className="who-section-title">{t("whoIsYourOn.whatTitle")}</h2>
            <p className="who-text">{t("whoIsYourOn.whatIntro")}</p>

            <ul className="who-list">
              <li>
                <strong>{t("whoIsYourOn.whatItem1Title")}</strong>{" "}
                {t("whoIsYourOn.whatItem1Text")}
              </li>
              <li>
                <strong>{t("whoIsYourOn.whatItem2Title")}</strong>{" "}
                {t("whoIsYourOn.whatItem2Text")}
              </li>
              <li>
                <strong>{t("whoIsYourOn.whatItem3Title")}</strong>{" "}
                {t("whoIsYourOn.whatItem3Text")}
              </li>
              <li>
                <strong>{t("whoIsYourOn.whatItem4Title")}</strong>{" "}
                {t("whoIsYourOn.whatItem4Text")}
              </li>
              <li>
                <strong>{t("whoIsYourOn.whatItem5Title")}</strong>{" "}
                {t("whoIsYourOn.whatItem5Text")}
              </li>
              <li>
                <strong>{t("whoIsYourOn.whatItem6Title")}</strong>{" "}
                {t("whoIsYourOn.whatItem6Text")}
              </li>
            </ul>
          </div>
        </section>

        <section className="who-section">
          <div className="who-container">
            <h2 className="who-section-title">{t("whoIsYourOn.notTitle")}</h2>
            <p className="who-text">{t("whoIsYourOn.notIntro")}</p>

            <ul className="who-list">
              <li>{t("whoIsYourOn.notItem1")}</li>
              <li>{t("whoIsYourOn.notItem2")}</li>
              <li>{t("whoIsYourOn.notItem3")}</li>
              <li>{t("whoIsYourOn.notItem4")}</li>
            </ul>
          </div>
        </section>

        <section className="who-section">
          <div className="who-container">
            <h2 className="who-section-title">
              {t("whoIsYourOn.principlesTitle")}
            </h2>

            <div className="who-grid">
              <div className="who-card">
                <h3>{t("whoIsYourOn.principle1Title")}</h3>
                <p>{t("whoIsYourOn.principle1Text")}</p>
              </div>

              <div className="who-card">
                <h3>{t("whoIsYourOn.principle2Title")}</h3>
                <p>{t("whoIsYourOn.principle2Text")}</p>
              </div>

              <div className="who-card">
                <h3>{t("whoIsYourOn.principle3Title")}</h3>
                <p>{t("whoIsYourOn.principle3Text")}</p>
              </div>

              <div className="who-card">
                <h3>{t("whoIsYourOn.principle4Title")}</h3>
                <p>{t("whoIsYourOn.principle4Text")}</p>
              </div>

              <div className="who-card">
                <h3>{t("whoIsYourOn.principle5Title")}</h3>
                <p>{t("whoIsYourOn.principle5Text")}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="who-section">
          <div className="who-container">
            <h2 className="who-section-title">{t("whoIsYourOn.archTitle")}</h2>
            <p className="who-text">{t("whoIsYourOn.archIntro")}</p>

            <ol className="who-steps">
              <li>
                <strong>{t("whoIsYourOn.archStep1Title")}</strong>{" "}
                {t("whoIsYourOn.archStep1Text")}
              </li>
              <li>
                <strong>{t("whoIsYourOn.archStep2Title")}</strong>{" "}
                {t("whoIsYourOn.archStep2Text")}
              </li>
              <li>
                <strong>{t("whoIsYourOn.archStep3Title")}</strong>{" "}
                {t("whoIsYourOn.archStep3Text")}
              </li>
            </ol>
          </div>
        </section>

        <section className="who-section">
          <div className="who-container">
            <h2 className="who-section-title">{t("whoIsYourOn.forWhomTitle")}</h2>

            <ul className="who-list">
              <li>{t("whoIsYourOn.forWhomItem1")}</li>
              <li>{t("whoIsYourOn.forWhomItem2")}</li>
              <li>{t("whoIsYourOn.forWhomItem3")}</li>
              <li>{t("whoIsYourOn.forWhomItem4")}</li>
              <li>{t("whoIsYourOn.forWhomItem5")}</li>
            </ul>
          </div>
        </section>

        <section className="who-section">
          <div className="who-container">
            <h2 className="who-section-title">{t("whoIsYourOn.companyTitle")}</h2>
            <p className="who-text">{t("whoIsYourOn.companyP1")}</p>
            <p className="who-text">{t("whoIsYourOn.companyP2")}</p>
          </div>
        </section>

        <section className="who-section">
          <div className="who-container">
            <h2 className="who-section-title">{t("whoIsYourOn.quickTitle")}</h2>

            <div className="who-faq-item">
              <h3>{t("whoIsYourOn.quickQ1Title")}</h3>
              <p>{t("whoIsYourOn.quickQ1Text")}</p>
            </div>

            <div className="who-faq-item">
              <h3>{t("whoIsYourOn.quickQ2Title")}</h3>
              <p>{t("whoIsYourOn.quickQ2Text")}</p>
            </div>

            <div className="who-faq-item">
              <h3>{t("whoIsYourOn.quickQ3Title")}</h3>
              <p>{t("whoIsYourOn.quickQ3Text")}</p>
            </div>

            <div className="who-faq-item">
              <h3>{t("whoIsYourOn.quickQ4Title")}</h3>
              <p>{t("whoIsYourOn.quickQ4Text")}</p>
            </div>
          </div>
        </section>
      </main>

      <SitePagination />
      <Footer />
    </>
  );
}