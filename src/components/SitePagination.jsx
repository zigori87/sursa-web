// src/components/SitePagination.jsx
import React from "react";
import { useLocation } from "react-router-dom";

const SUPPORTED_LANGS = ["en", "ru", "de", "fr"];

function normalizePathname(pathname) {
  if (!pathname) return "/";
  // убираем трейлинг-слэш (кроме корня)
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

export default function SitePagination() {
  const location = useLocation();
  const pathname = normalizePathname(location.pathname || "/");

  const segments = pathname.split("/").filter(Boolean);
  const langFromPath = segments[0];

  const lang = SUPPORTED_LANGS.includes(langFromPath) ? langFromPath : "en";

  // 4 реальные страницы сайта (без OON)
  const pages = [
    { id: 1, path: `/${lang}` },                // Главная
    { id: 2, path: `/${lang}/who-is-sursa` }, // Кто такой SURSA
    { id: 3, path: `/${lang}/press-center` },   // Пресс-центр
    { id: 4, path: `/${lang}/for-journalists` } // Для журналистов
  ];

  const currentId = pages.find((p) => p.path === pathname)?.id ?? null;

  return (
    <section className="site-pagination-section">
      <nav className="site-pagination" aria-label="Site pagination">
        {pages.map((page) => {
          const isActive = page.id === currentId;

          if (isActive) {
            return (
              <span
                key={page.id}
                className="site-pagination-item site-pagination-item--active"
              >
                {page.id}
              </span>
            );
          }

          // обычная ссылка <a>, не <Link> — чтобы всегда скроллило наверх
          return (
            <a
              key={page.id}
              href={page.path}
              className="site-pagination-item"
            >
              {page.id}
            </a>
          );
        })}
      </nav>
    </section>
  );
}