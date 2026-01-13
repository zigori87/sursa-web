// src/components/Hero.jsx
import React from "react";
import { useTranslation } from "react-i18next";
import "../styles/App.css";

export default function Hero() {
  const { t, i18n } = useTranslation();

  // текущий язык (en / ru / de / fr)
  const lang = (i18n.language || "en").split("-")[0];
  const langPrefix = `/${lang}`;

  return (
    <section id="hero" className="hero">
      <div className="container hero-inner">
        <div className="hero__body">

          {/* Бейдж над заголовком */}
          <p className="hero__badge">
            {t("hero.badge")}
          </p>

          {/* Главный заголовок */}
          <h1>{t("hero.title")}</h1>

          {/* Основные абзацы */}
          <p className="lead">{t("hero.lead")}</p>

          <p>{t("hero.p2")}</p>
          <p>{t("hero.p3")}</p>
          <p>{t("hero.p4")}</p>

          {/* Кнопки действия — теперь с корректными внутренними ссылками */}
          <div className="hero__actions">

            {/* primary → Who is SURSA page */}
            <a
              href={`${langPrefix}/who-is-sursa`}
              className="btn"
            >
              {t("hero.primaryCta")}
            </a>

            {/* secondary → anchor #how на текущей главной странице */}
            <a
              href={`${langPrefix}/#how`}
              className="btn ghost"
            >
              {t("hero.secondaryCta")}
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}