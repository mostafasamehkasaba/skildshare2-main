import { useContext, useRef } from "react";
import { UiContext } from "../state/UiContextValue";

export default function Navbar() {
  const { t, lang, setLang, theme, setTheme } = useContext(UiContext);
  const navRef = useRef(null);
  const togglerRef = useRef(null);

  const closeMobileNav = () => {
    if (!navRef.current || !togglerRef.current) return;
    const isExpanded = navRef.current.classList.contains("show");
    const isMobile = window.getComputedStyle(togglerRef.current).display !== "none";
    if (isExpanded && isMobile) {
      togglerRef.current.click();
    }
  };

  const navItems = [
    { id: "home", label: t.nav.home },
    { id: "about", label: t.nav.about },
    { id: "services", label: t.nav.services },
    { id: "packages", label: t.nav.packages },
    { id: "offers", label: t.nav.offers },
    { id: "drinks", label: t.nav.drinks },
    { id: "blog", label: t.nav.blog },
    { id: "events", label: t.nav.events },
    { id: "contact", label: t.nav.contact },
  ];

  return (
    <nav className="navbar navbar-expand-lg sticky-top nav-blur border-bottom py-3">
      <div className="container">
        {/* Brand */}
        <a className="navbar-brand d-flex align-items-center gap-2 fw-bold" href="#home">
          <span className="brand-badge">SS</span>
          <span className="brand-text">Skild Share</span>
        </a>

        {/* Toggler */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMain"
          ref={togglerRef}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}
        <div className="collapse navbar-collapse" id="navMain" ref={navRef}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navItems.map((item) => (
              <li className="nav-item" key={item.id}>
                <a className="nav-link nav-anim px-lg-3" href={`#${item.id}`} onClick={closeMobileNav}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="d-flex align-items-center gap-2">
            {/* Dark / Light */}
            <button
              className="btn btn-soft btn-icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              title={theme === "dark" ? "Light" : "Dark"}
            >
              <i className={`bi ${theme === "dark" ? "bi-sun" : "bi-moon-stars"}`}></i>
            </button>

            {/* Language */}
            <button
              className="btn btn-soft"
              onClick={() => setLang(lang === "en" ? "ar" : "en")}
              title="Language"
            >
              {lang === "en" ? "AR" : "EN"}
            </button>

            {/* CTA */}
            <a className="btn btn-warning btn-pill shadow-soft btn-book" href="#contact" onClick={closeMobileNav}>
              {t.nav.book}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
