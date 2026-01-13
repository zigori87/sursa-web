// src/components/Modal.jsx
import React, { useEffect } from "react";
import "../styles/App.css";

export default function Modal({
  isOpen,
  title,
  children,
  onClose,
  primaryLabel,
  primaryHref,
}) {
  if (!isOpen) return null;

  // Закрытие по Esc
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") {
        onClose?.();
      }
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  // Клик по затемнённому фону — тоже закрывает
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose?.();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal">
        <button
          type="button"
          className="modal-close"
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {title && <h3 className="modal-title">{title}</h3>}

        <div className="modal-body">{children}</div>

        {primaryHref && (
          <div className="modal-actions">
            <a href={primaryHref} className="modal-primary-btn">
              {primaryLabel || "Continue"}
            </a>
          </div>
        )}
      </div>
    </div>
  );
}