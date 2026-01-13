// src/components/Join.jsx
import React from "react";
import { useTranslation } from "react-i18next";

export default function Join() {
  const { i18n } = useTranslation();

  // текущий язык (en / ru / de / fr)
  const lang = (i18n.language || "en").split("-")[0];
  const langPrefix = `/${lang}`;

  return (
    <section id="join" className="section">
      <div className="container">
        <h2 className="section_title">Join the SURSA early community</h2>

        <p className="section_lead">
          We are building a private offline AI assistant for the home. Follow updates,
          product milestones and public demos here on the official SURSA website.
        </p>

        <p className="section_text">
          If you represent media or want official materials, use the{" "}
          <a href={`${langPrefix}/press-center`}>Press Center</a> and{" "}
          <a href={`${langPrefix}/for-journalists`}>For Journalists</a> pages.
        </p>
      </div>
    </section>
  );
}