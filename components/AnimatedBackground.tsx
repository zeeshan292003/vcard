"use client";

import { useEffect, useRef } from "react";

// Parallax background that follows the mouse, ported from main.js.
export default function AnimatedBackground() {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const movementStrength = 23;
    let clearTransitionTimer: ReturnType<typeof setTimeout>;

    const onMouseMove = (e: MouseEvent) => {
      const el = bgRef.current;
      if (!el) return;

      const docWidth = document.documentElement.scrollWidth;
      const docHeight = document.documentElement.scrollHeight;
      const pageX = e.pageX - docWidth / 2;
      const pageY = e.pageY - docHeight / 2;
      const newValueX = (movementStrength / docWidth) * pageX * -1;
      const newValueY = (movementStrength / docHeight) * pageY * -1;

      el.classList.add("transition");
      el.style.backgroundPosition = `calc( 50% + ${newValueX}px ) calc( 50% + ${newValueY}px )`;

      clearTimeout(clearTransitionTimer);
      clearTransitionTimer = setTimeout(() => {
        el.classList.remove("transition");
      }, 300);
    };

    document.body.addEventListener("mousemove", onMouseMove);
    return () => {
      document.body.removeEventListener("mousemove", onMouseMove);
      clearTimeout(clearTransitionTimer);
    };
  }, []);

  return (
    <div
      ref={bgRef}
      className="lm-animated-bg"
      style={{ backgroundImage: "url(/img/main_bg.png)" }}
    ></div>
  );
}
