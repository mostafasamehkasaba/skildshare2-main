import { useContext, useMemo, useRef } from "react";
import useReveal from "../hooks/useReveal";
import { packages } from "../data/siteData";
import { UiContext } from "../state/UiContextValue";

export default function Packages() {
  const ref = useReveal();
  const { t, lang } = useContext(UiContext);
  const formRef = useRef(null);

  const shared = useMemo(() => packages.filter((p) => p.category === "shared"), []);
  const privates = useMemo(() => packages.filter((p) => p.category === "private"), []);
  const iconClass = (category) => (category === "shared" ? "bi-people" : "bi-door-closed");

  const handleModalSubmit = (e) => {
    e.preventDefault();
    const form = formRef.current;
    if (!form) return;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const modalEl = document.getElementById("bookModal");
    const modalApi = window.bootstrap?.Modal;
    if (modalEl && modalApi) {
      const instance = modalApi.getInstance(modalEl) || new modalApi(modalEl);
      instance.hide();
    }
    form.reset();
  };

  const Card = (p) => (
    <div className={`pricing-card card-anim h-100 ${p.featured ? "pricing-featured" : ""}`}>
      {p.badge?.[lang] ? <div className="pricing-badge">{p.badge[lang]}</div> : null}

      <div className="pricing-head">
        <div className="pkg-icon">
          <i className={`bi ${iconClass(p.category)}`}></i>
        </div>
        <h5 className="fw-bold mb-1">{p.title[lang]}</h5>
        <div className="pricing-price">
          <span className="price">{p.price}</span>
          <span className="unit">{p.unit[lang]}</span>
        </div>
      </div>

      <ul className="pricing-list">
        {p.perks[lang].map((x, idx) => (
          <li className="pricing-item" key={idx}>
            <i className="bi bi-check2-circle"></i>
            <span>{x}</span>
          </li>
        ))}
      </ul>

      <button
        className={`btn w-100 btn-pill pricing-cta ${p.featured ? "btn-warning" : "btn-primary"}`}
        data-bs-toggle="modal"
        data-bs-target="#bookModal"
      >
        {p.cta[lang]}
      </button>
    </div>
  );

  return (
    <section id="packages" className="section-pad">
      <div className="container">
        <div ref={ref} className="section-head text-center reveal-up">
          <span className="section-kicker">{t.nav.packages}</span>
          <h2 className="section-title">{t.packages.title}</h2>
          <p className="section-sub">{t.packages.sub}</p>
        </div>

        <div className="pricing-group mt-4">
          <div className="pricing-title">
            <h3 className="fw-bold">{t.packages.privateTitle}</h3>
            <p className="text-muted mb-0">{t.packages.privateSub}</p>
          </div>
          <div className="row g-4 mt-2">
            {privates.map((p, i) => (
              <div className="col-md-6 col-lg-3" key={`pr-${i}`}>
                {Card(p)}
              </div>
            ))}
          </div>
        </div>

        <div className="pricing-group mt-5">
          <div className="pricing-title">
            <h3 className="fw-bold">{t.packages.sharedTitle}</h3>
            <p className="text-muted mb-0">{t.packages.sharedSub}</p>
          </div>
          <div className="row g-4 mt-2">
            {shared.map((p, i) => (
              <div className="col-md-6 col-lg-3" key={`sh-${i}`}>
                {Card(p)}
              </div>
            ))}
          </div>
        </div>

        <div className="modal fade" id="bookModal" tabIndex="-1" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content rounded-4">
              <div className="modal-header">
                <h5 className="modal-title fw-bold">{t.packages.modalTitle}</h5>
                <button className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p className="text-muted mb-3">{t.packages.modalSub}</p>
                <form className="row g-3" ref={formRef} onSubmit={handleModalSubmit}>
                  <div className="col-12">
                    <label className="form-label">{t.packages.name}</label>
                    <input required name="name" className="form-control" placeholder={t.packages.name} />
                  </div>
                  <div className="col-12">
                    <label className="form-label">{t.packages.phone}</label>
                    <input required name="phone" className="form-control" placeholder="+20 ..." inputMode="tel" />
                  </div>
                  <div className="col-12">
                    <label className="form-label">{t.packages.notes}</label>
                    <textarea className="form-control" rows="3" placeholder="..."></textarea>
                  </div>
                  <div className="col-12 d-flex gap-2">
                    <button type="submit" className="btn btn-primary btn-pill flex-fill">
                      {t.packages.submit}
                    </button>
                    <a className="btn btn-soft btn-pill" href="#contact" data-bs-dismiss="modal">
                      {t.packages.contact}
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
