// src/App.jsx
import React from "react";
import "./styles/App.css";

import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import PromoVideo from "./components/PromoVideo.jsx";
import About from "./components/About.jsx";
import Mission from "./components/Mission.jsx";
import HowWorks from "./components/HowWorks.jsx";
import TechnicalLayers from "./components/TechnicalLayers.jsx";
import Roadmap from "./components/Roadmap.jsx";
import Team from "./components/Team.jsx";
import FAQ from "./components/FAQ.jsx";
import Footer from "./components/Footer.jsx";
import SitePagination from "./components/SitePagination.jsx";

import ChatWidget from "./components/ChatWidget.jsx";

import SeoHome from "./seo/SeoHome.jsx";

export default function App() {
  return (
    <>
      <SeoHome />

      <Nav />

      <Hero />
      <PromoVideo />
      <About />
      <Mission />
      <HowWorks />
      <TechnicalLayers />
      <Roadmap />
      <Team />
      <FAQ />

      {/* Live text chat with SURSA */}
      <ChatWidget />

      <SitePagination />
      <Footer />
    </>
  );
}