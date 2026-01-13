// src/components/Team.jsx
import React from "react";
import { useReveal } from "../hooks/useReveal";
import { useTranslation } from "react-i18next";
import "../styles/App.css";

// PNG + WebP версии
import teamPhotoPng from "../assets/images/team_photo.png";
import teamPhotoWebp from "../assets/images/webp/team_photo.webp";

export default function Team() {
  const { ref, visible } = useReveal();
  const { t } = useTranslation();

  return (
    <section
      id="team"
      ref={ref}
      className={`section reveal ${visible ? "reveal--visible" : ""}`}
    >
      <div className="container team__inner">

        {/* TITLE */}
        <h2 className="team__title">{t("team.title")}</h2>

        {/* IMAGE */}
        <div className="team-illustration">
          <picture>
            <source srcSet={teamPhotoWebp} type="image/webp" />
            <img
              src={teamPhotoPng}
              loading="lazy"
              alt={t("team.imageAlt")}
            />
          </picture>
        </div>

        {/* TEXT BLOCKS */}
        <p className="team__text">{t("team.p1")}</p>
        <p className="team__text">{t("team.p2")}</p>
        <p className="team__text">{t("team.p3")}</p>

      </div>
    </section>
  );
}