// src/components/PromoVideo.jsx
import { useTranslation } from "react-i18next";

export default function PromoVideo() {
  const { i18n } = useTranslation();

  const lang = (i18n.language || "en").split("-")[0];

  const videoByLang = {
    en: "/videos/youron-promo-en.mp4",
    ru: "/videos/youron-promo-ru.mp4",
    de: "/videos/youron-promo-de.mp4",
    fr: "/videos/youron-promo-fr.mp4",
  };

  const videoSrc = videoByLang[lang] || videoByLang.en;

  return (
    <section id="promo" className="section section--alt">
      <div className="container">
        <div className="video_wrapper">
          <video
            key={videoSrc}
            className="video_element"
            src={videoSrc}
            controls
            controlsList="nodownload"
            preload="metadata"
            title="SURSA promo video"
            aria-label="SURSA promo video"
          />
        </div>
      </div>
    </section>
  );
}