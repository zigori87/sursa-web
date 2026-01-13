// src/components/Roadmap.jsx
import React from "react";
import { useReveal } from "../hooks/useReveal.js";
import { useTranslation } from "react-i18next";

export default function Roadmap() {
  const { ref, visible } = useReveal();
  const { t } = useTranslation();

  return (
    <section
      id="roadmap"
      ref={ref}
      className={`section reveal ${visible ? "reveal--visible" : ""}`}
    >
      <div className="container roadmap__inner">
        {/* TITLE */}
        <h2 className="roadmap__title">{t("roadmap.title")}</h2>

        <ul className="roadmap">
          <li className="roadmap-item">
            <strong>{t("roadmap.item1Title")}</strong>{" "}
            {t("roadmap.item1Text")}
          </li>

          <li className="roadmap-item">
            <strong>{t("roadmap.item2Title")}</strong>{" "}
            {t("roadmap.item2Text")}
          </li>

          <li className="roadmap-item">
            <strong>{t("roadmap.item3Title")}</strong>{" "}
            {t("roadmap.item3Text")}
          </li>

          <li className="roadmap-item">
            <strong>{t("roadmap.item4Title")}</strong>{" "}
            {t("roadmap.item4Text")}
          </li>

          <li className="roadmap-item">
            <strong>{t("roadmap.item5Title")}</strong>{" "}
            {t("roadmap.item5Text")}
          </li>
        </ul>
      </div>
    </section>
  );
}