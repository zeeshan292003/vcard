"use client";

import { useEffect, useState } from "react";

interface TextRotationProps {
  items: string[];
  interval?: number;
}

// Replaces the owl-carousel "text-rotation" with the same scale in/out
// animation classes from animations.css.
export default function TextRotation({
  items,
  interval = 3800,
}: TextRotationProps) {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((current) => {
        setPrevIndex(current);
        return (current + 1) % items.length;
      });
    }, interval);
    return () => clearInterval(timer);
  }, [items.length, interval]);

  useEffect(() => {
    if (prevIndex === null) return;
    const timer = setTimeout(() => setPrevIndex(null), 1000);
    return () => clearTimeout(timer);
  }, [prevIndex]);

  return (
    <div className="owl-carousel text-rotation owl-loaded">
      <div className="owl-stage-outer">
        <div className="owl-stage" style={{ width: "100%" }}>
          {prevIndex !== null && (
            <div
              className="owl-item animated animated-section-scaleDown"
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
              }}
            >
              <div className="item">
                <div className="sp-subtitle">{items[prevIndex]}</div>
              </div>
            </div>
          )}
          <div
            key={index}
            className={`owl-item animated${
              prevIndex !== null ? " animated-section-scaleUp" : ""
            }`}
            style={{ width: "100%", float: "none" }}
          >
            <div className="item">
              <div className="sp-subtitle">{items[index]}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
