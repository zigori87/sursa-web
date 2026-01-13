// src/components/Footer.jsx
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div
        className="container footer-inner"
        style={{ justifyContent: "center", textAlign: "center" }}
      >
        <div>
          <div>
            © {new Date().getFullYear()} SURSA. {t("footer.rights")}
          </div>

          <div style={{ marginTop: "8px", opacity: 0.85, fontSize: "0.95em" }}>
            {t("footer.nonCommercial")}
          </div>
        </div>
      </div>
    </footer>
  );
}