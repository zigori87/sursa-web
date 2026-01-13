// src/components/Nav.jsx
import React, { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom";
import youronLogoSmall from "../assets/youronLogoSmall.png";
import "../styles/App.css";

const LANGUAGES = ["en", "ru", "de", "fr"];

export default function Nav() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const menuRef = useRef(null);
  const langRef = useRef(null);

  const currentLang = (i18n.language || "en").split("-")[0];

  const pathname = location.pathname || "/";
  const match = pathname.match(/^\/(en|ru|de|fr)(\/.*)?$/);
  const urlLang = match ? match[1] : currentLang;
  const restPath = match && match[2] ? match[2] : "/";

  const langPrefix = `/${urlLang}`;

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const toggleLang = () => setIsLangOpen((prev) => !prev);

  const handleLangSelect = (lng) => {
    if (lng === urlLang) {
      setIsLangOpen(false);
      return;
    }

    const newPath = `/${lng}${restPath || "/"}`;
    navigate(newPath, { replace: false });

    try {
      window.localStorage.setItem("i18nextLng", lng);
    } catch {
      /* ignore */
    }

    setIsLangOpen(false);
  };

  useEffect(() => {
    const handleDocumentClick = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !(event.target.closest && event.target.closest(".nav-menu-toggle"))
      ) {
        setIsMenuOpen(false);
      }

      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        setIsLangOpen(false);
      }
    };

    document.addEventListener("click", handleDocumentClick);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const handleMenuLinkClick = () => {
    setIsMenuOpen(false);
  };

  const menuId = "main-nav-menu";

  return (
    <nav className="nav">
      <div className="container nav-inner">
        {/* LOGO */}
        <a href={`${langPrefix}/#hero`} className="logo--image">
          <img
            src={youronLogoSmall}
            alt="SURSA logo — private offline AI assistant for your home"
            className="logo-img"
          />
        </a>

        <div className="nav-right">
          {/* 1) MENU */}
          <button
            type="button"
            className="nav-menu-toggle"
            onClick={toggleMenu}
            aria-haspopup="true"
            aria-expanded={isMenuOpen}
            aria-controls={menuId}
          >
            {t("nav.menuLabel")}
            <span
              className={"nav-menu-toggle-arrow" + (isMenuOpen ? " open" : "")}
            >
              ▾
            </span>
          </button>

          {/* 2) CTA (НЕ Join, НЕ OON) */}
          <a
            href={`${langPrefix}/who-is-sursa`}
            className="nav-cta nav-cta--enlist"
          >
            {t("nav.ctaExplore", { defaultValue: "Explore" })}
          </a>

          {/* 3) LANG SWITCHER */}
          <div
            className="nav-language-switcher"
            aria-label="Language switcher"
            ref={langRef}
          >
            <button
              type="button"
              className="nav-lang-btn nav-lang-btn--current"
              onClick={toggleLang}
              aria-haspopup="true"
              aria-expanded={isLangOpen}
            >
              {urlLang.toUpperCase()}
              <span className={"nav-lang-arrow" + (isLangOpen ? " open" : "")}>
                ▾
              </span>
            </button>

            {isLangOpen && (
              <div className="nav-lang-dropdown" role="menu">
                {LANGUAGES.map((lng) => {
                  const isActive = urlLang === lng;
                  return (
                    <button
                      key={lng}
                      type="button"
                      onClick={() => handleLangSelect(lng)}
                      className={
                        "nav-lang-btn" +
                        (isActive ? " nav-lang-btn--active" : "")
                      }
                      aria-pressed={isActive}
                    >
                      {lng.toUpperCase()}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* DROPDOWN MENU */}
      {isMenuOpen && (
        <div
          id={menuId}
          className="mobile-menu nav-menu-panel"
          ref={menuRef}
          role="menu"
        >
          <a
            href={`${langPrefix}/#about`}
            onClick={handleMenuLinkClick}
            role="menuitem"
          >
            {t("nav.about")}
          </a>
          <a
            href={`${langPrefix}/#mission`}
            onClick={handleMenuLinkClick}
            role="menuitem"
          >
            {t("nav.mission")}
          </a>
          <a
            href={`${langPrefix}/#how`}
            onClick={handleMenuLinkClick}
            role="menuitem"
          >
            {t("nav.how")}
          </a>

          <a
            href={`${langPrefix}/#technical-layers`}
            onClick={handleMenuLinkClick}
            role="menuitem"
          >
            {t("nav.technicalLayers", { defaultValue: "Technical Layers" })}
          </a>

          <a
            href={`${langPrefix}/#roadmap`}
            onClick={handleMenuLinkClick}
            role="menuitem"
          >
            {t("nav.roadmap")}
          </a>
          <a
            href={`${langPrefix}/#team`}
            onClick={handleMenuLinkClick}
            role="menuitem"
          >
            {t("nav.team")}
          </a>
          <a
            href={`${langPrefix}/#faq`}
            onClick={handleMenuLinkClick}
            role="menuitem"
          >
            {t("nav.faq")}
          </a>

          <a
            href={`${langPrefix}/who-is-sursa`}
            onClick={handleMenuLinkClick}
            role="menuitem"
          >
            {t("nav.whoIsYourOn")}
          </a>
          <a
            href={`${langPrefix}/press-center`}
            onClick={handleMenuLinkClick}
            role="menuitem"
          >
            {t("nav.pressCenter")}
          </a>
          <a
            href={`${langPrefix}/for-journalists`}
            onClick={handleMenuLinkClick}
            role="menuitem"
          >
            {t("nav.forJournalists")}
          </a>
        </div>
      )}
    </nav>
  );
}