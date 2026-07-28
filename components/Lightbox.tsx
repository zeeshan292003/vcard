"use client";

import { useEffect } from "react";

export interface LightboxItem {
  type: "image" | "iframe";
  src: string;
  title: string;
}

interface LightboxProps {
  item: LightboxItem;
  onClose: () => void;
}

// Minimal replacement for Magnific Popup that reuses the original
// magnific-popup.css classes, supporting image and iframe (video/audio) types.
export default function Lightbox({ item, onClose }: LightboxProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [onClose]);

  return (
    <>
      <div
        className="mfp-bg mfp-fade mfp-ready"
        style={{ height: "100%" }}
        onClick={onClose}
      ></div>
      <div
        className={`mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-fade mfp-ready ${
          item.type === "iframe" ? "mfp-iframe-holder" : "mfp-gallery"
        }`}
        tabIndex={-1}
        style={{ overflow: "hidden auto" }}
      >
        <div
          className="mfp-container mfp-s-ready"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              onClose();
            }
          }}
        >
          <div className="mfp-content">
            {item.type === "iframe" ? (
              <div className="mfp-iframe-scaler">
                <button
                  type="button"
                  className="mfp-close"
                  title="Close (Esc)"
                  onClick={onClose}
                >
                  ×
                </button>
                <iframe
                  className="mfp-iframe"
                  src={item.src}
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
                <div className="mfp-title mfp-bottom-iframe-title">
                  {item.title}
                </div>
              </div>
            ) : (
              <div className="mfp-figure">
                <button
                  type="button"
                  className="mfp-close"
                  title="Close (Esc)"
                  onClick={onClose}
                >
                  ×
                </button>
                <figure>
                  <img className="mfp-img" src={item.src} alt={item.title} />
                  <figcaption>
                    <div className="mfp-bottom-bar">
                      <div className="mfp-title">{item.title}</div>
                      <div className="mfp-counter"></div>
                    </div>
                  </figcaption>
                </figure>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
