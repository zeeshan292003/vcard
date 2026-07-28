"use client";

import { useCallback, useEffect, useRef, useState } from "react";

import Preloader from "./Preloader";
import AnimatedBackground from "./AnimatedBackground";
import Header from "./Header";
import HomeSection from "./sections/HomeSection";
import AboutSection from "./sections/AboutSection";
import ResumeSection from "./sections/ResumeSection";
import PortfolioSection from "./sections/PortfolioSection";
import ContactSection from "./sections/ContactSection";

const SECTION_IDS = [
  "home",
  "about-me",
  "resume",
  "portfolio",
  "contact",
] as const;

type SectionId = (typeof SECTION_IDS)[number];

// The 67 in/out class pairs from the original animating.js switch table.
const ANIM_PAIRS: [string, string][] = [
  ["animated-section-moveFromRight", "animated-section-moveToLeft"],
  ["animated-section-moveFromLeft", "animated-section-moveToRight"],
  ["animated-section-moveFromBottom", "animated-section-moveToTop"],
  ["animated-section-moveFromTop", "animated-section-moveToBottom"],
  ["animated-section-moveFromRight animated-section-ontop", "animated-section-fade"],
  ["animated-section-moveFromLeft animated-section-ontop", "animated-section-fade"],
  ["animated-section-moveFromBottom animated-section-ontop", "animated-section-fade"],
  ["animated-section-moveFromTop animated-section-ontop", "animated-section-fade"],
  ["animated-section-moveFromRightFade", "animated-section-moveToLeftFade"],
  ["animated-section-moveFromLeftFade", "animated-section-moveToRightFade"],
  ["animated-section-moveFromBottomFade", "animated-section-moveToTopFade"],
  ["animated-section-moveFromTopFade", "animated-section-moveToBottomFade"],
  ["animated-section-moveFromRight", "animated-section-moveToLeftEasing animated-section-ontop"],
  ["animated-section-moveFromLeft", "animated-section-moveToRightEasing animated-section-ontop"],
  ["animated-section-moveFromBottom", "animated-section-moveToTopEasing animated-section-ontop"],
  ["animated-section-moveFromTop", "animated-section-moveToBottomEasing animated-section-ontop"],
  ["animated-section-moveFromRight animated-section-ontop", "animated-section-scaleDown"],
  ["animated-section-moveFromLeft animated-section-ontop", "animated-section-scaleDown"],
  ["animated-section-moveFromBottom animated-section-ontop", "animated-section-scaleDown"],
  ["animated-section-moveFromTop animated-section-ontop", "animated-section-scaleDown"],
  ["animated-section-scaleUpDown animated-section-delay300", "animated-section-scaleDown"],
  ["animated-section-scaleUp animated-section-delay300", "animated-section-scaleDownUp"],
  ["animated-section-scaleUp", "animated-section-moveToLeft animated-section-ontop"],
  ["animated-section-scaleUp", "animated-section-moveToRight animated-section-ontop"],
  ["animated-section-scaleUp", "animated-section-moveToTop animated-section-ontop"],
  ["animated-section-scaleUp", "animated-section-moveToBottom animated-section-ontop"],
  ["animated-section-scaleUpCenter animated-section-delay400", "animated-section-scaleDownCenter"],
  ["animated-section-moveFromRight animated-section-delay200 animated-section-ontop", "animated-section-rotateRightSideFirst"],
  ["animated-section-moveFromLeft animated-section-delay200 animated-section-ontop", "animated-section-rotateLeftSideFirst"],
  ["animated-section-moveFromTop animated-section-delay200 animated-section-ontop", "animated-section-rotateTopSideFirst"],
  ["animated-section-moveFromBottom animated-section-delay200 animated-section-ontop", "animated-section-rotateBottomSideFirst"],
  ["animated-section-flipInLeft animated-section-delay500", "animated-section-flipOutRight"],
  ["animated-section-flipInRight animated-section-delay500", "animated-section-flipOutLeft"],
  ["animated-section-flipInBottom animated-section-delay500", "animated-section-flipOutTop"],
  ["animated-section-flipInTop animated-section-delay500", "animated-section-flipOutBottom"],
  ["animated-section-scaleUp", "animated-section-rotateFall animated-section-ontop"],
  ["animated-section-rotateInNewspaper animated-section-delay500", "animated-section-rotateOutNewspaper"],
  ["animated-section-moveFromRight", "animated-section-rotatePushLeft"],
  ["animated-section-moveFromLeft", "animated-section-rotatePushRight"],
  ["animated-section-moveFromBottom", "animated-section-rotatePushTop"],
  ["animated-section-moveFromTop", "animated-section-rotatePushBottom"],
  ["animated-section-rotatePullRight animated-section-delay180", "animated-section-rotatePushLeft"],
  ["animated-section-rotatePullLeft animated-section-delay180", "animated-section-rotatePushRight"],
  ["animated-section-rotatePullBottom animated-section-delay180", "animated-section-rotatePushTop"],
  ["animated-section-rotatePullTop animated-section-delay180", "animated-section-rotatePushBottom"],
  ["animated-section-moveFromRightFade", "animated-section-rotateFoldLeft"],
  ["animated-section-moveFromLeftFade", "animated-section-rotateFoldRight"],
  ["animated-section-moveFromBottomFade", "animated-section-rotateFoldTop"],
  ["animated-section-moveFromTopFade", "animated-section-rotateFoldBottom"],
  ["animated-section-rotateUnfoldLeft", "animated-section-moveToRightFade"],
  ["animated-section-rotateUnfoldRight", "animated-section-moveToLeftFade"],
  ["animated-section-rotateUnfoldTop", "animated-section-moveToBottomFade"],
  ["animated-section-rotateUnfoldBottom", "animated-section-moveToTopFade"],
  ["animated-section-rotateRoomLeftIn", "animated-section-rotateRoomLeftOut animated-section-ontop"],
  ["animated-section-rotateRoomRightIn", "animated-section-rotateRoomRightOut animated-section-ontop"],
  ["animated-section-rotateRoomTopIn", "animated-section-rotateRoomTopOut animated-section-ontop"],
  ["animated-section-rotateRoomBottomIn", "animated-section-rotateRoomBottomOut animated-section-ontop"],
  ["animated-section-rotateCubeLeftIn", "animated-section-rotateCubeLeftOut animated-section-ontop"],
  ["animated-section-rotateCubeRightIn", "animated-section-rotateCubeRightOut animated-section-ontop"],
  ["animated-section-rotateCubeTopIn", "animated-section-rotateCubeTopOut animated-section-ontop"],
  ["animated-section-rotateCubeBottomIn", "animated-section-rotateCubeBottomOut animated-section-ontop"],
  ["animated-section-rotateCarouselLeftIn", "animated-section-rotateCarouselLeftOut animated-section-ontop"],
  ["animated-section-rotateCarouselRightIn", "animated-section-rotateCarouselRightOut animated-section-ontop"],
  ["animated-section-rotateCarouselTopIn", "animated-section-rotateCarouselTopOut animated-section-ontop"],
  ["animated-section-rotateCarouselBottomIn", "animated-section-rotateCarouselBottomOut animated-section-ontop"],
  ["animated-section-rotateSidesIn animated-section-delay200", "animated-section-rotateSidesOut"],
  ["animated-section-rotateSlideIn", "animated-section-rotateSlideOut"],
];

