// src/components/Mission.jsx
import React from "react";
import { useReveal } from "../hooks/useReveal";
import { useTranslation } from "react-i18next";
import "../styles/App.css";

// IMPORTS — WebP + PNG fallback
import missionImgWebp from "../assets/images/webp/photo3_teamwork.webp";
import missionImgPng from "../assets/images/photo3_teamwork.png"; // fallback

export default function Mission() {
  const { ref, visible } = useReveal();
  const { t } = useTranslation();

  return (
    <section
      id="mission"
      ref={ref}
      className={`section section--alt reveal ${visible ? "reveal--visible" : ""}`}
    >
      <div className="container mission__inner">

        <h2 className="mission__title">{t("mission.title")}</h2>

        {/* ФОТО №3 — Human + AI teamwork */}
        <div className="about-illustration">
          <picture>
            <source srcSet={missionImgWebp} type="image/webp" />
            <img
              src={missionImgPng}
              alt={t("mission.imageAlt")}
              loading="lazy"
            />
          </picture>
        </div>

        <p className="mission__text">{t("mission.p1")}</p>

        <h3 className="mission__subtitle">{t("mission.problemTitle")}</h3>
        <p className="mission__text">{t("mission.problemText")}</p>

        <h3 className="mission__subtitle">{t("mission.alternativeTitle")}</h3>
        <p className="mission__text">{t("mission.alternativeText")}</p>

        <h3 className="mission__subtitle">{t("mission.partnershipTitle")}</h3>
        <p className="mission__text">{t("mission.partnershipText")}</p>

        <h3 className="mission__subtitle">{t("mission.visionTitle")}</h3>
        <p className="mission__text">{t("mission.visionText")}</p>

      </div>
    </section>
  );
}