// src/components/PromoVideo.jsx
import { useTranslation } from "react-i18next";

export default function PromoVideo() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || "en").split("-")[0];

  const videoByLang = {
    de: "https://0lcx8ro2moplr2tz.public.blob.vercel-storage.com/youron-promo-de.mp4",
    en: "https://0lcx8ro2moplr2tz.public.blob.vercel-storage.com/youron-promo-en.mp4",
    ru: "https://0lcx8ro2moplr2tz.public.blob.vercel-storage.com/youron-promo-ru.mp4",
    fr: "https://0lcx8ro2moplr2tz.public.blob.vercel-storage.com/youron-promo-fr.mp4",
  };

  const videoSrc = videoByLang[lang] || videoByLang.en;

  return (
    <section id="promo" className="section section--alt">
      <div className="container">
        <div className="video_wrapper">
          <video
            key={lang}                 // важно: пересоздаёт плеер при смене языка
            className="video_element"
            src={videoSrc}
            controls
            controlsList="nodownload"
            preload="metadata"
            playsInline
            title="SURSA promo video"
            aria-label="SURSA promo video"
          />
        </div>
      </div>
    </section>
  );
}