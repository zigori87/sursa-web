// src/components/About.jsx
import React from "react";
import { useReveal } from "../hooks/useReveal";
import { useTranslation } from "react-i18next";

// PNG + WebP версии изображения #1
import photo1Png from "../assets/images/photo1_device.png";
import photo1Webp from "../assets/images/webp/photo1_device.webp";

export default function About() {
  const { ref, visible } = useReveal();
  const { t } = useTranslation();

  return (
    <section id="about" className="section section--alt">
      <div className="container">
        <div
          ref={ref}
          className={`why_inner reveal ${visible ? "reveal--visible" : ""}`}
        >
          <h2 className="why_title">{t("about.title")}</h2>

          {/* Картинка устройства (изображение #1) */}
          <div className="about-illustration">
            <picture>
              <source srcSet={photo1Webp} type="image/webp" />
              <img
                src={photo1Png}
                alt={t("about.imageAlt")}
                loading="lazy"
              />
            </picture>
          </div>

          <p className="why_text">{t("about.p1")}</p>
          <p className="why_text">{t("about.p2")}</p>
          <p className="why_text">{t("about.p3")}</p>
          <p className="why_text">{t("about.p4")}</p>
          <p className="why_text">{t("about.p5")}</p>
          <p className="why_text">{t("about.p6")}</p>
        </div>
      </div>
    </section>
  );
}