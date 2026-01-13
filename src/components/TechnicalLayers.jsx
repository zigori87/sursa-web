import React from "react";
import { useReveal } from "../hooks/useReveal";
import { useTranslation } from "react-i18next";
import "../styles/App.css";

export default function TechnicalLayers() {
  const { ref, visible } = useReveal();
  const { t } = useTranslation();

  const items = [
    {
      key: "localCore",
      title: t("technicalLayers.items.localCore.title"),
      text: t("technicalLayers.items.localCore.text"),
    },
    {
      key: "memory",
      title: t("technicalLayers.items.memory.title"),
      text: t("technicalLayers.items.memory.text"),
    },
    {
      key: "tools",
      title: t("technicalLayers.items.tools.title"),
      text: t("technicalLayers.items.tools.text"),
    },
    {
      key: "coordination",
      title: t("technicalLayers.items.coordination.title"),
      text: t("technicalLayers.items.coordination.text"),
    },
  ];

  return (
    <section
      id="technical-layers"
      ref={ref}
      className={`section reveal ${visible ? "reveal--visible" : ""}`}
    >
      <div className="container tokenomics__inner">
        {/* TRUST ANCHOR */}
        <p className="tokenomics__intro" style={{ marginTop: 0 }}>
          {t("technicalLayers.trustAnchor")}
        </p>

        {/* TITLE */}
        <h2 className="tokenomics__title">{t("technicalLayers.title")}</h2>

        {/* INTRO */}
        <p className="tokenomics__intro">{t("technicalLayers.intro")}</p>

        {/* GRID */}
        <div className="tokenomics__grid">
          {items.map((it) => (
            <div key={it.key} className="tokenomics__item">
              <h4>{it.title}</h4>
              <p>{it.text}</p>
            </div>
          ))}
        </div>

        {/* NOTE */}
        <p className="tokenomics__disclaimer" style={{ marginTop: "20px" }}>
          {t("technicalLayers.note")}
        </p>
      </div>
    </section>
  );
}