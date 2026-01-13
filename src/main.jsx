// src/main.jsx
import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
} from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";

import App from "./App.jsx";

import WhoIsYourOn from "./pages/WhoIsYourOn.jsx";
import PressCenter from "./pages/PressCenter.jsx";
import ForJournalists from "./pages/ForJournalists.jsx";

import "./styles/App.css";

import "./i18n.js";
import { useTranslation } from "react-i18next";

import ScrollToTop from "./components/ScrollToTop.jsx";

function LocalizedRoutes() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  const supportedLangs = ["en", "ru", "de", "fr"];
  const fallbackLang = "en";

  const effectiveLang = supportedLangs.includes(lang ?? "") ? lang : fallbackLang;

  if (i18n.language !== effectiveLang) {
    i18n.changeLanguage(effectiveLang);
  }

  return (
    <Routes>
      <Route path="/" element={<App />} />

      <Route path="who-is-sursa" element={<WhoIsYourOn />} />
      <Route path="press-center" element={<PressCenter />} />
      <Route path="for-journalists" element={<ForJournalists />} />

      <Route path="*" element={<Navigate to={`/${effectiveLang}`} replace />} />
    </Routes>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <Suspense fallback={null}>
        <BrowserRouter>
          <ScrollToTop />

          <Routes>
            <Route path="/" element={<Navigate to="/en" replace />} />

            <Route path="/who-is-sursa" element={<Navigate to="/en/who-is-sursa" replace />} />
            <Route path="/press-center" element={<Navigate to="/en/press-center" replace />} />
            <Route path="/for-journalists" element={<Navigate to="/en/for-journalists" replace />} />

            <Route path="/:lang/*" element={<LocalizedRoutes />} />

            <Route path="*" element={<Navigate to="/en" replace />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </HelmetProvider>
  </React.StrictMode>
);