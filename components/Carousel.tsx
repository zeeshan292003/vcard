"use client";

import {
  Children,
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

interface CarouselProps {
  className: string;
  margin: number;
  /** Owl-style responsive config: min window width -> visible items. */
  responsive: Record<number, number>;
  children: React.ReactNode;
}

// Minimal replacement for Owl Carousel 2 that renders the same DOM structure
// (.owl-stage-outer > .owl-stage > .owl-item + .owl-nav), so the template CSS
// applies unchanged.
export default function Carousel({
  className,
  margin,
  responsive,
  children,
}: CarouselProps) {
  const items = Children.toArray(children);
  const rootRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [visible, setVisible] = useState(1);
  const [index, setIndex] = useState(0);

  const measure = useCallback(() => {
    const root = rootRef.current;
    if (!root) return;
    setContainerWidth(root.clientWidth);

    const windowWidth = window.innerWidth;
    let count = 1;
    for (const breakpoint of Object.keys(responsive)
      .map(Number)
      .sort((a, b) => a - b)) {
      if (windowWidth >= breakpoint) {
        count = responsive[breakpoint];
      }
    }
    setVisible(count);
  }, [responsive]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const maxIndex = Math.max(0, items.length - visible);
  const clampedIndex = Math.min(index, maxIndex);
  const itemWidth =
    visible > 0 ? (containerWidth - margin * (visible - 1)) / visible : 0;
  const offset = clampedIndex * (itemWidth + margin);
  const stageWidth = items.length * (itemWidth + margin);

  const prev = () => setIndex(Math.max(0, clampedIndex - 1));
  const next = () => setIndex(Math.min(maxIndex, clampedIndex + 1));

  return (
    <div ref={rootRef} className={`${className} owl-loaded owl-drag`}>
      <div className="owl-stage-outer">
        <div
          className="owl-stage"
          style={{
            width: `${stageWidth}px`,
            transform: `translate3d(-${offset}px, 0px, 0px)`,
            transition: "transform 0.25s ease",
          }}
        >
          {items.map((item, i) => (
            <div
              key={i}
              className="owl-item"
              style={{ width: `${itemWidth}px`, marginRight: `${margin}px` }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className={`owl-nav${maxIndex === 0 ? " disabled" : ""}`}>
        <div className="owl-prev" onClick={prev}></div>
        <div className="owl-next" onClick={next}></div>
      </div>
    </div>
  );
}
