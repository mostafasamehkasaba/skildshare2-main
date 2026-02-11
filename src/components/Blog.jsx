import { useContext } from "react";
import useReveal from "../hooks/useReveal";
import { posts } from "../data/siteData";
import { UiContext } from "../state/UiContextValue";

export default function Blog() {
  const ref = useReveal();
  const { t, lang } = useContext(UiContext);

  return (
    <section id="blog" className="section-pad bg-soft">
      <div className="container">
        <div ref={ref} className="section-head text-center reveal-up">
          <span className="section-kicker">{t.nav.blog}</span>
          <h2 className="section-title">{t.blog.title}</h2>
          <p className="section-sub">{t.blog.sub}</p>
        </div>

        <div className="row g-4">
          {posts.map((p, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <article className="blog-card card-anim h-100">
                <div className="ratio ratio-16x9">
                  <img className="w-100 h-100 object-fit-cover" src={p.img} alt={p.title[lang]} />
                </div>
                <div className="p-4 blog-body">
                  <span className="pill-tag">{p.cat[lang]}</span>
                  <h5 className="fw-bold mt-2">{p.title[lang]}</h5>
                  <div className="small text-muted d-flex gap-3 mt-2">
                    <span>
                      <i className="bi bi-calendar3 me-1"></i>
                      {p.date[lang]}
                    </span>
                    <span>
                      <i className="bi bi-clock me-1"></i>
                      {p.read[lang]}
                    </span>
                  </div>
                  <a className="btn btn-link btn-readmore mt-2" href="#blog">
                    {t.blog.readMore} <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </article>
            </div>
          ))}
        </div>

        <div className="newsletter mt-5 p-4 p-md-5 rounded-4 text-white text-center">
          <h4 className="fw-bold">{t.blog.stay}</h4>
          <p className="opacity-90">{t.blog.staySub}</p>
          <div className="d-flex flex-column flex-sm-row gap-2 justify-content-center mt-3">
            <input className="form-control form-control-lg w-auto" style={{ minWidth: 260 }} placeholder={t.blog.email} />
            <button className="btn btn-warning btn-lg btn-pill">{t.blog.subscribe}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
