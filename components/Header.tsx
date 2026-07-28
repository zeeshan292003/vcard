"use client";

import type { SectionId } from "./VCardApp";

const MENU_ITEMS: { id: SectionId; icon: string; label: string }[] = [
  { id: "home", icon: "lnr-home", label: "Home" },
  { id: "about-me", icon: "lnr-user", label: "About Me" },
  { id: "resume", icon: "lnr-graduation-hat", label: "Resume" },
  { id: "portfolio", icon: "lnr-briefcase", label: "Portfolio" },
  { id: "contact", icon: "lnr-envelope", label: "Contact" },
];

interface HeaderProps {
  active: SectionId;
  hidden: boolean;
  animate: boolean;
  onNavigate: (target: SectionId) => void;
}

export default function Header({
  active,
  hidden,
  animate,
  onNavigate,
}: HeaderProps) {
  const headerClass = [
    "header",
    hidden ? "mobile-menu-hide" : "",
    animate ? "animate" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <header id="site_header" className={headerClass}>
      <div className="header-content">
        <div className="header-photo">
          <img src="/img/main_photo.jpg" alt="Zeeshan Tariq" />
        </div>
        <div className="header-titles">
          <h2>Zeeshan Tariq</h2>
          <h4>Full Stack Developer</h4>
        </div>
      </div>

      <ul className="main-menu">
        {MENU_ITEMS.map((item) => (
          <li key={item.id} className={active === item.id ? "active" : ""}>
            <a
              href={`#${item.id}`}
              className={`nav-anim${active === item.id ? " active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate(item.id);
              }}
            >
              <span className={`menu-icon lnr ${item.icon}`}></span>
              <span className="link-text">{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      <div className="social-links">
        <ul>
          <li>
            <a href="#" target="_blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
        </ul>
      </div>

      {/* <div className="header-buttons">
        <a
          href="/zeeshan-tariq.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Download CV
        </a>
      </div> */}

      <div className="copyrights">© 2026 All rights reserved.</div>
    </header>
  );
}
