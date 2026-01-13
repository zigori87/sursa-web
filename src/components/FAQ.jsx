// src/components/FAQ.jsx
import React from "react";
import { useReveal } from "../hooks/useReveal.js";
import { useTranslation } from "react-i18next";

export default function FAQ() {
  const { ref, visible } = useReveal();
  const { t } = useTranslation();

  return (
    <section
      id="faq"
      ref={ref}
      className={`section reveal ${visible ? "reveal--visible" : ""}`}
    >
      <div className="container faq__inner">
        <h2 className="faq__title">{t("faq.title")}</h2>

        {/* 1 — DEVICE STATUS */}
        <div className="faq__item">
          <h3 className="faq__question">{t("faq.q1")}</h3>
          <p className="faq__answer">{t("faq.a1")}</p>
        </div>

        {/* 2 — DATA PRIVACY */}
        <div className="faq__item">
          <h3 className="faq__question">{t("faq.q2")}</h3>
          <p className="faq__answer">{t("faq.a2")}</p>
        </div>

        {/* 3 — TOKEN PURPOSE */}
        <div className="faq__item">
          <h3 className="faq__question">{t("faq.q3")}</h3>
          <p className="faq__answer">{t("faq.a3")}</p>
        </div>

        {/* 4 — PROJECT CONTROL */}
        <div className="faq__item">
          <h3 className="faq__question">{t("faq.q4")}</h3>
          <p className="faq__answer">{t("faq.a4")}</p>
        </div>
      </div>
    </section>
  );
}