"use client";

import { useEffect, useState } from "react";

import { translations, type Language } from "@/content/immigra";

const STORAGE_KEY = "ic_cookie_consent";

export function CookieBanner({ language }: { language: Language }) {
  const [visible, setVisible] = useState(false);
  const copy = translations[language].cookies;

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const t = setTimeout(() => setVisible(true), 900);
      return () => clearTimeout(t);
    }
  }, []);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem(STORAGE_KEY, "essential");
    setVisible(false);
  };

  return (
    <div
      className={`cookie-banner${visible ? " open" : ""}`}
      role="dialog"
      aria-live="polite"
      aria-label={copy.title}
    >
      <div className="cookie-inner">
        <div className="cookie-text">
          <p className="cookie-title">{copy.title}</p>
          <p className="cookie-desc">
            {copy.desc}{" "}
            <a href="/privacidad" className="cookie-policy-link">
              {copy.policy}
            </a>
          </p>
        </div>
        <div className="cookie-actions">
          <button
            type="button"
            className="btn btn-white cookie-btn"
            onClick={accept}
          >
            {copy.accept}
          </button>
          <button
            type="button"
            className="btn cookie-btn cookie-btn-decline"
            onClick={decline}
          >
            {copy.essential}
          </button>
        </div>
      </div>
    </div>
  );
}
