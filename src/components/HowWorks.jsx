// src/components/HowWorks.jsx
import React from "react";
import { useReveal } from "../hooks/useReveal";
import { useTranslation } from "react-i18next";

// PNG + WebP версии изображения #2
import photo2Png from "../assets/images/photo2_ai_home.png";
import photo2Webp from "../assets/images/webp/photo2_ai_home.webp";

export default function HowWorks() {
  const { ref, visible } = useReveal();
  const { t } = useTranslation();

  return (
    <section
      id="how"
      ref={ref}
      className={`section reveal ${visible ? "reveal--visible" : ""}`}
    >
      <div className="container how__inner">
        <h2 className="how__title">{t("how.title")}</h2>

        {/* Иллюстрация AI-дома (Фото #2) */}
        <div className="how-illustration">
          <picture>
            <source srcSet={photo2Webp} type="image/webp" />
            <img
              src={photo2Png}
              alt={t("how.imageAlt")}
              loading="lazy"
            />
          </picture>
        </div>

        <div className="how__list">
          {/* 1. LOCAL BRAIN & MEMORY */}
          <div className="how__item">
            <h3 className="how__item_title">{t("how.item1Title")}</h3>
            <p className="how__item_text">{t("how.item1Text")}</p>
          </div>

          {/* 2. UNDERSTANDING YOUR DEVICES */}
          <div className="how__item">
            <h3 className="how__item_title">{t("how.item2Title")}</h3>
            <p className="how__item_text">{t("how.item2Text")}</p>
          </div>

          {/* 3. RULES AND AUTOMATIONS */}
          <div className="how__item">
            <h3 className="how__item_title">{t("how.item3Title")}</h3>
            <p className="how__item_text">{t("how.item3Text")}</p>
          </div>

          {/* 4. VOICE, LANGUAGE AND CHARACTER */}
          <div className="how__item">
            <h3 className="how__item_title">{t("how.item4Title")}</h3>
            <p className="how__item_text">{t("how.item4Text")}</p>
          </div>

          {/* 5. REAL WORK & DAILY LIFE */}
          <div className="how__item">
            <h3 className="how__item_title">{t("how.item5Title")}</h3>
            <p className="how__item_text">{t("how.item5Text")}</p>
          </div>

          {/* 6. SAFETY & ETHICS */}
          <div className="how__item">
            <h3 className="how__item_title">{t("how.item6Title")}</h3>
            <p className="how__item_text">{t("how.item6Text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}