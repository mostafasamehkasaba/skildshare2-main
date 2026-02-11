import { useContext } from "react";
import useReveal from "../hooks/useReveal";
import { UiContext } from "../state/UiContextValue";

export default function About() {
  const ref = useReveal();
  const { t } = useContext(UiContext);

  const points = [
    { icon: "bi-lightning-charge", text: t.about.points.focus },
    { icon: "bi-brightness-high", text: t.about.points.comfort },
    { icon: "bi-shield-check", text: t.about.points.secure },
    { icon: "bi-people", text: t.about.points.community },
  ];

  return (
    <section id="about" className="section-pad about-section">
      <div className="container">
        <div ref={ref} className="section-head text-center reveal-up">
          <span className="section-kicker">{t.about.kicker}</span>
          <h2 className="section-title">{t.about.title}</h2>
          <p className="section-sub">{t.about.sub}</p>
        </div>

        <div className="row g-5 align-items-center mt-1">
          <div className="col-lg-6">
            <div className="image-stack">
              <img
                className="stack-img stack-main"
                alt="workspace"
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"
              />
              <img
                className="stack-img stack-accent"
                alt="team meeting"
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=80"
              />
              <div className="stack-card shadow-soft">
                <div className="fw-bold">{t.about.highlightTitle}</div>
                <div className="small text-muted">{t.about.highlightSub}</div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <p className="fs-5 text-muted">{t.about.desc}</p>

            <div className="feature-list mt-4">
              {points.map((point) => (
                <div className="feature-line" key={point.text}>
                  <span className="feature-icon">
                    <i className={`bi ${point.icon}`}></i>
                  </span>
                  <span>{point.text}</span>
                </div>
              ))}
            </div>

            <div className="about-stats mt-4">
              <div className="about-stat">
                <div className="about-stat-num">200+</div>
                <div className="about-stat-label">{t.about.stats.members}</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-num">12+</div>
                <div className="about-stat-label">{t.about.stats.events}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
