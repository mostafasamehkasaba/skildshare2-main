import { useContext } from "react";
import useReveal from "../hooks/useReveal";
import { services } from "../data/siteData";
import { UiContext } from "../state/UiContextValue";

export default function Services() {
  const ref = useReveal();
  const { t, lang } = useContext(UiContext);

  return (
    <section id="services" className="section-pad services-section bg-soft">
      <div className="container">
        <div ref={ref} className="section-head text-center reveal-up">
          <span className="section-kicker">{t.nav.services}</span>
          <h2 className="section-title">{t.services.title}</h2>
          <p className="section-sub">{t.services.sub}</p>
        </div>

        <div className="row g-4">
          {services.map((s, i) => (
            <div className="col-sm-6 col-lg-4" key={i}>
              <div className="service-card card-anim h-100">
                <div className="service-icon">
                  <i className={`bi ${s.icon}`}></i>
                </div>
                <h5 className="mt-3 fw-bold">{s.title[lang]}</h5>
                <p className="text-muted mb-0">{s.desc[lang]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