function hashToSection(hash: string): SectionId | null {
  const id = hash.replace("#", "").split("/")[0];
  return (SECTION_IDS as readonly string[]).includes(id)
    ? (id as SectionId)
    : null;
}

export default function VCardApp() {
  const [active, setActive] = useState<SectionId>("home");
  const [prev, setPrev] = useState<SectionId | null>(null);
  const [inClass, setInClass] = useState("");
  const [outClass, setOutClass] = useState("");

  const activeRef = useRef<SectionId>(active);
  const prevRef = useRef<SectionId | null>(null);
  const animatingRef = useRef(false);
  const endedRef = useRef({ current: false, next: false });
  // Like the original, each navigation target keeps the animation it was
  // randomly assigned the first time it was used.
  const linkAnimRef = useRef(new Map<string, number>());
  const sectionRefs = useRef(new Map<string, HTMLElement | null>());
  const finishTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [menuHidden, setMenuHidden] = useState(true);
  const [headerAnimate, setHeaderAnimate] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const finishTransition = useCallback(() => {
    if (finishTimerRef.current) {
      clearTimeout(finishTimerRef.current);
      finishTimerRef.current = null;
    }
    animatingRef.current = false;
    prevRef.current = null;
    setPrev(null);
    setInClass("");
    setOutClass("");
  }, []);

  const navigate = useCallback(
    (target: SectionId) => {
      if (animatingRef.current || target === activeRef.current) {
        return;
      }

      let animNumber = linkAnimRef.current.get(target);
      if (!animNumber) {
        animNumber = Math.floor(Math.random() * 67) + 1;
        linkAnimRef.current.set(target, animNumber);
      }
      const [nextIn, nextOut] = ANIM_PAIRS[animNumber - 1];

      animatingRef.current = true;
      endedRef.current = { current: false, next: false };
      prevRef.current = activeRef.current;
      activeRef.current = target;

      setPrev(prevRef.current);
      setActive(target);
      setInClass(nextIn);
      setOutClass(nextOut);

      sectionRefs.current.get(target)?.scrollTo(0, 0);

      if (window.location.hash !== `#${target}`) {
        window.location.hash = target;
      }

      // Safety net in case an animationend event is lost (e.g. hidden tab).
      if (finishTimerRef.current) clearTimeout(finishTimerRef.current);
      finishTimerRef.current = setTimeout(finishTransition, 2000);
    },
    [finishTransition]
  );

  const handleSectionAnimationEnd = useCallback(
    (id: SectionId) => (e: React.AnimationEvent) => {
      if (e.target !== e.currentTarget || !animatingRef.current) {
        return;
      }
      if (id === activeRef.current) {
        endedRef.current.next = true;
      } else if (id === prevRef.current) {
        endedRef.current.current = true;
      }
      const bothDone =
        endedRef.current.next &&
        (prevRef.current === null || endedRef.current.current);
      if (bothDone) {
        finishTransition();
      }
    },
    [finishTransition]
  );

  // Initial page: animate the section from the URL hash (or "home") in,
  // exactly like PageTransitions.init() did.
  useEffect(() => {
    const raf = requestAnimationFrame(() => {
      const initial = hashToSection(window.location.hash) ?? "home";

      activeRef.current = initial;
      animatingRef.current = true;
      endedRef.current = { current: true, next: false };

      const animNumber = Math.floor(Math.random() * 67) + 1;
      linkAnimRef.current.set(initial, animNumber);

      setActive(initial);
      setInClass(ANIM_PAIRS[animNumber - 1][0]);

      if (window.location.hash === "") {
        window.location.hash = initial;
      }

      finishTimerRef.current = setTimeout(finishTransition, 2000);
    });
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Hash navigation (back/forward buttons, manual hash edits).
  useEffect(() => {
    const onHashChange = () => {
      const target = hashToSection(window.location.hash);
      if (target) {
        navigate(target);
      }
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, [navigate]);

  // mobileMenuHide() from main.js
  const hideMobileMenu = useCallback(() => {
    if (window.innerWidth < 1025) {
      setMenuHidden(true);
      setMenuOpen(false);
      setTimeout(() => setHeaderAnimate(true), 500);
    } else {
      setHeaderAnimate(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", hideMobileMenu);
    return () => window.removeEventListener("resize", hideMobileMenu);
  }, [hideMobileMenu]);

  const toggleMobileMenu = useCallback(() => {
    setHeaderAnimate(true);
    setMenuHidden((h) => !h);
    setMenuOpen((o) => !o);
  }, []);

  const handleMenuNavigate = useCallback(
    (target: SectionId) => {
      navigate(target);
      hideMobileMenu();
    },
    [navigate, hideMobileMenu]
  );

  const goSibling = useCallback(
    (dir: 1 | -1) => {
      const idx = SECTION_IDS.indexOf(activeRef.current);
      const next =
        SECTION_IDS[(idx + dir + SECTION_IDS.length) % SECTION_IDS.length];
      navigate(next);
    },
    [navigate]
  );

  const sectionClassName = (id: SectionId, extra = "") => {
    let cls = "animated-section";
    if (extra) cls += ` ${extra}`;
    if (id === active) {
      cls += " section-active";
      if (inClass) cls += ` ${inClass}`;
    } else if (id === prev) {
      cls += ` section-active ${outClass}`;
    }
    return cls;
  };

  const sectionProps = (id: SectionId, extra = "") => ({
    "data-id": id,
    className: sectionClassName(id, extra),
    onAnimationEnd: handleSectionAnimationEnd(id),
    // Standard callback-ref pattern; only runs on commit, not during render.
    ref: (el: HTMLElement | null) => {
      // eslint-disable-next-line react-hooks/refs
      sectionRefs.current.set(id, el);
    },
  });

  return (
    <>
      <AnimatedBackground />
      <Preloader />

      <div className="page">
        <div className="page-content">
          <Header
            active={active}
            hidden={menuHidden}
            animate={headerAnimate}
            onNavigate={handleMenuNavigate}
          />

          {/* Mobile Navigation */}
          <div
            className={`menu-toggle${menuOpen ? " open" : ""}`}
            onClick={toggleMobileMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          {/* End Mobile Navigation */}

          {/* Arrows Nav */}
          <div className="lmpixels-arrows-nav">
            <div className="lmpixels-arrow-right" onClick={() => goSibling(1)}>
              <i className="lnr lnr-chevron-right"></i>
            </div>
            <div className="lmpixels-arrow-left" onClick={() => goSibling(-1)}>
              <i className="lnr lnr-chevron-left"></i>
            </div>
          </div>
          {/* End Arrows Nav */}

          <div className="content-area">
            <div className="animated-sections">
              <HomeSection {...sectionProps("home", "start-page")} />
              <AboutSection {...sectionProps("about-me")} />
              <ResumeSection {...sectionProps("resume")} />
              <PortfolioSection {...sectionProps("portfolio")} />
              <ContactSection {...sectionProps("contact")} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export type { SectionId };
