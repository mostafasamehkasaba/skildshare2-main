import { useContext } from "react";
import useReveal from "../hooks/useReveal";
import { offers } from "../data/siteData";
import { UiContext } from "../state/UiContextValue";

export default function Offers() {
  const ref = useReveal();
  const { t, lang } = useContext(UiContext);

  return (
    <section id="offers" className="section-pad offers-section bg-soft">
      <div className="container">
        <div ref={ref} className="section-head text-center reveal-up">
          <span className="section-kicker">{t.nav.offers}</span>
          <h2 className="section-title">{t.offers.title}</h2>
          <p className="section-sub">{t.offers.sub}</p>
        </div>

        <div className="row g-4">
          {offers.map((o, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="offer-card card-anim h-100">
                <div className="offer-top">
                  <span className="offer-tag">{o.tag[lang]}</span>
                  <div className={`offer-icon tone-${o.tone}`}>
                    <i className={`bi ${o.icon}`}></i>
                  </div>
                </div>

                <h5 className="fw-bold mt-3">{o.title[lang]}</h5>
                <p className="text-muted mb-2">{o.desc[lang]}</p>
                <div className="offer-off">{o.off[lang]}</div>

                <div className="offer-actions">
                  <button className="btn btn-primary btn-pill w-100">{o.btn[lang]}</button>
                  <div className="offer-foot small text-muted d-flex gap-2 align-items-center">
                    {o.foot ? (
                      <>
                        <i className="bi bi-clock"></i> {o.foot[lang]}
                      </>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="cta-wide mt-5 p-4 p-md-5 text-center rounded-4 text-white">
          <h3 className="fw-bold mb-2">{t.offers.ctaTitle}</h3>
          <p className="opacity-90 mb-4">{t.offers.ctaSub}</p>
          <div className="d-flex flex-column flex-sm-row justify-content-center gap-2">
            <a className="btn btn-warning btn-pill" href="#contact">
              {t.nav.book}
            </a>
            <a className="btn btn-outline-light btn-pill" href="#drinks">
              {t.offers.seeMenu}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
