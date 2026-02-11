import { useContext } from "react";
import useReveal from "../hooks/useReveal";
import { events } from "../data/siteData";
import { UiContext } from "../state/UiContextValue";

export default function Events() {
  const ref = useReveal();
  const { t, lang } = useContext(UiContext);

  const toneClass = (tone) => (tone === "purple" ? "tone-purple" : `tone-${tone}`);

  return (
    <section id="events" className="section-pad">
      <div className="container">
        <div ref={ref} className="section-head text-center reveal-up">
          <span className="section-kicker">{t.nav.events}</span>
          <h2 className="section-title">{t.events.title}</h2>
          <p className="section-sub">{t.events.sub}</p>
        </div>

        <div className="row g-4">
          {events.map((e, i) => (
            <div className="col-md-6" key={i}>
              <div className="event-card card-anim h-100">
                <div className={`event-icon ${toneClass(e.tone)}`}></div>
                <div className="event-body">
                  <div className="d-flex justify-content-between align-items-start gap-2">
                    <h5 className="fw-bold mb-1">{e.title[lang]}</h5>
                    <span className="pill-tag">{e.type[lang]}</span>
                  </div>

                  <div className="small text-muted d-flex flex-wrap gap-3 mt-2">
                    <span>
                      <i className="bi bi-calendar3 me-1"></i>
                      {e.date[lang]}
                    </span>
                    <span>
                      <i className="bi bi-clock me-1"></i>
                      {e.time[lang]}
                    </span>
                  </div>

                  <p className="text-muted mt-3 mb-4">{e.desc[lang]}</p>

                  <div className="event-actions d-flex gap-2">
                    <button className="btn btn-primary btn-pill" data-bs-toggle="modal" data-bs-target="#bookModal">
                      {t.events.register}
                    </button>
                    <button className="btn btn-soft btn-pill">{t.events.learn}</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="newsletter mt-5 p-4 p-md-5 rounded-4 text-white text-center">
          <h4 className="fw-bold">{t.events.dontMiss}</h4>
          <p className="opacity-90">{t.events.dontMissSub}</p>
          <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center mt-3">
            <input className="form-control form-control-lg w-auto" style={{ minWidth: 260 }} placeholder={t.blog.email} />
            <button className="btn btn-warning btn-lg btn-pill">{t.blog.subscribe}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
