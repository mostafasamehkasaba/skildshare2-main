import { useContext } from "react";
import useReveal from "../hooks/useReveal";
import { UiContext } from "../state/UiContextValue";

export default function Hero() {
  const ref = useReveal();
  const { t } = useContext(UiContext);

  const points = [
    { icon: "bi-wifi", text: t.hero.points.wifi },
    { icon: "bi-door-open", text: t.hero.points.rooms },
    { icon: "bi-cup-hot", text: t.hero.points.cafe },
    { icon: "bi-calendar3", text: t.hero.points.access },
  ];

  const stats = [
    { value: "500+", label: t.hero.stats.members },
    { value: "120+", label: t.hero.stats.seats },
    { value: "6", label: t.hero.stats.rooms },
  ];

  const cardItems = [t.hero.card.items.day, t.hero.card.items.rooms, t.hero.card.items.studio];

  return (
    <header id="home" className="hero-section">
      <div className="hero-media" aria-hidden="true">
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/assets/hero-poster.jpg"
        >
          <source src="/assets/hero.mp4" type="video/mp4" />
        </video>
      </div>
      <div className="hero-overlay"></div>

      <div className="container hero-grid">
        <div ref={ref} className="hero-text reveal-up text-white">
          <span className="eyebrow text-white-50">{t.hero.kicker}</span>
          <h1 className="display-3 fw-bold mt-3">{t.hero.title}</h1>
          <p className="lead opacity-90 mt-2">{t.hero.subtitle}</p>
          <p className="hero-desc opacity-90 mb-4">{t.hero.desc}</p>

          <div className="hero-actions d-flex flex-column flex-sm-row gap-3">
            <a className="btn btn-warning btn-lg btn-pill shadow-soft" href="#contact">
              {t.hero.primary}
            </a>
            <a
              className="btn btn-outline-light btn-lg btn-pill"
              href="https://wa.me/201153628836"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-whatsapp me-2"></i>
              {t.hero.secondary}
            </a>
          </div>

          <div className="hero-points mt-4">
            {points.map((point) => (
              <div className="hero-point" key={point.text}>
                <i className={`bi ${point.icon}`}></i>
                <span>{point.text}</span>
              </div>
            ))}
          </div>

          <div className="hero-stats mt-4">
            {stats.map((stat) => (
              <div className="hero-stat" key={stat.label}>
                <div className="hero-stat-num">{stat.value}</div>
                <div className="hero-stat-label">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="hero-trust mt-4">
            <i className="bi bi-shield-check me-2"></i>
            {t.hero.trust}
          </div>
        </div>

        <div className="hero-card text-white">
          <div className="hero-card-badge">{t.hero.hoursTitle}</div>
          <h4 className="fw-bold mt-3">{t.hero.card.title}</h4>
          <p className="text-white-50">{t.hero.card.sub}</p>

          <div className="hero-card-list">
            {cardItems.map((item) => (
              <div className="hero-card-item" key={item}>
                <i className="bi bi-check2-circle"></i>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="hero-card-hours">
            <i className="bi bi-clock me-2"></i>
            <span>{t.hero.hoursSub}</span>
          </div>

          <a className="btn btn-warning btn-pill w-100 mt-3" href="#contact">
            {t.nav.book}
          </a>
        </div>
      </div>

      <div className="mouse-hint mt-4">
        <span className="mouse"></span>
      </div>
    </header>
  );
}
