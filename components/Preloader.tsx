"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [removed, setRemoved] = useState(false);

  useEffect(() => {
    let fadeTimer: ReturnType<typeof setTimeout>;
    const fadeOut = () => {
      setDone(true);
      fadeTimer = setTimeout(() => setRemoved(true), 800);
    };

    if (document.readyState === "complete") {
      fadeOut();
      return () => clearTimeout(fadeTimer);
    }

    window.addEventListener("load", fadeOut);
    return () => {
      window.removeEventListener("load", fadeOut);
      clearTimeout(fadeTimer);
    };
  }, []);

  if (removed) {
    return null;
  }

  return (
    <div className={`preloader${done ? " preloader-done" : ""}`}>
      <div className="preloader-animation">
        <div className="preloader-spinner"></div>
      </div>
    </div>
  );
}
