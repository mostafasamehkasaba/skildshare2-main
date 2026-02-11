import { useContext } from "react";
import useReveal from "../hooks/useReveal";
import { testimonials } from "../data/siteData";
import { UiContext } from "../state/UiContextValue";

export default function Testimonials() {
  const ref = useReveal();
  const { t, lang } = useContext(UiContext);

  return (
    <section id="testimonials" className="section-pad">
      <div className="container">
        <div ref={ref} className="section-head text-center reveal-up">
          <span className="section-kicker">{t.testimonials.kicker}</span>
          <h2 className="section-title">{t.testimonials.title}</h2>
          <p className="section-sub">{t.testimonials.sub}</p>
        </div>

        <div className="row g-4">
          {testimonials.map((item, i) => (
            <div className="col-md-6 col-lg-4" key={i}>
              <div className="testimonial-card card-anim h-100">
                <div className="testimonial-stars">
                  {Array.from({ length: item.stars }).map((_, idx) => (
                    <i className="bi bi-star-fill" key={idx}></i>
                  ))}
                </div>
                <p className="testimonial-msg">{item.msg[lang]}</p>
                <div className="testimonial-person">
                  <div className="avatar">{item.name[lang].charAt(0)}</div>
                  <div>
                    <div className="fw-bold">{item.name[lang]}</div>
                    <div className="small text-muted">{item.role[lang]}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="stats-row mt-4">
          <div className="stat">
            <div className="stat-num">500+</div>
            <div className="stat-sub">{t.testimonials.stats.members}</div>
          </div>
          <div className="stat">
            <div className="stat-num">4.9/5</div>
            <div className="stat-sub">{t.testimonials.stats.rating}</div>
          </div>
          <div className="stat">
            <div className="stat-num">98%</div>
            <div className="stat-sub">{t.testimonials.stats.rec}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
